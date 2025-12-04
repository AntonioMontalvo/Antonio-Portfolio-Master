// client/src/stores/cartStore.ts

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

  // Actions to modify the cart state
  addToCart: (item: ICartItem, qty: number) => void;
  removeFromCart: (id: string) => void;
  saveShippingAddress: (address: IShippingAddress) => void;
  savePaymentMethod: (method: IPaymentMethod) => void;
}

// Helper function to calculate prices (standard e-commerce practice)
const updateCartPrices = (items: ICartItem[]) => {
  const itemsPrice = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const shippingPrice = itemsPrice > 100 ? 0 : 10; // Free shipping over $100
  const taxRate = 0.15; // 15% tax
  const taxPrice = itemsPrice * taxRate;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  return {
    itemsPrice: parseFloat(itemsPrice.toFixed(2)),
    shippingPrice: parseFloat(shippingPrice.toFixed(2)),
    taxPrice: parseFloat(taxPrice.toFixed(2)),
    totalPrice: parseFloat(totalPrice.toFixed(2)),
  };
};

export const useCartStore = create<CartState>((set) => ({
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

      let newCartItems: ICartItem[];

      if (existItem) {
        // If item exists, update its quantity
        newCartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? { ...existItem, qty: qty } : x
        );
      } else {
        // If item is new, add it to the cart
        newCartItems = [...state.cartItems, { ...item, qty }];
      }

      const prices = updateCartPrices(newCartItems);

      return {
        cartItems: newCartItems,
        ...prices,
      };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const newCartItems = state.cartItems.filter((x) => x._id !== id);
      const prices = updateCartPrices(newCartItems);

      return {
        cartItems: newCartItems,
        ...prices,
      };
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
