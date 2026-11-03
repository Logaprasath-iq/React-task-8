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
    <div className="min-h-screen bg-white flex animate-in fade-in duration-300">
      {/* 2-Column Desktop Layout matching Figma Sign Up frame */}
      <div className="w-full flex flex-col lg:flex-row min-h-screen">
        {/* LEFT COLUMN: Auth Form Area (~38% width on desktop) */}
        <div className="w-full lg:w-[440px] xl:w-[480px] bg-white flex flex-col justify-center px-8 sm:px-14 lg:px-12 xl:px-16 py-10 lg:py-12 z-10 flex-shrink-0">
          <div className="w-full max-w-[360px] mx-auto">
            {/* Base Purple Wave Circular Logo */}
            <div className="w-14 h-14 rounded-full bg-[#5046E5] flex items-center justify-center shadow-lg shadow-indigo-100 mx-auto mb-5">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 16C7 16 8 10 11 10C14 10 15 14 18 14C20 14 21 8 23 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="11" cy="10" r="1.8" fill="white"/>
                <circle cx="18" cy="14" r="1.8" fill="white"/>
              </svg>
            </div>

            {/* Page Title */}
            <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#111827] text-center mb-7">
              Sign Up
            </h2>

            {/* Social Login Buttons: Google & Facebook */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                className="py-2.5 px-4 bg-[#F8FAFC] hover:bg-slate-100 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 transition-colors"
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
                className="py-2.5 px-4 bg-[#F8FAFC] hover:bg-slate-100 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 transition-colors"
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
                  className="w-full px-4 py-2 bg-[#F8FAFC] border border-transparent focus:border-[#5046E5] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
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
                  className="w-full px-4 py-2 bg-[#F8FAFC] border border-transparent focus:border-[#5046E5] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
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
                  className="w-full px-4 py-2 bg-[#F8FAFC] border border-transparent focus:border-[#5046E5] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
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
                    className="w-full px-4 pr-10 py-2 bg-[#F8FAFC] border border-transparent focus:border-[#5046E5] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
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
        </div>

        {/* RIGHT COLUMN: Exact Figma Developer Illustration (~62% width on desktop) */}
        <div className="hidden lg:flex flex-1 bg-[#FAFAFA] items-center justify-center p-8 xl:p-14 overflow-hidden border-l border-gray-100">
          <div className="w-full max-w-[560px] flex items-center justify-center">
            <img
              src="/assets/signup-illustration.png"
              alt="Developer working at blue desk"
              className="w-full h-auto object-contain select-none transition-transform hover:scale-[1.01] duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
