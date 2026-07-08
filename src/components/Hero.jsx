import React from "react";
import { motion } from "framer-motion";
import truckBg from "../assets/truck.jpg";

function Hero() {
  return (
    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${truckBg})` }}
    >
      {/* Premium dark gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-950/90"></div>

      {/* Subtle background glow effect for that high-end tech aesthetic */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-red-600/10 blur-[120px] pointer-events-none rounded-full"></div>

      {/* Content Container */}
      <motion.div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* Modern mini-badge above main heading */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-orange-400 mb-6 animate-pulse">
          ⚡ Next-Gen Logistics Platform
        </div>

        {/* Improved Typography Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-sans tracking-tight leading-none text-white drop-shadow-md"
        >
          Smart Truck Dispatch <br />
          <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent italic font-black">
            Made Simple
          </span>
        </motion.h1>

        {/* Enhanced Subtitle Text readability */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-300 mt-6 text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed"
        >
          Manage drivers, loads, routes, and earnings in one powerful SaaS dashboard.
          Built to scale modern logistics companies with zero friction.
        </motion.p>

        {/* Re-designed high-end buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white px-8 py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-red-900/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Get Started Free
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border border-slate-700 bg-slate-900/40 backdrop-blur-sm text-slate-200 hover:text-white px-8 py-4 rounded-xl font-semibold tracking-wide hover:bg-slate-800/80 hover:border-slate-500 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}

export default Hero;