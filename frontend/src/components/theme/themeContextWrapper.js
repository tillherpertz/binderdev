import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './themeContext';
import { useCookies } from "react-cookie";

function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(themes.dark);
    const [cookies, setCookie] = useCookies(['theme']);

    function getCookieTheme() {
        if (cookies.theme == 'light') {
            document.body.classList.add('is-light');
        } else {
            document.body.classList.remove('is-light');
        }
    }
    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                setCookieL();
                document.body.classList.add('is-light');
                break;
            case themes.dark:
                document.body.classList.remove('is-light');
            default:
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