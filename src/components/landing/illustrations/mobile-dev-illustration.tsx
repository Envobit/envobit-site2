import { cn } from "@/lib/utils";

const MobileDevIllustration = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 151 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-32 h-32", className)}
    aria-hidden="true"
  >
    <g opacity="0.1" stroke="currentColor" strokeWidth="2">
      <rect x="75" y="10" width="50" height="90" rx="10" />
      <rect x="85" y="0" width="50" height="90" rx="10" />
    </g>
    <g className="text-primary">
      <rect x="80" y="20" width="40" height="70" rx="8" stroke="currentColor" strokeWidth="2" />
      <line x1="90" y1="28" x2="110" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="100" cy="82" r="3" stroke="currentColor" strokeWidth="2" />
    </g>
    <g className="text-accent">
      <path d="M95 45H105" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M95 55H115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M95 65H108" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

export default MobileDevIllustration;
