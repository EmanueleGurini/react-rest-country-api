import React from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "./Spinner.css";

const Spinner = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div class={`lds-spinner lds-spinner--${theme ? "light" : "dark"}`}>
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
