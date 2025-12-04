// client/src/types.ts

export interface IUserInfo {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token?: string;
}

export interface IProduct {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  countInStock: number;
  createdAt: string;
  updatedAt: string;
}
export interface ICartItem {
  _id: string; // Product ID
  name: string;
  image: string;
  price: number;
  countInStock: number; // Max quantity a user can buy
  qty: number; // Quantity selected by the user
}

// client/src/types.ts (Add Shipping and Payment interfaces)

export interface IShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface IPaymentMethod {
  method: "PayPal" | "Stripe" | "CreditCard"; // Example options
}
