import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import OurPartner from "@/components/OurPartner";
import OurProducts from "@/components/OurProducts";
import Process from "@/components/Process";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Process />
      <OurPartner />
      <OurProducts />
      <Footer />
    </div>
  );
}
