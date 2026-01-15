/**
 * Interactive Hover Button Component
 * Creates a button with interactive hover effects
 */

import { cn } from "../../utils/cn";

export function InteractiveHoverButton({
  text,
  className,
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-md border border-neutral-200 bg-transparent p-2 text-center font-semibold",
        className
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {children || text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{children || text}</span>
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-neutral-600 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-neutral-600"></div>
    </button>
  );
}