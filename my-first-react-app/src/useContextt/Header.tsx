import React from "react";
import { useTheme } from "./ThemeContext";

const Header: React.FC = () => {
    const { theme } = useTheme();

    return(
        <header style={{background: theme === 'dark' ? '#333' : '#eee',color: theme === 'dark' ? '#eee' : '#333'}}>
            <h1>Theme Switcher</h1>
        </header>
    )
}
export default Header;