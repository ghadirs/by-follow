import {cn} from "@/lib/utils";
import React from "react";

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, ...props }, ref) => {
      return (
          <button
              className={cn(
                  "inline-flex items-center justify-center rounded-[6px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50",
                  className
              )}
              ref={ref}
              {...props}
          />
      );
    }
);
Button.displayName = "Button";

export default Button;