import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return { isModalOpen, close, open };
};

export { useModal };
