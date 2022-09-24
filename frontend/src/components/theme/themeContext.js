import { createContext } from "react";

const themes = {
    dark: "",
    light: "is-light",
};

const ThemeContext = createContext({
    theme: themes.dark,
});

export { themes, ThemeContext }
