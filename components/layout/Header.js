/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logoImg from "../../public/assets/imgs/template/logo.png";
import SiteTranslator from "../elements/SiteTranslator";

const Header = ({ handleOpen, headerStyle }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link href="/">
                  <a className="d-flex">
                    {headerStyle ? (
                      <Image alt="English Horizons" src={logoImg} />
                    ) : (
                      <Image alt="English Horizons" src={logoImg} />
                    )}
                  </a>
                </Link>
              </div>
            </div>
            <SiteTranslator id="google-translator-1" />
            <div className="header-right">
              <div className="block-signin">
                <a
                  href="https://school.english-horizons.com/login/signup.php"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-default hover-up icon-arrow-right"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
