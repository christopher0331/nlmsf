/**
 * WordPress database layer for tribute data.
 * Uses the same tables as the NLMSF Tribute Pages Manager PHP plugin:
 *   {prefix}nlmsf_tributes, {prefix}nlmsf_tribute_donors, {prefix}nlmsf_tribute_comments
 *
 * Set env: WORDPRESS_DB_HOST, WORDPRESS_DB_USER, WORDPRESS_DB_PASSWORD, WORDPRESS_DB_NAME,
 *         optional WORDPRESS_DB_PORT (default 3306), WORDPRESS_DB_PREFIX (default wp_)
 */

import mysql from "mysql2/promise";

const prefix = process.env.WORDPRESS_DB_PREFIX ?? "wp_";
const tributesTable = `${prefix}nlmsf_tributes`;
const donorsTable = `${prefix}nlmsf_tribute_donors`;
const commentsTable = `${prefix}nlmsf_tribute_comments`;

function getPool(): mysql.Pool | null {
  const host = process.env.WORDPRESS_DB_HOST;
  const user = process.env.WORDPRESS_DB_USER;
  const password = process.env.WORDPRESS_DB_PASSWORD;
  const database = process.env.WORDPRESS_DB_NAME;
  if (!host || !user || !database) return null;

  const port = process.env.WORDPRESS_DB_PORT
    ? parseInt(process.env.WORDPRESS_DB_PORT, 10)
    : 3306;

  return mysql.createPool({
    host,
    port: Number.isNaN(port) ? 3306 : port,
    user,
    password: password ?? undefined,
    database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

let pool: mysql.Pool | null | undefined = undefined;

function poolOrNull(): mysql.Pool | null {
  if (pool === undefined) pool = getPool();
  return pool ?? null;
}

/** Whether WordPress DB is configured (tribute API will use it). */
export function isWordPressDbConfigured(): boolean {
  return poolOrNull() !== null;
}

/** True if the error is a MySQL connection failure (e.g. ECONNREFUSED when MySQL is not running). Use to fall back to Prisma. */
export function isWordPressConnectionError(err: unknown): boolean {
  const code = err && typeof err === "object" && "code" in err ? (err as { code?: string }).code : undefined;
  return code === "ECONNREFUSED" || code === "ETIMEDOUT" || code === "ENOTFOUND" || code === "ECONNRESET";
}

export type WordPressTribute = {
  id: number;
  name: string;
  slug: string;
  biography: string;
  image_url: string | null;
  display_order: number;
  is_published: number;
  created_at: Date;
  updated_at: Date;
};

export type WordPressDonor = {
  id: number;
  tribute_id: number;
  donor_name: string;
  donation_amount: number | null;
  donation_date: string | null;
  is_anonymous: number;
  message: string | null;
  display_order: number;
  created_at: Date;
};

export type WordPressComment = {
  id: number;
  tribute_id: number;
  commenter_name: string;
  commenter_email: string | null;
  comment_text: string;
  is_approved: number;
  created_at: Date;
};

/** List tributes (optionally published only). */
export async function getTributes(publishedOnly: boolean): Promise<WordPressTribute[]> {
  const p = poolOrNull();
  if (!p) return [];

  const where = publishedOnly ? " WHERE is_published = 1" : "";
  const [rows] = await p.execute(
    `SELECT id, name, slug, biography, image_url, display_order, is_published, created_at, updated_at FROM \`${tributesTable}\`${where} ORDER BY display_order ASC, name ASC`
  );
  return (rows as WordPressTribute[]) ?? [];
}

/** Get one tribute by slug (published only). */
export async function getTributeBySlug(slug: string): Promise<WordPressTribute | null> {
  const p = poolOrNull();
  if (!p) return null;

  const [rows] = await p.execute(
    `SELECT id, name, slug, biography, image_url, display_order, is_published, created_at, updated_at FROM \`${tributesTable}\` WHERE slug = ? AND is_published = 1 LIMIT 1`,
    [slug]
  );
  const arr = rows as WordPressTribute[];
  return arr?.[0] ?? null;
}

/** Get one tribute by id (any publish state, for admin). */
export async function getTributeById(id: number): Promise<WordPressTribute | null> {
  const p = poolOrNull();
  if (!p) return null;

  const [rows] = await p.execute(
    `SELECT id, name, slug, biography, image_url, display_order, is_published, created_at, updated_at FROM \`${tributesTable}\` WHERE id = ? LIMIT 1`,
    [id]
  );
  const arr = rows as WordPressTribute[];
  return arr?.[0] ?? null;
}

/** Get donors for a tribute. */
export async function getDonors(tributeId: number): Promise<WordPressDonor[]> {
  const p = poolOrNull();
  if (!p) return [];

  const [rows] = await p.execute(
    `SELECT id, tribute_id, donor_name, donation_amount, donation_date, is_anonymous, message, display_order, created_at FROM \`${donorsTable}\` WHERE tribute_id = ? ORDER BY display_order ASC, id ASC`,
    [tributeId]
  );
  return (rows as WordPressDonor[]) ?? [];
}

/** Get approved comments for a tribute. */
export async function getComments(tributeId: number): Promise<WordPressComment[]> {
  const p = poolOrNull();
  if (!p) return [];

  const [rows] = await p.execute(
    `SELECT id, tribute_id, commenter_name, commenter_email, comment_text, is_approved, created_at FROM \`${commentsTable}\` WHERE tribute_id = ? AND is_approved = 1 ORDER BY created_at DESC`,
    [tributeId]
  );
  return (rows as WordPressComment[]) ?? [];
}

/** Create a tribute (same as PHP add_tribute). Returns new row or null. */
export async function addTribute(data: {
  name: string;
  slug: string;
  biography: string;
  image_url?: string | null;
  is_published?: boolean;
}): Promise<WordPressTribute | null> {
  const p = poolOrNull();
  if (!p) return null;

  const isPublished = data.is_published !== false ? 1 : 0;
  const [result] = await p.execute(
    `INSERT INTO \`${tributesTable}\` (name, slug, biography, image_url, display_order, is_published, created_at, updated_at) VALUES (?, ?, ?, ?, 0, ?, NOW(), NOW())`,
    [data.name, data.slug, data.biography, data.image_url ?? null, isPublished]
  );
  const insertId = (result as mysql.ResultSetHeader).insertId;
  if (insertId == null) return null;
  return getTributeById(Number(insertId));
}

/** Update a tribute (same as PHP update_tribute). */
export async function updateTribute(
  id: number,
  data: {
    name?: string;
    slug?: string;
    biography?: string;
    image_url?: string | null;
    is_published?: boolean;
  }
): Promise<WordPressTribute | null> {
  const p = poolOrNull();
  if (!p) return null;

  const existing = await getTributeById(id);
  if (!existing) return null;

  const name = data.name !== undefined ? data.name.trim() : existing.name;
  const slug = (data.slug !== undefined ? data.slug.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : existing.slug) || existing.slug;
  const biography = data.biography !== undefined ? data.biography.trim() : existing.biography;
  const imageUrl = data.image_url === undefined ? existing.image_url : (data.image_url == null ? null : (data.image_url.trim() || null));
  const isPublished = data.is_published !== undefined ? (data.is_published ? 1 : 0) : existing.is_published;

  await p.execute(
    `UPDATE \`${tributesTable}\` SET name = ?, slug = ?, biography = ?, image_url = ?, is_published = ?, updated_at = NOW() WHERE id = ?`,
    [name, slug, biography, imageUrl, isPublished, id]
  );
  return getTributeById(id);
}

/** Delete a tribute and its donors (same as PHP delete_tribute). */
export async function deleteTribute(id: number): Promise<boolean> {
  const p = poolOrNull();
  if (!p) return false;

  await p.execute(`DELETE FROM \`${donorsTable}\` WHERE tribute_id = ?`, [id]);
  const [result] = await p.execute(`DELETE FROM \`${tributesTable}\` WHERE id = ?`, [id]);
  return (result as mysql.ResultSetHeader).affectedRows > 0;
}

/** Set tribute is_published (same as PHP toggle_published). */
export async function togglePublished(id: number, isPublished: boolean): Promise<WordPressTribute | null> {
  const p = poolOrNull();
  if (!p) return null;

  await p.execute(
    `UPDATE \`${tributesTable}\` SET is_published = ?, updated_at = NOW() WHERE id = ?`,
    [isPublished ? 1 : 0, id]
  );
  return getTributeById(id);
}

/** Add a donor (same as PHP add_donor). */
export async function addDonor(data: {
  tribute_id: number;
  donor_name: string;
  donation_amount?: number | null;
  donation_date?: string | null;
  is_anonymous?: boolean;
  message?: string | null;
}): Promise<WordPressDonor | null> {
  const p = poolOrNull();
  if (!p) return null;

  const donationDate =
    data.donation_date && /^\d{4}-\d{2}-\d{2}$/.test(data.donation_date) ? data.donation_date : null;
  const isAnonymous = data.is_anonymous ? 1 : 0;
  const message = (data.message ?? "").trim() || null;

  await p.execute(
    `INSERT INTO \`${donorsTable}\` (tribute_id, donor_name, donation_amount, donation_date, is_anonymous, message, display_order, created_at) VALUES (?, ?, ?, ?, ?, ?, 0, NOW())`,
    [data.tribute_id, data.donor_name, data.donation_amount ?? null, donationDate, isAnonymous, message]
  );
  const [rows] = await p.execute("SELECT LAST_INSERT_ID() as id");
  const insertId = (rows as { id: number }[])?.[0]?.id;
  if (insertId == null) return null;

  const [donorRows] = await p.execute(
    `SELECT id, tribute_id, donor_name, donation_amount, donation_date, is_anonymous, message, display_order, created_at FROM \`${donorsTable}\` WHERE id = ? LIMIT 1`,
    [insertId]
  );
  return (donorRows as WordPressDonor[])?.[0] ?? null;
}

/** Delete a donor. */
export async function deleteDonor(id: number): Promise<boolean> {
  const p = poolOrNull();
  if (!p) return false;

  const [result] = await p.execute(`DELETE FROM \`${donorsTable}\` WHERE id = ?`, [id]);
  return (result as mysql.ResultSetHeader).affectedRows > 0;
}

/** Set display_order for a donor (for move up/down). */
export async function setDonorDisplayOrder(donorId: number, displayOrder: number): Promise<boolean> {
  const p = poolOrNull();
  if (!p) return false;

  await p.execute(`UPDATE \`${donorsTable}\` SET display_order = ? WHERE id = ?`, [displayOrder, donorId]);
  return true;
}

/** Insert a comment (same as PHP add_comment). */
export async function addComment(
  tributeId: number,
  commenterName: string,
  commenterEmail: string | null,
  commentText: string
): Promise<{ id: number; commenter_name: string; comment_text: string; created_at: Date } | null> {
  const p = poolOrNull();
  if (!p) return null;

  const [result] = await p.execute(
    `INSERT INTO \`${commentsTable}\` (tribute_id, commenter_name, commenter_email, comment_text, is_approved, created_at) VALUES (?, ?, ?, ?, 1, NOW())`,
    [tributeId, commenterName, commenterEmail ?? null, commentText]
  );
  const insertResult = result as mysql.ResultSetHeader;
  const id = insertResult?.insertId;
  if (id == null) return null;

  return {
    id: Number(id),
    commenter_name: commenterName,
    comment_text: commentText,
    created_at: new Date(),
  };
}

/** Normalize a WordPress tribute to the API shape (id as string for consistency). */
export function toTributeJson(t: WordPressTribute) {
  return {
    id: String(t.id),
    name: t.name,
    slug: t.slug,
    biography: t.biography,
    image_url: t.image_url,
    display_order: t.display_order,
    is_published: t.is_published === 1,
    created_at: t.created_at instanceof Date ? t.created_at.toISOString() : String(t.created_at),
  };
}

/** Normalize WordPress donor to API shape. */
export function toDonorJson(d: WordPressDonor) {
  return {
    id: String(d.id),
    donor_name: d.donor_name,
    donation_amount: d.donation_amount,
    donation_date: d.donation_date,
    is_anonymous: d.is_anonymous === 1,
    message: d.message,
    display_order: d.display_order,
    created_at: d.created_at instanceof Date ? d.created_at.toISOString() : String(d.created_at),
  };
}

/** Normalize WordPress comment to API shape. */
export function toCommentJson(c: WordPressComment) {
  return {
    id: String(c.id),
    commenter_name: c.commenter_name,
    comment_text: c.comment_text,
    created_at: c.created_at instanceof Date ? c.created_at.toISOString() : String(c.created_at),
  };
}
