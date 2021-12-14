import React from "react";
import { FiBookOpen } from "react-icons/fi";

export default function Education() {
  const expTotal = [
    {
      id: 1,
      year: "2014-2015",
      title: "Bachelor of Science in Computer Science",
      name: "Cambridge University",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: 2,
      year: "2014-2015",
      title: "Computer Processing Systems/Computer Software",
      name: "Cambridge University",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: 3,
      year: "2014-2015",
      title: "Diploma in Computer",
      name: "Cambridge University",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
  ];

  return (
    <>
      {expTotal.map((item) => {
        return (
          <div className="row resume-wrap d-flex" key={item.id} data-aos='fade-up'>
            <div className="col-sm-1">
              <div className="icon d-flex align-items-center justify-content-center">
                <FiBookOpen />
              </div>
            </div>
            <div className="col-sm-11">
              <div className="resume-text">
                <span className="date">{item.year}</span>
                <h2>{item.title}</h2>
                <span className="resume-title">{item.name}</span>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
