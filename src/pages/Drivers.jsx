import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DriverCard from "../components/DriverCard"; // Imported as Drivercard
import truckBg from "../assets/truck3.jpg";
import { 
  DollarSign, 
  MapPin, 
  Clock, 
  Headset,
  FileCheck,
  Truck,
  ShieldCheck,
  ArrowRight,
  Zap
} from "lucide-react";

// Orchestrated animations for section elements
const staggeredContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function Drivers() {
  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden">
      
      {/* Background Logistics SaaS Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ================= DRIVER HERO ================= */}
    
        <section className="relative min-h-screen overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${truckBg})` }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 pt-36 pb-24 px-6">
    {/* Your content here */}


  
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 text-[10px] font-mono tracking-widest text-orange-500 rounded-xl uppercase"
          >
            <Zap size={10} className="fill-orange-500 animate-pulse rounded-2xl" /> Logistics Carrier Network
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none"
          >
            Grow Your Trucking Business With <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent italic font-light tracking-normal">
              Kinetic Dispatch
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base font-medium leading-relaxed"
          >
            We help independent truck drivers and fleet owners find high-yielding loads, 
            negotiate optimized premium market rates, and keep equipment running efficiently with zero downtime.
          </motion.p>
          </div>
         </div>
        </section>
      {/* ================= DRIVER BENEFITS ================= */}
      <section className="bg-slate-900 py-24 px-6 border-b border-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-950 pb-10 mb-16 gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 bg-orange-600 rounded-none animate-pulse" />
                <span className="text-xs font-black tracking-[0.3em] text-orange-600 uppercase font-mono">OPERATIONAL ADVANTAGE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                Benefits For Drivers
              </h2>
            </div>
            <div className="text-left md:text-right font-mono hidden md:block">
              <span className="text-slate-600 text-xs uppercase tracking-wider block">Fully Managed Pipeline</span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">[ 24/7 SUPPORT INTEGRATED ]</span>
            </div>
          </motion.div>

          {/* Cards Dynamic Grid - Linked to your imported custom Drivercard component */}
          <motion.div 
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <DriverCard index={0} icon={DollarSign} title="Higher Earnings" description="We negotiate high-percentage carrier profit rates and target optimized high-yield contract lines." />
            <DriverCard index={1} icon={MapPin} title="Consistent Loads" description="Access premium, verified loads mapped out automatically around your favored return routes." />
            <DriverCard index={2} icon={Clock} title="Save Your Time" description="Focus entirely on managing the road map while our back-office matrix handles brokers and paperwork." />
            <DriverCard index={3} icon={Headset} title="24/7 Support" description="Receive direct engineering and active agent dispatch coordination support assets at any point." />
          </motion.div>
        </div>
      </section>

      {/* ================= REQUIREMENTS ================= */}
      <section className="py-24 px-6 relative z-10 border-b border-slate-900">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-3"
          >
            <span className="text-xs font-black tracking-widest text-orange-500 uppercase font-mono">[ COMPLIANCE FRAMEWORK ]</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
              Driver Requirements
            </h2>
          </motion.div>

          <motion.div 
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Req 1 */}
            <motion.div 
              variants={fadeUpVariant}
              whileHover={{ y: -4 }}
              className="bg-slate-900 border border-slate-950 p-8 rounded-none relative group shadow-lg"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-500 transition-colors" />
              <div className="w-12 h-12 flex items-center justify-center bg-slate-950 border border-slate-800 text-orange-600 mb-6 rounded-2xl">
                <Truck size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">Active Truck Assets</h3>
              <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                Must own or actively lease clean, modern, and reliable commercial freight equipment.
              </p>
            </motion.div>

            {/* Req 2 */}
            <motion.div 
              variants={fadeUpVariant}
              whileHover={{ y: -4 }}
              className="bg-slate-900 border border-slate-950 p-8 rounded-none relative group shadow-lg"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-500 transition-colors" />
              <div className="w-12 h-12 flex items-center justify-center bg-slate-950 border border-slate-800 text-orange-600 mb-6 rounded-full">
                <FileCheck size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">Valid Operating Authority</h3>
              <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                Active MC/DOT authority profile documentation, active structural liability setup, and CDL logs.
              </p>
            </motion.div>

            {/* Req 3 */}
            <motion.div 
              variants={fadeUpVariant}
              whileHover={{ y: -4 }}
              className="bg-slate-900 border border-slate-950 p-8 rounded-none relative group shadow-lg"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-500 transition-colors" />
              <div className="w-12 h-12 flex items-center justify-center bg-slate-950 border border-slate-800 text-orange-500 mb-6 rounded-2xl">
                <ShieldCheck size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">Professional Execution</h3>
              <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                Absolute dedication to safe operation standards, reliability metric scoring, and open communication channels.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= JOIN CTA ================= */}
      <section className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-none border border-slate-900 bg-gradient-to-r from-slate-950 via-slate-900/40 to-slate-950 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-black/80"
        >
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-br from-red-600/5 to-orange-500/5 rounded-xl blur-3xl pointer-events-none" />
          
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">
              Ready To Maximize Your Trucking Income?
            </h2>
            <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
              Connect operations with Kinetic Dispatch right now. Let our structural dispatch desk automate booking flows while you keep your eyes locked on transit.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto"
          >
            <Link 
              to="/partner"
              className="whitespace-nowrap px-8 py-4.5 bg-gradient-to-r from-orange-600 via-orange-600 to-orange-500 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-orange-600/10 flex items-center justify-center gap-2 group cursor-pointer border border-orange-400/10"
            >
              Become A Partner
              <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
     
  );
}

export default Drivers;