interface SectionDividerProps {
  fromBg?: string;
  toColor?: string;
  invert?: boolean;
  className?: string;
}

export function SectionDivider({
  fromBg = 'transparent',
  toColor = '#F5EED8',
  invert = false,
  className = '',
}: SectionDividerProps) {
  const patternId = `pixel-steps-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div
      aria-hidden="true"
      className={`relative w-full h-6 sm:h-8 overflow-hidden select-none pointer-events-none z-20 ${className}`}
      style={{ backgroundColor: fromBg }}
    >
      <svg
        viewBox="0 0 120 16"
        preserveAspectRatio="none"
        className={`w-full h-full block ${invert ? 'rotate-180' : ''}`}
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="24"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,16 L0,12 L4,12 L4,8 L8,8 L8,4 L12,4 L12,0 L16,0 L16,4 L20,4 L20,8 L24,8 L24,12 L24,16 Z"
              fill={toColor}
            />
          </pattern>
        </defs>
        <rect width="100%" height="16" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
