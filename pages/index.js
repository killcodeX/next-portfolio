import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import Header from "../components/Header/";
import HomeSection from "../components/Home";
import About from "../components/About";
import Skills from "../components/skills";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 800,
      easing: "slide",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Aaquib Ahmed | Software Engineer</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="css/A.open-iconic-bootstrap.min.css+animate.css+owl.carousel.min.css+owl.theme.default.min.css+magnific-popup.css+aos.css+ionicons.min.css+flaticon.css+icomoon.css+style.css,Mcc.03G1SaxbUZ.css.pagespeed.cf.JAwvIMOowk.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <HomeSection />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Blogs />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
