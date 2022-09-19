import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './themeContext';
import { useCookies } from "react-cookie";

function ThemeContextWrapper(props) {

    const getThemeInStorage = () => {
        if (localStorage.getItem('theme') == 'is-light') {
            return themes.light;
        } else {
            return themes.dark;
        }
    }

    const [theme, setTheme] = useState(getThemeInStorage());
    const [cookies, setCookie] = useCookies(['theme']);


    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.add('is-light');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('is-light');
                break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextWrapper;