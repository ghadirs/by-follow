import { Mail, Smartphone, Send, ShieldCheck } from "lucide-react";
import Image from "next/image";
import zarinPalImg from "@/assets/landing/zarin-pal.png";
import instagramIcon from '@/assets/icons/instagram-white.png'
import telegramIcon from '@/assets/icons/telegram-white.png'

export default function Footer() {
  return (
    <>
      <footer
        className="relative w-full mt-16 pt-16 pb-8 bg-gradient-to-t from-black/80 to-transparent"
        dir="rtl"
      >
        {/* Top Border/Glow */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A5A86] to-transparent opacity-50"></div>

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
            {/* Column 1: Brand & Contact Info */}
            <div className="flex flex-col gap-6 max-w-sm">
              <h3 className="text-white font-extrabold text-lg text-center">
                پنل اختصاصی بایفالو
              </h3>
              <div>

              <p className="text-white/80 text-sm leading-8 font-medium text-justify">
                ارائه‌دهنده‌ی جامع‌ترین و باکیفیت‌ترین خدمات؛
              </p>
              <p className="text-white/80 text-sm leading-8 font-medium text-justify">
                همراه با پشتیبانی
                حرفه‌ای و تضمین رضایت کاربران.
              </p>
              </div>

              <div className="flex justify-between items-start mt-2">
                <div className='flex flex-col w-full items-center my-auto'>

                <span className="text-white font-bold text-xs mb-1">
                  با ما همراه باشید.
                </span>
                  <div className='flex items-center justify-center w-full gap-4 mt-4'>
                    <Image className='w-[13px] h-[13px]' src={instagramIcon}  alt="instagram" />
                    <Image className='w-[13px] h-[13px]' src={telegramIcon}  alt="telegram" />
                  </div>
                </div>

                <div className='flex flex-col gap-4 mr-8'>
                {/* Email Box */}
                <div className="flex items-center justify-between bg-[#3229AC]/40 border border-[#3229AC]/20 rounded-lg px-4 py-3 transition-colors hover:bg-[#3229AC]/60 group cursor-pointer">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] text-white/90 font-medium">
                      آدرس ایمیل
                    </span>
                    <span className="text-[10px] text-white/70 font-sans">
                      support@byfollow.ir
                    </span>
                  </div>
                  <Mail className="text-white w-5 h-5 opacity-80 group-hover:opacity-100" />
                </div>

                {/* Telegram Box */}
                <div className="flex items-center justify-between bg-[#3229AC]/40 border border-[#3229AC]/20 rounded-lg px-4 py-3 transition-colors hover:bg-[#3229AC]/60 group cursor-pointer">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] text-white/90 font-medium">
                      پشتیبانی تلگرام
                    </span>
                    <span className="text-[10px] text-white/70 font-sans">
                      @byfollow_support
                    </span>
                  </div>
                  <Send className="text-white w-4 h-4 opacity-80 group-hover:opacity-100 rotate-180" />
                </div>
              </div>
            </div>
            </div>

            {/* Middle Columns Wrapper */}
            <div className="flex w-full lg:w-auto justify-between lg:justify-start gap-16 lg:gap-24">
              {/* Column 2: Quick Access */}
              <div className="flex flex-col gap-6">
                <h4 className="text-[#94A3B8] font-bold text-sm">
                  دسترسی سریع
                </h4>
                <ul className="flex flex-col gap-4">
                  {["درباره ما", "بلاگ", "سوالات متداول", "تماس با ما"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-white text-xs font-bold hover:text-blue-400 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Column 3: Support */}
              <div className="flex flex-col gap-6">
                <h4 className="text-[#94A3B8] font-bold text-sm">پشتیبانی</h4>
                <ul className="flex flex-col gap-4">
                  {["قوانین و مقررات پنل بایفالو", "ضوابط حفظ حریم خصوصی"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-white text-xs font-bold hover:text-blue-400 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Column 4: Trust Badges (ZarinPal Placeholders) */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                {/* Badge 1 */}
                <div className="w-[76px] h-[86px] bg-[#F9F9F9] rounded-[15px] flex items-center justify-center overflow-hidden relative shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  {/* CSS gradient simulation from provided code */}
                  <div className="w-[60px] h-[85px] flex items-center justify-center relative">
                    <Image
                      src={zarinPalImg}
                      alt="zarinpal"
                      className="absolute w-full h-full bg-yellow-400 flex items-center justify-center"
                    />
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="w-[76px] h-[86px] bg-[#F9F9F9] rounded-[15px] flex items-center justify-center overflow-hidden relative shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-[60px] h-[85px] flex items-center justify-center relative">
                    <Image
                      src={zarinPalImg}
                      alt="zarinpal"
                      className="absolute w-full h-full bg-yellow-400 flex items-center justify-center"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-[10px]">
                <ShieldCheck className="w-4 h-4" />
                <span>پرداخت امن و مطمئن</span>
              </div>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-white/75 text-[13px] md:text-[15px] font-medium ">
              حق نشر © 2025 ByFollow. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
