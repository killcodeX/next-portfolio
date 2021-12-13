import React,{useState, useEffect} from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target scrolled awake'>
      <div className="container">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-1 rounded focus:outline-none"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (theme === "dark" ? '🌞':'🌙')}
        </button>
      </div>
      This is header
    </nav>
  );
}
