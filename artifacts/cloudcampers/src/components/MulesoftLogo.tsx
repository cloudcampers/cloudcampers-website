export function MulesoftMark({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="32" cy="32" r="30" fill="#00A1E0" />
      {/* Stylized M shape inside */}
      <path
        d="M14 44 L14 22 L32 35 L50 22 L50 44"
        fill="none"
        stroke="white"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Top node dots */}
      <circle cx="14" cy="20" r="4" fill="white" />
      <circle cx="50" cy="20" r="4" fill="white" />
      <circle cx="32" cy="33" r="3.5" fill="white" />
    </svg>
  );
}

export function MulesoftFull({ className = "", height = 32 }: { className?: string; height?: number }) {
  const scale = height / 64;
  const width = 220 * scale;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="30" fill="#00A1E0" />
      <path
        d="M14 44 L14 22 L32 35 L50 22 L50 44"
        fill="none"
        stroke="white"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="14" cy="20" r="4" fill="white" />
      <circle cx="50" cy="20" r="4" fill="white" />
      <circle cx="32" cy="33" r="3.5" fill="white" />
      <text
        x="72"
        y="44"
        fontFamily="'Arial', sans-serif"
        fontSize="26"
        fontWeight="700"
        fill="#00A1E0"
      >
        MuleSoft
      </text>
    </svg>
  );
}
