import React from "react";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import Moreinfo from "../components/Moreinfo";

function Services() {
  return (
    <>
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto mt-12">
          <ServiceCard />
          <Moreinfo/>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Services;