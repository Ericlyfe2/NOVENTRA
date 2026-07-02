"use client";
import { useCallback, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, transitioning } = useTheme();
  const btnRef = useRef(null);

  const handleClick = useCallback((e) => {
    if (transitioning) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    toggleTheme(x, y);
  }, [toggleTheme, transitioning]);

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={handleClick}
      disabled={transitioning}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center justify-center w-11 h-11 rounded border border-outline-variant text-on-surface hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 active:scale-90 overflow-hidden"
    >
      <span
        className="material-symbols-outlined transition-all duration-500"
        style={{
          transform: transitioning ? "rotate(360deg) scale(0.5)" : "rotate(0deg) scale(1)",
          opacity: transitioning ? 0 : 1,
        }}
      >
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
      {transitioning && (
        <span
          className="material-symbols-outlined absolute transition-all duration-500"
          style={{
            transform: transitioning ? "rotate(0deg) scale(1)" : "rotate(-360deg) scale(0.5)",
            opacity: transitioning ? 1 : 0,
          }}
        >
          {theme === "dark" ? "dark_mode" : "light_mode"}
        </span>
      )}
    </button>
  );
}
