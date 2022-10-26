/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import 'react-modal-video/css/modal-video.css';
import GetStartedModal from "../components/elements/GetStartedModal";
import Layout from "../components/layout/Layout";

function Home() {
    const [modalFormOpen, setModalFormOpen] = useState(false);

    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="text-display-2 color-white">Gain Confidence in English</h1>
                                    <p className="text-body-lead-large color-white mt-30 pr-40">Online or In-Person English classes & teachers for private and group lessons</p>
                                    <div className="mt-40">
                                        <button onClick={() => setModalFormOpen(true)} className="btn btn-pink icon-arrow-right-white text-heading-6">Get Started
                                        </button>
                                    </div>
                                    <div className="mt-60">
                                        <div className="row">
                                            <div className="col-lg-3 col-sm-4 col-4">
                                                <h3 className="text-heading-2 color-white mb-15">5000+</h3>
                                                <p className="text-body-normal color-gray-300">Happy Clients</p>
                                            </div>
                                            <div className="col-lg-3 col-sm-4 col-4">
                                                <h3 className="text-heading-2 color-white mb-15">756+</h3>
                                                <p className="text-body-normal color-gray-300">Project Done</p>
                                            </div>
                                            <div className="col-lg-3 col-sm-4 col-4">
                                                <h3 className="text-heading-2 color-white mb-15">100%</h3>
                                                <p className="text-body-normal color-gray-300">Client Satisfaction</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <img className="img-responsive shape-2" alt="English Horizons" src="assets/imgs/page/homepage4/banner.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <h2 className="text-heading-1 color-gray-900 mb-30">How It Works</h2>
                                <p className="text-body-excerpt color-gray-600">Boost your career, travel, and much more. All our plans include lessons where you’ll learn skills and grow confidence in English.</p>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="English Horizons" /></div>
                                        <h4 className="text-heading-4">Private Lessons</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Our certified native-English speaking teachers don’t just teach, they mentor you. Your Teacher will keep you motivated to achieve results fast.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="English Horizons" /></div>
                                        <h4 className="text-heading-4">Group classes</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Join live sessions with small groups at your level to further practice English conversations in real-life scenarios and apply all you have learned.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="English Horizons" /></div>
                                        <h4 className="text-heading-4">Interactive tools</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Sharpen your learning with access to interactive lessons designed to help you achieve your personal goals. Make progress fast at home.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <div className="inner-image"><img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/img-2.png" alt="English Horizons" /></div>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do-2"><span className="tag-1 color-orange-900">What We Do, What You Get</span>
                                <h3 className="text-heading-1 mt-30">The intelligent way to manage projects</h3>
                                <div className="list-icons mt-50">
                                    <div className="item-icon none-bd hover-up"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-work.svg" alt="English Horizons" /></span>
                                        <h4 className="text-heading-4">Work smarter with powerful features</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                                    </div>
                                    <div className="item-icon none-bd hover-up"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-design.svg" alt="English Horizons" /></span>
                                        <h4 className="text-heading-4">Designed for teams of all sorts and sizes</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                                    </div>
                                    <div className="item-icon none-bd hover-up"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-advance.svg" alt="English Horizons" /></span>
                                        <h4 className="text-heading-4">Advanced analytics to grow your business</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box pt-100 pb-100 mt-100 mb-80 bg-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-30"><span className="tag-1 bg-9 color-gray-900">Built Exclusively For You</span>
                                <h3 className="text-heading-1 mt-30">Don’t take our word for it. See what our clients say.</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                                <div className="mt-40">
                                  <button onClick={() => setModalFormOpen(true)} className="btn btn-default btn-white icon-arrow-right">Learn More
                                  </button>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"No matter where you go, It's is the coolest, most happening thing around! Not able to tell you how happy I am with it. "</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-1.png" alt="English Horizons" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Jane Cooper</h4>
                                                <p className="text-body-text-md">Biffco Enterprises Ltd.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. We can't understand how we've been living without it. I couldn't have asked for more than this."</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-2.png" alt="English Horizons" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Wade Warren</h4>
                                                <p className="text-body-text-md">Krusty Krab</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business. Needless to say we are extremely satisfied with the results. "</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-3.png" alt="English Horizons" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Leslie Alexander</h4>
                                                <p className="text-body-text-md">Biffco Enterprises Ltd.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"It's is both attractive and highly adaptable. It's exactly what I've been looking for. Definitely worth the investment."</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-4.png" alt="English Horizons" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Jenny Wilson</h4>
                                                <p className="text-body-text-md">Soylent Corp</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-6 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe to our newsletter</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms"><a>Terms &amp; Conditions
                                            </a></Link>

                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><img src="/assets/imgs/template/chart.png" alt="English Horizons" /></div><img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="English Horizons" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <GetStartedModal isOpen={modalFormOpen} toggle={() => setModalFormOpen(false)} />
            </Layout>

        </>
    )
}

export default Home;
