import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentLink, setCurrentLink] = useState('');

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    setMounted(true);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector(".navbar");
    const scrollTop = window.scrollY;
    if (scrollTop > 150) {
      header.classList.add("navbar-portfolio-scroll");
      header.classList.remove("navbar-portfolio");
      setCurrentLink(router.asPath)
    } else {
      header.classList.add("navbar-portfolio");
      header.classList.remove("navbar-portfolio-scroll");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          Aaquib
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="d-flex flex-row-reverse collapse navbar-collapse px-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav nav ml-auto d-flex align-items-center">
            <li
              className="nav-item"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted &&
                (theme === "dark" ? (
                  <span className="nav-link">🌞</span>
                ) : (
                  <span className="nav-link">🌙</span>
                ))}
            </li>
            <li className="nav-item" onClick={() => setCurrentLink('/#home-section')}>
              <a className={`nav-link ${currentLink == '/#home-section'? 'active' : ''}`} aria-current="page" href="#home-section">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item" onClick={() => setCurrentLink('/#about-section')}>
              <a className={`nav-link ${currentLink == '/#about-section'? 'active' : ''}`} href="#about-section">
              <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>Blogs</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
