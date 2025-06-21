import React, { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type Props = {
  children: React.ReactNode;
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}: Props) => {
  const [theme, setTheme]= useState<Theme>(() => {
    if(typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('color-theme') as Theme | null;
      return storedTheme ? storedTheme : 'dark'
    }

    return 'dark'
  })

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('color-theme', theme)
  },[theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}



