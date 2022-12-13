import '../public/assets/css/app.css'
import "../public/assets/css/swiper-custom.css";
import React, { useEffect, useState } from "react";
import Preloader from '../components/elements/Preloader';
import Script from 'next/script'

import 'react-modal-video/css/modal-video.css';
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    /*
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    */
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <>
      <Script strategy="beforeInteractive" src="https://www.paypal.com/sdk/js?client-id=AWMXc5D6QQkOEeN2FGCMBGSsraqL6kJMWCnJHPv-MT3Y3lM9mIoTQ4SX6hLnQhAnkGVzPKsvzolzGUY1&vault=true&intent=subscription" data-sdk-integration-source="button-factory" />
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <Preloader />
      )}

    </>
  )
}

export default MyApp
