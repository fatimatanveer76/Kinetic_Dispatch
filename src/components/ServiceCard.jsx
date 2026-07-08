import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Truck, Shield, Clock, BarChart3 } from "lucide-react"; // Example crisp icons

// 1. INDIVIDUAL SERVICE CARD COMPONENT
export function OurService({ icon: Icon, title, description, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.15, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="group relative bg-slate-950 border border-slate-900 p-8 rounded-none transition-all duration-300 hover:border-orange-500 flex flex-col h-full justify-between"
    >
      {/* Top Neon Border Highlight on Hover */}
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-300 group-hover:w-full"></div>

      <div>
        {/* Crisp Unboxed Icon */}
        <div className="text-slate-500 group-hover:text-orange-500 transition-colors duration-300 mb-6">
          {Icon && <Icon size={36} strokeWidth={1.5} />}
        </div>

        {/* Heavy Bold Title */}
        <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">
          {title}
        </h3>

        {/* Clean, High-Contrast Description */}
        <p className="text-slate-400 text-sm leading-relaxed font-medium">
          {description}
        </p>
      </div>

      {/* Industrial Arrow Link */}
      <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors duration-300 cursor-pointer">
        <span>Explore System</span>
        <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300 text-orange-500" />
      </div>
    </motion.div>
  );
}

// 2. MAIN PARENT SERVICES SECTION COMPONENT
function ServiceCard() {
  const sampleServices = [
    { icon: Truck, title: "Freight Dispatch", description: "Seamless heavy-haul routing mapped out dynamically with verified brokers." },
    { icon: Shield, title: "Compliance Auditing", description: "Continuous safety score protection tracking FMCSA limits effortlessly." },
    { icon: Clock, title: "Real-Time Tracking", description: "Instant satellite coordinates and precise ETA alerts sent to your customers." },
    { icon: BarChart3, title: "Rate Optimization", description: "Algorithmic market monitoring designed to pinpoint the highest-paying routes." },
  ];

  return (
    <section className="py-24 bg-slate-950 border-b border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cyber-Minimalist Section Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-900 pb-10 mb-16 gap-6"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-none animate-pulse"></span>
              <span className="text-xs font-black tracking-[0.3em] text-orange-500 uppercase">
                SYSTEM CAPABILITIES
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              OUR SERVICES <br />
              <span className="text-slate-500 font-light italic tracking-tight">Kinetic Dispatch</span>
            </h2>
          </div>
          
          {/* High-end Right-aligned Stat Meta Indicator */}
          <div className="hidden md:flex flex-col items-end text-right font-mono">
            <span className="text-orange-500 font-black text-lg tracking-widest">[ 04 ] ACTIVE MODALITIES</span>
            <span className="text-xs text-slate-600 mt-1 uppercase tracking-wider">Optimized for Commercial Freight</span>
          </div>
        </motion.div>

        {/* System Cards Grid Array */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sampleServices.map((service, index) => (
  <OurService
    key={index}
    index={index}
    icon={service.icon}
    title={service.title}
    description={service.description}
  />
))}
        </div>

      </div>
    </section>
  );
}

export default ServiceCard;