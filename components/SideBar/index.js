import React,{useState} from "react";
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
            <a
              className={`nav-link ${
                currentLink == "/#home-section" ? "active" : ""
              }`}
              aria-current="page"
              href="#home-section"
            >
              <span>Home</span>
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => setCurrentLink("/#about-section")}
          >
            <a
              className={`nav-link ${
                currentLink == "/#about-section" ? "active" : ""
              }`}
              href="#about-section"
            >
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
  );
}
