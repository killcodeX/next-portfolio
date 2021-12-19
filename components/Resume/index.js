import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Experience from "./experience";
import Education from "./education";

export default function Resume() {
  const ref1 = useRef();
  const ref2 = useRef();

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    console.log(rect)
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [])

  const isSticky = (e) => {

  };


  return (
    <section className="section heading-section position-relative" id='resume-section'>
      <h2 className='mb-5 resume-heading'>Resume</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <nav id="navi">
              <ul>
                <li>
                  <Link href="#resume1">
                    <a>Experience</a>
                  </Link>
                </li>
                <li>
                  <Link href="#resume2">
                    <a>Education</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-10">
            <div className='page one' id='resume1'>
                <h2>Experience</h2>
                <Experience/>
            </div>
            <div className='page one' id='resume2'>
                <h2>Education</h2>
                <Education/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
