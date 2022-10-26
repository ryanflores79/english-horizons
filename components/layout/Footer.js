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
                                <span className="color-gray-400 text-body-lead">© English Horizons {new Date().getFullYear()}</span>
                                <Link href="/page-terms">
                                    <a className="text-body-text color-gray-400 ml-50">Privacy policy</a>
                                </Link>
                                <Link href="/page-terms">
                                    <a className="text-body-text color-gray-400 ml-50">Cookies</a>
                                </Link>
                                <Link href="/page-terms">
                                    <a className="text-body-text color-gray-400 ml-50">Terms of service</a>
                                </Link>
                            </div>
                            <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://facebook.com">
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link>
                                    <Link href="https://twitter.com">
                                        <a className="icon-socials icon-twitter"></a>
                                    </Link>
                                    <Link href="https://www.instagram.com">
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>
                                    <Link href="https://www.linkedin.com">
                                        <a className="icon-socials icon-linkedin"></a>
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
