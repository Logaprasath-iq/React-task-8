import React from 'react';

export default function UpgradePromoCard() {
  return (
    <div className="mx-4 mb-5 relative">
      {/* Light Blue Rounded Container */}
      <div className="bg-[#F2F6FE] rounded-[24px] pt-8 pb-4 px-4 flex flex-col items-center relative overflow-hidden">
        {/* Hanging Cord extending up */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[2px] h-14 bg-[#4D88FF]" />

        {/* 3D Lamp & Light Beam Vector Illustration */}
        <div className="relative w-full flex flex-col items-center justify-center -mt-2 mb-3">
          <svg
            width="120"
            height="100"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            <defs>
              {/* Lamp Cone Body Gradient (smooth 3D curved lighting) */}
              <linearGradient id="lampConeGradient" x1="25" y1="20" x2="95" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7FB0FF" />
                <stop offset="35%" stopColor="#5B97FF" />
                <stop offset="70%" stopColor="#4A88F8" />
                <stop offset="100%" stopColor="#3574EA" />
              </linearGradient>

              {/* Lamp Rim Inner Ellipse Gradient */}
              <linearGradient id="lampInnerGradient" x1="60" y1="50" x2="60" y2="66" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6DA4FF" />
                <stop offset="100%" stopColor="#4180F5" />
              </linearGradient>

              {/* Light Beam Glowing Gradient */}
              <linearGradient id="lightBeamGradient" x1="60" y1="62" x2="60" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#D5E5FF" stopOpacity="0.75" />
                <stop offset="40%" stopColor="#DDEBFF" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#EAF2FF" stopOpacity="0.1" />
              </linearGradient>

              {/* Soft blur filter for beam edges */}
              <filter id="beamBlur" x="0" y="55" width="120" height="50" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="1.5" />
              </filter>
            </defs>

            {/* Glowing Light Beam spreading downwards towards button */}
            <polygon
              points="30,62 90,62 105,100 15,100"
              fill="url(#lightBeamGradient)"
              filter="url(#beamBlur)"
            />

            {/* Lamp Cord lower segment */}
            <line x1="60" y1="0" x2="60" y2="20" stroke="#4D88FF" strokeWidth="2" strokeLinecap="round" />

            {/* Lamp Neck & Cone Body */}
            <path
              d="M58 20 C58 25, 30 52, 23 60 C32 66, 88 66, 97 60 C90 52, 62 25, 62 20 Z"
              fill="url(#lampConeGradient)"
            />

            {/* Bottom Opening Rim (Ellipse) */}
            <ellipse
              cx="60"
              cy="60"
              rx="37"
              ry="5.5"
              fill="url(#lampInnerGradient)"
              stroke="#2E6EE2"
              strokeWidth="0.8"
              strokeOpacity="0.7"
            />

            {/* Subtle highlight arc along the outer rim */}
            <path
              d="M24 60 C34 66, 86 66, 96 60"
              stroke="#225ECC"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* "Upgrade Now" Purple Pill Button */}
        <button
          type="button"
          onClick={() => alert('Upgrade modal activated!')}
          className="w-full py-2.5 px-4 bg-[#5046E5] hover:bg-[#4338CA] text-white text-[13px] font-semibold rounded-[14px] shadow-sm transition-all duration-200 active:scale-[0.98] tracking-tight"
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
}
