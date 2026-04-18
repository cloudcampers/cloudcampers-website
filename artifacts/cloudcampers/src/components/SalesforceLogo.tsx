export function SalesforceMark({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 200 148"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Salesforce cloud shape — official proportions */}
      <path
        d="M82.5 26c6.6-6.8 15.8-11 26-11 14.5 0 27.1 8.3 33.5 20.5
           5.8-2.6 12.3-4 19-4 25.1 0 45.5 20.5 45.5 45.8
           0 25.3-20.4 45.8-45.5 45.8H38.9
           c-20.2 0-36.6-16.5-36.6-36.8
           0-17.7 12.6-32.4 29.3-35.9
           -0.8-2.9-1.2-5.9-1.2-9.1
           0-21.5 17.4-38.9 38.9-38.9
           6.8 0 13.2 1.7 18.7 4.6"
        fill="#00A1E0"
      />
    </svg>
  );
}

export function SalesforceFull({ className = "", height = 36 }: { className?: string; height?: number }) {
  const scale = height / 148;
  const width = 460 * scale;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 460 148"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M82.5 26c6.6-6.8 15.8-11 26-11 14.5 0 27.1 8.3 33.5 20.5
           5.8-2.6 12.3-4 19-4 25.1 0 45.5 20.5 45.5 45.8
           0 25.3-20.4 45.8-45.5 45.8H38.9
           c-20.2 0-36.6-16.5-36.6-36.8
           0-17.7 12.6-32.4 29.3-35.9
           -0.8-2.9-1.2-5.9-1.2-9.1
           0-21.5 17.4-38.9 38.9-38.9
           6.8 0 13.2 1.7 18.7 4.6"
        fill="#00A1E0"
      />
      <text
        x="220"
        y="100"
        fontFamily="'Arial', sans-serif"
        fontSize="70"
        fontWeight="700"
        fill="#00A1E0"
        letterSpacing="-1"
      >
        salesforce
      </text>
    </svg>
  );
}
