import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, User, MessageSquare } from "lucide-react";
import { FaTruck } from "react-icons/fa";

// Animation Variants for orchestrated rendering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function ContactForm() {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden min-h-screen flex items-center">
      
      {/* Elegant Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      {/* Premium SaaS Grid Background and Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950"></div>

      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-12 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-6 relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: SaaS Branding, Info, Stats & Contact Cards */}
          <motion.div variants={fadeInUpVariants} className="lg:col-span-5 space-y-8 lg:sticky lg:top-12">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 text-[11px] font-medium tracking-wider text-orange-500 rounded-full uppercase">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                24/7 Operations Hub
              </span>
              
              {/* Restored Brand Logo Branding */}
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-xl shadow-md shadow-red-900/20">
                  <FaTruck className="text-white transform -skew-x-6 text-xl" />
                </div>
                <h2 className="text-xl font-black tracking-tight text-white uppercase">
                  KINETIC<span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent font-light italic ms-1">DISPATCH</span>
                </h2>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Have questions about custom premium dispatch routes or API access? Connect with our logistics team instantly.
              </p>
            </div>

            {/* Floating Statistics */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "500+", label: "Fleet Partners" },
                { value: "24/7", label: "Support" },
                { value: "99%", label: "On-Time" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4, borderColor: "rgba(249, 115, 22, 0.2)" }}
                  className="bg-slate-900/50 rounded-xl p-4 border border-slate-800 backdrop-blur-sm transition-colors duration-300"
                >
                  <p className="text-2xl font-bold text-orange-500">{stat.value}</p>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="h-[1px] bg-slate-900 w-full" />

            {/* Premium Animated Contact Cards */}
            <div className="space-y-3">
              <motion.div 
                whileHover={{ y: -4, borderColor: "rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950 transition-colors duration-300 p-4 flex items-center gap-4 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-slate-800/60 flex items-center justify-center text-orange-500">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Voice Grid</p>
                  <p className="text-xs font-mono font-bold text-slate-300 mt-0.5">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: "rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950 transition-colors duration-300 p-4 flex items-center gap-4 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-slate-800/60 flex items-center justify-center text-orange-500">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Secure Transmission</p>
                  <p className="text-xs font-mono font-bold text-slate-300 mt-0.5">ops@kineticdispatch.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphism Glowing Form Wrapper */}
          <motion.div 
            variants={fadeInUpVariants} 
            className="lg:col-span-7 relative rounded-3xl p-[1px] bg-gradient-to-br from-orange-500/40 via-slate-800 to-slate-900 before:absolute before:inset-0 before:bg-orange-500/5 before:blur-3xl before:-z-10"
          >
            {/* Inner Content Area */}
            <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 md:p-10">
              
              {/* Online Trust Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-xs text-slate-400">Usually replies within 30 minutes</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 hover:border-slate-700"
                      />
                    </div>
                  </div>

                  {/* Corporate Email */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Corporate Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                      <input
                        type="email"
                        placeholder="john@kinetic.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 hover:border-slate-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone / Fleet Comms */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Phone / Fleet Comms
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input
                      type="text"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 hover:border-slate-700"
                    />
                  </div>
                </div>

                {/* Message Body */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Message Body
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-slate-500" size={16} />
                    <textarea
                      rows="4"
                      placeholder="Describe your active lanes, power units, or business parameters..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 hover:border-slate-700 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Action Button with Linear Shine Sweep Effect */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-orange-600/10 w-full flex items-center justify-center group cursor-pointer transition-all duration-300"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                  <span className="relative flex items-center gap-2">
                    Send Message
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </motion.button>

                {/* Trust Accent Text */}
                <p className="text-center text-xs text-slate-500 mt-4">
                  ⚡ Average response time: <span className="text-orange-500 font-medium">Under 30 minutes</span>
                </p>

              </form>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default ContactForm;