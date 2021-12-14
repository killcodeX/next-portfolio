import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiLinkedin, FiTwitter, FiGithub, FiLayers, FiEdit2 } from 'react-icons/fi';

export default function About() {
  return (
    <section className="section" id="about-section">
      <div className="container">
        <div className="row mobile-row-reverse d-flex no-gutters">
          <div className="col-md-6 col-lg-6 img-column">
            <div className="unset-img img-about">
              <Image src={"/me.jpeg"} alt='aaquib ahmed' layout="fill" className="custom-img" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 pl-md-5 py-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated" data-aos="fade-up">
                <h2 className="mb-4">About Me</h2>
                <p>
                  Hi 👋 Everyone, I am a frontend engineer with 2 years of
                  experience in developing and shipping appealing websites and
                  web apps. Earlier I was working as a frontend developer in a
                  dynamic startup, where I built a B2B Dashboard webapp, and add
                  new features like appointment booking, analytics graph,
                  setting up admin roles, etc, thus single-handedly completing
                  the app to 80%. I had done my engineering at Bangalore
                  Institute of Technology, Bengaluru.
                </p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span>
                    <span>Aaquib Ahmed</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span>
                    <span>aaquib5076@gmail.com</span>
                  </li>
                </ul>
                <ul className="about-social mt-4 px-md-0 px-2">
                  <li>
                    <Link href="#">
                      <a>
                        <FiInstagram />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <FiLinkedin />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <FiTwitter />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <FiGithub />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <FiLayers />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <FiEdit2 />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <Image className='img d-flex align-self-stretch align-items-center' 
                            src='/me.jpg' alt='aaquib ahmed' layout='fill'/> */
}
