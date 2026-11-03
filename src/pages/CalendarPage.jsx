import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  Check
} from 'lucide-react';
import { schedulePeople } from '../data/mockData';
import CreateEventModal from '../components/modals/CreateEventModal';

export default function CalendarPage() {
  const [calendarView, setCalendarView] = useState('Month'); // 'Day' | 'Week' | 'Month' | 'Year'
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [peopleSearch, setPeopleSearch] = useState('');

  // Days of week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // December 2021 grid (starts on Wednesday, Dec 1)
  // Weeks matching Screenshot 4:
  const monthWeeks = [
    [
      { day: 28, isCurrentMonth: false },
      { day: 29, isCurrentMonth: false },
      { day: 30, isCurrentMonth: false },
      { day: 1, isCurrentMonth: true },
      {
        day: 2,
        isCurrentMonth: true,
        events: [
          { text: 'Free day', bg: 'bg-[#00D2D3]' },
          { text: 'Party Time', bg: 'bg-[#EC4899]' },
          { text: 'More', isLink: true },
        ],
      },
      { day: 3, isCurrentMonth: true },
      { day: 4, isCurrentMonth: true },
    ],
    [
      { day: 5, isCurrentMonth: true },
      { day: 6, isCurrentMonth: true },
      { day: 7, isCurrentMonth: true },
      { day: 8, isCurrentMonth: true },
      { day: 9, isCurrentMonth: true },
      { day: 10, isCurrentMonth: true },
      { day: 11, isCurrentMonth: true },
    ],
    [
      { day: 12, isCurrentMonth: true },
      { day: 13, isCurrentMonth: true },
      { day: 14, isCurrentMonth: true },
      { day: 15, isCurrentMonth: true },
      {
        day: 16,
        isCurrentMonth: true,
        events: [{ text: 'Victory day', bg: 'bg-[#FF7A59]' }],
      },
      { day: 17, isCurrentMonth: true },
      { day: 18, isCurrentMonth: true },
    ],
    [
      { day: 19, isCurrentMonth: true },
      { day: 20, isCurrentMonth: true },
      { day: 21, isCurrentMonth: true },
      { day: 22, isCurrentMonth: true },
      { day: 23, isCurrentMonth: true },
      { day: 24, isCurrentMonth: true },
      {
        day: 25,
        isCurrentMonth: true,
        events: [{ text: 'Christmas Day', bg: 'bg-[#00D2D3]' }],
      },
    ],
    [
      { day: 26, isCurrentMonth: true },
      { day: 27, isCurrentMonth: true },
      { day: 28, isCurrentMonth: true },
      { day: 29, isCurrentMonth: true },
      { day: 30, isCurrentMonth: true },
      { day: 31, isCurrentMonth: true },
      { day: 1, isCurrentMonth: false },
    ],
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Controls: Calendar Title & Day | Week | Month | Year View Switcher matching Screenshot 4 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827]">
          Calendar
        </h2>

        {/* View Switcher Tabs: Day | Week | Month (active purple) | Year */}
        <div className="inline-flex bg-white p-1 rounded-2xl border border-[#F1F5F9] shadow-sm">
          {['Day', 'Week', 'Month', 'Year'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setCalendarView(tab)}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                calendarView === tab
                  ? 'bg-[#5046E5] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Layout: Left Planner Sub-Panel (4 cols) & Calendar Grid (8 cols) matching Screenshot 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sub-Panel */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card space-y-6">
          <button
            type="button"
            onClick={() => setIsEventModalOpen(true)}
            className="w-full py-3 px-4 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-bold rounded-2xl shadow-md shadow-indigo-100 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <Plus size={16} />
            <span>Create Schedule</span>
          </button>

          {/* Mini Calendar Widget */}
          <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-2xs">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-50 text-xs font-bold text-slate-800">
              <span>December 2, 2021</span>
              <div className="flex items-center gap-1 text-slate-400">
                <button type="button" className="p-1 hover:text-slate-600">
                  <ChevronLeft size={14} />
                </button>
                <button type="button" className="p-1 hover:text-slate-600">
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-1 text-[11px] font-semibold text-slate-400">
              {['S', 'S', 'M', 'T', 'W', 'T', 'F'].map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </div>

            <div className="space-y-1 text-center text-xs">
              {[
                [29, 30, 1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10, 11, 12],
                [13, 14, 15, 16, 17, 18, 19],
                [20, 21, 22, 23, 24, 25, 26],
                [27, 28, 29, 30, 31, 1, 2],
              ].map((week, wIdx) => (
                <div key={wIdx} className="grid grid-cols-7 gap-1">
                  {week.map((dayNum, dIdx) => {
                    const isActive = dayNum === 3 && wIdx === 0;
                    const isMuted =
                      (wIdx === 0 && dayNum > 20) || (wIdx === 4 && dayNum < 5);

                    return (
                      <div
                        key={dIdx}
                        className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center font-medium ${
                          isActive
                            ? 'bg-[#5046E5] text-white font-bold shadow-sm'
                            : isMuted
                            ? 'text-slate-300'
                            : 'text-slate-700'
                        }`}
                      >
                        {dayNum}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* People Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-[#111827]">People</h3>
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search for People"
                value={peopleSearch}
                onChange={(e) => setPeopleSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            <div className="space-y-2.5 pt-1">
              {schedulePeople.map((person) => (
                <div
                  key={person.id}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-9 h-9 rounded-full object-cover ring-1 ring-slate-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {person.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 truncate">
                      {person.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="w-full py-2.5 px-4 bg-white border border-slate-200 hover:border-indigo-500 text-xs font-bold text-slate-700 hover:text-indigo-600 rounded-xl transition-colors shadow-2xs"
          >
            My Schedule
          </button>
        </div>

        {/* Right Calendar Month Grid matching Screenshot 4 */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card space-y-4">
          {/* Calendar Month Header: December 2, 2021 with navigation arrows */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="font-bold text-base text-[#111827]">
              December 2, 2021
            </h3>
            <div className="flex items-center gap-1.5 text-slate-400">
              <button
                type="button"
                className="p-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-700"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                className="p-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-700"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-500 py-1">
            {daysOfWeek.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          {/* Calendar Month Cells Grid */}
          <div className="space-y-2">
            {monthWeeks.map((week, wIdx) => (
              <div key={wIdx} className="grid grid-cols-7 gap-2">
                {week.map((cell, cIdx) => (
                  <div
                    key={cIdx}
                    onClick={() => setIsEventModalOpen(true)}
                    className={`h-22 sm:h-26 rounded-2xl p-2 border border-slate-100 hover:border-indigo-200 hover:bg-slate-50/60 transition-all cursor-pointer flex flex-col justify-between ${
                      !cell.isCurrentMonth ? 'bg-slate-50/30' : 'bg-white'
                    }`}
                  >
                    <span
                      className={`text-xs font-bold ${
                        !cell.isCurrentMonth
                          ? 'text-slate-300'
                          : cell.day === 2
                          ? 'text-[#FF7A59]'
                          : 'text-slate-700'
                      }`}
                    >
                      {cell.day < 10 && cell.isCurrentMonth ? `0${cell.day}` : cell.day}
                    </span>

                    {/* Event Badges on Cell */}
                    <div className="space-y-1">
                      {cell.events &&
                        cell.events.map((ev, eIdx) =>
                          ev.isLink ? (
                            <span
                              key={eIdx}
                              className="text-[10px] text-indigo-600 font-semibold block"
                            >
                              More
                            </span>
                          ) : (
                            <div
                              key={eIdx}
                              className={`text-[10px] font-bold text-white px-1.5 py-0.5 rounded-lg truncate shadow-2xs ${ev.bg}`}
                            >
                              {ev.text}
                            </div>
                          )
                        )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Centered Create an Event Modal matching Screenshot 4 */}
      <CreateEventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
    </div>
  );
}
