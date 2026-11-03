import React, { useState } from 'react';
import {
  X,
  Clock,
  Users,
  MapPin,
  Briefcase
} from 'lucide-react';

export default function CreateEventModal({ isOpen, onClose, onAddEvent }) {
  const [activeTab, setActiveTab] = useState('Event'); // 'Event' | 'Reminder' | 'Task'
  const [eventTitle, setEventTitle] = useState('');

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    if (onAddEvent && eventTitle) {
      onAddEvent({
        id: Date.now(),
        title: eventTitle,
        category: activeTab,
        day: 5,
        color: '#00D2D3',
      });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-gray-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title & Circular Close Button matching Screenshot 4 */}
        <div className="flex items-center justify-between pb-3">
          <h2 className="text-base sm:text-lg font-bold text-[#111827]">
            Create an Event
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#FFF0F0] text-[#FF647C] flex items-center justify-center hover:bg-rose-100 transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        {/* Category Tabs: Event (active orange) | Reminder | Task */}
        <div className="flex items-center gap-2 my-4">
          {['Event', 'Reminder', 'Task'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                activeTab === tab
                  ? 'bg-[#FF7A59] text-white shadow-xs'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Add title input */}
          <div>
            <input
              type="text"
              placeholder="Add title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-600 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          {/* Time Row with Orange Clock Icon */}
          <div className="flex items-start gap-3 py-1">
            <div className="w-8 h-8 rounded-full bg-[#FFF4EB] text-[#FF7A59] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock size={16} />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-slate-800">
                Thursday, December 5 &nbsp; 12:00pm - 1:00pm
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Time zone · Does not repeat
              </p>
              <button
                type="button"
                className="text-[11px] font-semibold text-[#FF7A59] hover:underline mt-1 block"
              >
                Find a time
              </button>
            </div>
          </div>

          {/* Action Buttons: Add People & Add location */}
          <div className="flex items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => alert('Search and invite attendees...')}
              className="flex items-center gap-2 px-4 py-2 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
            >
              <Users size={14} />
              <span>Add People</span>
            </button>

            <button
              type="button"
              onClick={() => alert('Enter event location or URL...')}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 hover:border-indigo-400 text-xs font-semibold text-slate-700 rounded-xl transition-colors"
            >
              <MapPin size={14} className="text-[#5046E5]" />
              <span>Add location</span>
            </button>
          </div>

          {/* User Row (John Deo) */}
          <div className="flex items-start gap-3 pt-2">
            <div className="w-8 h-8 rounded-full bg-[#FFF4EB] text-[#FF7A59] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Briefcase size={15} />
            </div>
            <div className="text-xs">
              <p className="font-bold text-slate-900">John Deo</p>
              <p className="text-[11px] text-slate-400">
                Busy · Default visibility · notify 30 minutes before
              </p>
            </div>
          </div>

          {/* Modal Footer: Close & Save Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-xs font-bold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-md shadow-indigo-100 transition-all active:scale-[0.98]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
