import { createContext, useCallback, useState } from 'react';

interface IToggle {
  darkMode: boolean;
  setDarkMode: () => void;
}

interface IProps {
  children: React.ReactNode;
}

export const ToggleContext = createContext({} as IToggle);

function ToggleProvider({ children }: IProps) {
  const [darkMode, setDarkMode] = useState(false);

  const activateDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  const values: IToggle = {
    setDarkMode: activateDarkMode,
    darkMode: darkMode,
  };

  return (
    <ToggleContext.Provider value={values}>{children}</ToggleContext.Provider>
  );
}

export default ToggleProvider;
