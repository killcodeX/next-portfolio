import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import useWindowWidth from "../../helpers/useWindowSize";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import SideBar from "../SideBar";

export default function Header() {
  const router = useRouter();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentLink, setCurrentLink] = useState("");
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
      setCurrentLink(router.asPath);
    } else {
      header.classList.add("navbar-portfolio");
      header.classList.remove("navbar-portfolio-scroll");
    }
  };

  const handleSideBarOpen = () => {
    setSideBarOpen(!sideBarOpen)
    const sidebar = document.querySelector('.sidebar');
    console.log(sidebar)
    if(sideBarOpen){
      sidebar.classList.remove('open')
    }else{
      sidebar.classList.add('open')
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          Aaquib
        </a>
        {width > 650 ? (
          <div className="d-flex flex-row-reverse collapse navbar-collapse px-5">
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
        ) : (
          <div className="d-flex">
            {!sideBarOpen ? (
              <span style={{fontSize:'20px', color:'black'}} onClick={handleSideBarOpen}>
                <AiOutlineAlignRight />
                <SideBar/>
              </span>
            ) : (
              <span style={{fontSize:'20px', color:'black'}} onClick={handleSideBarOpen}>
                <AiOutlineClose />
                <SideBar/>
              </span>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
