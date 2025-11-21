"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-codeweek-purple-600 to-codeweek-pink-600 text-white shadow-glow hover:from-codeweek-purple-700 hover:to-codeweek-pink-700 focus-visible:ring-codeweek-purple-500 transform hover:scale-105 transition-all",
        secondary:
          "bg-codeweek-muted/50 border border-codeweek-purple-500/30 text-codeweek-purple-200 hover:bg-codeweek-muted/70 hover:border-codeweek-purple-500/50 focus-visible:ring-codeweek-purple-500/50 transform hover:scale-105 transition-all",
        ghost:
          "bg-transparent text-codeweek-purple-300 hover:bg-codeweek-purple-500/10 hover:text-codeweek-purple-200 focus-visible:ring-codeweek-purple-500/30 transform hover:scale-105 transition-all",
        outline:
          "border border-codeweek-purple-500 text-codeweek-purple-300 hover:bg-codeweek-purple-500/10 hover:text-white focus-visible:ring-codeweek-purple-500/50 transform hover:scale-105 transition-all",
        ai:
          "bg-gradient-to-r from-codeweek-ai-500 to-codeweek-purple-600 text-white shadow-glow hover:from-codeweek-ai-600 hover:to-codeweek-purple-700 focus-visible:ring-codeweek-ai-500 transform hover:scale-105 transition-all data-stream",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
