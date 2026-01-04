import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import ServicesSection from "@/components/landing/service-section";
import chartsImg from "@/assets/landing/slider-chart-image.png";
import QuickServiceLinks from "@/components/landing/quick-service-links";
import HeroBanner from "@/components/landing/hero-banner";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden bg-[#070B28] font-sans text-white"
      dir="rtl"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-[253px] right-[24px] h-[200px] w-[200px] bg-[#5873FF] opacity-30 blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[338px] left-[629px] h-[200px] w-[200px] bg-[#5873FF] opacity-30 blur-[150px] pointer-events-none"></div>

      {/* Navbar Placeholder */}
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-20">
        <QuickServiceLinks />
        <HeroBanner />
        <ServicesSection />
      </main>

      {/* Footer Placeholder */}
      <Footer />
    </div>
  );
}
