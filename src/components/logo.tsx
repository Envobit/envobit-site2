const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="120"
    height="32"
    viewBox="0 0 120 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16Z"
      className="fill-primary"
    />
    <path
      d="M16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32ZM16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
      className="fill-foreground"
    />
    <text
      x="40"
      y="22"
      fontFamily="'Space Grotesk', sans-serif"
      fontSize="20"
      fontWeight="bold"
      className="fill-foreground"
    >
      Envobit
    </text>
  </svg>
);

export default Logo;
