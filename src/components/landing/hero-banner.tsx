import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import chartsImg from "@/assets/landing/slider-chart-image.png";

export default function HeroBanner() {
  return (
    <div className="relative mx-auto mb-20 h-auto w-full max-w-[1072px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#171646] to-[#1C325F] p-8 shadow-2xl md:h-[250px]">
      <div className="flex h-full flex-col items-center justify-between md:flex-row">
        {/* Right Content (Text) */}
        <div className="flex flex-col items-start gap-4 text-right ">
          <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
            سرویس های ویژه حوزه کریپتوکارنسی
          </h1>

          <button className="group mt-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#080B62] via-[#2D64C3] to-[#080B62] px-8 py-3 shadow-[6px_-5px_42px_rgba(0,0,0,0.25)] transition-all hover:brightness-110">
            <span className="ml-2 font-bold tracking-wider text-white">
              همین حالا خرید کنید!
            </span>
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
        <Image src={chartsImg} alt="chart" />
      </div>
    </div>
  );
}
