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
              <div className="relative mt-8 h-40 w-full md:mt-0 md:h-full md:w-1/2">
                {/* Simulating the 3D Crypto Image */}
                <div className="absolute left-0 top-1/2 flex h-full w-full -translate-y-1/2 items-center justify-center">
                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-24 w-24 rounded-full bg-blue-600 blur-xl"></div>
                    <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl">
                      <span className="text-4xl font-bold">₿</span>
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -right-12 top-0 rotate-12 rounded-lg bg-green-500 p-2 shadow-lg">
                      <span className="text-xs font-bold">BUY</span>
                    </div>
                    <div className="absolute -left-8 bottom-0 -rotate-12 rounded-full bg-red-500 p-3 shadow-lg">
                      <span className="text-xs font-bold">VOTE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Services Section */}
          <div className="mb-24 flex flex-col items-center">
            <h2 className="mb-10 text-xl font-extrabold text-white md:text-2xl">
              خدمات شبکه های اجتماعی
            </h2>

            <div className="flex w-full max-w-4xl flex-wrap justify-center gap-6 md:gap-8">
              {[
                { color: 'bg-[#1DB954]', icon: <Music className="text-white" /> }, // Spotify
                { color: 'bg-[#1DA1F2]', icon: <Twitter className="text-white" /> }, // Twitter
                { color: 'bg-[#FF0000]', icon: <Youtube className="text-white" /> }, // Youtube
                { color: 'bg-[#FFFC00]', icon: <div className="h-5 w-5 rounded-full bg-black" /> }, // Snapchat
                { color: 'bg-[#25D366]', icon: <MessageCircle className="text-white" /> }, // Whatsapp
                { color: 'bg-[#EA4C89]', icon: <div className="text-white font-bold">Dr</div> }, // Dribbble
                { color: 'bg-[#5865F2]', icon: <Gamepad2 className="text-white" /> }, // Discord
                { color: 'bg-[#000000]', icon: <Video className="text-white" /> }, // Tiktok
                { color: 'bg-gradient-to-tr from-yellow-400 to-purple-600', icon: <Instagram className="text-white" /> }, // Instagram
              ].map((social, i) => (
                  <div
                      key={i}
                      className={`flex h-[60px] w-[60px] items-center justify-center rounded-2xl shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl md:h-[80px] md:w-[80px] ${social.color}`}
                  >
                    <div className="scale-125 md:scale-150">
                      {social.icon}
                    </div>
                  </div>
              ))}
            </div>

            <div className="mt-16 h-[2px] w-full max-w-xs bg-[#5A5A86] opacity-50"></div>
          </div>

          {/* Why Use Our Services / Process Flow */}
          <div className="mx-auto flex w-full max-w-[1072px] flex-col-reverse gap-12 lg:flex-row lg:items-center lg:justify-between">

            {/* Left: Process Diagram */}
            <div className="relative mx-auto h-[400px] w-[340px] md:w-[430px]">
              {/* Center Connection Circle */}
              <div className="absolute left-1/2 top-1/2 z-0 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#5A5A86] opacity-30"></div>

              <div className="absolute left-1/2 top-1/2 z-10 flex h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#0B0E14] text-center shadow-2xl ring-1 ring-white/10">
                <span className="text-sm font-bold leading-relaxed text-white">
                  روند ثبت نام،<br/>سفارش و تکمیل
                </span>
                <ArrowDown className="mt-2 h-4 w-4 animate-bounce text-blue-500" />
              </div>

              {/* Step 1: Top Right */}
              <div className="absolute right-0 top-0 flex w-[180px] flex-col items-end gap-2 text-right">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-[#161B22]">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-sm font-bold text-white">ثبت نام و ورود آسان</h3>
                <p className="text-[10px] leading-relaxed text-gray-400">
                  پروسه ثبت نام و ورود تنها با چند کلیک ساده در چند دقیقه
                </p>
                <ArrowLeft className="absolute -left-4 top-6 text-blue-500/50" />
              </div>

              {/* Step 2: Top Left */}
              <div className="absolute left-0 top-0 flex w-[180px] flex-col items-start gap-2 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-[#161B22]">
                  <Instagram className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="w-full text-right text-sm font-bold text-white">انتخاب سرویس موردنظر</h3>
                <p className="w-full text-right text-[10px] leading-relaxed text-gray-400">
                  انتخاب سرویس دلخواه از طریق پنل کاربری یا به صورت مستقیم
                </p>
                <ArrowDown className="absolute -bottom-8 left-6 text-blue-500/50" />
              </div>

              {/* Step 3: Bottom Left */}
              <div className="absolute bottom-0 left-0 flex w-[180px] flex-col items-start gap-2 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-[#161B22]">
                  <CreditCard className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="w-full text-right text-sm font-bold text-white">پرداخت از درگاه بانکی</h3>
                <p className="w-full text-right text-[10px] leading-relaxed text-gray-400">
                  خرید با لاگین یا بدون ثبت‌نام و پرداخت سریع از طریق درگاه بانکی
                </p>
                <ArrowRight className="absolute -right-4 top-6 text-blue-500/50" />
              </div>

              {/* Step 4: Bottom Right */}
              <div className="absolute bottom-0 right-0 flex w-[180px] flex-col items-end gap-2 text-right">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-[#161B22]">
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-sm font-bold text-white">تکمیل سریع سفارش</h3>
                <p className="text-[10px] leading-relaxed text-gray-400">
                  سفارش شما در کوتاه ترین زمان ممکن تکمیل و اطلاع رسانی میشود
                </p>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col items-end text-right">
              <h2 className="mb-8 text-xl font-bold text-white md:text-2xl">
                چرا استفاده از خدمات پنل ما ؟
              </h2>
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-end gap-4">
                  <div className="text-right">
                    <h4 className="text-sm font-bold">پشتیبانی و کیفیت</h4>
                    <p className="text-xs text-gray-400">تضمین کیفیت و پشتیبانی ۲۴ ساعته</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-4">
                  <div className="text-right">
                    <h4 className="text-sm font-bold">قیمت مناسب</h4>
                    <p className="text-xs text-gray-400">ارائه بهترین قیمت‌ها در بازار رقابتی</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-4">
                  <div className="text-right">
                    <h4 className="text-sm font-bold">تنوع خدمات</h4>
                    <p className="text-xs text-gray-400">پوشش تمامی پلتفرم‌های محبوب اجتماعی</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <MonitorSmartphone className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </main>

        {/* Footer Placeholder */}
        {/* <Footer /> */}
      </div>
  );
}