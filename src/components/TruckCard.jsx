import React from "react";

function TruckCard({ truckNo, driver, destination, status, fuel }) {
  return (
    
    <div className="bg-slate-950 border border-slate-900 p-6 rounded-2xl transition-all duration-300 hover:border-orange-500/80 flex flex-col justify-between h-full group">
      {/* Header Container */}
      <div className="flex justify-between items-start mb-6 gap-4">
        <div>
          {/* Truck Number / ID */}
          <h2 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-orange-400 transition-colors">
            {truckNo || "NO_ID"}
          </h2>
          {/* Driver Identifier */}
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-0.5">
            Operator: <span className="text-slate-300">{driver}</span>
          </p>
        </div>

        {/* Sharp Functional Status Tags */}
        <span
          className={`px-2.5 py-1 text-[10px] font-black tracking-widest uppercase border rounded-none ${
            status === "On Route" || status === "On-Road"
              ? "bg-green-950/20 border-green-900 text-green-400"
              : status === "Loading" || status === "On-Site"
              ? "bg-yellow-950/20 border-yellow-900 text-yellow-400"
              : status === "Maintenance" || status === "Delayed"
              ? "bg-red-950/20 border-red-900 text-red-400"
              : "bg-slate-900 border-slate-800 text-slate-400"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Truck Information Split List */}
      <div className="space-y-4 border-t border-slate-900 pt-4">

        <div className="flex justify-between items-center text-xs font-bold tracking-wide">
          <span className="text-slate-600 uppercase">Destination</span>
          <span className="text-white uppercase font-black">{destination}</span>
        </div>

        {/* Fuel Telemetry Field */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-bold tracking-wide">
            <span className="text-slate-600 uppercase">Fuel Status</span>
            <span className="text-white font-mono">{fuel}%</span>
          </div>
          
          {/* Minimalist Tech-Style Fuel Progress Bar */}
          <div className="w-full bg-slate-900 h-1 rounded-none overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                fuel < 25 
                  ? "bg-red-500" 
                  : fuel < 50 
                  ? "bg-yellow-500" 
                  : "bg-gradient-to-r from-red-600 to-orange-500"
              }`}
              style={{ width: `${fuel}%` }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TruckCard;