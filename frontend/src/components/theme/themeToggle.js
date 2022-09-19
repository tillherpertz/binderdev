import React from "react";
import { ThemeContext, themes } from "./themeContext";
import { useCookies } from "react-cookie";

function ThemeToggle() {
    const [darkMode, setDarkMode] = React.useState(true);
    const [cookies, setCookie] = useCookies(['theme']);

    const setThemeInStorage = (theme) => {
        localStorage.setItem('theme', theme)
    }

    function determineTheme() {
        if (darkMode) {
            return 'is-light';
        } else {
            return 'is-dark';
        }
    }

    return (
        <div className='theme-toggle'>
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                    <i
                        onClick={() => {
                            setThemeInStorage(determineTheme());
                            setDarkMode(!darkMode);
                            changeTheme(darkMode ? themes.light : themes.dark);
                        }}
                        className={darkMode ? 'bi-brightness-high' : 'bi-moon-fill'}>
                    </i>
                )}
            </ThemeContext.Consumer>
        </div>
    )
}

export default ThemeToggle;