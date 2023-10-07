import React from "react";
import { useTheme } from "../ThemeContext";
import "../index.css"; // Import your CSS file

function ColorButtons() {
  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = (newTheme) => {
    toggleTheme(newTheme);
  };

  return (
    <div className="color-buttons">
      <button
        className="color-button"
        onClick={() => handleThemeChange("theme1")}
      >
        <i
          className={`fa-solid fa-check theme1 ${
            theme === "theme1" ? "active" : "inactive"
          }`}
        ></i>
      </button>
      <button
        className="color-button"
        onClick={() => handleThemeChange("theme2")}
      >
        <i
          className={`fa-solid fa-check theme2 ${
            theme === "theme2" ? "active" : "inactive"
          }`}
        ></i>
      </button>
      <button
        className="color-button"
        onClick={() => handleThemeChange("theme3")}
      >
        <i
          className={`fa-solid fa-check theme3 ${
            theme === "theme3" ? "active" : "inactive"
          }`}
        ></i>
      </button>
    </div>
  );
}

export default ColorButtons;
