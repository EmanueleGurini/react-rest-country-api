import React from "react";

import style from "./Header.module.css";
import { ThemeContext } from "../../context/ThemeContext";

import iconLight from "../../../assets/icons/icon-light-theme.svg";
import iconDark from "../../../assets/icons/icon-dark-theme.svg";

const Header = () => {
  // Get the ThemeContext and store his value inside variables by destructuring
  const { theme, setTheme } = React.useContext(ThemeContext);

  /**
   * Update the ThemeContext value.
   *
   * Set a boolean as his opposite value
   */
  const handleTheme = () => {
    setTheme(!theme);
  };

  let themeMode = theme ? "light" : "dark";

  return (
    <section className={`${style.header} ${style[`header--${themeMode}`]}`}>
      <div className={style.container}>
        <h1>Where in the world?</h1>

        {/* THEME BUTTON */}
        <button
          onClick={handleTheme}
          className={`${style[`button--${themeMode}`]}`}
        >
          {/* THEME ICON BUTTON */}
          <img src={theme ? iconLight : iconDark} />
          {theme ? "Dark" : "Light"} Mode
        </button>
      </div>
    </section>
  );
};

export default Header;
