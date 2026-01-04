import {
  MonitorSmartphone,
  CreditCard,
  ShoppingCart,
  Users,
  Search,
  LogIn,
  CheckCircle,
  Instagram,
  Twitter,
  Youtube,
  Music,
  MessageCircle,
  Gamepad2,
  Video,
  ArrowLeft,
  ArrowDown,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import Image from 'next/image'
import ServicesSection from "@/components/landing/service-section";

export default function LandingPage() {
  return (
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#070B28] font-sans text-white" dir="rtl">

        {/* Background Glow Effects */}
        <div className="absolute top-[253px] right-[24px] h-[200px] w-[200px] bg-[#5873FF] opacity-30 blur-[150px] pointer-events-none"></div>
        <div className="absolute top-[338px] left-[629px] h-[200px] w-[200px] bg-[#5873FF] opacity-30 blur-[150px] pointer-events-none"></div>

        {/* Navbar Placeholder */}
        {/* <Navbar /> */}

        <main className="container mx-auto px-4 pt-24 pb-20">

          {/* Quick Service Links */}
          <div className="relative z-10 mx-auto mb-10 flex w-full max-w-[1072px] flex-wrap items-center justify-center gap-4 lg:justify-between">
            {[
              { title: 'خدمات شبکه های اجتماعی', icon: <Users className="h-5 w-5" /> },
              { title: 'کارت های مجازی', icon: <CreditCard className="h-5 w-5" /> },
              { title: 'سیم کارت مجازی', icon: <MonitorSmartphone className="h-5 w-5" /> },
              { title: 'خرید و فروش اکانت مجازی', icon: <ShoppingCart className="h-5 w-5" /> },
            ].map((item, index) => (
                <div
                    key={index}
                    className="flex h-[52px] w-[193px] items-center gap-3 rounded-[13px] border border-white/10 bg-[#222852]/50 px-4 backdrop-blur-sm transition-transform hover:scale-105"
                >
                  <div className="flex h-5 w-5 items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-white">{item.title}</span>
                </div>
            ))}
          </div>

          {/* Hero Banner */}
          <div className="relative mx-auto mb-20 h-auto w-full max-w-[1072px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#171646] to-[#1C325F] p-8 shadow-2xl md:h-[250px]">
            <div className="flex h-full flex-col items-center justify-between md:flex-row">

              {/* Right Content (Text) */}
              <div className="flex flex-col items-start gap-4 text-right">
                <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
                  سرویس های ویژه حوزه کریپتوکارنسی
                </h1>

                <button className="group mt-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#080B62] via-[#2D64C3] to-[#080B62] px-8 py-3 shadow-[6px_-5px_42px_rgba(0,0,0,0.25)] transition-all hover:brightness-110">
                  <span className="ml-2 font-bold tracking-wider text-white">همین حالا خرید کنید!</span>
                  <ChevronLeft className="h-4 w-4 text-white transition-transform group-hover:-translate-x-1" />
                </button>

                {/* Dots Indicator */}
                <div className="mt-4 flex gap-2">
                  <div className="h-2 w-5 rounded-full bg-white"></div>
                  <div className="h-2 w-2 rounded-full bg-white/50"></div>
                  <div className="h-2 w-2 rounded-full bg-white/50"></div>
                </div>
              </div>

              {/* Left Content (Illustration Placeholder) */}
              <Image src='assets/landing/slider-chart-image.png' alt='chart'/>
            </div>
          </div>

          <ServicesSection/>
        </main>


        {/* Footer Placeholder */}
        {/* <Footer /> */}
      </div>
  );
}