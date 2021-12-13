import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useTheme } from "next-themes";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentLink, setCurrentLink] = useState("");
  return (
    <div className="sidebar">
      <div className="header">
        <AiOutlineClose />
      </div>
      <div className="d-flex flex-column">
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
          <li
            className="nav-item"
            onClick={() => setCurrentLink("/#home-section")}
          >
            <Link href="#home-section">
              <a
                className={`nav-link ${
                  currentLink == "/#home-section" ? "active" : ""
                }`}
                aria-current="page"
              >
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li
            className="nav-item"
            onClick={() => setCurrentLink("/#about-section")}
          >
            <Link href="#about-section">
              <a
                className={`nav-link ${
                  currentLink == "/#about-section" ? "active" : ""
                }`}
              >
                <span>About</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#">
              <a className="nav-link">
                <span>Projects</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#">
              <a className="nav-link">
                <span>Blogs</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#">
              <a className="nav-link">
                <span>Contact</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
