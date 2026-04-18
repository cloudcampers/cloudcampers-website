interface MarkProps {
  size?: number;
  className?: string;
}

interface FullProps {
  height?: number;
  className?: string;
}

export function CloudCampersMark({ size = 36, className = "" }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cloud body */}
      <path
        d="M37 33H13a9 9 0 01-1.5-17.87A11 11 0 0132 18.3 7 7 0 0137 33z"
        fill="#2D6A4F"
      />
      {/* Mountain/tent peak */}
      <path
        d="M18 33L24.5 22L31 33"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Tent door */}
      <path
        d="M21.5 33 Q24.5 29 27.5 33"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function CloudCampersFull({ height = 36, className = "" }: FullProps) {
  const markSize = height;
  const fontSize = height * 0.58;

  return (
    <div className={`flex items-center gap-2.5 ${className}`} style={{ height }}>
      <CloudCampersMark size={markSize} />
      <span
        style={{
          fontSize,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
        }}
      >
        <span style={{ color: "#2D6A4F" }}>Cloud</span>
        <span style={{ color: "#1C1C1E" }}>Campers</span>
      </span>
    </div>
  );
}
