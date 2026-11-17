import React, { useRef, useState } from 'react';

interface TiltCardProps {
  key?: React.Key;
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  borderColor?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function TiltCard({
  children,
  className = '',
  glareColor = 'rgba(255, 75, 24, 0.22)',
  borderColor = 'rgba(255, 194, 71, 0.5)',
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [borderGlareStyle, setBorderGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [transformStyle, setTransformStyle] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
    );

    setGlareStyle({
      opacity: 1,
      background: `radial-gradient(380px at ${x}px ${y}px, ${glareColor}, transparent 75%)`,
    });

    setBorderGlareStyle({
      opacity: 1,
      background: `radial-gradient(240px at ${x}px ${y}px, ${borderColor}, transparent 65%)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle({ opacity: 0 });
    setBorderGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ transform: transformStyle }}
      className={`tilt-card relative transition-transform duration-100 ${className}`}
    >
      {/* Glare spotlight overlays */}
      <div className="tilt-glare" style={glareStyle} />
      <div className="tilt-border-glare absolute inset-0 pointer-events-none rounded-inherit z-10 transition-opacity duration-200" style={borderGlareStyle} />
      {children}
    </div>
  );
}
