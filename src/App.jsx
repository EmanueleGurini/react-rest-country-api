import React from "react";

// Style
import style from "./App.module.css";

// Components
import Home from "./pages/Home/Home";
import Layout from "./shared/components/Layout/Layout";

// Context
import { ThemeContext } from "./shared/context/ThemeContext";

function App() {
  // This state will be used to manage the light/dark theme
  // Context is initialized inside ThemeContext, check the imports
  const [theme, setTheme] = React.useState(true);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={style[theme ? "bg-light" : "bg-dark"]}>
        <Layout>
          <Home />
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
