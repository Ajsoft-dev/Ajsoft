"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";


export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };


  if (!theme) {
    return <div className={`w-9 h-9 ${className}`} aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={`w-9 h-9 flex items-center justify-center social-icon ${className}`}
      style={{ border: "1px solid var(--line)" }}
    >
      {theme === "light" ? <Moon size={16} color="var(--text)" /> : <Sun size={16} color="var(--text)" />}
    </button>
  );
}
