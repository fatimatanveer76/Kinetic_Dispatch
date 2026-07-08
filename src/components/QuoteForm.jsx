import React from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Building, 
  Phone, 
  Mail, 
  Truck, 
  Hash, 
  MapPin, 
  FileText, 
  Layers, 
  ArrowRight 
} from "lucide-react";

// Animation configuration for smooth elements appearance
const formVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 } 
  }
};

const fieldVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

function QuoteForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={formVariant}
      onSubmit={handleSubmit}
      className="bg-slate-950 border border-slate-900 p-8 space-y-6 relative overflow-hidden shadow-2xl shadow-black/50 group rounded-xl"
    >
      {/* Absolute Industrial Decorative Border Accent */}
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 transition-all duration-500 group-hover:w-full" />

      {/* Form Context Header */}
      <div className="pb-4 border-b border-slate-900">
        <h3 className="text-xl font-black text-white uppercase tracking-tight">
          System Initialization Form
        </h3>
        <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">
          Provide fleet variables to receive dispatch optimization metrics
        </p>
      </div>

      {/* 1. Full Name Field */}
      <motion.div variants={fieldVariant} className="space-y-2">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <User size={14} className="text-orange-500" /> Full Name
        </label>
        <div className="relative">
          <input
            type="text"
            required
            placeholder="Enter full name"
            className="w-full bg-slate-900 border border-slate-800 text-white pl-4 pr-4 py-3 rounded-xl outline-none font-medium text-sm transition-all duration-300 focus:border-orange-500/50 placeholder:text-slate-600"
          />
        </div>
      </motion.div>

      {/* 2. Company Name Field */}
      <motion.div variants={fieldVariant} className="space-y-2">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <Building size={14} className="text-orange-500" /> Company Name
        </label>
        <input
          type="text"
          required
          placeholder="Your trucking company name"
          className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl outline-none font-medium text-sm transition-all duration-300 focus:border-orange-500/50 placeholder:text-slate-600"
        />
      </motion.div>

      {/* 3. Dual Contact Row (Phone & Email) */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fieldVariant} className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Phone size={14} className="text-orange-500" /> Phone Number
          </label>
          <input
            type="tel"
            required
            placeholder="Enter phone number"
            className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl outline-none font-medium text-sm transition-all duration-300 focus:border-orange-500/50 placeholder:text-slate-600"
          />
        </motion.div>

        <motion.div variants={fieldVariant} className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Mail size={14} className="text-orange-500" /> Email Address
          </label>
          <input
            type="email"
            required
            placeholder="Enter operational email address"
            className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl outline-none font-medium text-sm transition-all duration-300 focus:border-orange-500/50 placeholder:text-slate-600"
          />
        </motion.div>
      </div>

      {/* 4. Dropdown Select Element Configuration */}
      <motion.div variants={fieldVariant} className="space-y-2">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <Truck size={14} className="text-orange-500" /> Primary Equipment Classification
        </label>
        <div className="relative">
          <select
            defaultValue=""
            required
            className="w-full bg-slate-900 border border-slate-800 text-slate-300 px-4 py-3 rounded-xl outline-none font-medium text-sm transition-all duration-300 focus:border-orange-500/50 appearance-none cursor-pointer"
          >
            <option value="" disabled hidden>Select truck type...</option>
            <option value="dry-van">Dry Van</option>
            <option value="reefer">Reefer</option>
            <option value="flatbed">Flatbed</option>
            <option value="box-truck">Box Truck</option>
            <option value="heavy-haul">Heavy Haul</option>
          </select>
          {/* Custom vector arrow indicator pointing down */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs font-mono">
            ▼
          </div>
        </div>
      </motion.div>

      {/* 5. Dual Operational Properties Row (Truck Count & MC Number) */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fieldVariant} className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Layers size={14} className="text-orange-500" /> Total Active Units
          </label>
          <input
            type="number"
            min="1"
            placeholder="Example: 3"
            className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl outline-none font-medium text-sm transition-all duration-300 focus:border-orange-500/50 placeholder:text-slate-600"
          />
        </motion.div>

        <motion.div variants={fieldVariant} className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Hash size={14} className="text-orange-500" /> DOT / MC Identification
          </label>
          <input
            type="text"
            placeholder="Enter MC Identification Number"
            className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl outline-none font-medium text-sm transition-all duration-300 focus:border-orange-500/50 placeholder:text-slate-600"
          />
        </motion.div>
      </div>

      {/* 6. Operating Geographic Area */}
      <motion.div variants={fieldVariant} className="space-y-2">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <MapPin size={14} className="text-orange-500" /> Target Transit Zones
        </label>
        <input
          type="text"
          placeholder="Example: Lahore, Islamabad, Karachi Regional"
          className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl outline-none font-medium text-sm transition-all duration-300 focus:border-orange-500/50 placeholder:text-slate-600"
        />
      </motion.div>

      {/* 7. Additional Requirements Notes Area */}
      <motion.div variants={fieldVariant} className="space-y-2">
        <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <FileText size={14} className="text-orange-500" /> System Integration Notes
        </label>
        <textarea
          rows="4"
          placeholder="Specify structural needs, route demands, or scheduling preferences..."
          className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl outline-none font-medium text-sm transition-all duration-300 focus:border-orange-500/50 resize-none placeholder:text-slate-600"
        />
      </motion.div>

      {/* Action Submit Trigger Button Component */}
      <motion.div variants={fieldVariant} className="pt-2">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="w-full bg-gradient-to-r from-red-600 via-orange-600 to-orange-500 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-xl shadow-orange-950/10 flex items-center justify-center gap-2 group cursor-pointer border border-orange-400/10"
        >
          Initialize Matrix Deployment
          <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
        </motion.button>
      </motion.div>
    </motion.form>
  );
}

export default QuoteForm;