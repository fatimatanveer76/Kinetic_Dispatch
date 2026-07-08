import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Truck, DollarSign, Clock, ShieldCheck } from "lucide-react";

// Animation Variants for staggered layout appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const leftSideVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, x: 30, y: 10 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function Moreinfo() {
  const benefits = [
    {
      icon: <Truck size={18} />,
      title: "More Loads",
      description: "Access premium freight opportunities seamlessly."
    },
    {
      icon: <DollarSign size={18} />,
      title: "Increase Revenue",
      description: "Maximize your truck's earning potential with optimized routing."
    },
    {
      icon: <Clock size={18} />,
      title: "Save Time",
      description: "We handle tedious paperwork and aggressive back-and-forth negotiations."
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Trusted Dispatch",
      description: "Professional, dedicated support architecture available anytime."
    }
  ];

  return (
    <section className="bg-slate-950 py-20 relative overflow-hidden flex items-center justify-center min-h-[600px]">
      
      {/* SaaS Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Background Ambient Glows */}
      <div className="absolute -top-12 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-12 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-6 w-full relative z-10"
      >
        {/* Main Banner Wrapper with Glassmorphism Edge Accent */}
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-orange-500/30 via-slate-800 to-slate-900 shadow-2xl shadow-orange-950/20">
          
          {/* Main Container Layer */}
          <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 rounded-[23px] p-8 md:p-14 lg:p-16 grid lg:grid-cols-12 gap-12 items-center relative overflow-hidden">
            
            {/* Embedded Cybernetic Radial Flare inside the banner */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            {/* Left Column: Heading Copy & CTA */}
            <motion.div variants={leftSideVariants} className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest text-white rounded-full uppercase">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Carrier Optimization
                </span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.05]">
                  Your Truck.<br />
                  Our Dispatch.<br />
                  <span className="text-slate-950 drop-shadow-sm">More Miles.</span>
                </h2>

                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md font-medium">
                  Join our premium elite carrier network and secure immediate access to high-yielding loads, rapid automated payouts, and enterprise infrastructure 24/7.
                </p>
              </div>

              {/* Action Button with Linear Shine Sweep Effect */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden bg-slate-950 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl shadow-xl shadow-black/30 group cursor-pointer flex items-center gap-2 transition-colors duration-300 hover:bg-slate-900 border border-slate-800"
                >
                  {/* Subtle sweep line animation on hover */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  
                  <span className="relative flex items-center gap-2">
                    Become A Carrier
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: Premium Benefit Bento-Rows */}
            <div className="lg:col-span-6 space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ x: -6, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  className="bg-white/10 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex items-start gap-4 transition-colors duration-300 cursor-default"
                >
                  {/* Modern Icon Frame */}
                  <div className="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center shrink-0 shadow-md shadow-orange-950/10">
                    {benefit.icon}
                  </div>
                  
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed font-medium">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Moreinfo;