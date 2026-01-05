"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import loginImg from "@/assets/landing/login.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

// --- Zod Schema Validation ---
const loginSchema = z.object({
  mobile: z
    .string()
    .min(10, "شماره موبایل باید حداقل ۱۰ رقم باشد")
    .regex(/^09[0-9]{9}$/, "فرمت شماره موبایل صحیح نیست"),
  password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

// --- Main Login Modal Component ---

export default function LoginModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form Data:", data);
    // Add logic here
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <span onClick={() => setIsOpen(true)}>ورود</span>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogTitle title="ورود به بایفالو" />
        <div className="absolute -left-4 -top-10 flex h-[96px] w-[192px] items-center justify-center">
          {/* Simulating the 3D button effect with CSS */}
          <div className="relative flex h-14 w-32 items-center justify-center rounded-2xl bg-gradient-to-b from-[#ff8fa3] to-[#ff4d6d] shadow-[0_6px_0_#c9184a] transform -rotate-6">
            <Image src={loginImg} alt="login" />
          </div>
        </div>

        <h2 className="mb-10 w-full text-right text-[16px] font-bold text-white md:text-[20px]">
          ورود به بایفالو
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-6"
        >
          {/* Mobile Number Field */}
          <div className="flex flex-col gap-2" dir='rtl'>
            <label className="flex items-center justify-start gap-1 text-[14px] font-bold text-white">
              شماره همراه <span className="text-[#FA2755]">*</span>
            </label>
            <Input
              className={`flex h-[37px] w-full rounded-[6px] border border-[#898989] bg-[#222852]/32 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50`}
              type="text"
              dir="ltr"
              {...register("mobile")}
            />
            {errors.mobile && (
              <span className="text-right text-xs text-[#FA2755]">
                {errors.mobile.message}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2" dir='rtl'>
            <label className="flex items-center justify-start gap-1 text-[14px] font-bold text-white">
              رمز عبور <span className="text-[#FA2755]">*</span>
            </label>
            <Input
              type="password"
              dir="ltr"
              className={`flex h-[37px] w-full rounded-[6px] border border-[#898989] bg-[#222852]/32 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50`}
              {...register("password")}
            />
            {errors.password && (
              <span className="text-right text-xs text-[#FA2755]">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-4 flex justify-center">
            <Button type="submit" className={``}>
              ورود
            </Button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-5 flex items-center justify-center gap-2 text-[14px] font-semibold text-white">
          <span>حساب کاربری ندارید؟</span>
          <a href="#" className="text-[#FDF27B] hover:underline">
            ثبت نام
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
