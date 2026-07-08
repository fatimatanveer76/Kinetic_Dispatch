import React, { useState } from "react"; // 1. Imported useState
import { Link } from "react-router-dom";
import { Truck, Menu, X, ArrowRight } from "lucide-react"; // 2. Imported X icon

function Navbar() {
  // 3. State to track if mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/85 backdrop-blur-md border-b border-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Brand Logo - Kinetic Theme */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-md shadow-red-900/20">
            <Truck className="text-white transform -skew-x-6" size={24} />
          </div>
          <div className="flex flex-col line-height-none">
            <h1 className="text-xl font-black tracking-tight text-white m-0">
              KINETIC<span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent font-light italic ms-1">DISPATCH</span>
            </h1>
            <span className="text-[9px] text-slate-500 tracking-[0.25em] font-bold uppercase -mt-0.5">Freight Logix</span>
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link to="/" className="text-white font-bold transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/services" className="text-slate-300 hover:text-white transition duration-300">Services</Link>
          </li>
          <li>
            <Link to="/drivers" className="text-slate-300 hover:text-white transition duration-300">Drivers</Link>
          </li>
          <li>
            <Link to="/contact" className="text-slate-300 hover:text-white transition duration-300">Contact</Link>
          </li>
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-2.5 rounded-xl font-bold transition-transform hover:scale-105"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)} // 4. Toggle open/closed state
          className="md:hidden text-slate-300 hover:text-white transition p-1 z-50 relative"
          aria-label="Toggle navigation menu"
        >
          {/* 5. Switch between Menu and X icons dynamically */}
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* 6. Mobile Dropdown Menu Drawer */}
      <div 
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-slate-950/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-xl font-semibold">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="text-white font-bold">Home</Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">Services</Link>
          </li>
          <li>
            <Link to="/drivers" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">Drivers</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">Contact</Link>
          </li>
        </ul>
        
        <Link
          to="/quote"
          onClick={() => setIsOpen(false)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-xl font-bold text-lg mt-4"
        >
          Get a Quote <ArrowRight size={20} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;