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
                  Hi 👋 Everyone, I am a passionate front-end engineer with over 5 years of experience crafting dynamic and user-centric web applications. I leverage my strong foundation in various programming languages and frameworks to deliver high-impact solutions for e-commerce and SaaS businesses.
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
                    <Link href="https://www.instagram.com/the_devnextdoor/">
                      <a target="_blank" rel="noreferrer">
                        <FiInstagram />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/aaquib-ahmed/">
                      <a target="_blank" rel="noreferrer">
                        <FiLinkedin />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/thedevnextdoor">
                      <a target="_blank" rel="noreferrer">
                        <FiTwitter />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/killcodeX">
                      <a target="_blank" rel="noreferrer">
                        <FiGithub />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://stackoverflow.com/users/12927822/aaquib">
                      <a target="_blank" rel="noreferrer">
                        <FiLayers />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.devcript.com/author/aaquib/">
                      <a target="_blank" rel="noreferrer">
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
