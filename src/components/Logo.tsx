import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isLightText = variant === 'light';
  const textColor = isLightText ? 'text-white' : 'text-stone-900';
  const subtextColor = isLightText ? 'text-stone-300' : 'text-stone-600';
  const waveWhiteColor = isLightText ? '#FFFFFF' : '#1C1917';
  const waveBlueColor = '#1D64EC';

  const iconSizes = {
    sm: { width: 36, height: 36 },
    md: { width: 44, height: 44 },
    lg: { width: 60, height: 60 },
  };

  const titleSizes = {
    sm: 'text-base tracking-[0.25em]',
    md: 'text-xl tracking-[0.28em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.32em]',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.35em]',
    md: 'text-[11px] tracking-[0.4em]',
    lg: 'text-[12px] sm:text-[13px] tracking-[0.45em]',
  };

  const currentSize = iconSizes[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon SVG: reproducing the signature wave from Fio a Fio */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={currentSize.width}
          height={currentSize.height}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-105"
        >
          {/* Subtle outer circular aura */}
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke={isLightText ? 'rgba(255,255,255,0.15)' : 'rgba(29,100,236,0.15)'}
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Signature fluid hair swirl - Blue wave */}
          <path
            d="M 22 45 C 20 28, 38 18, 56 24 C 68 28, 76 38, 80 50 C 72 40, 60 32, 46 36 C 36 39, 28 47, 34 58 C 40 68, 54 66, 68 60 C 78 55, 86 64, 84 74 C 82 82, 70 86, 58 84"
            stroke={waveBlueColor}
            strokeWidth="3.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Inner swirling white/contrasting strand */}
          <path
            d="M 30 54 C 28 40, 42 30, 56 34 C 66 37, 72 46, 74 54 C 66 48, 54 44, 44 48 C 38 51, 36 57, 40 64 C 46 72, 60 70, 72 63 C 80 58, 87 68, 81 77"
            stroke={waveWhiteColor}
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Core light accent spark */}
          <circle cx="53" cy="46" r="2.5" fill={waveBlueColor} />
        </svg>
      </div>

      {/* Brand Text Lockup */}
      <div className="flex flex-col justify-center">
        <div className={`font-semibold font-sans-clean uppercase flex items-center leading-none ${titleSizes[size]} ${textColor}`}>
          <span>FIO</span>
          <span className="text-brand-blue mx-1.5 font-bold">A</span>
          <span>FIO</span>
        </div>
        {showSubtitle && (
          <div className={`uppercase font-medium text-stone-500 mt-1 leading-none ${subtitleSizes[size]} ${subtextColor}`}>
            Studio de Beleza
          </div>
        )}
      </div>
    </div>
  );
};
