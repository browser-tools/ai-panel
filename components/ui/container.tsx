import React from "react"
import clsx from "clsx"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width of the container (e.g. '2xl', '4xl', 'full').
   * Defaults to '2xl'.
   */
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full"
  /**
   * Center the container horizontally
   */
  center?: boolean
}

const maxWidthMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  full: "max-w-full",
}

export function Container({
  maxWidth = "2xl",
  center = true,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "container",
        maxWidthMap[maxWidth],
        center && "mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
