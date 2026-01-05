import { cn } from "@/lib/utils";
import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        "h-[42px] w-[203px] bg-[#3229AC] text-[16px] font-bold text-white hover:bg-[#2c249c] active:scale-95 transition-all shadow-[0_4px_14px_rgba(50,41,172,0.4)] rounded-md",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
