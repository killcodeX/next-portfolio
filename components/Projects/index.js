import React from "react";
import Project1 from "./projects/project1";
import Project2 from "./projects/project2";
import Project3 from "./projects/project3";
import Project4 from "./projects/project4";
import Project5 from "./projects/project5";

export default function Products() {
  return (
    <section className="section heading-section" id="project-section">
      <h2 className="mb-4">Projects</h2>
      <div className="container">
        <Project1/>
        <Project2/>
        <Project3/>
        <Project4/>
        <Project5/>
      </div>
    </section>
  );
}
