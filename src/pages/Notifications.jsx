import React, { useState } from 'react';
import {
  Bell,
  CheckCircle2,
  Clock,
  AlertTriangle,
  MessageSquare,
  CreditCard,
  Trash2,
  CheckCheck
} from 'lucide-react';

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('All');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Invoice #876364 marked as Paid',
      desc: '$2,450.00 was deposited into your Stripe account from Arrora Gaur.',
      time: '12 minutes ago',
      type: 'payment',
      read: false,
    },
    {
      id: 2,
      title: 'New sprint planning milestone assigned',
      desc: 'David Kim assigned you to "Dashboard UI Design System Revamp".',
      time: '1 hour ago',
      type: 'task',
      read: false,
    },
    {
      id: 3,
      title: 'Subscription upgraded to Enterprise',
      desc: 'Acme Corp upgraded 50 team seats to Pro Tier.',
      time: '3 hours ago',
      type: 'account',
      read: false,
    },
    {
      id: 4,
      title: 'Server usage threshold alert (85%)',
      desc: 'Production database storage exceeded 85% capacity in US-East-1.',
      time: '5 hours ago',
      type: 'alert',
      read: true,
    },
    {
      id: 5,
      title: 'Sarah Jenkins mentioned you in a comment',
      desc: '"@Easin please verify the font hierarchy on mobile screens."',
      time: 'Yesterday',
      type: 'mention',
      read: true,
    },
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const filtered = notifications.filter((n) => {
    if (activeTab === 'Unread') return !n.read;
    if (activeTab === 'Mentions') return n.type === 'mention';
    if (activeTab === 'System') return n.type === 'alert';
    return true;
  });

  const getIcon = (type) => {
    switch (type) {
      case 'payment':
        return <CreditCard size={18} className="text-emerald-600" />;
      case 'task':
        return <CheckCircle2 size={18} className="text-indigo-600" />;
      case 'mention':
        return <MessageSquare size={18} className="text-blue-600" />;
      case 'alert':
        return <AlertTriangle size={18} className="text-amber-600" />;
      default:
        return <Bell size={18} className="text-indigo-600" />;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-[#F1F5F9] shadow-sm">
        <div className="flex items-center gap-2">
          {['All', 'Unread', 'Mentions', 'System'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                activeTab === tab
                  ? 'bg-[#5046E5] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={markAllRead}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors self-end sm:self-auto"
        >
          <CheckCheck size={16} />
          <span>Mark all as read</span>
        </button>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-card divide-y divide-gray-50 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-slate-400">
            No notifications in this category.
          </div>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className={`p-4 sm:p-5 flex items-start gap-4 transition-colors hover:bg-slate-50/70 group ${
                !item.read ? 'bg-indigo-50/20' : ''
              }`}
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                {getIcon(item.type)}
              </div>

              {/* Text Meta */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {item.title}
                  </h4>
                  <span className="text-[11px] text-slate-400 whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-1">
                  {item.desc}
                </p>
              </div>

              {/* Delete Button */}
              <button
                type="button"
                onClick={() => deleteNotification(item.id)}
                className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-600 p-1.5 rounded-lg transition-all"
                title="Dismiss"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
