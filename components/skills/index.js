import React,{ useEffect, useState } from "react";
import { DiJavascript1, DiCss3Full, DiReact, DiNodejs } from "react-icons/di";

export default function Skills() {
    const [scrollDown, setScrollDown] = useState(100);
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
          window.removeEventListener("scroll", isSticky);
        };
      }, []);

      const isSticky = (e) => {
        const scrollTop = window.scrollY;
        if((scrollDown - scrollTop) < 0){
          setScrollDown(scrollDown - scrollTop)
        }
      };

  return (
    <section className="section heading-section" id="skill-section">
      <h2 className='mb-4'>Skills</h2>
      <div className="container">
        <div className="row skills-height">
          <div className="col-sm-3 d-flex justify-content-center align-items-center">
            <span className="skill-icons">
              <DiJavascript1 />
            </span>
          </div>
          <div className="col-sm-3 d-flex justify-content-center align-items-center">
            <span className="skill-icons">
              <DiCss3Full />
            </span>
          </div>
          <div className="col-sm-3 d-flex justify-content-center align-items-center">
            <span className="skill-icons">
              <DiReact />
            </span>
          </div>
          <div className="col-sm-3 d-flex justify-content-center align-items-center">
            <span className="skill-icons">
              <DiNodejs />
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='parallax-outer'>
          <div className='parallax-inner' style={{transform: `translate3d(0%, ${scrollDown}px, 0px)`}}> 
              <span className='skill-1'>bla</span>
              <span className='skill-2'><DiJavascript1 /></span>
              <span className='skill-3'><DiCss3Full /></span>
              <span className='skill-4'><DiReact /></span>
              <span className='skill-5'><DiNodejs /></span>
              <span className='skill-6'>6</span>
              <span className='skill-7'>7</span>
              <span className='skill-8'>8</span>
              <span className='skill-9'>9</span>
          </div>
      </div>
    </section>
  );
}
