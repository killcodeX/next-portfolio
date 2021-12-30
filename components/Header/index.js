import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import useWindowWidth from "../../helpers/useWindowSize";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import SideBar from "../SideBar";
import Education from "../Resume/education";

export default function Header() {
  const router = useRouter();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentSection, setCurrentSection] = useState(10);
  const width = useWindowWidth();

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
    } else {
      header.classList.add("navbar-portfolio");
      header.classList.remove("navbar-portfolio-scroll");
    }
  };

  const handleSideBarOpen = () => {
    setSideBarOpen(!sideBarOpen);
    const sidebar = document.querySelector(".sidebar");
    console.log(sidebar);
    if (sideBarOpen) {
      sidebar.classList.remove("open");
    } else {
      sidebar.classList.add("open");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Aaquib Ahmed</a>
        </Link>
        {width > 650 ? (
          <div className="d-flex flex-row-reverse collapse navbar-collapse px-5">
            <ul className="navbar-nav nav ml-auto d-flex align-items-center">
              <li className="nav-item">
                <Link href="#home-section">
                  <a className="nav-link" aria-current="page">
                    <span>Home</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about-section">
                  <a className="nav-link">
                    <span>About</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#skill-section">
                  <a className="nav-link">
                    <span>Skills</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#resume-section">
                  <a className="nav-link">
                    <span>Resume</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#project-section">
                  <a className="nav-link">
                    <span>Projects</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#blog-section">
                  <a className="nav-link">
                    <span>Blogs</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact-section">
                  <a className="nav-link">
                    <span>Contact</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="d-flex">
            {!sideBarOpen ? (
              <span
                style={{ fontSize: "20px", color: "black" }}
                onClick={handleSideBarOpen}
              >
                <AiOutlineAlignRight />
                <SideBar />
              </span>
            ) : (
              <span
                style={{ fontSize: "20px", color: "black" }}
                onClick={handleSideBarOpen}
              >
                <AiOutlineClose />
                <SideBar />
              </span>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

{
  /* <li
      className="nav-item"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted &&
        (theme === "dark" ? (
          <span className="nav-link">🌞</span>
        ) : (
          <span className="nav-link">🌙</span>
        ))}
    </li> */
}
