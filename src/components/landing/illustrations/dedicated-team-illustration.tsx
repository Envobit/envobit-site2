import { cn } from "@/lib/utils";

const DedicatedTeamIllustration = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 151 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-32 h-32", className)}
    aria-hidden="true"
  >
    <g opacity="0.1" stroke="currentColor" strokeWidth="2">
      <circle cx="112.25" cy="31.5" r="18" />
      <path d="M95 60 C 95 50, 130 50, 130 60" />
      <circle cx="85" cy="50" r="15" />
      <path d="M70 80 C 70 65, 100 65, 100 80" />
       <circle cx="140" cy="55" r="12" />
      <path d="M128 85 C 128 70, 152 70, 152 85" />
    </g>
    <g className="text-primary">
      <circle cx="112" cy="40" r="12" stroke="currentColor" strokeWidth="2" />
      <path d="M98 65 C 102 55, 122 55, 126 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <g className="text-accent">
       <circle cx="88" cy="60" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M78 80 C 80 72, 96 72, 98 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default DedicatedTeamIllustration;
