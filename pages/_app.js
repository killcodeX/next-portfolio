import "../styles/globals.css";
import '../styles/header.css';
import '../styles/sidebar.css';
import '../styles/home.css';
import '../styles/about.css';
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
