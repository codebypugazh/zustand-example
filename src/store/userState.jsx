import createStore from "zustand";
import { persist } from "zustand/middleware";
const useUser = createStore(
  persist(
    (set) => ({
      user: null,
      fetch: async (url) => {
        const response = await fetch(url).then((r) => r.json());
        console.log(response);
        set({ user: response.results[0] });
      },
    }),
    {
      name: "userdata",
      partialize: (state) => state.user.name.first,
      getStorage: () => localStorage,
    }
  )
);

export { useUser };
