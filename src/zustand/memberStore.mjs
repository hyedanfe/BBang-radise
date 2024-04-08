import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useMemberStore = create()(
  persist(
    (set) => ({
      user: {},
      setUser: (userData) => set(() => ({ user: userData })),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useMemberStore;
