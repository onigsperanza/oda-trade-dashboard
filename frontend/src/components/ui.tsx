import React, { ReactNode, createContext, useContext, useState } from "react";

const ThemeContext = createContext<{ darkMode: boolean; toggleTheme: () => void } | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode; darkMode: boolean }> = ({ children, darkMode }) => {
  const [isDark, setIsDark] = useState(darkMode);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ darkMode: isDark, toggleTheme }}>
      <div className={isDark ? "dark" : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
