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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
