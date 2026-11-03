import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('example@gmail.com');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-300">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Side: Login Form Area (approx 5 cols) */}
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
            Log in
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#5046E5] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 pr-10 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#5046E5] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
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

            {/* Remember Me & Reset Password Link */}
            <div className="flex items-center justify-between pt-1 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600 font-medium">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 rounded text-[#5046E5] accent-[#5046E5]"
                />
                <span>Remember me</span>
              </label>

              <Link
                to="/recover"
                className="text-[#3B82F6] hover:text-[#2563EB] font-medium hover:underline"
              >
                Reset Password?
              </Link>
            </div>

            {/* Solid Purple Log in Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-indigo-100 transition-all active:scale-[0.98] mt-2"
            >
              Log in
            </button>

            {/* Bottom link to Sign Up */}
            <p className="text-center text-xs text-slate-600 pt-3">
              Don't have account yet?{' '}
              <Link
                to="/signup"
                className="text-[#3B82F6] hover:text-[#2563EB] font-semibold hover:underline"
              >
                New Account
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side: Exact Developer Illustration from Figma media_1793685010400_363686a1.png (7 cols) */}
        <div className="lg:col-span-7 flex items-center justify-center p-4">
          <svg
            viewBox="0 0 600 550"
            className="w-full max-w-[560px] h-auto overflow-visible select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft Elliptical Ground Shadow */}
            <ellipse cx="330" cy="510" rx="200" ry="22" fill="#EEF2FF" />

            {/* Wall Clock above */}
            <g transform="translate(300, 100)">
              {/* Outer orange clock ring */}
              <circle cx="28" cy="28" r="26" fill="#FF6B4A" />
              <circle cx="28" cy="28" r="22" fill="#FFFFFF" />
              {/* Hands at ~10:10 */}
              <line x1="28" y1="28" x2="16" y2="18" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="28" y1="28" x2="38" y2="28" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="28" cy="28" r="2" fill="#1E293B" />
            </g>

            {/* Wooden Work Desk */}
            {/* Desk Top */}
            <rect x="220" y="270" width="230" height="12" rx="4" fill="#FFA579" />
            {/* Desk Legs */}
            <line x1="245" y1="282" x2="245" y2="480" stroke="#FFA579" strokeWidth="5" strokeLinecap="round" />
            <line x1="425" y1="282" x2="425" y2="480" stroke="#FFA579" strokeWidth="5" strokeLinecap="round" />
            <line x1="245" y1="360" x2="425" y2="360" stroke="#FFA579" strokeWidth="4" />

            {/* Vertical External Slim Monitor on Left Desk */}
            <rect x="230" y="195" width="16" height="75" rx="3" fill="#1E293B" transform="rotate(-6 230 195)" />
            <rect x="232" y="270" width="14" height="6" fill="#64748B" />

            {/* Teal Open Laptop in center */}
            {/* Screen */}
            <polygon points="260,230 320,230 310,270 250,270" fill="#00D2D3" />
            <circle cx="285" cy="250" r="3.5" fill="#FFFFFF" />
            {/* Base keyboard */}
            <rect x="245" y="270" width="70" height="5" rx="1.5" fill="#1E293B" />

            {/* Pencil Cup & Stationery on right of desk */}
            <rect x="430" y="250" width="18" height="20" rx="3" fill="#EF4444" />
            <line x1="434" y1="250" x2="432" y2="235" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="438" y1="250" x2="438" y2="232" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="442" y1="250" x2="444" y2="236" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />

            {/* Blue PC Computer Tower on Floor with wires */}
            <rect x="195" y="345" width="55" height="90" rx="4" fill="#00C4DF" stroke="#009FB5" strokeWidth="1.5" />
            {/* Drive bays & Power */}
            <rect x="202" y="355" width="22" height="4" rx="1" fill="#FFFFFF" opacity="0.8" />
            <rect x="202" y="363" width="22" height="4" rx="1" fill="#FFFFFF" opacity="0.8" />
            <circle cx="238" cy="358" r="2" fill="#FFFFFF" />
            {/* Fan vent dots */}
            <g fill="#FFFFFF" opacity="0.6">
              <circle cx="206" cy="385" r="1.5" />
              <circle cx="212" cy="385" r="1.5" />
              <circle cx="218" cy="385" r="1.5" />
              <circle cx="206" cy="391" r="1.5" />
              <circle cx="212" cy="391" r="1.5" />
              <circle cx="218" cy="391" r="1.5" />
            </g>
            {/* Cables curling behind tower */}
            <path d="M195 380 C175 380, 180 430, 200 440 C170 450, 190 490, 240 470" stroke="#0F172A" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* Mustard Yellow Office Swivel Chair */}
            {/* Curved Backrest */}
            <path d="M375 225 C390 225, 420 260, 415 320 C405 345, 370 350, 360 350" fill="#FBBF24" />
            <path d="M360 350 C380 350, 410 345, 410 360 C400 375, 350 375, 345 365 Z" fill="#F59E0B" />
            {/* Chair Stem & Star Base */}
            <rect x="375" y="375" width="8" height="75" fill="#CBD5E1" />
            <line x1="340" y1="450" x2="415" y2="450" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round" />

            {/* Developer Character Body */}
            {/* Legs: Navy pants */}
            {/* Left leg seated forward */}
            <path d="M330 360 L380 360 L380 430 L360 490 L345 490 L360 430 Z" fill="#0F172A" />
            {/* Right leg angled back */}
            <path d="M360 360 L410 365 L415 440 L445 480 L430 485 L400 440 Z" fill="#0F172A" />

            {/* Bright Magenta/Pink Socks */}
            <polygon points="345,490 360,490 355,508 335,508" fill="#EC4899" />
            <polygon points="430,485 445,480 460,505 445,510" fill="#EC4899" />

            {/* Torso: Purple/Blue sweater with thin white stripes */}
            <path d="M340 270 C345 240, 410 240, 415 270 L405 365 L345 360 Z" fill="#5046E5" />
            {/* White stripes on sweater */}
            <line x1="352" y1="285" x2="408" y2="285" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
            <line x1="350" y1="300" x2="406" y2="300" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
            <line x1="348" y1="315" x2="404" y2="315" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
            <line x1="347" y1="330" x2="403" y2="330" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />

            {/* Right Arm typing forward on laptop */}
            <path d="M390 270 C380 290, 320 300, 290 270 L285 278 C315 315, 385 305, 400 275 Z" fill="#5046E5" />
            <circle cx="286" cy="274" r="5" fill="#FED7AA" />

            {/* Head & Neck */}
            <rect x="372" y="225" width="14" height="20" fill="#FED7AA" />
            {/* Face */}
            <path d="M365 190 C365 175, 395 175, 395 190 C395 215, 375 230, 368 225 Z" fill="#FED7AA" />
            {/* Friendly Smiling Face Features */}
            <circle cx="373" cy="195" r="2" fill="#1E293B" />
            <path d="M375 204 C378 208, 384 207, 386 203" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Dark Wavy Hair */}
            <path d="M362 195 C360 170, 390 160, 400 178 C405 188, 395 195, 390 188 C380 180, 370 182, 365 198 Z" fill="#0F172A" />

            {/* Floor Plant on Right */}
            {/* Stand */}
            <line x1="455" y1="465" x2="455" y2="495" stroke="#FFA579" strokeWidth="3" />
            <line x1="475" y1="465" x2="475" y2="495" stroke="#FFA579" strokeWidth="3" />
            {/* Pot */}
            <polygon points="450,430 480,430 475,465 455,465" fill="#FBBF24" />
            <path d="M455 445 L460 450 L465 445 L470 450" stroke="#D97706" strokeWidth="1.2" fill="none" />
            {/* Green Leafy Plant */}
            <path d="M465 430 C465 390, 440 370, 445 360 C455 375, 470 410, 465 430 Z" fill="#22C55E" />
            <path d="M465 430 C470 380, 500 370, 495 385 C480 395, 470 415, 465 430 Z" fill="#16A34A" />
            <path d="M465 430 C455 400, 475 365, 480 360 C480 375, 475 410, 465 430 Z" fill="#4ADE80" />
          </svg>
        </div>
      </div>
    </div>
  );
}
