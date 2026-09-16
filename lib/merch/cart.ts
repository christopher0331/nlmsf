export const MERCH_CART_KEY = "nlmsf-merch-cart";

export type StoredCartItem = {
  listingId: string;
  slug: string;
  title: string;
  mediumId: string;
  mediumName: string;
  colorId: string;
  colorName: string;
  colorHex: string;
  size: string;
  quantity: number;
  priceCents: number;
  imageUrl: string;
};

export function readCart(): StoredCartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(MERCH_CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as StoredCartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeCart(items: StoredCartItem[]): void {
  window.localStorage.setItem(MERCH_CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("nlmsf-merch-cart"));
}

export function addToCart(item: StoredCartItem): StoredCartItem[] {
  const cart = readCart();
  const key = `${item.listingId}:${item.colorId}:${item.size}`;
  const existing = cart.find((row) => `${row.listingId}:${row.colorId}:${row.size}` === key);
  if (existing) {
    existing.quantity = Math.min(10, existing.quantity + item.quantity);
  } else {
    cart.push({ ...item, quantity: Math.min(10, Math.max(1, item.quantity)) });
  }
  writeCart(cart);
  return cart;
}

export function updateCartQuantity(listingId: string, colorId: string, size: string, quantity: number) {
  const cart = readCart()
    .map((row) =>
      row.listingId === listingId && row.colorId === colorId && row.size === size
        ? { ...row, quantity: Math.min(10, Math.max(1, quantity)) }
        : row,
    );
  writeCart(cart);
  return cart;
}

export function removeFromCart(listingId: string, colorId: string, size: string) {
  const cart = readCart().filter(
    (row) => !(row.listingId === listingId && row.colorId === colorId && row.size === size),
  );
  writeCart(cart);
  return cart;
}

export function clearCart() {
  writeCart([]);
}

export function cartCount(items: StoredCartItem[] = readCart()): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function cartSubtotal(items: StoredCartItem[] = readCart()): number {
  return items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);
}
