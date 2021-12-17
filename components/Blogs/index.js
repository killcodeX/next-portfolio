import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      image: "/blog1.png",
      title: "How to select only one element of a map() in React",
      link: "https://www.devcript.com/how-to-select-only-one-element-of-a-map-in-react/",
      published: "Nov 21, 2020",
      desc: "Making complex and smooth transition UI’s can be done by React with no sweat....",
    },
    {
      id: 2,
      image: "/blog2.png",
      title: "How does JavaScript works ?",
      link: "https://www.devcript.com/how-does-javascript-works/",
      published: "Nov 29, 2020",
      desc: "According to Developer Survey Results 2019, JavaScript came out as the programmer’s first choice among all the programming languages.....",
    },
    {
      id: 3,
      image: "/blog3.png",
      title: "How Does React Js works | Detail Explanation on Virtual DOM",
      link: "https://www.devcript.com/how-does-react-works-detail-explanation-on-virtual-dom/",
      published: "Dec 11, 2020",
      desc: "React Js, is one of the most popular FrontEnd libraries with more than 160K stars on Github....",
    },
    {
      id: 4,
      image: "/blog4.png",
      title: "Difference between var vs let vs const in JavaScript | TDZ",
      link: "https://www.devcript.com/var-vs-let-vs-const-in-javascript-tdz/",
      published: "Dec 20, 2020",
      desc: "Making complex and smooth transition UI’s can be done by React with no sweat....",
    },
  ];
  return (
    <section className="section heading-section" id="blog-section">
      <h2 className="mb-4">Blogs</h2>
      <div className="container">
        <div className="row pt-5">
          {blogs.map((item) => {
            return (
              <div className="col-md-3 col-sm-12" key={item.id}>
                <Link href={item.link}>
                  <a target="_blank">
                    <div className="unset-img img-blog">
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        className="custom-img"
                      />
                    </div>
                  </a>
                </Link>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <span className="mr-2">{item.published}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
