import { Send, User, Eye, Heart, MessageCircle, Star, CheckCircle2 } from 'lucide-react';
import {JSX} from "react";
import OrderForm from "@/components/landing/order-form";

interface Props {
    serviceName: string;
    serviceIcon: JSX.Element;
}

export default function ServiceSelection({serviceName, serviceIcon}: Props) {
    return (
        <div className="w-full max-w-[1000px] mx-auto p-4" dir="rtl">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {[
                    {title:`ممبر کانال و گروه ${serviceName}`, icon:<User className="w-4 h-4 text-white fill-current" />},
                    {title:`ویو پست ${serviceName}`, icon:<Eye className="w-4 h-4 text-white fill-current" />},
                    {title:`ری اکشن ${serviceName}`, icon:<Heart className="w-4 h-4 text-white fill-current" />},
                    {title:`کامنت ${serviceName}`, icon:<MessageCircle className="w-4 h-4 text-white fill-current" />},
                    {title:`رای پست ${serviceName}`, icon:<CheckCircle2 className="w-4 h-4 text-white" />},
                    {title:`استارز پست ${serviceName}`, icon:<Star className="w-4 h-4 text-white fill-current" />},
                ].map((item, index) =>
                    <button className="relative group w-full sm:w-[222px] h-[65px] bg-[#222852] border border-[#2C3D94] rounded-[16px] flex items-center justify-between px-4 cursor-pointer hover:bg-[#2C3D94] transition-all shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
                        <span className="text-white font-['Poppins'] font-bold text-[14px] sm:text-[15px] z-10">{item.title}</span>
                        <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-16 h-16 pointer-events-none">
                            {serviceIcon}
                            <div className="absolute bottom-2 right-2 w-7 h-7 bg-[#D946EF] rounded-full flex items-center justify-center border-2 border-[#222852] shadow-lg z-10">
                                {item.icon}
                            </div>
                        </div>
                    </button>
                    )}

                <OrderForm />

                {/* Spacer to maintain grid alignment if needed */}
                <div className="hidden lg:block w-[222px] h-[65px]"></div>
                <div className="hidden lg:block w-[222px] h-[65px]"></div>

            </div>
        </div>
    );
}