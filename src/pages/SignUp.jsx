import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert('Please agree to terms and conditions.');
      return;
    }
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-4xl shadow-2xl border border-gray-100 p-8 sm:p-10">
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#6366F1] to-[#4F46E5] flex items-center justify-center mx-auto mb-3 shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 16C7 16 8 10 11 10C14 10 15 14 18 14C20 14 21 8 23 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="11" cy="10" r="1.8" fill="white"/>
              <circle cx="18" cy="14" r="1.8" fill="white"/>
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-[#111827]">Create Account</h2>
          <p className="text-xs text-[#64748B] mt-1">Start your 14-day free trial on Base</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                required
                placeholder="Easin Arafat"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Work Email
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                required
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none"
              />
            </div>
          </div>

          <label className="flex items-start gap-2 cursor-pointer pt-1 text-xs text-slate-600">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded text-indigo-600 accent-[#5046E5]"
            />
            <span>I agree to the Terms of Service & Privacy Policy</span>
          </label>

          <button
            type="submit"
            className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transition-all mt-2"
          >
            <span>Create Account</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-gray-100 text-center text-xs text-slate-500">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-[#5046E5] hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
