import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Project3() {
  return (
    <div className="row py-5 px-2 mobile-row-reverse mb-5">
      <div className="col-lg-6 mb-4 mb-lg-0">
        <div className="unset-img img-project">
          <Image
            src="/JournalBit/1.png"
            alt="journalbit project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/JournalBit/2.png"
            alt="journalbit project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/JournalBit/3.png"
            alt="journalbit project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/JournalBit/4.png"
            alt="journalbit project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
      </div>
      <div className="col-lg-5 h-100 jm-sticky-top ml-auto">
        <h3>JournalBit</h3>
        <p className="mb-4">
          The JournalBit app is a social media web app, where user can post and
          share the links of their fav articles to their audience, user like,
          comment, follow and follow other users and posts.
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
            User can share link and attach topic, and then it is shared as a
            metdata.
          </li>
          <li>Others users can like and unlike, comment to the posts.</li>
          <li>Users can follow and unfollow other people.</li>
          <li>User can see other peoples and folowers lists.</li>
          <li>User can filter posts by specific topics.</li>
          <li>Users can update and edit their profile.</li>
          <li>Users can delete their own posts.</li>
          <li>User can delete his own profile.</li>
          <li>Fully Mobile optimized</li>
        </ul>
        <p className="mb-2">
          <Link href="https://github.com/killcodeX/journalbit">
            <a target="_blank" className="readmore">
              Visit Github
            </a>
          </Link>
        </p>
        <p>
          <Link href="https://journalbit.netlify.app">
            <a target="_blank" className="readmore">
              Visit Website
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
