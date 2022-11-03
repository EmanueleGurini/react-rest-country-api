import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import style from "./Footer.module.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`${style.footer} ${
        style[`footer--${theme ? "light" : "dark"}`]
      }`}
    >
      <div className={style.container}>
        <p style={{ fontWeight: 600 }}>Made by Emanuele Gurini</p>
      </div>
    </section>
  );
};

export default Footer;
