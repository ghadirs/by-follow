import {
  CreditCard,
  MonitorSmartphone,
  ShoppingCart,
  Users,
} from "lucide-react";

export default function QuickServiceLinks() {
  return (
    <div className="relative z-10 mx-auto mb-10 flex w-full max-w-[1072px] flex-wrap items-center justify-center gap-4 lg:justify-between">
      {[
        {
          title: "خدمات شبکه های اجتماعی",
          icon: <Users className="h-5 w-5 text-white" />,
        },
        {
          title: "کارت های مجازی",
          icon: <CreditCard className="h-5 w-5 text-white" />,
        },
        {
          title: "سیم کارت مجازی",
          icon: <MonitorSmartphone className="h-5 w-5 text-white" />,
        },
        {
          title: "خرید و فروش اکانت مجازی",
          icon: <ShoppingCart className="h-5 w-5 text-white" />,
        },
        {
          title: "دیجیتال مارکتینگ",
          icon: <ShoppingCart className="h-5 w-5 text-white" />,
        },
      ].map((item, index) => (
        <div key={`quick-service-link-${index}`} className="box-border flex flex-row items-center justify-start px-4 w-[193px] h-[52px] bg-[#222852]/50 rounded-[13px] transition-transform hover:scale-105 hover:bg-[#222852] cursor-pointer">
          {item.icon}
          <span className="text-[12px] leading-[18px] text-white text-right mx-auto">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}
