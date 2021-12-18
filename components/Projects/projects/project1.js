import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Project1() {
  return (
    <div className="row mobile-row-reverse mb-5">
      <div className="col-lg-6 mb-4 mb-lg-0">
        <div className="unset-img img-project">
          <Image
            src="/Hotelin/1.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/Hotelin/2.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/Hotelin/3.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/Hotelin/4.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/Hotelin/5.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/Hotelin/6.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
      </div>
      <div className="col-lg-5 h-100 jm-sticky-top ml-auto">
        <h3>Hotel In</h3>
        <p className="mb-4">
          The Hotel In app is a hotel booking web app, where users can browse
          different hotels by city, filter them according to price or rating,
          view single hotels, and book them.
        </p>
        <h5>Tech Stack</h5>
        <ul className="stacks">
          <li>
            <strong className="text-black">Frontned:</strong> Reactjs
          </li>
          <li>
            <strong className="text-black">Styling:</strong> Styled Components,
            Ant Design and CSS
          </li>
          <li>
            <strong className="text-black">Payment Gateway:</strong> Razorpay
          </li>
          <li>
            <strong className="text-black">
              Authentication and Authorisation:
            </strong>{" "}
            JWT and ByCryptJS
          </li>
          <li>
            <strong className="text-black">Backend: </strong> Node and Express
            js
          </li>
          <li>
            <strong className="text-black">Database:</strong> MongoDB
          </li>
        </ul>
        <h5>Overall Functionlity</h5>
        <ul>
          <li>
            Main Landing Listing Page with search form, Descriptions, Cities and
            Few hotels
          </li>
          <li>Viewing Hotels by search or selecting cities</li>
          <li>Filtering Hotels by Price or rating parameter</li>
          <li>Viewing single hotel with full description and booking hotel</li>
          <li>Getting Reservation details fot booking hotel</li>
          <li>
            User can only booked hotel or see their history if ony they are
            logged in !!
          </li>
          <li>Booking Hotel through Razorpay test mode payment simulation</li>
          <li>
            Going to my booking page to see history of your booking, all
            upcoming, cancelled or completed trips.
          </li>
        </ul>
        <p className="mb-2">
          <Link href="https://github.com/killcodeX/mern-hotelin">
            <a target='_blank' className="readmore">Visit Github</a>
          </Link>
        </p>
        <p>
          <Link href="https://hotelin.netlify.app">
            <a target='_blank' className="readmore">Visit Website</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
