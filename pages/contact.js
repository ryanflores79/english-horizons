import Layout from "../components/layout/Layout";
import ContactForm from "../components/elements/ContactForm";

function Contact() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-breadcrums">
            <div className="container text-center">
              <h1 className="text-heading-2 color-gray-1000 mb-20">
                Contact Us
              </h1>
              <p className="text-body-text color-gray-500">
                Use the form below to contact us
                <br className="d-lg-block d-none" />
                any time 24 hours a day.
              </p>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container mb-20 mt-140">
            <ContactForm />
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Contact;
