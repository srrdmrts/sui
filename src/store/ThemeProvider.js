import { createContext, useEffect, useState } from 'react';
import usePrefersColorScheme from '../hooks/usePrefersColorScheme';

const ThemeContext = createContext(null);

const THEMES = {
    LIGHT: 'LIGHT',
    DARK: 'DARK',
    SYSTEM: 'SYSTEM'
};

const switchTheme = (theme) => {
    localStorage.setItem('theme', theme);

    if (theme === 'light') {
        document.body.classList.remove('dark');
    } else if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        localStorage.setItem('theme', '');
        document.body.classList.remove('dark');
    }
}

const ThemeProvider = ({ children }) => {
    const preferredColorSchema = usePrefersColorScheme();

    useEffect(() => {
        switchTheme(preferredColorSchema);
    }, [preferredColorSchema]);

    const [theme, setTheme] = useState({ theme: "system" });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { THEMES, ThemeContext, ThemeProvider };
