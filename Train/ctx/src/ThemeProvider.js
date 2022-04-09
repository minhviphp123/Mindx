import { useState, createContext } from 'react';
import Content from './Content';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={theme}>
          {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;