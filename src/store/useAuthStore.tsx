import { create } from "zustand";
import Cookies from "universal-cookie";
import { toast } from "sonner";

const cookies = new Cookies();

const authStore = (set) => ({
  refresh: cookies.get("Bagaicha")?.refresh,
  loggedIn: cookies.get("Bagaicha")?.token ? true : false,
  user: cookies.get("Bagaicha") || null,

  setUser: (user) => {
    set(() => {
      cookies.set("Bagaicha", user);
      return { user: user, loggedIn: true };
    });
  },

  logout: () => {
    set(() => {
      cookies.remove("Bagaicha");
      return {
        loggedIn: false,
        user: null,
      };
    });
    toast.success("Logged out successfully");
  },
});

export const useAuthStore = create(authStore);