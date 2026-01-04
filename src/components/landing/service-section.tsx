import { CheckCircle2, Image as ImageIcon } from 'lucide-react';

export default function ServicesSection() {
    return (
        <section className="relative w-full py-16 md:py-24" dir="rtl">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Side: Image Placeholder */}
                    {/* Based on CSS: width: 431px; height: 436px; */}
                    <div className="relative w-full max-w-[431px] aspect-square flex-shrink-0">
                        <div className="w-full h-full rounded-3xl border-2 border-dashed border-[#5A5A86]/50 bg-[#161B22]/50 backdrop-blur-sm flex flex-col items-center justify-center text-[#94A3B8] transition-all hover:border-[#5A5A86] hover:bg-[#161B22]">
                            <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
                            <span className="text-sm font-medium">روند ثبت نام، سفارش و تکمیل</span>
                            <span className="text-xs opacity-50 mt-2 text-center px-8">
                  (Placeholder for 431px x 436px PNG)
                </span>
                        </div>

                        {/* Decorative Background Glow matching the blue accents in the image */}
                        <div className="absolute -inset-4 bg-blue-600/20 blur-[60px] rounded-full -z-10 pointer-events-none"></div>
                    </div>

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
                                    desc: "کاربران می‌توانند بدون ایجاد حساب کاربری، خدمات را سفارش دهند و پرداخت را به‌ راحتی انجام دهند."
                                },
                                {
                                    title: "پشتیبانی ۲۴ ساعته:",
                                    desc: "ارائه پشتیبانی آنلاین در هر لحظه از شبانه‌ روز به همراه سیستم تیکتینگ برای حل مشکلات کاربران"
                                },
                                {
                                    title: "تنوع سرویس ها:",
                                    desc: "ارائه‌ی خدمات برای اکثر پلتفرم‌ها مانند اینستاگرام، توییتر، تلگرام و غیره"
                                },
                                {
                                    title: "امنیت بالا:",
                                    desc: "استفاده از پروتکل‌های امن برای حفظ اطلاعات کاربران"
                                },
                                {
                                    title: "گزارش‌های دقیق و شفاف:",
                                    desc: "ارائه‌ی گزارش‌های منظم از وضعیت سفارشات و عملکرد سرویس‌ها"
                                },
                                {
                                    title: "قیمت‌های منصفانه و رقابتی:",
                                    desc: "ارائه‌ی بهترین کیفیت خدمات با مناسب ترین قیمت"
                                },
                                {
                                    title: "پرداخت امن بانکی:",
                                    desc: "پشتیبانی از معتبرترین درگاه‌های پرداخت ایرانی با امنیت بالا"
                                }
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-base leading-[30px]">
                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                                    <p className="text-white/90">
                                        <span className="font-bold text-white ml-1">{item.title}</span>
                                        {item.desc}
                                    </p>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
}