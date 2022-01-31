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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        {/* primary */}
        <meta name="author" content="Aaquib Ahmed, aaquib5076@gmail.com" />
        <meta name="title" content="Aaquib Ahmed | Software Engineer"/>
        <meta name="description" content="Aaquib Ahmed: A passionate self-taught frontEnd web developer, a wannapreneur, tech enthusiast, open source contributor (https://github.com/killcodeX) , tech blogger (https://www.devcript.com), writer, motivator and mentor for those who want to learn programming, development and recent technologies. Being an active part of many communities."/>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://aaquib.netlify.app/" />
        <meta property="og:title" content="Aaquib Ahmed | Software Engineer"/>
        <meta property="og:description" content="Aaquib Ahmed: A passionate self-taught frontEnd web developer, a wannapreneur, tech enthusiast, open source contributor (https://github.com/killcodeX) , tech blogger (https://www.devcript.com), writer, motivator and mentor for those who want to learn programming, development and recent technologies. Being an active part of many communities."/>
        <meta property="og:image" content="https://raw.githubusercontent.com/killcodeX/next-portfolio/main/public/metaimage.png"/>
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://aaquib.netlify.app/"/>
        <meta property="twitter:title" content="Aaquib Ahmed | Software Engineer"/>
        <meta property="twitter:description" content="Aaquib Ahmed: A passionate self-taught frontEnd web developer, a wannapreneur, tech enthusiast, open source contributor (https://github.com/killcodeX) , tech blogger (https://www.devcript.com), writer, motivator and mentor for those who want to learn programming, development and recent technologies. Being an active part of many communities."/>
        <meta property="twitter:image" content="https://raw.githubusercontent.com/killcodeX/next-portfolio/main/public/metaimage.png"/>
        <link rel="icon" href="/fav2.png" />
        <title>Aaquib Ahmed | Software Engineer</title>
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
