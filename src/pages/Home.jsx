import Footer from "../components/Footer";
import React from "react";

import Hero from "../components/Hero";
import TrustedBy from "../components/Trustedby";
import WhyChooseUs from "../components/Whychooseus";
import ServiceCard from "../components/ServiceCard";
import Moreinfo from "../components/Moreinfo";
import Testimonial from "../components/Testimonial";
import ContactForm from "../components/ContactForm";


function Home() {
  return (
    <>
      <Hero />

      <TrustedBy />

      <WhyChooseUs />

      <ServiceCard />

      <Moreinfo />


      {/* Testimonials Section */}
      <div className="bg-slate-900 py-20 px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 mt-3">
            Trusted by dispatchers and carriers across the US
          </p>

        </div>


        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <Testimonial
            name="John Miller"
            role="Fleet Owner"
            message="DispatchFlow helped me increase my profits and reduce empty miles significantly."
            avatar="https://i.pravatar.cc/100?img=1"
          />


          <Testimonial
            name="Sarah Khan"
            role="Logistics Manager"
            message="Smooth operations and excellent communication. Highly recommended!"
            avatar="https://i.pravatar.cc/100?img=2"
          />


          <Testimonial
            name="David Smith"
            role="Truck Dispatcher"
            message="The platform is fast, reliable, and very easy to manage daily loads."
            avatar="https://i.pravatar.cc/100?img=3"
          />

        </div>

      </div>


      <ContactForm />
   
    </>
  );
}


export default Home;
