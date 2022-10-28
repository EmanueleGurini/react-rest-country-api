import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

// Style
import style from "./App.module.css";

// Components
import Home from "./pages/Home/Home";
import Layout from "./shared/components/Layout/Layout";
import Country from "./pages/Country/Country";

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
          <BrowserRouter>
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="/" element={<Navigate to="home" />} />
              <Route path="home/:id" element={<Country />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
