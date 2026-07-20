"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Syncs from the inline beforeInteractive script (theme-init-script.tsx), which
    // sets data-theme on <html> before hydration to avoid a flash of the wrong theme.
    const current = document.documentElement.getAttribute("data-theme");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("vw-theme", next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar tema claro/escuro"
      className="relative flex h-[26px] w-12 shrink-0 items-center rounded-full bg-border transition-colors"
    >
      <span
        className="absolute top-[3px] left-[3px] h-5 w-5 rounded-full bg-brand-500 shadow-sm transition-transform"
        style={{ transform: theme === "dark" ? "translateX(22px)" : "translateX(0)" }}
      />
      <Sun
        aria-hidden
        className="absolute left-[6px] h-3 w-3 text-brand-500 opacity-0 transition-opacity"
        style={{ opacity: theme === "dark" ? 1 : 0 }}
      />
      <Moon
        aria-hidden
        className="absolute right-[6px] h-3 w-3 text-muted opacity-0 transition-opacity"
        style={{ opacity: theme === "dark" ? 0 : 1 }}
      />
    </button>
  );
}
