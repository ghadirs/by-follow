"use client";

import {
  Music,
  Twitter,
  Youtube,
  Ghost,
  MessageCircle,
  Dribbble,
  Gamepad2,
  Video,
  Instagram,
  Send,
} from "lucide-react";
import serviceCycle from "@/assets/landing/services-cycle.png";
import Image from "next/image";
import ServiceSelection from "@/components/landing/service-selection";
import { useState } from "react";
import { SocialMediaService } from "@/types/landing";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<SocialMediaService | null>(
    null,
  );

  const socialMedias = [
    {
      title: "اسپاتیفای",
      icon: <Music className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      bg: "bg-[#1DB954]",
    }, // Spotify
    {
      title: "توییتر",
      icon: <Twitter className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      bg: "bg-[#1DA1F2]",
    }, // Twitter
    {
      title: "یوتوب",
      icon: <Youtube className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      bg: "bg-[#FF0000]",
    }, // YouTube
    {
      title: "اسنپ چت",
      icon: <Ghost className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      bg: "bg-[#FFFC00]",
    }, // Snapchat (Ghost as placeholder)
    {
      title: "واتس آپ",
      icon: <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      bg: "bg-[#25D366]",
    }, // WhatsApp
    {
      title: "دریبل",
      icon: <Dribbble className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      bg: "bg-[#EA4C89]",
    }, // Dribbble
    {
      title: "دیسکورد",
      icon: <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      bg: "bg-[#5865F2]",
    }, // Discord
    {
      title: "تیک تاک",
      icon: <Video className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      bg: "bg-[#000000]",
    }, // TikTok
    {
      title: "اینستاگرام",
      icon: <Instagram className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      bg: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
    }, // Instagram
    {
      title: "تلگرام",
      icon: <Send className="w-8 h-8 md:w-10 md:h-10 text-white" />,
      bg: "bg-[#0088cc]",
    }, // Telegram
  ];
  return (
    <div
      className="min-h-screen w-full bg-[#070B28] text-white overflow-x-hidden"
      dir="rtl"
    >
      <div className="container mx-auto px-4 pt-12 flex flex-col gap-20">
        {/* Social Media Services Section */}
        <section className="flex flex-col items-center w-full">
          <h2 className="text-[20px] font-extrabold mb-10 text-center md:text-right text-white drop-shadow-md">
            خدمات شبکه های اجتماعی
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-[1200px]">
            {socialMedias.map((item, idx) => (
              <div
                key={idx}
                className={`w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[20px] md:rounded-[24px] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer ${item.bg}`}
                onClick={() => setActiveService(item)}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </section>
        {activeService && (
          <ServiceSelection
            serviceName={activeService.title}
            serviceIcon={activeService.icon}
          />
        )}
        <section className="relative w-full pt-16 md:pt-24" dir="rtl">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
              {/* Right Side: Content */}
              <div className="w-full max-w-[600px] text-right">
                {/* Title */}
                {/* CSS: font-size: 16px (Adjusted to xl for visual hierarchy), font-weight: 700 */}
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 leading-relaxed">
                  چرا استفاده از خدمات پنل ما ؟
                </h2>

                {/* Separator Line */}
                {/* CSS: border: 2px solid #5A5A86; width: 371px; */}
                <div className="w-full max-w-[371px] h-[2px] bg-[#5A5A86] mb-8 rounded-full"></div>

                {/* Features List */}
                {/* CSS: font-size: 16px; line-height: 30px; color: #FFFFFF; */}
                <ul className="flex flex-col gap-5 text-white">
                  {[
                    {
                      title: "سفارش آنی و بدون نیاز به ثبت‌ نام:",
                      desc: "کاربران می‌توانند بدون ایجاد حساب کاربری، خدمات را سفارش دهند و پرداخت را به‌ راحتی انجام دهند.",
                    },
                    {
                      title: "پشتیبانی ۲۴ ساعته:",
                      desc: "ارائه پشتیبانی آنلاین در هر لحظه از شبانه‌ روز به همراه سیستم تیکتینگ برای حل مشکلات کاربران",
                    },
                    {
                      title: "تنوع سرویس ها:",
                      desc: "ارائه‌ی خدمات برای اکثر پلتفرم‌ها مانند اینستاگرام، توییتر، تلگرام و غیره",
                    },
                    {
                      title: "امنیت بالا:",
                      desc: "استفاده از پروتکل‌های امن برای حفظ اطلاعات کاربران",
                    },
                    {
                      title: "گزارش‌های دقیق و شفاف:",
                      desc: "ارائه‌ی گزارش‌های منظم از وضعیت سفارشات و عملکرد سرویس‌ها",
                    },
                    {
                      title: "قیمت‌های منصفانه و رقابتی:",
                      desc: "ارائه‌ی بهترین کیفیت خدمات با مناسب ترین قیمت",
                    },
                    {
                      title: "پرداخت امن بانکی:",
                      desc: "پشتیبانی از معتبرترین درگاه‌های پرداخت ایرانی با امنیت بالا",
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-base leading-[30px]"
                    >
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                      <p className="text-white/90">
                        <span className="font-bold text-white ml-1">
                          {item.title}
                        </span>
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Left Side: Image Placeholder */}
              {/* Based on CSS: width: 431px; height: 436px; */}
              <div className="relative w-full max-w-[431px] aspect-square flex-shrink-0">
                <div className="w-full h-full rounded-3xl backdrop-blur-sm flex flex-col items-center justify-center text-[#94A3B8] transition-all hover:border-[#5A5A86] hover:bg-[#161B22]">
                  <Image src={serviceCycle} alt="خدمات" />
                </div>

                {/* Decorative Background Glow matching the blue accents in the image */}
                <div className="absolute -inset-4 bg-blue-600/20 blur-[60px] rounded-full -z-10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
