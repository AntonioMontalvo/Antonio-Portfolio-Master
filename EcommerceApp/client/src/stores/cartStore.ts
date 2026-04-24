// client/src/stores/cartStore.ts
// Cart state is managed in-memory by Zustand.
// Persistence is handled by the backend API (MongoDB) — see cart routes.

import { create } from "zustand";
import type { ICartItem, IShippingAddress, IPaymentMethod } from "../types.ts";

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

export const useCartStore = create<CartState>()((set) => ({
  cartItems: [],
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
  shippingAddress: null,
  paymentMethod: null,

  addToCart: (item, qty) =>
    set((state) => {
      const existItem = state.cartItems.find((x) => x._id === item._id);
      const newCartItems = existItem
        ? state.cartItems.map((x) =>
            x._id === existItem._id ? { ...existItem, qty } : x,
          )
        : [...state.cartItems, { ...item, qty }];
      return { cartItems: newCartItems, ...updateCartPrices(newCartItems) };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const newCartItems = state.cartItems.filter((x) => x._id !== id);
      return { cartItems: newCartItems, ...updateCartPrices(newCartItems) };
    }),

  saveShippingAddress: (address) => set({ shippingAddress: address }),

  savePaymentMethod: (method) => set({ paymentMethod: method }),

  clearCart: () =>
    set({
      cartItems: [],
      itemsPrice: 0,
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: 0,
    }),
}));

