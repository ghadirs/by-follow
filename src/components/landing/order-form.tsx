import Button from "@/components/ui/button";
import {ChevronDown} from 'lucide-react'
import Input from "@/components/ui/input";
import {cn} from "@/lib/utils";
import Checkbox from "@/components/ui/checkbox";
import React from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema} from "@/types/zod-schema";

type FormValues = z.infer<typeof formSchema>;

const PRICE_PER_1000 = 82000;

export default function OrderForm() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            serviceCategory: "telegram-channel-group",
            serviceType: "telegram-cheap-mix",
            quantity: 100, // Default min
            terms: false,
        },
        mode: "onChange",
    });

    const { watch, register, handleSubmit, setValue, formState: { errors } } = form;
    const quantity = watch("quantity");

    // Calculate final price
    const finalPrice = React.useMemo(() => {
        const qty = Number(quantity) || 0;
        return Math.floor((qty / 1000) * PRICE_PER_1000).toLocaleString();
    }, [quantity]);

    const onSubmit = (data: FormValues) => {
        console.log("Form Submitted:", data);
        alert("سفارش با موفقیت ثبت شد!");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#020412] p-4" dir="rtl">
            {/* Main Container Rectangle 28 */}
            <div className="w-full max-w-[1065px] bg-[#070B28] rounded-[11px] border border-[#D9D9D9]/30 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

                {/* Left Side: Service Details (Rectangle 749) */}
                <div className="lg:col-span-5 order-2 lg:order-2">
                    {/* Details Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-white font-bold text-sm">جزئیات سرویس</h3>
                    </div>

                    {/* Details Box */}
                    <div className="bg-[#222852]/32 border border-[#898989] rounded-[6px] p-6 h-fit min-h-[410px] relative">

                        {/* Stats Row */}
                        <div className="flex justify-between items-center mb-6 gap-2">
                            <div className="flex flex-col items-center flex-1">
                                <span className="text-white text-[13px] font-bold mb-2">قیمت هر 1000 عدد (تومان)</span>
                                <div className="bg-[#222852]/32 border border-[#898989] rounded-[6px] w-full h-[37px] flex items-center justify-center text-white font-bold text-sm">
                                    82,000
                                </div>
                            </div>

                            <div className="flex flex-col items-center flex-1">
                                <span className="text-white text-[14px] font-bold mb-2">حداکثر تعداد</span>
                                <div className="bg-[#222852]/32 border border-[#898989] rounded-[6px] w-full h-[37px] flex items-center justify-center text-white font-bold text-sm">
                                    100000
                                </div>
                            </div>

                            <div className="flex flex-col items-center flex-1">
                                <span className="text-white text-[14px] font-bold mb-2">حداقل تعداد</span>
                                <div className="bg-[#222852]/32 border border-[#898989] rounded-[6px] w-full h-[37px] flex items-center justify-center text-white font-bold text-sm">
                                    10
                                </div>
                            </div>
                        </div>

                        {/* Description Text */}
                        <div className="mt-8 space-y-4 text-white text-[14px] leading-[30px] font-bold">
                            <h4 className="text-white mb-2">توضیحات سرویس:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span>🕒</span>
                                    <span>زمان تقریبی شروع: 0 الی 3 ساعت</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>♻️</span>
                                    <span>گارانتی: جبران ریزش 30 روزه</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>💧</span>
                                    <span>میزان ریزش: کم</span>
                                </li>
                                <li className="flex items-start gap-2 flex-wrap">
                                    <span>🔗</span>
                                    <span>نمونه لینک:</span>
                                    <span className="font-mono text-xs opacity-80" dir="ltr">https://t.me/channelname</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>🔴</span>
                                    <p className="text-sm leading-6">
                                        لینک‌های خصوصی (Private) نیز پذیرفته می‌شوند؛ می‌توانید لینک پرایوت کانال یا گروه خود را ارسال کنید.
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Right Side: Form Inputs */}
                <div className="lg:col-span-7 order-1 lg:order-1">
                    <form onSubmit={handleSubmit(onSubmit as any)} className="space-y-5">

                        {/* Service Category */}
                        <div className="space-y-2">
                            <label className="text-white text-sm font-bold block">خدمات تلگرام</label>
                            <div className="relative">
                                <select
                                    disabled
                                    className="w-full h-[37px] bg-[#222852]/32 border border-[#898989] rounded-[6px] text-white px-3 appearance-none disabled:opacity-100"
                                >
                                    <option>ممبر کانال و گروه تلگرام</option>
                                </select>
                                {/* Fake Chevron */}
                                <ChevronDown className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
                            </div>
                        </div>

                        {/* Service Type */}
                        <div className="space-y-2">
                            <label className="text-white text-sm font-bold block">لیست سرویس ها</label>
                            <div className="relative">
                                <select
                                    {...register("serviceType")}
                                    className="w-full h-[37px] bg-[#222852]/32 border border-[#898989] rounded-[6px] text-white px-3 appearance-none focus:outline-none focus:ring-1 focus:ring-slate-400"
                                >
                                    <option value="telegram-cheap-mix">ممبر تلگرام (ارزان- میکس)</option>
                                    <option value="telegram-high-quality">ممبر تلگرام (کیفیت بالا)</option>
                                </select>
                                <ChevronDown className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
                            </div>
                        </div>

                        {/* Link Input */}
                        <div className="space-y-2">
                            <label className="text-white text-sm font-bold flex items-center gap-1">
                                لینک <span className="text-[#FA2755]">*</span>
                            </label>
                            <Input
                                placeholder="لطفا لینک را مطابق با فرمت ذکر شده در توضیحات وارد نمایید."
                                {...register("link")}
                                className={cn(errors.link && "border-[#FA2755]")}
                            />
                            {errors.link && <p className="text-[#FA2755] text-xs">{errors.link.message}</p>}
                        </div>

                        {/* Quantity Input */}
                        <div className="space-y-2">
                            <label className="text-white text-sm font-bold flex items-center gap-1">
                                تعداد <span className="text-[#FA2755]">*</span>
                            </label>
                            <Input
                                type="number"
                                placeholder="تعداد مورد نظر"
                                {...register("quantity")}
                                className={cn(errors.quantity && "border-[#FA2755]")}
                            />
                            <div className="flex justify-between items-center">
                                <p className="text-white/60 text-[13px]">Min: 100 - Max: 5,000</p>
                                {errors.quantity && <p className="text-[#FA2755] text-xs">{errors.quantity.message}</p>}
                            </div>
                        </div>

                        {/* Final Cost Readonly */}
                        <div className="space-y-2">
                            <label className="text-white text-sm font-bold block">هزینه نهایی</label>
                            <div className="w-full h-[38px] bg-[#222852]/32 border border-[#898989] rounded-[6px] flex items-center px-3 text-white">
                                {finalPrice} تومان
                            </div>
                        </div>

                        {/* Full Name */}
                        <div className="space-y-2 pt-2">
                            <label className="text-white text-sm font-bold flex items-center gap-1">
                                نام و نام خانوادگی <span className="text-[#FA2755]">*</span>
                            </label>
                            <Input
                                {...register("fullName")}
                                className={cn(errors.fullName && "border-[#FA2755]")}
                            />
                            {errors.fullName && <p className="text-[#FA2755] text-xs">{errors.fullName.message}</p>}
                        </div>

                        {/* Mobile & Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-8 space-y-2">
                                <label className="text-white text-sm font-bold flex items-center gap-1">
                                    شماره موبایل <span className="text-[#FA2755]">*</span>
                                </label>
                                <Input
                                    {...register("mobile")}
                                    className={cn(errors.mobile && "border-[#FA2755]")}
                                    placeholder="0912..."
                                />
                                {errors.mobile && <p className="text-[#FA2755] text-xs">{errors.mobile.message}</p>}
                            </div>

                            <div className="md:col-span-4 space-y-2">
                                <label className="text-white text-sm font-bold block">ایمیل</label>
                                <Input
                                    {...register("email")}
                                    className={cn(errors.email && "border-[#FA2755]")}
                                />
                                {errors.email && <p className="text-[#FA2755] text-xs">{errors.email.message}</p>}
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-center gap-2 pt-2">
                            <Checkbox
                                id="terms"
                                checked={watch("terms")}
                                onCheckedChange={(checked) => setValue("terms", checked as boolean)}
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white cursor-pointer select-none"
                            >
                                با قوانین و مقررات سایت موافقم.
                            </label>
                        </div>
                        {errors.terms && <p className="text-[#FA2755] text-xs">{errors.terms.message}</p>}

                        {/* Submit Button */}
                        <div className="flex justify-center pt-4">
                            <Button
                                type="submit"
                                className="w-[203px] h-[42px] bg-[#3229AC] hover:bg-[#3229AC]/90 text-white font-extrabold text-[15px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                            >
                                تایید و پرداخت
                            </Button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}