import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Project4() {
  return (
    <div className="row py-5 px-2 mb-5 bg-light">
      <div className="col-lg-5 h-100 jm-sticky-top ml-auto">
        <h3>Code Store</h3>
        <p className="mb-4">
          The Code Store app is a productive web app, where users can save their
          useful or fav code snippet, browse them, edit them or delete them, it
          comes with extra feature like night mode, language filter and search
          bar.
        </p>
        <h5>Tech Stack</h5>
        <ul className="stacks">
          <li>
            <strong className="text-black">Frontned:</strong> Reactjs
          </li>
          <li>
            <strong className="text-black">Styling:</strong> React-Bootstrap,
            Styled-components, Ant Design and CSS
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
            User can Add new code snippet with title, little description,
            language and code.
          </li>
          <li>Display page with syntax higlighter for better view.</li>
          <li>Edit page if user wants to update the previous snippet</li>
          <li>Delete snippet</li>
          <li>Night mode</li>
          <li>Search bar with autosuggest functionality</li>
          <li>You can filter by language the snippets</li>
          <li>
            If you find any desired language is not present in predefined
            language list, you can add it
          </li>
          <li>Fully Mobile optimized</li>
        </ul>
        <p className="mb-2">
          <Link href="https://github.com/killcodeX/code-store">
            <a target="_blank" className="readmore">
              Visit Github
            </a>
          </Link>
        </p>
        <p>
          <Link href="https://code-snippet-store.netlify.app">
            <a target="_blank" className="readmore">
              Visit Website
            </a>
          </Link>
        </p>
      </div>
      <div className="col-lg-6 mb-4 mb-lg-0">
        <div className="unset-img img-project">
          <Image
            src="/CodeSnippet/1.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/CodeSnippet/2.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/CodeSnippet/3.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/CodeSnippet/4.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/CodeSnippet/5.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/CodeSnippet/6.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/CodeSnippet/7.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="unset-img img-project">
          <Image
            src="/CodeSnippet/8.png"
            alt="hotelin project screenshots"
            layout="fill"
            className="custom-img"
          />
        </div>
      </div>
    </div>
  );
}
