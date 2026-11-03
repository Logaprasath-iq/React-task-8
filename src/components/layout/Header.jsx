import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Plus,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

export default function Header({
  isCollapsed,
  setIsMobileOpen,
  onOpenCreateInvoice,
  onOpenCreateEvent,
  onOpenCreateSchedule,
  searchTerm,
  setSearchTerm,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Determine current screen title based on route
  const getHeaderTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/analytics':
        return 'Analytics';
      case '/invoices':
        return 'Invoice List';
      case '/invoices/create':
        return 'Create Invoice';
      case '/schedule':
        return 'Task Preview';
      case '/calendar':
        return 'Calendar';
      case '/messages':
        return 'Messages';
      case '/notifications':
        return 'Notification';
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  const title = getHeaderTitle();

  return (
    <header className="sticky top-0 z-30 bg-[#F7F8FC]/95 backdrop-blur-md px-6 sm:px-8 py-5 transition-all">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle + Page Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-indigo-600 hover:bg-white shadow-sm transition-colors"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
            {title}
          </h1>
        </div>

        {/* Right: Page-specific Controls matching Figma */}
        <div className="flex items-center gap-3">
          {/* DASHBOARD: Two Date Range Pills: 10-06-2021 v & 10-10-2021 v */}
          {location.pathname === '/' && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex items-center gap-2 px-3.5 py-2 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-xl text-xs sm:text-sm font-medium text-slate-700 shadow-sm transition-colors"
              >
                <span>10-06-2021</span>
                <ChevronDown size={14} className="text-gray-400" />
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-3.5 py-2 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-xl text-xs sm:text-sm font-medium text-slate-700 shadow-sm transition-colors"
              >
                <span>10-10-2021</span>
                <ChevronDown size={14} className="text-gray-400" />
              </button>
            </div>
          )}

          {/* INVOICE LIST: Search + Add New */}
          {location.pathname === '/invoices' && (
            <div className="flex items-center gap-3">
              <div className="relative w-48 sm:w-64">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm || ''}
                  onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-9 py-2 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] focus:border-[#5046E5] text-xs sm:text-sm text-[#111827] placeholder:text-[#94A3B8] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10"
                />
                <Search
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>

              <button
                type="button"
                onClick={() => navigate('/invoices/create')}
                className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-sm shadow-indigo-200 transition-all active:scale-95 whitespace-nowrap"
              >
                <Plus size={16} />
                <span>Add New</span>
              </button>
            </div>
          )}

          {/* SCHEDULE / TASK PREVIEW: Add Task Button matching Figma */}
          {location.pathname === '/schedule' && (
            <button
              type="button"
              onClick={onOpenCreateSchedule}
              className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-sm shadow-indigo-200 transition-all active:scale-95 whitespace-nowrap"
            >
              <Plus size={16} />
              <span>Add Task</span>
            </button>
          )}

          {/* CALENDAR: Create Event */}
          {location.pathname === '/calendar' && (
            <button
              type="button"
              onClick={onOpenCreateEvent}
              className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-sm shadow-indigo-200 transition-all active:scale-95 whitespace-nowrap"
            >
              <Plus size={16} />
              <span>Create Event</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
