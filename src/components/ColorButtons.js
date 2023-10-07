import React from "react";
import { useTheme } from "../ThemeContext";
import "../index.css"; // Import your CSS file

function ColorButtons() {
  const { toggleTheme } = useTheme();

  const handleThemeChange = (newTheme) => {
    toggleTheme(newTheme);
  };

  return (
    <div className="color-buttons">
      <button
        className="color-button"
        onClick={() => handleThemeChange("theme1")}
      >
        <i className="fa-solid fa-check theme1"></i>
      </button>
      <button
        className="color-button"
        onClick={() => handleThemeChange("theme2")}
      >
        <i className="fa-solid fa-check theme2"></i>
      </button>
      <button
        className="color-button"
        onClick={() => handleThemeChange("theme3")}
      >
        <i className="fa-solid fa-check theme3"></i>
      </button>
    </div>
  );
}

export default ColorButtons;
