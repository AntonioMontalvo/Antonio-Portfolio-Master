// client/src/stores/cartStore.ts
// Cart state is managed in-memory by Zustand.
// Persistence is handled by the backend API (MongoDB) — see cart routes.

import { create } from "zustand";
import type { ICartItem, IShippingAddress, IPaymentMethod } from "../types.ts";

const API = "https://ecommerce-backend-oddl.onrender.com";

interface CartState {
  cartItems: ICartItem[];
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  shippingAddress: IShippingAddress | null;
  paymentMethod: IPaymentMethod | null;

  addToCart: (item: ICartItem, qty: number) => void;
  removeFromCart: (id: string) => void;
  saveShippingAddress: (address: IShippingAddress) => void;
  savePaymentMethod: (method: IPaymentMethod) => void;
  clearCart: () => void;
  resetCart: () => void;
  fetchCart: () => Promise<void>;
  syncCart: (items: ICartItem[]) => Promise<void>;
}

const updateCartPrices = (items: ICartItem[]) => {
  const itemsPrice = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxRate = 0.15;
  const taxPrice = itemsPrice * taxRate;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  return {
    itemsPrice: parseFloat(itemsPrice.toFixed(2)),
    shippingPrice: parseFloat(shippingPrice.toFixed(2)),
    taxPrice: parseFloat(taxPrice.toFixed(2)),
    totalPrice: parseFloat(totalPrice.toFixed(2)),
  };
};

export const useCartStore = create<CartState>()((set, get) => ({
  cartItems: [],
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
  shippingAddress: null,
  paymentMethod: null,

  // Fetch the user's cart from the DB and load it into the store
  fetchCart: async () => {
    const res = await fetch(`${API}/api/cart`, { credentials: "include" });
    if (!res.ok) return;
    const data = await res.json();
    const items: ICartItem[] = (data.items ?? []).map(
      (item: Record<string, unknown>) => ({
        _id: item.product,
        name: item.name,
        image: item.image,
        price: item.price,
        qty: item.qty,
        countInStock: item.countInStock ?? 99,
      }),
    );
    set({ cartItems: items, ...updateCartPrices(items) });
  },

  // Save the current cart items to the DB (fire-and-forget)
  syncCart: async (items) => {
    const payload = items.map((item) => ({
      product: item._id,
      name: item.name,
      image: item.image,
      price: item.price,
      qty: item.qty,
    }));
    await fetch(`${API}/api/cart`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ items: payload }),
    });
  },

  addToCart: (item, qty) => {
    set((state) => {
      const existItem = state.cartItems.find((x) => x._id === item._id);
      const newCartItems = existItem
        ? state.cartItems.map((x) =>
            x._id === existItem._id ? { ...existItem, qty } : x,
          )
        : [...state.cartItems, { ...item, qty }];
      get().syncCart(newCartItems);
      return { cartItems: newCartItems, ...updateCartPrices(newCartItems) };
    });
  },

  removeFromCart: (id) => {
    set((state) => {
      const newCartItems = state.cartItems.filter((x) => x._id !== id);
      get().syncCart(newCartItems);
      return { cartItems: newCartItems, ...updateCartPrices(newCartItems) };
    });
  },

  saveShippingAddress: (address) => set({ shippingAddress: address }),

  savePaymentMethod: (method) => set({ paymentMethod: method }),

  // Clear in-memory cart only — DB cart is preserved for next login
  resetCart: () => {
    set({
      cartItems: [],
      itemsPrice: 0,
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: 0,
    });
  },

  clearCart: () => {
    fetch(`${API}/api/cart`, { method: "DELETE", credentials: "include" });
    set({
      cartItems: [],
      itemsPrice: 0,
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: 0,
    });
  },
}));
