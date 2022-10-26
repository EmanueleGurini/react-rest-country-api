import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { ColorContext } from "../../../App";

const Layout = ({ children }) => {
  const { bool, setBool } = React.useContext(ColorContext);

  return (
    <React.Fragment>
      <Header />
      <p>i'm bool {`${bool}`}</p>
      <button onClick={() => setBool(!bool)}>{`${bool}`}</button>
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
