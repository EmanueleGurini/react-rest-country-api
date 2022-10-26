import React from "react";
import style from "./App.module.css";
import Home from "./pages/Home/Home";
import Layout from "./shared/components/Layout/Layout";

export const ColorContext = React.createContext({
  bool: true,
  setBool: () => {},
});

function App() {
  const [bool, setBool] = React.useState(true);

  const handleColorMode = () => {
    setBool(!bool);
  };
  return (
    <ColorContext.Provider value={{ bool, setBool }}>
      <div className={style[bool ? "bg-light" : "bg-dark"]}>
        <Layout>
          <Home />
          <button onClick={handleColorMode}>change color</button>
        </Layout>
      </div>
    </ColorContext.Provider>
  );
}

export default App;
