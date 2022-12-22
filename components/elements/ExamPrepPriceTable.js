import React, { useState } from "react";
import Link from "next/link";
const ExamPrepPriceTable = () => {
  const [isToggled, setToggled] = useState(false);

  const toggleTrueFalse = () => {
    setToggled(!isToggled);
  };
  return (
    <>
      <div className="container mt-20">
        <div className="text-center block-bill-2 mt-10">
          <span className="text-lg text-billed">
            Billed Monthly for 3 months
          </span>
          <label className="switch ml-20 mr-20">
            <input
              id="cb_billed_type"
              type="checkbox"
              name="billed_type"
              onClick={toggleTrueFalse}
            />
            <span className="slider round" />
          </label>
          <span className="text-lg text-billed">Pay in Full (5% discount)</span>
        </div>
        <div className="block-pricing block-pricing-2 mt-70">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="row">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <div className="box-pricing-item hover-up">
                    <div className="box-info-price">
                      <span className="text-heading-3 for-month display-month">
                        ${isToggled ? " 1795" : " 630"}
                      </span>
                      <span className="text-month for-month text-body-small color-gray-400 display-month">
                        /{isToggled ? "1 time" : " Month"}
                      </span>
                    </div>
                    <div className="line-bd-bottom">
                      <h4 className="text-heading-5 mb-15">TOEFL</h4>
                      <p className="text-body-small color-gray-400">
                        Exam Prep Course
                      </p>
                    </div>
                    <ul className="list-package-feature">
                      <li>3 month course</li>
                      <li>1.5 hour classes</li>
                      <li>3 times per week</li>
                      <li>4.5 hours per week</li>
                      {isToggled && <li>Save $95 by paying upfront</li>}
                    </ul>
                    <div>
                      <a
                        href={
                          isToggled
                            ? "https://square.link/u/cREjquaH"
                            : "https://square.link/u/N5KLwk5O"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-black text-body-lead icon-arrow-right-white"
                      >
                        Get Started
                      </a>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        href={
                          isToggled
                            ? "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-7GW35326N5221520VMOR2EEA"
                            : "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8ES92617VB237715FMOR2CSY"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-link text-center"
                      >
                        PayPal
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <div className="box-pricing-item hover-up">
                    <div className="box-info-price">
                      <span className="text-heading-3 for-month display-month">
                        ${isToggled ? " 1795" : " 630"}
                      </span>
                      <span className="text-month for-month text-body-small color-gray-400 display-month">
                        /{isToggled ? "1 time" : " Month"}
                      </span>
                    </div>
                    <div className="line-bd-bottom">
                      <h4 className="text-heading-5 mb-15">IELTS</h4>
                      <p className="text-body-small color-gray-400">
                        Exam Prep Course
                      </p>
                    </div>
                    <ul className="list-package-feature">
                      <li>3 month course</li>
                      <li>1.5 hour classes</li>
                      <li>3 times per week</li>
                      <li>4.5 hours per week</li>
                      {isToggled && <li>Save $95 by paying upfront</li>}
                    </ul>
                    <div>
                      <a
                        href={
                          isToggled
                            ? "https://square.link/u/KslBBWTw"
                            : "https://square.link/u/84z9GL8T"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-black text-body-lead icon-arrow-right-white"
                      >
                        Get Started
                      </a>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        href={
                          isToggled
                            ? "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-4TY98058C2988441FMOR2HSA"
                            : "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8V136556WB101080AMOR2IIA"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-link text-center"
                      >
                        PayPal
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

export default ExamPrepPriceTable;
