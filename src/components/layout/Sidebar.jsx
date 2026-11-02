import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutGrid,
  BarChart3,
  FileText,
  KanbanSquare,
  Calendar,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutGrid },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Invoice', path: '/invoices', icon: FileText },
  { name: 'Schedule', path: '/schedule', icon: KanbanSquare },
  { name: 'Calendar', path: '/calendar', icon: Calendar },
  { name: 'Messages', path: '/messages', icon: MessageSquare, badge: 49 },
  { name: 'Notification', path: '/notifications', icon: Bell },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
  isMobileOpen,
  setIsMobileOpen
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-white border-r border-[#F1F5F9] transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-20' : 'w-64'
        } ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="h-20 flex items-center justify-between px-5 border-b border-transparent">
          <NavLink
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => setIsMobileOpen(false)}
          >
            {/* Base Logo Emblem */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6366F1] to-[#4F46E5] flex items-center justify-center shadow-md shadow-indigo-100 flex-shrink-0 group-hover:scale-105 transition-transform">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 16C7 16 8 10 11 10C14 10 15 14 18 14C20 14 21 8 23 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="11" cy="10" r="1.8" fill="white"/>
                <circle cx="18" cy="14" r="1.8" fill="white"/>
              </svg>
            </div>

            {!isCollapsed && (
              <span className="text-2xl font-bold tracking-tight text-[#111827]">
                Base
              </span>
            )}
          </NavLink>

          {/* Collapse/Expand Toggle Button (Desktop only) */}
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex w-7 h-7 rounded-lg items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3.5 px-3.5 py-3 rounded-xl font-medium text-sm transition-all duration-200 group relative ${
                    isActive
                      ? 'bg-[#EEF2FF] text-[#5046E5] font-semibold'
                      : 'text-[#64748B] hover:text-[#111827] hover:bg-[#F8FAFC]'
                  } ${isCollapsed ? 'justify-center px-0' : ''}`
                }
                title={isCollapsed ? item.name : undefined}
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={20}
                      className={`flex-shrink-0 transition-colors ${
                        isActive
                          ? 'text-[#5046E5]'
                          : 'text-[#94A3B8] group-hover:text-[#111827]'
                      }`}
                    />

                    {!isCollapsed && (
                      <span className="truncate">{item.name}</span>
                    )}

                    {/* Unread Badge (e.g. Messages: 49) */}
                    {item.badge && (
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full transition-all ${
                          isCollapsed
                            ? 'absolute top-1.5 right-2 w-2 h-2 p-0 bg-rose-500 ring-2 ring-white'
                            : 'ml-auto bg-rose-100 text-rose-600'
                        }`}
                      >
                        {!isCollapsed && item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Upgrade Promo Card (from Figma preview 3) */}
        {!isCollapsed && (
          <div className="mx-4 mb-4 p-4 rounded-2xl bg-gradient-to-b from-[#F0F5FF] to-[#E5EDFF] border border-blue-100/60 text-center relative overflow-hidden group">
            {/* Hanging Lamp Illustration */}
            <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center relative">
              <div className="w-12 h-10 bg-gradient-to-b from-blue-400 to-blue-600 clip-lamp rounded-b-xl shadow-lg shadow-blue-300/40 relative z-10 flex items-center justify-center">
                <Zap size={18} className="text-white fill-white/80" />
              </div>
              <div className="absolute top-0 w-0.5 h-4 bg-gray-400" />
              <div className="absolute -bottom-2 w-20 h-10 bg-blue-300/30 blur-md rounded-full pointer-events-none" />
            </div>

            <p className="text-xs font-semibold text-slate-700 mb-3">
              Upgrade to Pro for unlimited exports & AI reports
            </p>

            <button
              type="button"
              onClick={() => alert("Redirecting to upgrade checkout...")}
              className="w-full py-2 px-3 text-xs font-semibold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-md shadow-indigo-200 transition-all active:scale-[0.98]"
            >
              Upgrade Now
            </button>
          </div>
        )}

        {/* User Profile & Logout Footer */}
        <div className="p-3 border-t border-[#F1F5F9] bg-white">
          <div
            className={`flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors ${
              isCollapsed ? 'justify-center p-1' : ''
            }`}
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-100 flex-shrink-0"
            />

            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-[#111827] truncate">
                  {currentUser.name}
                </h4>
                <p className="text-xs text-[#64748B] truncate">
                  {currentUser.role}
                </p>
              </div>
            )}

            {!isCollapsed && (
              <button
                type="button"
                onClick={handleLogout}
                className="text-gray-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                title="Log out"
              >
                <LogOut size={18} />
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
