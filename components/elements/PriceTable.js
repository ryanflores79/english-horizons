import React, { useState } from "react";
import Link from "next/link";
const PriceTable = () => {
  return (
    <>
      <div className="container mt-20">
        <div className="block-pricing block-pricing-2 mt-70">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <div className="box-pricing-item hover-up">
                    <div className="box-info-price">
                      <span className="text-heading-3 for-month display-month">
                        $360
                      </span>
                      <span className="text-month for-month text-body-small color-gray-400 display-month">
                        /Month
                      </span>
                    </div>
                    <div className="line-bd-bottom">
                      <h4 className="text-heading-5 mb-15">Premium</h4>
                      <p className="text-body-small color-gray-400">
                        Super charge your English
                      </p>
                    </div>
                    <ul className="list-package-feature">
                      <li>12 hours/month</li>
                      <li>1-hour class</li>
                      <li>3 times per week</li>
                      <li>Beginner, Intermediate or Advanced</li>
                    </ul>
                    <div>
                      <a
                        href="https://square.link/u/t86rM6Ye"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-black text-body-lead icon-arrow-right-white"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <div className="box-pricing-item active hover-up">
                    <div className="box-info-price">
                      <span className="text-heading-3 for-month display-month">
                        $240
                      </span>
                      <span className="text-month for-month text-body-small color-gray-400 display-month">
                        /Month
                      </span>
                    </div>
                    <div className="line-bd-bottom">
                      <h4 className="text-heading-5 mb-15">Standard</h4>
                      <p className="text-body-small color-gray-400">
                        Our most popular package
                      </p>
                    </div>
                    <ul className="list-package-feature">
                      <li>8 hours/month</li>
                      <li>1-hour class</li>
                      <li>2 times per week</li>
                      <li>Beginner, Intermediate or Advanced</li>
                    </ul>
                    <div>
                      <a
                        href="https://square.link/u/ehpSDUO6"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-black text-body-lead icon-arrow-right-white"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="box-pricing-item hover-up">
                    <div className="box-info-price">
                      <span className="text-heading-3 for-month display-month">
                        $120
                      </span>
                      <span className="text-month for-month text-body-small color-gray-400 display-month">
                        /Month
                      </span>
                    </div>
                    <div className="line-bd-bottom">
                      <h4 className="text-heading-5 mb-15">Essentials</h4>
                      <p className="text-body-small color-gray-400">
                        Our most affordable package
                      </p>
                    </div>
                    <ul className="list-package-feature">
                      <li>4 hours/month</li>
                      <li>1-hour class</li>
                      <li>1 time per week</li>
                      <li>Beginner, Intermediate or Advanced</li>
                    </ul>
                    <div>
                      <a
                        href="https://square.link/u/dkwfdW8Z"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-black text-body-lead icon-arrow-right-white"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".4s"
                >
                  <div className="box-pricing-item hover-up">
                    <div className="box-info-price">
                      <span className="text-heading-3 for-month display-month">
                        $37
                      </span>
                      <span className="text-month for-month text-body-small color-gray-400 display-month">
                        /Hour
                      </span>
                    </div>
                    <div className="line-bd-bottom">
                      <h4 className="text-heading-5 mb-15">A La Carte</h4>
                      <p className="text-body-small color-gray-400">
                        Try an English class for 1 hour
                      </p>
                    </div>
                    <ul className="list-package-feature">
                      <li>Try an English class.</li>
                      <li>1 Hour</li>
                      <li>No commitment</li>
                      <li>Beginner, Intermediate or Advanced</li>
                    </ul>
                    <div>
                      <a
                        href="https://square.link/u/NKiwQUCa"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-black text-body-lead icon-arrow-right-white"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceTable;
