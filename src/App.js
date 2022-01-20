import "./styles.css";
import React, { useState } from "react";
import ThemeComponent from "./ThemeComponent";

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeComponent />
    </ThemeContext.Provider>
  );
}
