import React from "react";
import { motion } from "framer-motion";
import {
  FaTruck,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaGlobe
} from "react-icons/fa";

function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-slate-900 text-slate-400 border-t border-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo & Brand Pitch */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-xl shadow-md shadow-red-900/20">
                <FaTruck className="text-white transform -skew-x-6 text-xl" />
              </div>
              <h2 className="text-xl font-black tracking-tight text-white uppercase">
                KINETIC<span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent font-light italic ms-1">DISPATCH</span>
              </h2>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mt-2">
              Premium logistical dispatch systems keeping independent drivers and commercial fleets loaded, moving, and highly profitable nationwide.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-5 text-slate-200">
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <motion.a whileHover={{ x: 4, color: "#fb923c" }} href="#" className="transition-colors duration-200 block py-0.5">Home</motion.a>
              </li>
              <li>
                <motion.a whileHover={{ x: 4, color: "#fb923c" }} href="#" className="transition-colors duration-200 block py-0.5">Services</motion.a>
              </li>
              <li>
                <motion.a whileHover={{ x: 4, color: "#fb923c" }} href="#" className="transition-colors duration-200 block py-0.5">Drivers</motion.a>
              </li>
              <li>
                <motion.a whileHover={{ x: 4, color: "#fb923c" }} href="#" className="transition-colors duration-200 block py-0.5">Contact</motion.a>
              </li>
            </ul>
          </div>

          {/* Capabilities/Services Column */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-5 text-slate-200">
              Fleet Capabilities
            </h3>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              <motion.li whileHover={{ x: 4, color: "#ffffff" }} className="transition-colors duration-200 cursor-default">Dry Van Capacity</motion.li>
              <motion.li whileHover={{ x: 4, color: "#ffffff" }} className="transition-colors duration-200 cursor-default">Heavy Flatbed</motion.li>
              <motion.li whileHover={{ x: 4, color: "#ffffff" }} className="transition-colors duration-200 cursor-default">Reefer Logistics</motion.li>
              <motion.li whileHover={{ x: 4, color: "#ffffff" }} className="transition-colors duration-200 cursor-default">Hotshot &amp; Express</motion.li>
              <motion.li whileHover={{ x: 4, color: "#ffffff" }} className="transition-colors duration-200 cursor-default">Power Only Networks</motion.li>
            </ul>
          </div>

          {/* Contact & Social Channels */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-5 text-slate-200">
              HQ Connect
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-center group">
                <FaPhone className="text-orange-500 transition-colors group-hover:text-red-500" />
                <span className="text-slate-300 font-medium">+92 (555) 123-4567</span>
              </div>

              <div className="flex gap-3 items-center group">
                <FaEnvelope className="text-orange-500 transition-colors group-hover:text-red-500" />
                <span className="text-slate-300 font-medium">ops@kineticdispatch.com</span>
              </div>

              <div className="flex gap-3 items-center group">
                <FaMapMarkerAlt className="text-orange-500 transition-colors group-hover:text-red-500" />
                <span className="text-slate-300 font-medium">Lahore, Pakistan</span>
              </div>

              {/* Enhanced Socials Blocks */}
              <div className="flex gap-4 mt-6 pt-2 text-lg">
                <motion.div 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl hover:border-orange-500 hover:text-orange-400 text-slate-400 transition-colors duration-300 cursor-pointer"
                >
                  <FaInstagram />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl hover:border-orange-500 hover:text-orange-400 text-slate-400 transition-colors duration-300 cursor-pointer"
                >
                  <FaLinkedin />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl hover:border-orange-500 hover:text-orange-400 text-slate-400 transition-colors duration-300 cursor-pointer"
                >
                  <FaGlobe />
                </motion.div>
              </div>

            </div>
          </div>

        </div>

        <hr className="border-slate-800 mt-12 mb-2"/>
        
        {/* Legal & Attribution Copyright Row */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
          <div>
            © 2026 KINETIC DISPATCH. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}

export default Footer;