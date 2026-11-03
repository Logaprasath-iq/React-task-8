import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Recover() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('example@gmail.com');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-[#F1F5F9] text-center relative">
        {/* Base Purple Wave Circular Logo */}
        <div className="w-14 h-14 rounded-full bg-[#5046E5] flex items-center justify-center shadow-lg shadow-indigo-100 mx-auto mb-6">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16C7 16 8 10 11 10C14 10 15 14 18 14C20 14 21 8 23 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="10" r="1.8" fill="white"/>
            <circle cx="18" cy="14" r="1.8" fill="white"/>
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mb-8">
          Recover
        </h2>

        {isSubmitted ? (
          <div className="space-y-6 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-800 mb-1">
                Password Reset Email Sent
              </h3>
              <p className="text-xs text-slate-500">
                Check your inbox at <span className="font-semibold text-slate-700">{email}</span> for instructions to reset your password.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="w-full py-3 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all"
            >
              Back to Log in
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block text-xs font-semibold text-[#111827] mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#5046E5] focus:bg-white rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all"
              />
            </div>

            {/* Reset Your Password Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-indigo-100 transition-all active:scale-[0.98]"
            >
              Reset Your Password
            </button>

            {/* Back link */}
            <div className="text-center pt-2">
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5046E5] hover:underline"
              >
                <ArrowLeft size={14} />
                <span>Remember password? Log in</span>
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
