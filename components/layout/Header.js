/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import GetStartedModal from "../elements/GetStartedModal";
import logoImg from '../../public/assets/imgs/template/logo.png'

const Header = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0)
    const [modalFormOpen, setModalFormOpen] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link href="/">
                                    <a className="d-flex">
                                        {headerStyle ? <Image alt="English Horizons" src={logoImg} /> : <img alt="English Horizons" src="/assets/imgs/template/logo.png" />}

                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                <button onClick={() => setModalFormOpen(true)} className="btn btn-default hover-up icon-arrow-right">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <GetStartedModal isOpen={modalFormOpen} toggle={() => setModalFormOpen(false)} />
        </>
    );
};

export default Header;
