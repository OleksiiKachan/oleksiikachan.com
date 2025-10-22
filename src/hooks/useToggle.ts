'use client';

import { useCallback, useState } from 'react';

const useToggle = (
  initialState = false
): [boolean, (value?: boolean | unknown) => void] => {
  const [_isVisible, setIsVisible] = useState<boolean>(initialState);

  const toggleVisibility = useCallback(
    (value?: unknown) =>
      typeof value === `boolean`
        ? setIsVisible(value)
        : setIsVisible((isVisible) => !isVisible),
    []
  );

  return [_isVisible, toggleVisibility];
};

export default useToggle;
