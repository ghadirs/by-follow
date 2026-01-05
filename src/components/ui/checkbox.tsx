import React from "react";
import {Check} from 'lucide-react'
import {cn} from "@/lib/utils";

const Checkbox = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { id?: string ; checked?: boolean; onCheckedChange?: (checked: boolean) => void }>(
    ({ className, checked, onCheckedChange, ...props }, ref) => (
        <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            onClick={() => onCheckedChange?.(!checked)}
            ref={ref}
            className={cn(
                "peer h-[17px] w-[17px] shrink-0 rounded-[5px] border border-white/20 bg-white/5 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#3229AC] data-[state=checked]:text-white",
                className
            )}
            data-state={checked ? "checked" : "unchecked"}
            {...props}
        >
            {checked && <Check className="h-3 w-3 mx-auto" />}
        </button>
    )
);
Checkbox.displayName = "Checkbox";

export default Check;