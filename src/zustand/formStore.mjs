import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useFormStore = create(
  persist(
    (set) => ({
      formData: null,
      setFormData: (formData) => set({ formData: formData }),
    }),
    {
      name: 'formData',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useFormStore;
