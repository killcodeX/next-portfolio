import React from "react";
import { FiSend } from "react-icons/fi";

export default function Experience() {
  const expTotal = [
    {
      id: 3,
      year: "2023-2024",
      title: "Software Engineer",
      name: "Impact Analytics",
      desc: [
        "Led the development of a Design System UI, creating 20+ complex, reusable components to ensure consistent UI across 5+ product teams. This improved UX consistency and component scalability, significantly enhancing development efficiency and collaboration.",
        "Utilized Storybook for comprehensive component documentation and integrated CodeSandbox to provide interactive examples, enabling teams to explore component props usage and functionality firsthand.",
        "Built a plug-and-play demo app using a JSON-based approach, enabling rapid product demos with a single codebase for 22+ products, streamlining client acquisition."
      ],
    },
    {
      id: 3,
      year: "2021-2023",
      title: "Software Developer Engineer 1",
      name: "UpScalio",
      desc: [
        "Developed the internal B2B app, to track product development, current status, and to provide a centralized view of the company's products.",
        "Built and created Magento based ecommerce website for different products, where you can view product, add to cart and pay using popular payment portal.",
      ],
    },
    {
      id: 2,
      year: "2020-2021",
      title: "Software Developer Engineer",
      name: "Gobony",
      desc: [
        "Developed the B2C app, helping in building a million user salon booking app",
        "Built and created new features for the dashboard likeappointment booking, analytics graph, setting up admin roles, etc, thus single-handedly completing the app to 80%.",
        "Improvised the performance of the app by removing minor bugs and composing web responsive components thus improving the User Experience and increasing efficiency by more than 40%.",
      ],
    },
    {
      id: 1,
      year: "2019-2020",
      title: "Front End Developer",
      name: "Skimbox",
      desc: [
        "Created a Hotel Booking app and implemented all the given features end-to-end and shipped it to the production.",
        "Formulated and designed various attractive landing pages for SaaS companies using modern UI standards. ",
      ],
    },
  ];

  return (
    <>
      {expTotal.map((item) => {
        return (
          <div
            className="row resume-wrap d-flex"
            key={item.id}
            data-aos="fade-up"
          >
            <div className="col-sm-1">
              <div className="icon d-flex align-items-center justify-content-center">
                <FiSend />
              </div>
            </div>
            <div className="col-sm-11">
              <div className="resume-text">
                <span className="date">{item.year}</span>
                <h2>{item.title}</h2>
                <span className="resume-title">{item.name}</span>
                <ul>
                  {item.desc.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
