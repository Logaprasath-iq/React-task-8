import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('easin.arafat@base.io');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-4xl shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Modern Illustration & Brand */}
        <div className="bg-gradient-to-br from-[#6366F1] to-[#4F46E5] p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Logo */}
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-white text-[#5046E5] flex items-center justify-center font-bold shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 16C7 16 8 10 11 10C14 10 15 14 18 14C20 14 21 8 23 8" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="11" cy="10" r="1.8" fill="#4F46E5"/>
                <circle cx="18" cy="14" r="1.8" fill="#4F46E5"/>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight">Base</span>
          </div>

          {/* Illustration Content (matching Figma Login frame) */}
          <div className="my-10 relative z-10 text-center">
            <div className="w-48 h-48 mx-auto mb-6 bg-white/10 backdrop-blur-md rounded-3xl p-4 flex items-center justify-center border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop"
                alt="Workspace"
                className="w-full h-full object-cover rounded-2xl shadow-inner"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Manage All Operations in Base</h3>
            <p className="text-xs text-indigo-100 max-w-xs mx-auto">
              Track sales, generate invoices, schedule team sprints, and collaborate seamlessly.
            </p>
          </div>

          <p className="text-[11px] text-indigo-200 text-center relative z-10">
            © 2026 Base SaaS Inc. All rights reserved.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-2 tracking-tight">
              Sign In
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Enter your credentials to access your Base workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300 accent-[#5046E5]"
                />
                <span className="text-slate-600 font-medium">Remember me</span>
              </label>

              <button
                type="button"
                onClick={() => alert('Password recovery link sent!')}
                className="font-semibold text-indigo-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transition-all active:scale-[0.98] mt-2"
            >
              <span>Sign In to Dashboard</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-slate-500">
            Don't have an account?{' '}
            <Link to="/signup" className="font-bold text-[#5046E5] hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
