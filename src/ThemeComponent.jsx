import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default ThemeComponent = () => {
  const darkTheme = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: darkTheme ? "#ccc" : "#333",
    color: darkTheme ? "#333" : "#ccc",
    height: "200px",
    margin: "1rem",
    padding: "1rem"
  };
  return <div style={themeStyle}>Functional component style</div>;
};
