import React from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

import "./Spinner.css";

const Spinner = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={`lds-spinner lds-spinner--${theme ? "light" : "dark"}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
