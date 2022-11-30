/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import Head from 'next/head'
import Image from "next/image";
import { useState } from "react";
import 'react-modal-video/css/modal-video.css';
import GetStartedModal from "../components/elements/GetStartedModal";
import Layout from "../components/layout/Layout";
import img2 from '../public/assets/imgs/learn-to-speak-english-online.webp';
import user1 from '../public/assets/imgs/English-tutoring.webp';
import user2 from '../public/assets/imgs/Online-Enlglish-class.webp';
import user3 from '../public/assets/imgs/English-student.webp';
import user4 from '../public/assets/imgs/English-course.webp';
import newsletter from '../public/assets/imgs/english-tutor-online.webp';

function Home() {
    const [modalFormOpen, setModalFormOpen] = useState(false);

    return (
        <>
            <Head>
              <title>English Lessons Online | #1 Online English Course | English Horizons</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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
                                                <h3 className="text-heading-2 color-white mb-15"></h3>
                                                <p className="text-body-normal color-gray-300">In Person & Virtual Learning</p>
                                            </div>
                                            <div className="col-lg-3 col-sm-4 col-4">
                                                <h3 className="text-heading-2 color-white mb-15"></h3>
                                                <p className="text-body-normal color-gray-300">One on One Lessons & Group Classes</p>
                                            </div>
                                            <div className="col-lg-3 col-sm-4 col-4">
                                                <h3 className="text-heading-2 color-white mb-15"></h3>
                                                <p className="text-body-normal color-gray-300">IELTS & TOEFL Exam Prep</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <img className="img-responsive shape-2" width="526" height="595" alt="English classes" src="/assets/imgs/free-online-english-classes.webp" />
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
                                        <div className="mb-15 gray-circle-icon"><img src="/assets/icons/private-english-lessons.svg" alt="Zoom English Lessons" /></div>
                                        <h4 className="text-heading-4">Private Lessons</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Our certified native-English speaking teachers don’t just teach, they mentor you. Your Teacher will keep you motivated to achieve results fast.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15 gray-circle-icon"><img src="/assets/icons/group-english-lessons.svg" alt="Group English Lessons" /></div>
                                        <h4 className="text-heading-4">Group classes</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Join live sessions with small groups at your level to further practice English conversations in real-life scenarios and apply all you have learned.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15 gray-circle-icon"><img src="/assets/icons/learn-english.svg" alt="Online English lessons" /></div>
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
                                <div className="inner-image"><Image className="bdrd-16 img-responsive" src={img2} alt="learn to speak English online" /></div>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do-2">
                                <h3 className="text-heading-1 mt-30">Helping you achieve your goals</h3>
                                <div className="list-icons mt-50">
                                    <div className="item-icon none-bd hover-up"><span className="icon-left gray-circle-icon"><img src="/assets/icons/english-school.svg" alt="English School" /></span>
                                        <h4 className="text-heading-4">About English Horizions</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">English Horizons is an English Language Educational Institute that specializes in helping non-native English speakers achieve greater English fluency. We offer group classes, one on one sessions, and both in-person and virtual learning.</p>
                                    </div>
                                    <div className="item-icon none-bd hover-up"><span className="icon-left gray-circle-icon"><img src="/assets/icons/english-teacher.svg" alt="English Teacher Online" /></span>
                                        <h4 className="text-heading-4">Meet Ken Rogers</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Our founder, Ken Rogers is a native English speaker who has a passion for helping students from all over the world. He holds a bachelor's degree in Political Theory from the University of California San Diego, and he studied Law at Thomas Jefferson School of Law.</p>
                                    </div>
                                    <div className="item-icon none-bd hover-up"><span className="icon-left gray-circle-icon"><img src="/assets/icons/english-exam-prep.svg" alt="English exam prep" /></span>
                                        <h4 className="text-heading-4">IELTS and TOEFL Exam Prep</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Receive focused instruction on all four modules (listening, reading, writing, speaking)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box pt-100 pb-100 mt-100 mb-80 bg-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-30"><span className="tag-1 bg-9 color-gray-900">Satisfaction Guaranteed</span>
                                <h3 className="text-heading-1 mt-30">Reviews from our former students!</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">See what some of our students had to say about English Horizons</p>
                                <div className="mt-40">
                                  <button onClick={() => setModalFormOpen(true)} className="btn btn-default btn-white icon-arrow-right">Join Now!
                                  </button>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">“The biggest challenge for me a student is English. So, I registered for this English course to develop my language skills, namely listening and speaking in order to pass my IELTS exam"</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image src={user1} alt="English tutoring" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Former Student</h4>
                                                <p className="text-body-text-md">Passed the IELTS Exam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">“I am Sarah, a university student from Morocco and an Arabic language teacher. I got acquainted with our good professor Ken, who helped me a lot in progressing, understanding, and improving English pronunciation."</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image src={user2} alt="Online English class" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Sarah</h4>
                                                <p className="text-body-text-md">Former Student</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">“This course is second to none since it shows professionalism in everything being done throughout the whole class"</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image src={user3} alt="English Horizons" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Former Student</h4>
                                                <p className="text-body-text-md">English Student</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">“Mr ken is the best English teacher in the world”</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><Image src={user4} alt="Best online English course" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Former Student</h4>
                                                <p className="text-body-text-md">Passed the TOEFL Exam</p>
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
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">Enroll Now</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Start Learning Today</h4>
                                            <p className="text-body-text color-gray-500">Sign up below to start learning with English Horizons</p>


                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter"  placeholder="Enter you email .." /><button className="btn btn-send" aria-label="Email Signup" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <Image className="img-responsive img-newsletter" src={newsletter} alt="Free English Lessons" />
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
