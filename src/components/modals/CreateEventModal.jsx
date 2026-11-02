import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Tag, Clock } from 'lucide-react';

export default function CreateEventModal({ isOpen, onClose, onAddEvent }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Meeting',
    date: '2026-11-15',
    time: '14:00',
    color: '#6366F1',
    description: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) {
      alert('Please enter an event title.');
      return;
    }

    const newEvent = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      day: parseInt(formData.date.split('-')[2], 10) || 15,
      color: formData.color,
      time: formData.time,
      description: formData.description,
    };

    if (onAddEvent) {
      onAddEvent(newEvent);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-2 rounded-xl hover:bg-slate-50 transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-[#111827] mb-1">
          Create New Event
        </h2>
        <p className="text-xs text-[#64748B] mb-6">
          Schedule a team meeting, sprint milestone, or product release.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Event Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Q4 Strategy Review"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => {
                  const cat = e.target.value;
                  let col = '#6366F1';
                  if (cat === 'Meeting') col = '#3B82F6';
                  if (cat === 'Product') col = '#10B981';
                  if (cat === 'Design') col = '#6366F1';
                  if (cat === 'Marketing') col = '#EC4899';
                  setFormData({ ...formData, category: cat, color: col });
                }}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              >
                <option value="Meeting">Meeting</option>
                <option value="Design">Design</option>
                <option value="Product">Product</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Time
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Description (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Add agenda, link or notes..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-md shadow-indigo-100 transition-all active:scale-95"
          >
            Schedule Event
          </button>
        </form>
      </div>
    </div>
  );
}
