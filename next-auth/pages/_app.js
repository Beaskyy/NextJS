import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../components/Navbar.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  <Navbar />;
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
