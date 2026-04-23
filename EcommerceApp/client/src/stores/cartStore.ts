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
  currentUserId: string | null;

  addToCart: (item: ICartItem, qty: number) => void;
  removeFromCart: (id: string) => void;
  saveShippingAddress: (address: IShippingAddress) => void;
  savePaymentMethod: (method: IPaymentMethod) => void;
  clearCart: () => void;
  loadCartForUser: (userId: string) => void;
  unloadCart: () => void;
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

const EMPTY_CART = {
  cartItems: [] as ICartItem[],
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
  shippingAddress: null as IShippingAddress | null,
  paymentMethod: null as IPaymentMethod | null,
};

const storageKey = (userId: string) => `cart-${userId}`;

const loadFromStorage = (userId: string) => {
  try {
    const raw = localStorage.getItem(storageKey(userId));
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const saveToStorage = (userId: string | null, state: CartState) => {
  if (!userId) return;
  try {
    localStorage.setItem(
      storageKey(userId),
      JSON.stringify({
        cartItems: state.cartItems,
        itemsPrice: state.itemsPrice,
        shippingPrice: state.shippingPrice,
        taxPrice: state.taxPrice,
        totalPrice: state.totalPrice,
        shippingAddress: state.shippingAddress,
        paymentMethod: state.paymentMethod,
      }),
    );
  } catch {
    // ignore storage errors
  }
};

export const useCartStore = create<CartState>()((set, get) => ({
  ...EMPTY_CART,
  currentUserId: null,

  addToCart: (item, qty) => {
    set((state) => {
      const existItem = state.cartItems.find((x) => x._id === item._id);
      const newCartItems = existItem
        ? state.cartItems.map((x) =>
            x._id === existItem._id ? { ...existItem, qty } : x,
          )
        : [...state.cartItems, { ...item, qty }];
      return { cartItems: newCartItems, ...updateCartPrices(newCartItems) };
    });
    saveToStorage(get().currentUserId, get());
  },

  removeFromCart: (id) => {
    set((state) => {
      const newCartItems = state.cartItems.filter((x) => x._id !== id);
      return { cartItems: newCartItems, ...updateCartPrices(newCartItems) };
    });
    saveToStorage(get().currentUserId, get());
  },

  saveShippingAddress: (address) => {
    set({ shippingAddress: address });
    saveToStorage(get().currentUserId, get());
  },

  savePaymentMethod: (method) => {
    set({ paymentMethod: method });
    saveToStorage(get().currentUserId, get());
  },

  clearCart: () => {
    set(EMPTY_CART);
    saveToStorage(get().currentUserId, get());
  },

  // Called on login: load this user's saved cart from their own storage slot
  loadCartForUser: (userId) => {
    const saved = loadFromStorage(userId);
    set({
      currentUserId: userId,
      ...EMPTY_CART,
      ...(saved || {}),
    });
  },

  // Called on logout: clear in-memory cart only (keep saved data on disk)
  unloadCart: () => {
    set({ ...EMPTY_CART, currentUserId: null });
  },
}));
