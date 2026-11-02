import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  Search,
  Bell,
  Calendar,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Plus,
  Filter,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

export default function Header({
  isCollapsed,
  setIsMobileOpen,
  onOpenCreateInvoice,
  onOpenCreateEvent,
  onOpenAddTask,
  searchTerm,
  setSearchTerm,
  startDate,
  setStartDate,
  endDate,
  setEndDate
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Map route to title
  const getPageInfo = () => {
    switch (location.pathname) {
      case '/':
        return { title: 'Dashboard', subtitle: 'Welcome back, ' + currentUser.name };
      case '/analytics':
        return { title: 'Analytics', subtitle: 'Real-time performance metrics' };
      case '/invoices':
        return { title: 'Invoice List', subtitle: 'Manage billing & transactions' };
      case '/schedule':
        return { title: 'Task Preview', subtitle: 'Workflow and sprint planning' };
      case '/calendar':
        return { title: 'Calendar', subtitle: 'Events and schedules' };
      case '/messages':
        return { title: 'Messages', subtitle: 'Team communications' };
      case '/notifications':
        return { title: 'Notifications', subtitle: 'System & team updates' };
      case '/settings':
        return { title: 'Settings', subtitle: 'Preferences & account security' };
      default:
        return { title: 'Base Dashboard', subtitle: 'Administration Panel' };
    }
  };

  const pageInfo = getPageInfo();

  return (
    <header className="sticky top-0 z-30 bg-[#F7F8FC]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-4 transition-all border-b border-transparent">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Hamburger + Page Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-indigo-600 hover:bg-white shadow-sm transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827]">
              {pageInfo.title}
            </h1>
            <p className="text-xs text-[#64748B] hidden sm:block">
              {pageInfo.subtitle}
            </p>
          </div>
        </div>

        {/* Right: Page-specific Controls & Global Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-end">
          {/* Dashboard date range pills (matching Figma preview 2 & 3: "10-06-2021 v" & "10-10-2021 v") */}
          {location.pathname === '/' && (
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="date"
                  value={startDate || '2021-06-10'}
                  onChange={(e) => setStartDate && setStartDate(e.target.value)}
                  className="bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#111827] text-xs font-medium px-3 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer"
                />
              </div>
              <span className="text-gray-400 text-xs font-medium">to</span>
              <div className="relative">
                <input
                  type="date"
                  value={endDate || '2021-10-10'}
                  onChange={(e) => setEndDate && setEndDate(e.target.value)}
                  className="bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#111827] text-xs font-medium px-3 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* Search bar for Invoice, Schedule, and Messages */}
          {(location.pathname === '/invoices' || location.pathname === '/schedule' || location.pathname === '/messages') && (
            <div className="relative w-48 sm:w-64">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm || ''}
                onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] focus:border-[#5046E5] text-xs sm:text-sm text-[#111827] placeholder:text-[#94A3B8] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10 transition-all"
              />
            </div>
          )}

          {/* Action Button: Invoices "+ Add New" (from Figma preview 4) */}
          {location.pathname === '/invoices' && (
            <button
              type="button"
              onClick={onOpenCreateInvoice}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-sm shadow-indigo-200 transition-all active:scale-95"
            >
              <Plus size={16} />
              <span>Add New</span>
            </button>
          )}

          {/* Action Button: Schedule "Filter" (from Figma preview 5) */}
          {location.pathname === '/schedule' && (
            <button
              type="button"
              onClick={onOpenAddTask}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-sm shadow-indigo-200 transition-all active:scale-95"
            >
              <Plus size={16} />
              <span>New Task</span>
            </button>
          )}

          {/* Action Button: Calendar "+ Create Event" */}
          {location.pathname === '/calendar' && (
            <button
              type="button"
              onClick={onOpenCreateEvent}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-sm shadow-indigo-200 transition-all active:scale-95"
            >
              <Plus size={16} />
              <span>Create Event</span>
            </button>
          )}

          {/* Notification Bell Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-gray-600 hover:text-indigo-600 flex items-center justify-center shadow-sm transition-colors relative"
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
            </button>

            {/* Notification Dropdown Panel */}
            {showNotifications && (
              <div
                className="absolute right-0 mt-2 w-80 sm:w-88 bg-white rounded-2xl shadow-dropdown border border-[#F1F5F9] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-2 border-b border-gray-100 px-2">
                  <h3 className="font-semibold text-sm text-[#111827]">Notifications</h3>
                  <span className="text-[11px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    3 New
                  </span>
                </div>
                <div className="py-2 space-y-2 max-h-72 overflow-y-auto">
                  <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-slate-800">Invoice #876364 paid</p>
                      <p className="text-slate-500 text-[11px]">$2,450 received from Arrora Gaur</p>
                      <span className="text-[10px] text-slate-400">12 min ago</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={16} />
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-slate-800">Design review meeting</p>
                      <p className="text-slate-500 text-[11px]">Sprint sync starts at 2:00 PM</p>
                      <span className="text-[10px] text-slate-400">1 hour ago</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-100 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setShowNotifications(false);
                      navigate('/notifications');
                    }}
                    className="text-xs font-semibold text-[#5046E5] hover:underline"
                  >
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Quick Menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-1.5 pl-2 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-xl shadow-sm transition-colors"
            >
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-7 h-7 rounded-full object-cover ring-1 ring-indigo-200"
              />
              <span className="text-xs font-semibold text-slate-700 hidden md:inline">
                {currentUser.name}
              </span>
              <ChevronDown size={14} className="text-gray-400" />
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div
                className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-dropdown border border-[#F1F5F9] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-3 py-2 border-b border-gray-100">
                  <p className="text-xs font-bold text-slate-900">{currentUser.name}</p>
                  <p className="text-[11px] text-slate-500 truncate">{currentUser.email}</p>
                </div>
                <div className="py-1">
                  <button
                    type="button"
                    onClick={() => {
                      setShowProfileMenu(false);
                      navigate('/settings');
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-xl"
                  >
                    <User size={15} className="text-gray-400" />
                    <span>My Profile</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowProfileMenu(false);
                      navigate('/settings');
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-xl"
                  >
                    <Settings size={15} className="text-gray-400" />
                    <span>Settings</span>
                  </button>
                </div>
                <div className="pt-1 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => {
                      setShowProfileMenu(false);
                      navigate('/login');
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl"
                  >
                    <LogOut size={15} />
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
