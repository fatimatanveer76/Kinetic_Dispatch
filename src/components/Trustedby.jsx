import React from "react";

function TrustedBy() {
  return (
    <section className="bg-slate-50 py-16 border-t border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        {/* Crisp Bold Section Heading */}
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
          TRUSTED BY<span className="text-orange-600"> Biggest companies</span>
        </h2>
      </div>

      {/* Infinite Moving Reel Container */}
      <div className="relative w-full overflow-hidden group py-2">
        {/* Light Mode Fade Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-550 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-550 to-transparent z-10 pointer-events-none"></div>

        {/* The Moving Track */}
        <div className="animate-marquee flex gap-4 group-hover:[animation-play-state:paused]">
          
          {/* --- SET 1 --- */}
          <div className="w-48 h-16 bg-orange-100 border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center p-4 hover:border-orange-500/60 hover:shadow-md transition-all duration-300 select-none shrink-0">
            <span className="font-mono text-xs font-black tracking-tighter text-slate-600 hover:text-orange-600 transition-colors uppercase">
              Swift<span className="font-light tracking-widest text-slate-400">.LOG</span>
            </span>
          </div>

          <div className="w-48 h-16 bg-orange-100 border border-slate-200  rounded-2xl  shadow-sm flex items-center justify-center p-4 hover:border-orange-500/60 hover:shadow-md transition-all duration-300 select-none shrink-0">
            <span className="font-sans text-sm font-light uppercase tracking-[0.25em] text-slate-600 hover:text-slate-900 transition-colors">
              PRIME<span className="font-black text-orange-600/80 font-serif italic">F</span>
            </span>
          </div>

          <div className="w-48 h-16 bg-orange-100 border border-slate-200  rounded-2xl  shadow-sm flex items-center justify-center p-4 hover:border-orange-500/60 hover:shadow-md transition-all duration-300 select-none shrink-0">
            <span className="font-serif italic text-base font-bold tracking-tight text-slate-600 hover:text-orange-600 transition-colors">
              Road<span className="font-sans font-black tracking-widest text-xs text-slate-400 uppercase not-italic">Link</span>
            </span>
          </div>

          <div className="w-48 h-16 bg-orange-100 border border-slate-200  rounded-2xl  shadow-sm flex items-center justify-center p-4 hover:border-orange-500/60 hover:shadow-md transition-all duration-300 select-none shrink-0">
            <span className="font-mono text-sm font-black tracking-widest text-slate-600 hover:text-slate-900 transition-colors uppercase">
              CARGO<span className="text-orange-600 text-base font-sans font-light">X</span>
            </span>
          </div>

          <div className="w-48 h-16 bg-orange-100 border border-slate-200  rounded-2xl shadow-sm flex items-center justify-center p-4 hover:border-orange-500/60 hover:shadow-md transition-all duration-300 select-none shrink-0">
            <span className="font-sans text-xs font-black uppercase tracking-normal text-slate-600 hover:text-orange-600 transition-colors">
              ⚡ FAST<span className="font-medium tracking-wide text-slate-400">HAUL</span>
            </span>
          </div>

          <div className="w-48 h-16 bg-orange-100 border border-slate-200  rounded-2xl  shadow-sm flex items-center justify-center p-4 hover:border-orange-500/60 hover:shadow-md transition-all duration-300 select-none shrink-0">
            <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-slate-600 hover:text-slate-900 transition-colors uppercase">
              [ ELITE<span className="text-orange-600">_D</span> ]
            </span>
          </div>

          {/* --- SET 2 (Duplicate for Seamless Wrapping) --- */}
          <div className="w-48 h-16 bg-orange-100 border border-slate-200  rounded-2xl  shadow-sm flex items-center justify-center p-4 hover:border-orange-500/60 hover:shadow-md transition-all duration-300 select-none shrink-0">
            <span className="font-mono text-xs font-black tracking-tighter text-slate-600 hover:text-orange-600 transition-colors uppercase">
              Swift<span className="font-light tracking-widest text-slate-400">.LOG</span>
            </span>
          </div>

          <div className="w-48 h-16 bg-orange-100 border border-slate-200  rounded-2xl shadow-sm flex items-center justify-center p-4 hover:border-orange-500/60 hover:shadow-md transition-all duration-300 select-none shrink-0">
            <span className="font-sans text-sm font-light uppercase tracking-[0.25em] text-slate-600 hover:text-slate-900 transition-colors">
              PRIME<span className="font-black text-orange-600/80 font-serif italic">F</span>
            </span>
          </div>

          <div className="w-48 h-16 bg-orange-100 border border-slate-200  rounded-2xl shadow-sm flex items-center justify-center p-4 hover:border-orange-500/60 hover:shadow-md transition-all duration-300 select-none shrink-0">
            <span className="font-serif italic text-base font-bold tracking-tight text-slate-600 hover:text-orange-600 transition-colors">
              Road<span className="font-sans font-black tracking-widest text-xs text-slate-400 uppercase not-italic">Link</span>
            </span>
          </div>

          <div className="w-48 h-16 bg-orange-100 border border-slate-200  rounded-2xl shadow-sm flex items-center justify-center p-4 hover:border-orange-500/60 hover:shadow-md transition-all duration-300 select-none shrink-0">
            <span className="font-mono text-sm font-black tracking-widest text-slate-600 hover:text-slate-900 transition-colors uppercase">
              CARGO<span className="text-orange-600 text-base font-sans font-light">X</span>
            </span>
          </div>

          <div className="w-48 h-16 bg-orange-100 border-slate-200  rounded-2xl shadow-sm flex items-center justify-center p-4 hover:border-orange-500/60 hover:shadow-md transition-all duration-300 select-none shrink-0">
            <span className="font-sans text-xs font-black uppercase tracking-normal text-slate-600 hover:text-orange-600 transition-colors">
              ⚡ FAST<span className="font-medium tracking-wide text-slate-400">HAUL</span>
            </span>
          </div>

          <div className="w-48 h-16 bg-orange-100 border border-slate-200  rounded-2xl shadow-lg flex items-center justify-center p-4 hover:border-orange-500/60 hover:shadow-md transition-all duration-300 select-none shrink-0">
            <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-slate-600 hover:text-slate-900 transition-colors uppercase">
              [ ELITE<span className="text-orange-600">_D</span> ]
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TrustedBy;