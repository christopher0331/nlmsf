#!/usr/bin/env node
/**
 * Compare Facebook group member overlap between two CSV-formatted exports.
 *
 * Usage:
 *   node scripts/compare-facebook-lists.js
 *
 * Reads:
 *   app/facebookLists/cancerSucks.txt
 *   app/facebookLists/supportGroup.txt
 *
 * Both files are expected to be CSV-style with a header like:
 *   "Name,Profile URL"  or  "Facebook Name,Profile URL"
 *
 * Real member rows are detected by the Profile URL containing "/user/".
 * Rows that look like navigation/notifications (e.g. "Admin Assist", "Overview",
 * "Group rules", "Unread...", etc.) are filtered out.
 *
 * Prints:
 *   - Member counts (filtered rows + unique names) for each group
 *   - Names appearing in BOTH groups (overlap)
 *   - Names only in cancerSucks
 *   - Names only in supportGroup
 */

const fs = require("fs");
const path = require("path");

const CANCER_SUCKS_PATH = path.join(
  __dirname,
  "..",
  "app",
  "facebookLists",
  "cancerSucks.txt",
);
const SUPPORT_GROUP_PATH = path.join(
  __dirname,
  "..",
  "app",
  "facebookLists",
  "supportGroup.txt",
);

/**
 * Minimal CSV parser that handles quoted fields with commas / escaped quotes
 * and tolerates \n, \r\n, or \r line endings.
 * Returns an array of row arrays.
 */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += ch;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

/** Normalize a display name for fair comparison. */
function normalizeName(name) {
  return name.trim().replace(/\s+/g, " ").toLowerCase();
}

function loadGroup(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const rows = parseCsv(raw);
  if (rows.length === 0) {
    return { rawCount: 0, memberRowCount: 0, uniqueNames: new Map() };
  }

  const [header, ...dataRows] = rows;
  const nameIdx = header.findIndex((h) => {
    const k = h.trim().toLowerCase();
    return k === "name" || k === "facebook name";
  });
  const urlIdx = header.findIndex((h) =>
    h.trim().toLowerCase().includes("profile url"),
  );

  if (nameIdx === -1 || urlIdx === -1) {
    throw new Error(
      `Could not find "Name" / "Profile URL" columns in ${filePath} (header: ${JSON.stringify(header)})`,
    );
  }

  const uniqueNames = new Map();
  let memberRowCount = 0;

  for (const r of dataRows) {
    const display = (r[nameIdx] || "").trim();
    const url = (r[urlIdx] || "").trim();
    if (!display) continue;
    if (!url.includes("/user/")) continue;
    memberRowCount++;
    const key = normalizeName(display);
    if (!uniqueNames.has(key)) {
      uniqueNames.set(key, display);
    }
  }

  return { rawCount: dataRows.length, memberRowCount, uniqueNames };
}

function main() {
  const cancerSucks = loadGroup(CANCER_SUCKS_PATH);
  const supportGroup = loadGroup(SUPPORT_GROUP_PATH);

  const overlapKeys = [...cancerSucks.uniqueNames.keys()].filter((k) =>
    supportGroup.uniqueNames.has(k),
  );
  const onlyCancerSucksKeys = [...cancerSucks.uniqueNames.keys()].filter(
    (k) => !supportGroup.uniqueNames.has(k),
  );
  const onlySupportGroupKeys = [...supportGroup.uniqueNames.keys()].filter(
    (k) => !cancerSucks.uniqueNames.has(k),
  );

  const banner = (s) => `\n=== ${s} ===`;

  console.log(banner("Group stats"));
  console.log(
    `cancerSucks.txt  -> total CSV rows: ${cancerSucks.rawCount}, member rows: ${cancerSucks.memberRowCount}, unique names: ${cancerSucks.uniqueNames.size}`,
  );
  console.log(
    `supportGroup.txt -> total CSV rows: ${supportGroup.rawCount}, member rows: ${supportGroup.memberRowCount}, unique names: ${supportGroup.uniqueNames.size}`,
  );

  const unionSize =
    cancerSucks.uniqueNames.size +
    supportGroup.uniqueNames.size -
    overlapKeys.length;
  const overlapPctOfCancer = cancerSucks.uniqueNames.size
    ? ((overlapKeys.length / cancerSucks.uniqueNames.size) * 100).toFixed(1)
    : "0.0";
  const overlapPctOfSupport = supportGroup.uniqueNames.size
    ? ((overlapKeys.length / supportGroup.uniqueNames.size) * 100).toFixed(1)
    : "0.0";

  console.log(banner("Overlap"));
  console.log(`Members in BOTH groups: ${overlapKeys.length}`);
  console.log(`  - ${overlapPctOfCancer}% of cancerSucks unique members`);
  console.log(`  - ${overlapPctOfSupport}% of supportGroup unique members`);
  console.log(`Combined unique members across both groups: ${unionSize}`);

  const printList = (label, keys, sourceMap) => {
    console.log(banner(`${label} (${keys.length})`));
    if (keys.length === 0) {
      console.log("(none)");
      return;
    }
    const names = keys
      .map((k) => sourceMap.get(k))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
    for (const n of names) console.log(`  - ${n}`);
  };

  printList("Names in BOTH groups", overlapKeys, cancerSucks.uniqueNames);
  printList(
    "Only in cancerSucks.txt",
    onlyCancerSucksKeys,
    cancerSucks.uniqueNames,
  );
  printList(
    "Only in supportGroup.txt",
    onlySupportGroupKeys,
    supportGroup.uniqueNames,
  );
}

main();
