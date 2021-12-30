import React from "react";
import { Parallax } from "react-scroll-parallax";
import {
  DiBootstrap,
  DiJavascript1,
  DiCss3Full,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPhotoshop,
  DiPython,
  DiSass,
  DiGit,
} from "react-icons/di";
import { SiTypescript, SiNextdotjs, SiWordpress, SiAntdesign, SiBulma } from "react-icons/si";

export default function Skills() {
  return (
    <section className="section heading-section" id="skill-section">
      <h2 className="mb-4">Skills</h2>
      <Parallax className="custom-class" y={[-60, 60]}>
        <span className="skill-1">
          <DiBootstrap />
        </span>
        <span className="skill-2">
          <SiNextdotjs />
        </span>
        <span className="skill-3">
          <DiPhotoshop />
        </span>
        <span className="skill-4">
          <DiPython />
        </span>
        <span className="skill-5">
          <DiSass />
        </span>
        <span className="skill-6">
          <SiAntdesign/>
        </span>
        <span className="skill-7">
          <DiMongodb />
        </span>
        <span className="skill-8">
          <DiGit />
        </span>
        <span className="skill-9">express</span>
        <span className="skill-10">
          <SiTypescript />
        </span>
        <span className="skill-11">
          <SiWordpress />
        </span>
        <span className="skill-12">
          <SiBulma/>
        </span>
      </Parallax>
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
    </section>
  );
}
