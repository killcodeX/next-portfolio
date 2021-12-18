import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Project5() {
  return (
    <div className="row py-5 px-2 mobile-row-reverse mb-5">
      <div className="col-lg-6 mb-lg-0">
        <div className="unset-img img-project">
          <Image
            src="/DevPost/1.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/DevPost/2.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/DevPost/3.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/DevPost/4.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/DevPost/5.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/DevPost/6.jpeg"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/DevPost/7.jpeg"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/DevPost/8.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
      </div>
      <div className="col-lg-5 h-100 jm-sticky-top ml-auto">
        <h3>DevPost</h3>
        <p className="mb-4">
          DevPost is a JAMSTACK blogging website made on Nextjs and Strapi CMS,
          where user can see number of posts, open individual post, share it and
          It also comes with dark mode too.
        </p>
        <h5>Tech Stack</h5>
        <ul className="stacks">
          <li>
            <strong className="text-black">Frontned:</strong>Nextjs
          </li>
          <li>
            <strong className="text-black">Styling:</strong>Styled Components
          </li>
          <li>
            <strong className="text-black">CMS:</strong>Strapi
          </li>
          <li>
            <strong className="text-black">image DB:</strong>Cloudinary
          </li>
          <li>
            <strong className="text-black">Backend:</strong>Node and Express js
          </li>
          <li>
            <strong className="text-black">Database:</strong>Postgre SQL
          </li>
        </ul>
        <h5>Overall Functionlity</h5>
        <ul>
          <li>Main Landing page with list of articles published</li>
          <li>Switch for night and light mode</li>
          <li>Filtering articles by categories</li>
          <li>Viewing Individual Article</li>
          <li>Share buttons to share article on social media platform</li>
          <li>Fully Mobile Optimized</li>
          <li>Strapi CMS to publish blog</li>
        </ul>
        <p className="mb-2">
          <Link href="https://github.com/killcodeX/devpost">
            <a target="_blank" className="readmore">
              Visit Github
            </a>
          </Link>
        </p>
        <p>
          <Link href="https://devpost-front.vercel.app">
            <a target="_blank" className="readmore">
              Visit Website
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
