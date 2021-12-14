import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Experience from "./experience";
import Education from "./education";

export default function Resume() {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [])

  const isSticky = (e) => {
    console.log(router)
  };


  return (
    <section className="section position-relative">
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
