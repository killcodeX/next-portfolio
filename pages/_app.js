import "aos/dist/aos.css";
import "../styles/globals.css";
import "../styles/header.css";
import "../styles/sidebar.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/skills.css";
import "../styles/resume.css";
import "../styles/projects.css";
import "../styles/blogs.css";
import "../styles/contacts.css";
import "../styles/footer.css";
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default MyApp;
