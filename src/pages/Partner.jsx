import React from "react";

function Partner(){

return(

<section className="bg-slate-950 min-h-screen py-24 px-6 text-white">

<div className="max-w-3xl mx-auto text-center">


<h1 className="text-4xl font-bold">
Become A Kinetic Dispatch Partner
</h1>


<p className="text-gray-400 mt-4">
Join our network of professional drivers and start
receiving better freight opportunities.
</p>



<form className="mt-10 bg-slate-900 p-8 rounded-2xl space-y-5">


<input
type="text"
placeholder="Full Name"
className="w-full p-3 rounded-lg bg-slate-800 text-white"
/>


<input
type="text"
placeholder="Phone Number"
className="w-full p-3 rounded-lg bg-slate-800 text-white"
/>


<input
type="text"
placeholder="Truck Type"
className="w-full p-3 rounded-lg bg-slate-800 text-white"
/>


<input
type="text"
placeholder="MC Number"
className="w-full p-3 rounded-lg bg-slate-800 text-white"
/>


<button
className="w-full bg-red-600 py-3 rounded-lg font-bold"
>
Submit Application
</button>


</form>


</div>

</section>

)

}

export default Partner;