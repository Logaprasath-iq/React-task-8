import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function SignUp() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('Jiangyu');
  const [email, setEmail] = useState('example@gmail.com');
  const [username, setUsername] = useState('johnkevine4362');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirm');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-300">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Side: Sign Up Form Area (approx 5 cols) */}
        <div className="lg:col-span-5 max-w-md w-full mx-auto">
          {/* Base Purple Wave Circular Logo */}
          <div className="w-14 h-14 rounded-full bg-[#5046E5] flex items-center justify-center shadow-lg shadow-indigo-100 mx-auto mb-6">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 16C7 16 8 10 11 10C14 10 15 14 18 14C20 14 21 8 23 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="11" cy="10" r="1.8" fill="white"/>
              <circle cx="18" cy="14" r="1.8" fill="white"/>
            </svg>
          </div>

          {/* Page Title */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] text-center mb-8">
            Sign Up
          </h2>

          {/* Social Login Buttons: Google & Facebook */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              className="py-2.5 px-4 bg-white border border-[#E2E8F0] hover:border-slate-300 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              className="py-2.5 px-4 bg-white border border-[#E2E8F0] hover:border-slate-300 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs transition-colors"
            >
              <svg className="w-4 h-4 text-[#1877F2] fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-gray-200 w-full" />
            <span className="bg-white px-3 text-xs text-gray-400 absolute">Or</span>
          </div>

          {/* Inputs Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jiangyu"
                className="w-full px-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#5046E5] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#5046E5] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="johnkevine4362"
                className="w-full px-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#5046E5] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 pr-10 py-2 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#5046E5] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-700"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id="terms"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                className="w-3.5 h-3.5 mt-0.5 rounded text-[#5046E5] accent-[#5046E5]"
              />
              <label htmlFor="terms" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                By creating an account you agree to the{' '}
                <a href="#terms" className="text-[#3B82F6] hover:underline">terms of use</a>{' '}
                and our{' '}
                <a href="#privacy" className="text-[#3B82F6] hover:underline">privacy policy</a>.
              </label>
            </div>

            {/* Solid Purple Create Account Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-indigo-100 transition-all active:scale-[0.98] mt-2"
            >
              Create account
            </button>

            {/* Bottom link to Login */}
            <p className="text-center text-xs text-slate-600 pt-2">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-[#3B82F6] hover:text-[#2563EB] font-semibold hover:underline"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side: Exact Developer Illustration from Figma media_1793685000455_eaa033e8.png (7 cols) */}
        <div className="lg:col-span-7 flex items-center justify-center p-4">
          <svg
            viewBox="0 0 620 540"
            className="w-full max-w-[580px] h-auto overflow-visible select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft Lilac Organic Backdrop Shape */}
            <path
              d="M260 210 C320 180, 520 170, 540 260 C560 350, 480 440, 360 440 C240 440, 200 360, 220 280 Z"
              fill="#F3F0FF"
              opacity="0.8"
            />

            {/* Elliptical Ground Shadow */}
            <ellipse cx="360" cy="505" rx="210" ry="18" fill="#EEF2FF" />

            {/* Left 3-Drawer Nightstand with Lamp & Books */}
            <g transform="translate(180, 250)">
              {/* Wooden Drawer Unit Body */}
              <rect x="0" y="50" width="70" height="135" rx="4" fill="#F59E0B" />
              {/* Drawers lines */}
              <rect x="6" y="58" width="58" height="36" rx="2" fill="#D97706" />
              <rect x="6" y="100" width="58" height="36" rx="2" fill="#D97706" />
              <rect x="6" y="142" width="58" height="36" rx="2" fill="#D97706" />
              {/* Brass Ring Handles */}
              <circle cx="35" cy="76" r="3" fill="#FEF3C7" />
              <circle cx="35" cy="118" r="3" fill="#FEF3C7" />
              <circle cx="35" cy="160" r="3" fill="#FEF3C7" />

              {/* Blue Table Lamp on Top */}
              {/* Base */}
              <ellipse cx="25" cy="50" rx="14" ry="4" fill="#3B82F6" />
              <line x1="25" y1="50" x2="25" y2="22" stroke="#FBBF24" strokeWidth="3" />
              {/* Blue Cone Shade */}
              <polygon points="12,22 38,22 46,0 4,0" fill="#2563EB" />

              {/* Stack of Colorful Books on Desk */}
              <rect x="42" y="44" width="26" height="5" rx="1" fill="#EF4444" />
              <rect x="44" y="38" width="24" height="5" rx="1" fill="#3B82F6" />
              <rect x="42" y="32" width="26" height="5" rx="1" fill="#10B981" />
            </g>

            {/* Potted Green Succulent on Table */}
            <polygon points="268,295 284,295 281,310 271,310" fill="#F59E0B" />
            <path d="M276 295 C272 270, 280 270, 276 295 Z" fill="#22C55E" />
            <path d="M274 295 C266 275, 274 275, 276 295 Z" fill="#16A34A" />
            <path d="M278 295 C286 275, 278 275, 276 295 Z" fill="#4ADE80" />

            {/* Blue Wooden Work Table */}
            {/* Table Top */}
            <rect x="250" y="308" width="220" height="14" rx="4" fill="#5046E5" />
            {/* Angled Table Legs */}
            <line x1="265" y1="322" x2="250" y2="495" stroke="#5046E5" strokeWidth="6" strokeLinecap="round" />
            <line x1="455" y1="322" x2="470" y2="495" stroke="#5046E5" strokeWidth="6" strokeLinecap="round" />
            <line x1="257" y1="410" x2="463" y2="410" stroke="#5046E5" strokeWidth="4" />

            {/* Yellow Desk Chair */}
            {/* Backrest & Seat */}
            <polygon points="350,335 415,335 410,350 355,350" fill="#FBBF24" />
            <line x1="400" y1="335" x2="400" y2="280" stroke="#FBBF24" strokeWidth="4" />
            <line x1="365" y1="335" x2="365" y2="280" stroke="#FBBF24" strokeWidth="4" />
            <rect x="360" y="275" width="45" height="10" rx="2" fill="#F59E0B" />
            <line x1="360" y1="350" x2="350" y2="490" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
            <line x1="410" y1="350" x2="420" y2="490" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />

            {/* Magenta/Purple Laptop with Yellow Emblem */}
            <polygon points="300,265 365,265 355,308 290,308" fill="#EC4899" />
            <circle cx="328" cy="285" r="4" fill="#FBBF24" />
            <rect x="285" y="308" width="75" height="5" rx="1.5" fill="#3B82F6" />

            {/* Developer Seated Body */}
            {/* Pants: Dark Brown/Navy */}
            <path d="M370 330 L425 330 L430 420 L400 480 L385 480 L410 420 Z" fill="#1E1B4B" />
            <path d="M360 330 L395 330 L390 415 L360 475 L345 475 L375 415 Z" fill="#1E1B4B" />

            {/* Magenta/Pink Sneakers */}
            <polygon points="345,475 360,475 348,495 328,490" fill="#EC4899" />
            <polygon points="385,480 400,480 415,500 395,502" fill="#EC4899" />

            {/* Torso: Blue Polo Shirt with White Collar */}
            <path d="M365 245 C370 220, 420 220, 425 245 L420 335 L365 335 Z" fill="#3B82F6" />
            {/* White Collar */}
            <polygon points="385,245 405,245 400,255 390,255" fill="#FFFFFF" />

            {/* Right Arm Typing on Laptop */}
            <path d="M410 250 C400 270, 345 280, 325 265 L320 272 C345 300, 405 290, 420 260 Z" fill="#3B82F6" />
            <circle cx="322" cy="268" r="5" fill="#FED7AA" />

            {/* Head & Neck */}
            <rect x="390" y="215" width="12" height="15" fill="#FED7AA" />
            {/* Face */}
            <circle cx="396" cy="195" r="14" fill="#FED7AA" />
            {/* Eyeglasses */}
            <circle cx="391" cy="194" r="4.5" stroke="#1E293B" strokeWidth="1.2" fill="none" />
            <circle cx="402" cy="194" r="4.5" stroke="#1E293B" strokeWidth="1.2" fill="none" />
            <line x1="395.5" y1="194" x2="397.5" y2="194" stroke="#1E293B" strokeWidth="1.2" />
            {/* Smile */}
            <path d="M394 203 C396 206, 400 206, 402 203" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            {/* Dark Wavy Hair */}
            <path d="M386 195 C384 175, 410 170, 414 185 C416 194, 408 198, 404 192 C398 184, 390 186, 386 198 Z" fill="#0F172A" />

            {/* Right End-Table with Houseplant */}
            <g transform="translate(470, 320)">
              {/* 2-Drawer Wooden Side Unit */}
              <rect x="0" y="60" width="55" height="110" rx="3" fill="#DC2626" />
              <rect x="4" y="66" width="47" height="46" rx="2" fill="#B91C1C" />
              <rect x="4" y="118" width="47" height="46" rx="2" fill="#B91C1C" />
              <circle cx="27" cy="89" r="3" fill="#FEF3C7" />
              <circle cx="27" cy="141" r="3" fill="#FEF3C7" />

              {/* Yellow Bowl Pot */}
              <ellipse cx="27" cy="55" rx="18" ry="6" fill="#FBBF24" />
              <polygon points="12,55 42,55 37,60 17,60" fill="#D97706" />

              {/* Leafy Green Houseplant */}
              <path d="M27 55 C27 20, 0 10, 5 0 C20 15, 30 35, 27 55 Z" fill="#22C55E" />
              <path d="M27 55 C30 15, 60 5, 55 15 C45 25, 35 40, 27 55 Z" fill="#16A34A" />
              <path d="M27 55 C20 30, 35 15, 40 10 C42 22, 35 42, 27 55 Z" fill="#4ADE80" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
