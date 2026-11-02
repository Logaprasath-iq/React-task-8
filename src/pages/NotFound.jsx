import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F8FC] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-extrabold text-3xl mb-6 shadow-sm">
        404
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Page Not Found</h1>
      <p className="text-sm text-slate-500 max-w-sm mb-8">
        The dashboard view you are attempting to access does not exist or may have been migrated.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#5046E5] hover:bg-[#4338CA] text-white text-sm font-bold rounded-2xl shadow-md shadow-indigo-100 transition-all active:scale-95"
      >
        <Home size={18} />
        <span>Return to Dashboard</span>
      </Link>
    </div>
  );
}
