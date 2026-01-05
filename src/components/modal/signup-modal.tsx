"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import signupImg from "@/assets/landing/signup.png";
import Image from "next/image";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

// --- Zod Schema Validation ---
const signupSchema = z
  .object({
    mobile: z
      .string()
      .min(10, "شماره موبایل باید حداقل ۱۰ رقم باشد")
      .regex(/^09[0-9]{9}$/, "فرمت شماره موبایل صحیح نیست"),
    password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
    confirmPassword: z.string().min(8, "تکرار رمز عبور الزامی است"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن مطابقت ندارند",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

// --- Main Signup Modal Component ---

export default function SignupModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log("Form Data:", data);
    // Add logic here
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-black/50 p-4"
      dir="rtl"
    >
      {/* Modal Container: Rectangle 747 */}
      <div className="relative flex h-auto w-full max-w-[510px] flex-col items-center bg-[#070B28] px-8 pb-10 pt-16 shadow-2xl rounded-[30px] md:h-[563px]">
        <div className="absolute -left-4 -top-10 flex h-[96px] w-[192px] items-center justify-center">
          {/* Simulating the 3D button effect with CSS */}
          <div className="relative flex h-14 w-32 items-center justify-center rounded-2xl bg-gradient-to-b from-[#ff8fa3] to-[#ff4d6d] shadow-[0_6px_0_#c9184a] transform -rotate-6">
            <Image src={signupImg} alt="signup" />
          </div>
        </div>

        <h2 className="mb-10 w-full text-right font-['Inter'] text-[16px] font-bold text-white md:text-[20px]">
          ثبت نام در بایفالو
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-6"
        >
          {/* Mobile Number Field */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center justify-end gap-1 font-['Inter'] text-[14px] font-bold text-white">
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
          <div className="flex flex-col gap-2">
            <label className="flex items-center justify-end gap-1 font-['Inter'] text-[14px] font-bold text-white">
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

          {/* Confirm Password Field */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center justify-end gap-1 font-['Inter'] text-[14px] font-bold text-white">
              تکرار رمز عبور <span className="text-[#FA2755]">*</span>
            </label>
            <Input
              type="password"
              dir="ltr"
              className={`flex h-[37px] w-full rounded-[6px] border border-[#898989] bg-[#222852]/32 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50`}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="text-right text-xs text-[#FA2755]">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          {/* Terms Text */}
          <p className="mt-2 text-center font-['Poppins'] text-[13px] font-bold text-white md:text-right">
            با ثبت نام در بایفالو،{" "}
            <span className="text-[#FDF27B] cursor-pointer hover:underline">
              قوانین و مقررات
            </span>{" "}
            را می پذیرم.
          </p>

          {/* Submit Button */}
          <div className="mt-4 flex justify-center">
            <Button
              type="submit"
              className={`inline-flex items-center justify-center rounded-[5.58px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
            >
              ثبت نام
            </Button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-8 flex items-center gap-2 font-['Poppins'] text-[14px] font-semibold text-white">
          <span>حساب کاربری دارید؟</span>
          <a href="#" className="text-[#FDF27B] hover:underline">
            ورود
          </a>
        </div>
      </div>
    </div>
  );
}
