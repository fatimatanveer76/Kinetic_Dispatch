import React from "react";
import truckBg from "../assets/truck2.jpg";

function Partner() {
  return (
    // 1. Changed min-h-screen to min-h-[120vh] just to give it extra room to showcase the scroll effect
    <section className="relative bg-slate-950 min-h-[120vh] py-32 px-6 text-white overflow-hidden flex items-center justify-center">
      
      {/* Background Image - Added 'bg-fixed' here */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${truckBg})` }}
      />
    
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-xl text-center">

        <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
          Become A <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Kinetic</span> Partner
        </h1>

        <p className="text-slate-300 mt-4 text-base md:text-lg">
          Join our network of professional drivers and start receiving better freight opportunities.
        </p>

        {/* Form Container */}
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="mt-10 bg-slate-900/90 backdrop-blur-md p-8 rounded-2xl space-y-5 border border-slate-800 shadow-2xl text-left"
        >
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Truck Type</label>
            <input
              type="text"
              placeholder="Dry Van, Reefer, Flatbed, etc."
              className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">MC Number</label>
            <input
              type="text"
              placeholder="MC# 123456"
              className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 py-4 rounded-xl font-bold tracking-wide uppercase shadow-lg shadow-red-900/30 transition-transform active:scale-[0.98] mt-4"
          >
            Submit Application
          </button>
        </form>

      </div>
    </section>
  );
}

export default Partner;