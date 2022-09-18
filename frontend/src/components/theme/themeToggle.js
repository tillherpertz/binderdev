import React from "react";
import { ThemeContext, themes } from "./themeContext";
import { useCookies } from "react-cookie";

function ThemeToggle() {
    const [darkMode, setDarkMode] = React.useState(true);
    const [cookies, setCookie] = useCookies(['theme']);
    function setCookieL() {
        setCookie("theme", "light", {
            path: "/"
        });
        console.log(cookies.theme);
    }
    function setCookieD() {
        setCookie("theme", "dark", {
            path: "/"
        });
        console.log(cookies.theme);
    }
    return (
        <div className="theme-toggle">
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                    <i
                        onClick={() => {
                            setDarkMode(!darkMode);
                            changeTheme(darkMode ? themes.light : themes.dark);
                            setCookieL();
                        }}
                        className={darkMode ? "bi-brightness-high" : "bi-moon-fill"}>
                    </i>
                )}
            </ThemeContext.Consumer>
        </div>
    )
}

export default ThemeToggle;