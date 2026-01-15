/**
 * Pulsating Button Component
 * Creates a button with pulsating animation effect
 */

import { cn } from "../../utils/cn";

export function PulsatingButton({
  className,
  children,
  pulseColor = "#0066FF",
  duration = "1.5s",
  ...props
}) {
  return (
    <button
      className={cn(
        "relative text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-black px-4 py-2",
        className
      )}
      style={{
        "--pulse-color": pulseColor,
        "--duration": duration,
      }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse-ring" />
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          80%,
          100% {
            transform: translate(-50%, -50%) scale(1.8);
            opacity: 0;
          }
        }
        
        .animate-pulse-ring {
          animation: pulse-ring var(--duration) cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
          background-color: var(--pulse-color);
        }
      `}</style>
    </button>
  );
}