/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="footer mt-50">
        <div className="container">
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-md-6">
                <span className="color-gray-400 text-body-lead">
                  &copy; {new Date().getFullYear()} English Horizons LLC
                </span>
                <Link href="/">
                  <a className="text-body-text color-gray-400 ml-50">Home</a>
                </Link>
                <Link href="/contact">
                  <a className="text-body-text color-gray-400 ml-50">
                    Contact Us
                  </a>
                </Link>
                <Link
                  href="https://paypal.me/EnglishHorizons"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a className="text-body-text color-gray-400 ml-50">
                    Paypal
                  </a>
                </Link>
              </div>
              <div className="col-md-6 text-center text-lg-end text-md-end">
                <div className="footer-social">
                  <Link href="https://www.facebook.com/englishhorizonsusa">
                    <a className="icon-socials icon-facebook"></a>
                  </Link>
                  <Link href="https://www.instagram.com/englishhorizonsusa/">
                    <a className="icon-socials icon-instagram"></a>
                  </Link>
                  <Link href="https://www.linkedin.com/company/english-horizons/">
                    <a className="icon-socials icon-linkedin"></a>
                  </Link>
                  <Link href="https://wa.me/message/SJ657GSUCKE7H1">
                    <a className="icon-socials icon-whatsapp"></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
