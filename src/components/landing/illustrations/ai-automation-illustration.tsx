import { cn } from "@/lib/utils";

const AiAutomationIllustration = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 151 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-32 h-32", className)}
    aria-hidden="true"
  >
    <g opacity="0.1" stroke="currentColor" strokeWidth="2">
      <circle cx="100" cy="50" r="30" />
      <path d="M100 20 L 125 35" />
      <path d="M100 20 L 75 35" />
      <path d="M100 80 L 125 65" />
      <path d="M100 80 L 75 65" />
      <path d="M70 50 L 85 50" />
      <path d="M115 50 L 130 50" />
    </g>
    <g className="text-primary">
      <circle cx="100" cy="50" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="80" cy="35" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="120" cy="35" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="80" cy="65" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="120" cy="65" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M100 42 V 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M106 46 L 115 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M94 46 L 85 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </g>
    <g className="text-accent">
      <path d="M85 38 L 95 46" stroke="currentColor" strokeWidth="1.5" />
      <path d="M115 38 L 105 46" stroke="currentColor" strokeWidth="1.5" />
      <path d="M85 62 L 95 54" stroke="currentColor" strokeWidth="1.5" />
      <path d="M115 62 L 105 54" stroke="currentColor" strokeWidth="1.5" />
    </g>
  </svg>
);

export default AiAutomationIllustration;
