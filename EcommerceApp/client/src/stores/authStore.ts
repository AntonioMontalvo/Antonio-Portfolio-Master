// client/src/stores/authStore.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";

// 1. Define the User Interface
interface UserInfo {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

// 2. Define the State Structure
interface AuthState {
  userInfo: UserInfo | null;
  setUserInfo: (data: UserInfo | null) => void;
  logout: () => void;
}

// 3. Create the Store
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userInfo: null, // The middleware will hydrate this from localStorage
      setUserInfo: (data) => set({ userInfo: data }),
      logout: () => {
        set({ userInfo: null });
        // The middleware will automatically remove the user info from localStorage
      },
    }),
    {
      name: "auth-storage", // name of the item in localStorage
    }
  )
);
