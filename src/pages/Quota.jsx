import React from "react";
import QuoteForm from "../components/QuoteForm";


function Quote() {

  return (
    <section className="bg-slate-950 min-h-screen py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-black text-white">
            Get Your Free Dispatch Quote
          </h1>

          <p className="text-gray-400 mt-4">
            Tell us about your fleet and our dispatch team will
            help you find the best solution for your trucking business.
          </p>

        </div>


        <QuoteForm />

      </div>

    </section>
  );
}


export default Quote;