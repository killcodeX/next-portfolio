import Link from "next/link";
import React from "react";
import { AiFillHeart, AiOutlineMail, AiFillFileMarkdown } from "react-icons/ai";
import {
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiEdit2,
  FiHome,
  FiArrowRight,
} from "react-icons/fi";
import { SiBlogger } from "react-icons/si";

const socicalMedia = [
  {
    id: 1,
    icon: <FiLinkedin />,
    link: "#",
  },
  {
    id: 2,
    icon: <FiTwitter />,
    link: "#",
  },
  {
    id: 3,
    icon: <FiGithub />,
    link: "#",
  },
  {
    id: 4,
    icon: <FiEdit2 />,
    link: "#",
  },
];

const PageLinks = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "About",
    link: "#",
  },
  {
    id: 3,
    title: "Projects",
    link: "#",
  },
  {
    id: 4,
    title: "Blogs",
    link: "#",
  },
  {
    id: 5,
    title: "Contacts",
    link: "#",
  },
];

const services = [
  {
    id: 1,
    title: "Web Desiner",
  },
  {
    id: 2,
    title: "React Development",
  },
  {
    id: 3,
    title: "Teacher",
  },
  {
    id: 4,
    title: "Mern Development",
  },
  {
    id: 5,
    title: "Speaker",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section footer-bg">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md fadeInUp" data-aos="fade-up">
            <div className="ftco-footer-widget mb-4">
              <div className="ftco-heading-2">About</div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                {socicalMedia.map((social) => {
                  return (
                    <li
                      className="ftco-animate fadeInUp ftco-animated"
                      data-aos="fade-up"
                      key={social.id}
                    >
                      <Link href={social.link}>
                        <a>{social.icon}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md fadeInUp" data-aos="fade-up">
            <div className="ftco-footer-widget mb-4">
              <div className="ftco-heading-2">Links</div>
              <ul className="list-unstyled">
                {PageLinks.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.link}>
                        <a>
                          <span className="icon-long-arrow-right px-2">
                            <FiArrowRight />
                          </span>
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md fadeInUp" data-aos="fade-up">
            <div className="ftco-footer-widget mb-4">
              <div className="ftco-heading-2">Services</div>
              <ul className="list-unstyled">
                {services.map((item) => {
                  return (
                    <li key={item.id}>
                      <span className="icon-long-arrow-right px-2">
                        <FiArrowRight />
                      </span>
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md fadeInUp" data-aos="fade-up">
            <div className="ftco-footer-widget mb-4">
              <div className="ftco-heading-2">Have a Questions?</div>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <li>
                    <span className="icon icon-map-marker">
                      <FiHome />
                    </span>
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <span className="icon icon-map-marker">
                      <SiBlogger />
                    </span>

                    <span className="text">Devcript</span>
                  </li>
                  <li>
                    <span className="icon icon-map-marker">
                      <AiOutlineMail />
                    </span>
                    <span className="text">aaquibahmed@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright © {currentYear} All rights reserved | This is made with{" "}
              <AiFillHeart /> by Aaquib Ahmed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
