import { createContext, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styled/theme';

type ThemeContextType = {
  darkTheme: boolean;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextType);

function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = useCallback(() => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme: isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
