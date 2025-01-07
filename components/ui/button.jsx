import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-chart-2 text-primary-foreground shadow hover:bg-chart-2/70 hover:shadow-inner hover:shadow-violet-900 hover:scale-110 add-transition",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-chart-1 bg-background add-transition hover:bg-chart-1",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:underline hover:decoration-2",
        link: "text-primary underline-offset-4 hover:underline",
        navigate:
          "appearence-none bg-background text-foreground/80 border-2 border-chart-1 rounded-md cursor-pointer shadow-md shadow-chart-1/50 focus:outline-none hover:border-none hover:text-white hover:shadow-[inset_0_0_10px_20px] hover:shadow-chart-2 hover:scale-105 transition-all duration-500 ease-in-out"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "px-2 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
