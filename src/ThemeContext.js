import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("theme1"); // Default theme

  useEffect(() => {
    // Load the theme from local storage if available
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = (newColor) => {
    const newTheme = newColor;
    console.log(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to local storage
  };

  function getColor(theme) {
    if (theme === "theme1") {
      return "#f57272";
    } else if (theme === "theme2") {
      return "#72a7f5";
    } else if (theme === "theme3") {
      return "#2ecc71";
    } else {
      return "white";
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, getColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
