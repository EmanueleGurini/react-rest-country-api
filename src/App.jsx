import React from "react";
import { BrowserRouter } from "react-router-dom";

// Style
import style from "./App.module.css";
import { AppRoutes, Layout } from "./shared/components";

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
            <React.Suspense fallback={<h1>Loading</h1>}>
              <AppRoutes />
            </React.Suspense>
          </BrowserRouter>
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
