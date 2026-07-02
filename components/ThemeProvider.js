"use client";
import { createContext, useContext, useEffect, useState, useCallback, useRef, useMemo } from "react";

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [transitioning, setTransitioning] = useState(false);
  const [ripple, setRipple] = useState(null);
  const mounted = useRef(false);
  const transitionLock = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.classList.toggle("dark", initial === "dark");
    }
  }, []);

  const toggleTheme = useCallback((x, y) => {
    if (transitionLock.current) return;
    transitionLock.current = true;
    setRipple({ x, y });
    setTransitioning(true);

    requestAnimationFrame(() => {
      const next = theme === "dark" ? "light" : "dark";
      setTheme(next);
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");

      setTimeout(() => {
        setTransitioning(false);
        setRipple(null);
        transitionLock.current = false;
      }, 600);
    });
  }, [theme]);

  const contextValue = useMemo(() => ({ theme, toggleTheme, transitioning }), [theme, toggleTheme, transitioning]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {ripple && (
        <div
          className="theme-transition-overlay active"
          style={{
            left: ripple.x,
            top: ripple.y,
            transformOrigin: `${ripple.x}px ${ripple.y}px`,
          }}
        />
      )}
      {children}
    </ThemeContext.Provider>
  );
}
