import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";

function Testimonial({ name, role, message, avatar, index }) {
  // Staggered entry animation values based on index
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="relative bg-gradient-to-br from-slate-900 to-slate-950 border-slate-900 text-slate-300 p-8 rounded-2xl transition-all duration-300 hover:border-orange-500 group overflow-hidden flex flex-col justify-between h-full shadow-xl"
    >
      {/* Sleek Top Accent Line on Hover */}
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-300 group-hover:w-full"></div>

      {/* Background Icon Detail */}
      <div className="absolute top-6 right-6 text-slate-900 group-hover:text-orange-500/10 transition-colors duration-300 pointer-events-none">
        <FaQuoteRight size={24} />
      </div>

      <div>
        {/* User Metadata Profile Row */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="relative">
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-none object-cover border border-slate-800 group-hover:border-orange-500 transition-colors duration-300"
            />
            {/* Square Modern Live Network Verification Indicator */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-slate-950 rounded-none"></span>
          </div>

          <div>
            <h4 className="text-white font-black tracking-tight text-sm uppercase group-hover:text-orange-400 transition-colors duration-300">
              {name}
            </h4>
            <p className="text-slate-500 text-[10px] font-black mt-0.5 tracking-wider uppercase">
              {role}
            </p>
          </div>
        </div>

        {/* Review Text Body */}
        <p className="text-slate-400 leading-relaxed text-xs font-medium pl-3 border-l border-slate-800 group-hover:border-orange-500/50 transition-colors duration-300">
          “{message}”
        </p>
      </div>

      {/* Star Rating Section (Pure Static Icons - No Array Map) */}
      <div className="mt-8 pt-4 border-t border-slate-900 flex justify-between items-center relative z-10">
        <div className="flex gap-1 items-center">
          <FaStar className="text-orange-500 text-[10px]" />
          <FaStar className="text-orange-500 text-[10px]" />
          <FaStar className="text-orange-500 text-[10px]" />
          <FaStar className="text-orange-500 text-[10px]" />
          <FaStar className="text-orange-500 text-[10px]" />
        </div>
        
        <span className="text-[9px] font-mono font-black text-slate-600 tracking-widest uppercase">
          VERIFIED_CARRIER
        </span>
      </div>

    </motion.div>
  );
}

export default Testimonial;