import { createContext, useState } from 'react';

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

  const activateDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const values = {
    setDarkMode: activateDarkMode,
    darkMode: darkMode,
  };

  return (
    <ToggleContext.Provider value={values}>{children}</ToggleContext.Provider>
  );
}

export default ToggleProvider;
