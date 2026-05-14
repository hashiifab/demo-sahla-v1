import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TrustStrip from "@/components/TrustStrip";
import VisionMission from "@/components/VisionMission";
import Products from "@/components/Products";
import Organization from "@/components/Organization";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TrustStrip />
        <VisionMission />
        <Products />
        <Organization />
        <Gallery />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
