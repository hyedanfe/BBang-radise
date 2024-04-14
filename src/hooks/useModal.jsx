import { useState, useCallback } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    handleModalToggle,
  };
};

export default useModal;
