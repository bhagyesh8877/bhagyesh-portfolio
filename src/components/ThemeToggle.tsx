"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    let current = document.documentElement.getAttribute("data-theme") as "dark" | "light" | null;
    if (!current) {
      const hour = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })).getHours();
      current = (hour >= 18 || hour < 6) ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", current);
    }
    setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <span className="theme-toggle-icon">
        {theme === "dark" ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2m-15.07 5.66-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        )}
      </span>
      <span>{theme === "dark" ? "LIGHT" : "DARK"}</span>
    </button>
  );
}
