import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Products() {
  return (
    <section className="section heading-section" id="project-section">
      <h2 className="mb-4">Projects</h2>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="unset-img img-project">
              <Image
                src={
                  "https://images.pexels.com/photos/9319401/pexels-photo-9319401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                }
                alt="text"
                layout="fill"
                className="custom-img"
              />
            </div>
            <div className="unset-img img-project">
              <Image
                src={
                  "https://images.pexels.com/photos/9319401/pexels-photo-9319401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                }
                alt="text"
                layout="fill"
                className="custom-img"
              />
            </div>
          </div>
          <div className="col-lg-5 h-100 jm-sticky-top ml-auto">
            <h3>Project Title One</h3>
            <p className="mb-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p>
              <strong className="text-black">Role:</strong> Design,
              Illustration, Web
            </p>
            <p className="mb-4">
              <Link href="#">
                <a className="readmore">Visit Website</a>
              </Link>
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-5 h-100 jm-sticky-top ml-auto">
            <h3>Project Title One</h3>
            <p className="mb-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p>
              <strong className="text-black">Role:</strong> Design,
              Illustration, Web
            </p>
            <p className="mb-4">
              <Link href="#">
                <a className="readmore">Visit Website</a>
              </Link>
            </p>
          </div>
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="unset-img img-project">
              <Image
                src={
                  "https://images.pexels.com/photos/9319401/pexels-photo-9319401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                }
                alt="text"
                layout="fill"
                className="custom-img"
              />
            </div>
            <div className="unset-img img-project">
              <Image
                src={
                  "https://images.pexels.com/photos/9319401/pexels-photo-9319401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                }
                alt="text"
                layout="fill"
                className="custom-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
