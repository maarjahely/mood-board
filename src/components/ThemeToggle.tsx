import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.theme = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prevState) => !prevState)}
      className="rounded-xl border px-3 py-2 text-sm bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
      aria-pressed={isDark}
      title={isDark ? "Switch to light" : "Switch to dark"}
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
