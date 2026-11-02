import React, { useState } from 'react';
import {
  User,
  Shield,
  Bell,
  CreditCard,
  Save,
  Check,
  Upload,
  Lock
} from 'lucide-react';
import { currentUser } from '../data/mockData';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    role: 'Lead Administrator',
    bio: 'Lead frontend architect & product enthusiast building SaaS interfaces.',
  });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl">
      {/* Settings Navigation Tabs */}
      <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-[#F1F5F9] shadow-sm overflow-x-auto">
        {[
          { id: 'profile', label: 'My Profile', icon: User },
          { id: 'security', label: 'Security & Auth', icon: Shield },
          { id: 'notifications', label: 'Preferences', icon: Bell },
          { id: 'billing', label: 'Plan & Billing', icon: CreditCard },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#5046E5] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F1F5F9] shadow-card space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Personal Information
            </h3>
            <p className="text-xs text-slate-500">
              Update your photo, personal details, and public credentials.
            </p>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            {/* Avatar section */}
            <div className="flex items-center gap-5 pb-6 border-b border-gray-100">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-50"
              />
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => alert('Select a new avatar file...')}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#5046E5] bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors"
                  >
                    <Upload size={14} />
                    <span>Change Avatar</span>
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-50 rounded-xl"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">JPG, PNG or GIF, max 2MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Designation / Role
                </label>
                <input
                  type="text"
                  value={profileData.role}
                  onChange={(e) =>
                    setProfileData({ ...profileData, role: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Timezone
                </label>
                <select className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100">
                  <option>UTC +00:00 (London, Dublin)</option>
                  <option>UTC -05:00 (New York, Eastern Time)</option>
                  <option>UTC -08:00 (San Francisco, Pacific Time)</option>
                  <option>UTC +05:30 (India Standard Time)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Bio
              </label>
              <textarea
                rows={3}
                value={profileData.bio}
                onChange={(e) =>
                  setProfileData({ ...profileData, bio: e.target.value })
                }
                className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100 resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              {savedSuccess ? (
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <Check size={16} /> Changes saved successfully!
                </span>
              ) : (
                <span className="text-xs text-slate-400">
                  All changes autosaved to local session.
                </span>
              )}

              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-indigo-100 transition-all active:scale-95"
              >
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F1F5F9] shadow-card space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Security Credentials</h3>
            <p className="text-xs text-slate-500">
              Change your password and activate two-factor authentication.
            </p>
          </div>

          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                placeholder="Minimum 8 characters"
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>

            <button
              type="button"
              onClick={() => alert('Password updated successfully!')}
              className="py-2.5 px-4 text-xs font-bold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-sm transition-all"
            >
              Update Password
            </button>
          </div>
        </div>
      )}

      {/* Preferences / Billing */}
      {(activeTab === 'notifications' || activeTab === 'billing') && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F1F5F9] shadow-card">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            {activeTab === 'billing' ? 'Subscription Tier' : 'Notification Triggers'}
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            {activeTab === 'billing'
              ? 'You are currently on the Free Starter plan with 10 invoices/mo.'
              : 'Configure how you receive activity digests and alerts.'}
          </p>

          <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 flex items-center justify-between">
            <div>
              <p className="font-bold text-sm text-indigo-950">
                {activeTab === 'billing' ? 'Upgrade to Pro Plan ($29/mo)' : 'Email Digest Notifications'}
              </p>
              <p className="text-xs text-indigo-600">
                {activeTab === 'billing'
                  ? 'Get unlimited invoices, team members, and priority 24/7 support.'
                  : 'Daily morning summary of transactions and updates.'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => alert('Action processed!')}
              className="px-4 py-2 text-xs font-bold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-sm"
            >
              {activeTab === 'billing' ? 'Upgrade Plan' : 'Enabled'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
