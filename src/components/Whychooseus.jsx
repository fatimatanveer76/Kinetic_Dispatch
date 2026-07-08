import React from "react";
import { motion } from "framer-motion";
import { Users, Headset, DollarSign, MapPinned } from "lucide-react";

function WhyChooseUs() {
  // Animation configuration for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-24 bg-slate-950 border-b border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cyber-Minimalist Section Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-900 pb-10 mb-16 gap-6"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-none animate-pulse"></span>
              <span className="text-xs font-black tracking-[0.3em] text-orange-500 uppercase">
                OPERATIONAL ADVANTAGE
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              WHY CHOOSE US <br />
              <span className="text-slate-500 font-light italic tracking-tight">DISPATCH OVERVIEW</span>
            </h2>
          </div>
          
          <div className="max-w-md text-slate-400 text-sm leading-relaxed font-medium md:text-right">
            We simplify truck dispatching with reliable service, experienced
            dispatchers, and 24/7 support so you can focus on driving while we
            find the best loads.
          </div>
        </motion.div>

        {/* Enhanced Sharp Layout Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group relative bg-slate-950 border border-slate-900 p-8 rounded-none transition-all duration-300 hover:border-orange-500 flex flex-col justify-between h-full"
          >
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-300 group-hover:w-full"></div>
            <div>
              <div className="text-slate-500 group-hover:text-orange-500 transition-colors duration-300 mb-6">
                <Users size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3">
                Expert Dispatchers
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Our experienced dispatch team manages your loads efficiently and keeps your trucks moving.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group relative bg-slate-950 border border-slate-900 p-8 rounded-none transition-all duration-300 hover:border-orange-500 flex flex-col justify-between h-full"
          >
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-300 group-hover:w-full"></div>
            <div>
              <div className="text-slate-500 group-hover:text-orange-500 transition-colors duration-300 mb-6">
                <Headset size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3">
                24/7 Support
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Our support team is available around the clock to assist drivers whenever they need help.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group relative bg-slate-950 border border-slate-900 p-8 rounded-none transition-all duration-300 hover:border-orange-500 flex flex-col justify-between h-full"
          >
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-300 group-hover:w-full"></div>
            <div>
              <div className="text-slate-500 group-hover:text-orange-500 transition-colors duration-300 mb-6">
                <DollarSign size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3">
                Better Rates
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                We negotiate high-paying freight loads to maximize your profits and reduce empty miles.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group relative bg-slate-950 border border-slate-900 p-8 rounded-none transition-all duration-300 hover:border-orange-500 flex flex-col justify-between h-full"
          >
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-300 group-hover:w-full"></div>
            <div>
              <div className="text-slate-500 group-hover:text-orange-500 transition-colors duration-300 mb-6">
                <MapPinned size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3">
                Nationwide Coverage
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                We provide dispatch services across the United States, connecting carriers with profitable opportunities.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;