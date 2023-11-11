import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurPartner from "@/components/OurPartner";
import Colleagues from "@/components/about/Colleagues";
import Excursion from "@/components/about/Excursion";
import Interview from "@/components/about/Interview";
import Top from "@/components/about/Top";
import React from "react";

export default function About() {
  return (
    <div>
      <Navbar />
      <Top />
      <Excursion />
      <OurPartner />
      <Colleagues />
      <Interview />
      <Footer />
    </div>
  );
}
