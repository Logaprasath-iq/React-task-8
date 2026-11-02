import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  MapPin,
  Calendar as CalendarIcon,
  Video,
  CheckCircle2
} from 'lucide-react';
import { calendarMonthEvents } from '../data/mockData';

export default function CalendarPage() {
  const { openCreateEvent } = useOutletContext();
  const [currentDate, setCurrentDate] = useState(new Date(2026, 10, 1)); // Nov 2026
  const [selectedDay, setSelectedDay] = useState(14);
  const [events, setEvents] = useState(calendarMonthEvents);
  const [calendarView, setCalendarView] = useState('Month'); // 'Month' | 'Week' | 'Day'

  // Month navigation
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Days in November (30 days, starts on Sunday)
  const daysInMonth = 30;
  const startOffset = 0; // Nov 2026 starts on Sunday

  const calendarDays = [];
  for (let i = 0; i < startOffset; i++) {
    calendarDays.push({ day: null, isCurrentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push({ day: d, isCurrentMonth: true });
  }

  // Selected day events
  const selectedDayEvents = events.filter((e) => e.day === selectedDay);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Calendar Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-[#F1F5F9] shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <CalendarIcon size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <p className="text-xs text-slate-500">
              Team schedule and milestones
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View switcher tabs */}
          <div className="inline-flex bg-slate-50 p-1 rounded-xl border border-slate-100">
            {['Month', 'Week', 'Day'].map((view) => (
              <button
                key={view}
                type="button"
                onClick={() => setCalendarView(view)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  calendarView === view
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {view}
              </button>
            ))}
          </div>

          {/* Month Steppers */}
          <div className="flex items-center gap-1 border border-slate-200 rounded-xl p-1 bg-white">
            <button
              type="button"
              onClick={prevMonth}
              className="p-1 rounded-lg hover:bg-slate-50 text-slate-600"
              title="Previous Month"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1 rounded-lg hover:bg-slate-50 text-slate-600"
              title="Next Month"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <button
            type="button"
            onClick={openCreateEvent}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-xl shadow-sm transition-all"
          >
            <Plus size={15} />
            <span>Create Event</span>
          </button>
        </div>
      </div>

      {/* Main Calendar Layout: Grid (3 cols) & Selected Day Agenda (1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar Grid Container (3 cols) */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card">
          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-2 mb-3 text-center">
            {daysOfWeek.map((day) => (
              <span
                key={day}
                className="text-xs font-bold text-slate-400 py-1 uppercase tracking-wider"
              >
                {day}
              </span>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((item, index) => {
              if (!item.day) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="h-24 sm:h-28 rounded-2xl bg-slate-50/40 border border-transparent"
                  />
                );
              }

              const dayEvents = events.filter((e) => e.day === item.day);
              const isSelected = selectedDay === item.day;
              const isToday = item.day === 2; // Nov 2

              return (
                <div
                  key={item.day}
                  onClick={() => setSelectedDay(item.day)}
                  className={`h-24 sm:h-28 rounded-2xl p-2 border transition-all cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'border-[#5046E5] ring-2 ring-indigo-100 bg-indigo-50/20'
                      : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50/60 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full ${
                        isToday
                          ? 'bg-[#5046E5] text-white'
                          : isSelected
                          ? 'text-[#5046E5]'
                          : 'text-slate-800'
                      }`}
                    >
                      {item.day}
                    </span>
                    {dayEvents.length > 0 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    )}
                  </div>

                  {/* Event pills on the day cell */}
                  <div className="space-y-1 overflow-hidden">
                    {dayEvents.slice(0, 2).map((ev) => (
                      <div
                        key={ev.id}
                        className="text-[10px] font-semibold text-white px-1.5 py-0.5 rounded-lg truncate shadow-xs"
                        style={{ backgroundColor: ev.color }}
                        title={ev.title}
                      >
                        {ev.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <span className="text-[9px] font-medium text-slate-400 pl-1">
                        +{dayEvents.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Day Agenda Sidebar (1 col) */}
        <div className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
              <div>
                <h3 className="font-bold text-base text-slate-900">
                  Nov {selectedDay}, 2026
                </h3>
                <p className="text-xs text-slate-500">
                  {selectedDayEvents.length} scheduled event(s)
                </p>
              </div>
              <button
                type="button"
                onClick={openCreateEvent}
                className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-100 transition-colors"
                title="Add event on this day"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* List of events on this day */}
            <div className="space-y-3">
              {selectedDayEvents.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-xs text-slate-400">No events scheduled for this day.</p>
                  <button
                    type="button"
                    onClick={openCreateEvent}
                    className="mt-3 text-xs font-semibold text-[#5046E5] hover:underline"
                  >
                    + Schedule something
                  </button>
                </div>
              ) : (
                selectedDayEvents.map((ev) => (
                  <div
                    key={ev.id}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-indigo-50/30 transition-colors space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: ev.color }}
                      >
                        {ev.category}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400">
                        10:00 AM - 11:30 AM
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {ev.title}
                    </h4>

                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                      <div className="flex items-center gap-1">
                        <Video size={13} className="text-indigo-500" />
                        <span>Google Meet</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={13} className="text-slate-400" />
                        <span>1.5 hrs</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-6">
            <div className="p-3 bg-indigo-50 rounded-2xl flex items-center gap-3">
              <CheckCircle2 size={18} className="text-[#5046E5] flex-shrink-0" />
              <div className="text-[11px]">
                <p className="font-bold text-indigo-950">Sync with Google Calendar</p>
                <p className="text-indigo-600">Auto-sync active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
