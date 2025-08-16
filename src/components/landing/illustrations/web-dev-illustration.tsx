import { cn } from "@/lib/utils";

const WebDevIllustration = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 151 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-32 h-32", className)}
    aria-hidden="true"
  >
    <g opacity="0.1" stroke="currentColor" strokeWidth="2">
      <rect x="75" y="-7" width="80" height="60" rx="5" />
      <rect x="65" y="5" width="80" height="60" rx="5" />
    </g>
    <g className="text-primary">
      <path d="M93 21.75H69C68.4 21.75 67.75 22.4 67.75 23.25V42.75C67.75 43.6 68.4 44.25 69 44.25H93C93.6 44.25 94.25 43.6 94.25 42.75V23.25C94.25 22.4 93.6 21.75 93 21.75Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M75.25 25.5H87.75" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M72.5 31.5L78.5 37.5L72.5 43.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M84.5 31.5L81.5 43.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <g className="text-accent">
      <circle cx="112" cy="31" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M107 31H117" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M112 26V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

export default WebDevIllustration;
