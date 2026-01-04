import Image from "next/image";
import Link from "next/link";
import byFollowLogo from "@/assets/by-follow.png";

export default function Navbar() {
  return (
    <header className="w-full pt-[40px]" dir="rtl">
      <div className="container mx-auto max-w-[1280px] px-6 md:px-0 flex items-center justify-between">
        {/* Right Section: Logo & Navigation */}
        <div className="flex items-center gap-16">
          {/* Logo Placeholder */}
          <Image src={byFollowLogo} alt={"logo"} />

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { title: "بلاگ", link: "#" },
              {
                title: "تماس با ما",
                link: "#",
              },
              { title: "درباره ما", link: "#" },
            ].map((item, index) => (
              <Link
                key={`nav-${index}`}
                href={item.link}
                className="text-white text-[14px] font-bold leading-[17px] hover:text-white/80 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Left Section: Auth Button */}
        <button className="flex items-center justify-center w-[193px] h-[52px] bg-[linear-gradient(180deg,rgba(55,67,152,0.5)_27.78%,rgba(115,124,187,0.5)_100%)] rounded-[13.39px] text-white font-['Inter'] font-bold text-[15px] leading-[18px] backdrop-blur-sm border border-white/5 shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform active:scale-95">
          ورود / ثبت نام
        </button>
      </div>
    </header>
  );
}
