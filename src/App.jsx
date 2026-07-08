import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Drivers from "./pages/Drivers";
import Home from "./pages/Home";
import Moreinfo from "./components/Moreinfo";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Partner from "./pages/Partner";
import Quote from "./pages/Quota";

function App() {

  return (
    <>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} /> 

        <Route  path="/drivers" element={<Drivers />} />

        <Route path="/partner" element={<Partner />} />

        <Route path="/quote" element={<Quote />} />

      </Routes>

    </>
  );
}


export default App;