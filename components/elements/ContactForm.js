import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hear, setHear] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const reset = () => {
    setName("");
    setPhone("");
    setMessage("");
    setEmail("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      company,
      phone,
      hear,
      email,
      message,
    };
    await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });
    toast("Your message was successfully sent.");
    setTimeout(reset, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bdrd-18 box-gray-100 icon-wave">
        <div className="row">
          <div className="col-lg-12 mb-60">
            <span className="text-body-capitalized text-uppercase">
              Contact us
            </span>
            <h2 className="text-heading-3 color-gray-900 mt-10">
              Have a question?
            </h2>
            <p className="text-body-text color-gray-600 mt-20">
              Let us know what you&apos;re thinking
              <br className="d-lg-block d-none" /> and we will reply quickly.
            </p>
          </div>
          <div className="col-lg-4 mb-40">
            <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
              English Horizons LLC
            </h4>
            <p className="text-body-text color-gray-600">The Woodlands, TX</p>
            <p className="text-body-text color-gray-600">
              <a href="tel:+19362355259">(936) 235-5259</a>
            </p>
            <p className="text-body-text color-gray-600">
              <a href="mailto:myenglishhorizons@gmail.com">
                myenglishhorizons@gmail.com
              </a>
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company (optional)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="tel"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <select
                    className="form-select"
                    defaultValue=""
                    onChange={(e) => setHear(e.target.value)}
                    aria-label="How did you hear about us?"
                  >
                    <option value="">How did you hear about us?</option>
                    <option value="Google search">Google search</option>
                    <option value="word of mouth">word of mouth</option>
                    <option value="online ad">online ad</option>
                    <option value="in-person ad">in-person ad</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-12 mt-15">
                <button
                  disabled={!(message && name && email && phone)}
                  className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
}
export default ContactForm;
