import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutGrid,
  BarChart3,
  FileText,
  CalendarCheck,
  Calendar,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutGrid },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Invoice', path: '/invoices', icon: FileText },
  { name: 'Schedule', path: '/schedule', icon: CalendarCheck },
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
          isCollapsed ? 'w-[76px]' : 'w-64'
        } ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div
          className={`flex items-center border-b border-transparent transition-all ${
            isCollapsed
              ? 'flex-col justify-center py-5 px-0 gap-1.5'
              : 'h-20 justify-between px-6'
          }`}
        >
          <NavLink
            to="/"
            className={`flex items-center group focus:outline-none ${
              isCollapsed ? 'flex-col justify-center text-center' : 'gap-3'
            }`}
            onClick={() => setIsMobileOpen(false)}
          >
            {/* Base Circular Logo */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6366F1] to-[#4F46E5] flex items-center justify-center shadow-md shadow-indigo-100 flex-shrink-0 group-hover:scale-105 transition-transform">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 16C7 16 8 10 11 10C14 10 15 14 18 14C20 14 21 8 23 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="11" cy="10" r="1.8" fill="white"/>
                <circle cx="18" cy="14" r="1.8" fill="white"/>
              </svg>
            </div>

            {/* "Base" text: below circle in collapsed mode, beside in expanded mode */}
            <span
              className={`font-bold tracking-tight text-[#111827] transition-all ${
                isCollapsed ? 'text-xs font-semibold mt-1' : 'text-2xl'
              }`}
            >
              Base
            </span>
          </NavLink>

          {/* Toggle sidebar collapse (Desktop) */}
          {!isCollapsed && (
            <button
              type="button"
              onClick={() => setIsCollapsed(true)}
              className="hidden lg:flex w-7 h-7 rounded-lg items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              title="Collapse sidebar"
            >
              <ChevronLeft size={18} />
            </button>
          )}
        </div>

        {/* Collapsed expand button on desktop */}
        {isCollapsed && (
          <div className="hidden lg:flex justify-center pb-2">
            <button
              type="button"
              onClick={() => setIsCollapsed(false)}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              title="Expand sidebar"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Navigation Items */}
        <nav
          className={`flex-1 space-y-1.5 overflow-y-auto ${
            isCollapsed ? 'px-2 py-3' : 'px-4 py-4'
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-xl transition-all duration-200 group relative ${
                    isCollapsed
                      ? 'justify-center w-11 h-11 mx-auto'
                      : 'gap-3.5 px-3.5 py-3 text-sm font-medium'
                  } ${
                    isActive
                      ? 'bg-[#EEF2FF] text-[#5046E5] font-semibold'
                      : 'text-[#64748B] hover:text-[#111827] hover:bg-[#F8FAFC]'
                  }`
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

                    {/* Unread Badge (Messages: 49) */}
                    {item.badge && (
                      <span
                        className={`text-[11px] font-semibold transition-all ${
                          isCollapsed
                            ? 'absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white'
                            : 'ml-auto px-2 py-0.5 rounded-full bg-rose-100 text-rose-600'
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

        {/* Hanging Lamp Promo Card (Expanded mode) */}
        {!isCollapsed && (
          <div className="mx-4 mb-4 p-4 rounded-3xl bg-gradient-to-b from-[#F0F5FF] to-[#E6EEFF] border border-blue-100/50 text-center relative overflow-hidden group shadow-sm">
            {/* 3D Lamp Illustration matching Figma Preview */}
            <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center relative">
              {/* Lamp Cord */}
              <div className="absolute top-0 w-[1.5px] h-5 bg-slate-400" />
              {/* Lamp Cone */}
              <div className="w-12 h-9 bg-gradient-to-b from-[#3B82F6] to-[#2563EB] rounded-b-2xl shadow-md relative z-10 flex items-center justify-center">
                <Zap size={16} className="text-white fill-white/80" />
              </div>
              {/* Light Glow */}
              <div className="absolute bottom-0 w-20 h-8 bg-blue-300/40 blur-md rounded-full pointer-events-none" />
            </div>

            <button
              type="button"
              onClick={() => alert('Upgrade modal activated!')}
              className="w-full py-2.5 px-3 text-xs font-bold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-md shadow-indigo-200 transition-all active:scale-[0.98]"
            >
              Upgrade Now
            </button>
          </div>
        )}

        {/* User Profile & Logout */}
        <div
          className={`border-t border-[#F1F5F9] bg-white transition-all ${
            isCollapsed
              ? 'py-4 flex flex-col items-center gap-3'
              : 'p-4 flex items-center justify-between'
          }`}
        >
          <div
            className={`flex items-center gap-3 ${
              isCollapsed ? 'flex-col' : 'flex-1 min-w-0'
            }`}
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-50 flex-shrink-0"
            />

            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-[#111827] truncate">
                  {currentUser.name}
                </h4>
                <p className="text-[11px] text-[#64748B] truncate">
                  {currentUser.role}
                </p>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-gray-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
            title="Log out"
          >
            <LogOut size={18} />
          </button>
        </div>
      </aside>
    </>
  );
}
