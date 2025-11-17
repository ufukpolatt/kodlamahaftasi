import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-3xl border border-white/70 bg-white/95 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };

