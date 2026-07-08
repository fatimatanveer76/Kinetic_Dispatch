import React from "react";
import { Link } from "react-router-dom";
import { Truck, Menu, ArrowRight } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/85 backdrop-blur-md border-b border-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Brand Logo - Kinetic Theme */}
        <Link to="/" className="flex items-center gap-3 group">
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

        {/* Navigation Links */}
       <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

  <li>
    <Link 
      to="/" 
      className="text-white font-bold transition duration-300"
    >
      Home
    </Link>
  </li>

  <li>
    <Link 
      to="/services"
      className="text-slate-300 hover:text-white transition duration-300"
    >
      Services
    </Link>
  </li>

  <li>
    <Link 
      to="/drivers"
      className="text-slate-300 hover:text-white transition duration-300"
    >
      Drivers
    </Link>
  </li>

  <li>
    <Link 
      to="/contact"
      className="text-slate-300 hover:text-white transition duration-300"
    >
      Contact
    </Link>
  </li>

</ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
to="/quote"
className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-2.5 rounded-xl font-bold"
>
 Get a Quote
</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-slate-300 hover:text-white transition p-1">
          <Menu size={26} />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;