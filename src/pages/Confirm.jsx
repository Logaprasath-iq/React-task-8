import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Confirm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F8FC] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      {/* Centered Floating White Card matching Figma Confirm frame */}
      <div className="max-w-md w-full bg-white rounded-3xl p-10 sm:p-14 shadow-card border border-[#F1F5F9] text-center flex flex-col items-center">
        {/* Celebration Thumbs-Up with Festive Confetti Illustration */}
        <div className="relative w-36 h-36 flex items-center justify-center mb-6 select-none">
          {/* Confetti streamers and sparkling stars around */}
          {/* Sparkles / Stars */}
          <span className="absolute top-3 left-4 text-[#8B5CF6] text-xs font-bold animate-pulse">✦</span>
          <span className="absolute top-6 right-5 text-[#8B5CF6] text-xs font-bold animate-pulse">✦</span>
          <span className="absolute bottom-6 left-2 text-[#CBD5E1] text-xs">✦</span>
          <span className="absolute bottom-5 right-4 text-[#8B5CF6] text-xs">✦</span>

          {/* Orange & Pink Streamers */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 144 144" fill="none">
            {/* Streamers */}
            <path d="M40 32 C45 25, 52 35, 48 42" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M100 28 C95 24, 88 32, 94 38" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M30 65 C26 70, 36 78, 38 72" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M115 62 C118 68, 110 74, 112 80" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M50 20 L52 26" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M90 22 L88 28" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M72 16 L72 22" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          {/* Soft Lavender / Light Blue Circle Container */}
          <div className="w-28 h-28 rounded-full bg-[#F3F5FE] flex items-center justify-center shadow-inner">
            {/* Solid Purple/Royal Blue Thumbs Up Icon */}
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#5046E5] fill-[#5046E5] drop-shadow-sm"
            >
              <path
                d="M7 11V21H4C3.44772 21 3 20.5523 3 20V12C3 11.4477 3.44772 11 4 11H7ZM7 11L11.5858 3.41421C12.3668 2.63316 13.6332 2.63316 14.4142 3.41421C14.7893 3.78929 15 4.30156 15 4.832V9H20C21.1046 9 22 9.89543 22 11C22 11.2334 21.9587 11.4649 21.8791 11.6826L19.2791 18.6826C19.0343 19.3496 18.3989 19.8003 17.6891 19.8003H9C7.89543 19.8003 7 18.9048 7 17.8003V11Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-base sm:text-lg font-bold text-[#111827] mb-6">
          Your account successfully created.
        </h2>

        {/* Solid Purple Button: Go to Home */}
        <button
          type="button"
          onClick={() => navigate('/')}
          className="py-2.5 px-8 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-indigo-100 transition-all duration-200 active:scale-[0.98]"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
