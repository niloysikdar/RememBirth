import { useState } from 'react';

const useAllToggle = () => {
  const [isAll, setIsAll] = useState(true);

  const setAll = () => setIsAll(true);
  const setToday = () => setIsAll(false);

  return { isAll, setAll, setToday };
};

export { useAllToggle };
