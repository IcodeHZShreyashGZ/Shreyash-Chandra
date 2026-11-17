import { useEffect, useState } from 'react';

interface ScreenCurtainProps {
  trigger?: any;
}

export function ScreenCurtain({ trigger }: ScreenCurtainProps) {
  const [animating, setAnimating] = useState<boolean>(true);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [trigger]);

  if (!animating) return null;

  const rows = 7;
  const cols = 10;
  const total = rows * cols;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] grid grid-cols-10 grid-rows-7 pointer-events-none"
    >
      {Array.from({ length: total }).map((_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const delay = (col * 0.02 + row * 0.03).toFixed(3);

        return (
          <div
            key={i}
            className="w-full h-full bg-[#050505] border-1 border-[#FFC247]/10"
            style={{
              animation: `gridTileWipe 0.65s cubic-bezier(0.77, 0, 0.175, 1) forwards`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes gridTileWipe {
          0% {
            transform: scaleY(0);
            transform-origin: top;
          }
          45% {
            transform: scaleY(1);
            transform-origin: top;
          }
          55% {
            transform: scaleY(1);
            transform-origin: bottom;
          }
          100% {
            transform: scaleY(0);
            transform-origin: bottom;
          }
        }
      `}</style>
    </div>
  );
}
