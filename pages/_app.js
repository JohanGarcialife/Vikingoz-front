import React, { useEffect } from "react";
import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/global.scss"
import "aos/dist/aos.css";
import AOS from "aos";


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      mirror: true,
      offset: 150,
      duration: 1000,
    });
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);




  return <Component {...pageProps} />
}

export default MyApp
