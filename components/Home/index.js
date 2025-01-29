import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { SiApacherocketmq} from "react-icons/si";
const LottieAnimation = dynamic(() => import("./lottieAnimations"), {
  ssr: false,
});

export default function HomeSection() {

  useEffect(() => {
    //Type-writer code
    (function () {
      const text = ["developer", "blogger", "designer"];
      let count = 0;
      let index = 0;
      let currentText = " ";
      let letter = " ";

      (function type() {
        if (count === text.length) {
          count = 0;
        }
        currentText = text[count];
        letter = currentText.slice(0, ++index);

        document.querySelector(".typing").textContent = letter;
        if (letter.length === currentText.length) {
          count++;
          index = 0;
        }
        setTimeout(type, 300);
      })();
    })();
  }, []);

  return (
    <section
      style={{ height: "100vh" }}
      className="section py-5 hero-wrap"
      id="home-section"
    >
      <div className="overlay"></div>
      <div className="container">
        <div
          style={{ height: "700px" }}
          className="row no-gutters justify-content-center align-items-center"
        >
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <div className="text text-center" data-aos="fade-up">
              <span className="subheading">Hey! I am</span>
              <h1 className="heading">Aaquib Ahmed</h1>
              <div className="intro">
                <h4>I am a</h4>
                <h4 className="typing">hi</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <div className="loftiplayer" data-aos="fade-up">
              <LottieAnimation/>
            </div>
          </div>
        </div>
      </div>
      <div className="mouse">
        <div className="mouse-icon">
          <div className="mouse-wheel">
            <SiApacherocketmq/>
          </div>
        </div>
      </div>
    </section>
  );
}
