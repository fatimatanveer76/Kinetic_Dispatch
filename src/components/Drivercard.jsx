import React from "react";
import { ArrowUpRight } from "lucide-react";

function Drivercard({ icon: Icon, title, description, index = 0 }) {
  return (
    <div
      className="group relative bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-900 p-8 rounded-xl flex flex-col h-full justify-between overflow-hidden shadow-2xl shadow-black/60 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 ease-out"
    >
      {/* Laser Top Edge Highlight - Switches from subtle slate to pure brand Red on hover */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-500 transition-colors duration-300" />
      
      {/* Dynamic Background Spot Glow - Controlled via Tailwind hover opacity */}
      <div className="absolute -right-16 -bottom-16 w-44 h-44 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full blur-[50px] opacity-0 group-hover:opacity-10 scale-100 group-hover:scale-110 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Technical Top Tracker Label */}
        <div className="flex justify-between items-center mb-6 font-mono text-[9px] tracking-widest text-slate-600">
          <span>SYS.MOD_0{index + 1}</span>
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Industrial Boxed Icon Setup - Transitions to brand red on hover */}
        <div className="w-12 h-12 flex items-center justify-center bg-slate-950 border border-slate-800 text-slate-500 group-hover:text-orange-500 group-hover:border-orange-500 transition-all duration-300 rounded-2xl mb-6 shadow-inner">
          {Icon && <Icon size={20} strokeWidth={1.5} />}
        </div>

        {/* Title - Text transitions cleanly to brand orange highlight on hover */}
        <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors duration-300">
          {title}
        </h3>

        {/* Description Text */}
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
          {description}
        </p>
      </div>

      {/* Modern Link Footer Element */}
      <div className="mt-10 pt-4 border-t border-slate-900 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors duration-300">
        <span>Operational Profile</span>
        <div className="transform translate-x-0 translate-y-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out">
          <ArrowUpRight size={14} className="text-green-500 group-hover:text-orange-400 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
}

export default Drivercard;