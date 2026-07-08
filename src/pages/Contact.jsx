import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {

  return (
    <>

      <section className="bg-slate-950 text-white py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>


          <p className="text-gray-400 mt-4">
            Have questions about our dispatch services?
            Get in touch with our team today.
          </p>

        </div>


        <div className="max-w-3xl mx-auto mt-12">

          <ContactForm />

        </div>


      </section>
      <Footer/>
    </>
  );
}

export default Contact;