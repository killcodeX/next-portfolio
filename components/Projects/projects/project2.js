import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Project2() {
  return (
    <div className="row py-5 px-2 mb-5 bg-light">
      <div className="col-lg-5 h-100 jm-sticky-top ml-auto">
        <h3>House Garden</h3>
        <p className="mb-4">
          The House Garden app is a ecommerce app for plants, where users can
          browse different types of plants and things related to nursery, filter
          them according to price or rating or types, view products, add to
          wishlist or to cart, and finally enter address and pay the amount, you
          can also check order history too.
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
            Main Page with all the product listed, with different types of filter
            like categories, price limit and rating
          </li>
          <li>
            A SearchBar with auto suggestion and sorting feature, also user if
            logged in can add product to wish list.
          </li>
          <li>
            Single page for product with their details, user can select quantity
            and add to cart
          </li>
          <li>A wishlist page where user can see its favourite products,</li>
          <li>
            Cart page with all products displayed, where user can remove product
            he didnt wish to order and a price summary section, user can add the
            address and then pay using razorpay payment gateway
          </li>
          <li>
            After ordering, user can check its history and can cancel the
            current orders.
          </li>
        </ul>
        <p className="mb-2">
          <Link href="https://github.com/killcodeX/HouseGraden">
            <a target="_blank" className="readmore">
              Visit Github
            </a>
          </Link>
        </p>
        <p>
          <Link href="https://housegarden1.netlify.app">
            <a target="_blank" className="readmore">
              Visit Website
            </a>
          </Link>
        </p>
      </div>
      <div className="col-lg-6 mb-4 mb-lg-0">
        <div className="unset-img img-project">
          <Image
            src="/HouseGarden/1.png"
            alt="house garden project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/HouseGarden/2.png"
            alt="house garden project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/HouseGarden/3.png"
            alt="house garden project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/HouseGarden/4.png"
            alt="house garden project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/HouseGarden/5.png"
            alt="house garden project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/HouseGarden/6.png"
            alt="house garden project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/HouseGarden/7.png"
            alt="house garden project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
      </div>
    </div>
  );
}
