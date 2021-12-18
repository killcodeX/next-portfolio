import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Project5() {
  return (
    <div className="row py-5 px-2 mobile-row-reverse mb-5">
      <div className="col-lg-6 mb-4 mb-lg-0">
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
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <p>
          <strong className="text-black">Role:</strong> Design, Illustration,
          Web
        </p>
        <p className="mb-4">
          <Link href="#">
            <a className="readmore">Visit Website</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
