import React from "react";

import style from "./Header.module.css";
import { ThemeContext } from "../../context/ThemeContext";

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

  return (
    <section className={style.header}>
      <div className={style.container}>
        <h2>Where in the world?</h2>
        <button onClick={handleTheme}>{theme ? "Dark" : "Light"}</button>
      </div>
    </section>
  );
};

export default Header;
