import { create } from 'zustand';

export const useModalStore = create((set) => ({
  isOpen: false,
  title: '',
  content: '',
  buttons: {
    submitText: '',
    closeText: '',
    confirmText: '',
  },
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  setButtons: (buttons) => set({ buttons }),
}));

export const setModalContent = (content, buttons) => {
  useModalStore.setState({
    isOpen: true,
    content: content,
    buttons: buttons,
  });
};
