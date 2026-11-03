import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  Check,
  Clock,
  Calendar as CalendarIcon
} from 'lucide-react';
import { schedulePeople } from '../data/mockData';
import CreateEventModal from '../components/modals/CreateEventModal';

export default function CalendarPage() {
  const [calendarView, setCalendarView] = useState('Month'); // 'Day' | 'Week' | 'Month' | 'Year'
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [peopleSearch, setPeopleSearch] = useState('');
  const [selectedDaySlot, setSelectedDaySlot] = useState(null);

  // Days of week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // December 2021 grid matching Figma media_1793682011691_49e07e65.png "Calendar Month"
  const monthWeeks = [
    [
      { day: 29, display: '29', isCurrentMonth: false },
      { day: 30, display: '30', isCurrentMonth: false },
      { day: 1, display: '01', isCurrentMonth: true },
      {
        day: 2,
        display: '02',
        isCurrentMonth: true,
        isHighlighted: true,
        events: [
          { text: 'Free day', bg: 'bg-[#00D2D3]' },
          { text: 'Party Time', bg: 'bg-[#EC4899]' },
          { text: 'More', isLink: true },
        ],
      },
      { day: 3, display: '03', isCurrentMonth: true },
      { day: 4, display: '04', isCurrentMonth: true },
      { day: 5, display: '05', isCurrentMonth: true },
    ],
    [
      { day: 6, display: '06', isCurrentMonth: true },
      { day: 7, display: '07', isCurrentMonth: true },
      { day: 8, display: '08', isCurrentMonth: true },
      { day: 9, display: '09', isCurrentMonth: true },
      { day: 10, display: '10', isCurrentMonth: true },
      { day: 11, display: '11', isCurrentMonth: true },
      { day: 12, display: '12', isCurrentMonth: true },
    ],
    [
      { day: 13, display: '13', isCurrentMonth: true },
      { day: 14, display: '14', isCurrentMonth: true },
      { day: 15, display: '15', isCurrentMonth: true },
      {
        day: 16,
        display: '16',
        isCurrentMonth: true,
        events: [{ text: 'Victory day', bg: 'bg-[#FF7A59]' }],
      },
      { day: 17, display: '17', isCurrentMonth: true },
      { day: 18, display: '18', isCurrentMonth: true },
      { day: 19, display: '19', isCurrentMonth: true },
    ],
    [
      { day: 20, display: '20', isCurrentMonth: true },
      {
        day: 21,
        display: '21',
        isCurrentMonth: true,
        events: [{ text: 'Invited by friends', bg: 'bg-[#D946EF]' }],
      },
      { day: 22, display: '22', isCurrentMonth: true },
      { day: 23, display: '23', isCurrentMonth: true },
      { day: 24, display: '24', isCurrentMonth: true },
      {
        day: 25,
        display: '25',
        isCurrentMonth: true,
        events: [{ text: 'Christmas Day', bg: 'bg-[#00D2D3]' }],
      },
      { day: 26, display: '26', isCurrentMonth: true },
    ],
    [
      { day: 27, display: '27', isCurrentMonth: true },
      { day: 28, display: '28', isCurrentMonth: true },
      { day: 29, display: '29', isCurrentMonth: true },
      { day: 30, display: '30', isCurrentMonth: true },
      { day: 31, display: '31', isCurrentMonth: true },
      { day: 1, display: '01', isCurrentMonth: false },
      { day: 2, display: '02', isCurrentMonth: false },
    ],
  ];

  // 12 Months dataset for 2021 matching Figma media_1793680926178_3625fe68.png "Calendar year"
  const yearMonths2021 = [
    {
      name: 'January 2021',
      weeks: [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
      ]
    },
    {
      name: 'February 2021',
      weeks: [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
      ]
    },
    {
      name: 'March 2021',
      weeks: [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
      ]
    },
    {
      name: 'April 2021',
      weeks: [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
      ]
    },
    {
      name: 'May 2021',
      weeks: [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
      ]
    },
    {
      name: 'Jun 2021',
      weeks: [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
      ]
    },
    {
      name: 'July 2021',
      weeks: [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
      ]
    },
    {
      name: 'August 2021',
      weeks: [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
      ]
    },
    {
      name: 'September 2021',
      weeks: [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
      ]
    },
    {
      name: 'October 2021',
      weeks: [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
      ]
    },
    {
      name: 'November 2021',
      weeks: [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
      ]
    },
    {
      name: 'December 2021',
      highlightDay: 2,
      weeks: [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
      ]
    }
  ];

  // Hourly slots for "Day" view matching Figma media_1793684989979_63c3f76c.png "Calendar day"
  const dayScheduleSlots = [
    {
      time: '09.00 AM',
      event: {
        text: 'Invited by friends',
        bg: 'bg-[#FF7A59]',
        align: 'left',
      },
    },
    { time: '10.00 AM', event: null },
    { time: '11.00 AM', event: null },
    {
      time: '12.00 PM',
      event: {
        text: 'Prayer Time',
        bg: 'bg-[#00D2D3]',
        align: 'center',
      },
    },
    { time: '01.00 PM', event: null },
    {
      time: '02.00 PM',
      event: {
        text: 'lunch Time',
        bg: 'bg-[#FF7A59]',
        align: 'right',
      },
    },
    { time: '03.00 PM', event: null },
    { time: '04.00 PM', event: null },
    { time: '05.00 PM', event: null },
    {
      time: '06.00 PM',
      event: {
        text: 'Prayer Time',
        bg: 'bg-[#16A34A]',
        align: 'left-center',
      },
    },
    { time: '07.00 PM', event: null },
    { time: '08.00 PM', event: null },
    {
      time: '09.00 PM',
      event: {
        text: 'Dinner Time',
        bg: 'bg-[#5046E5]',
        align: 'right-center',
      },
    },
    { time: '10.00 PM', event: null },
    { time: '11.00 PM', event: null },
    { time: '12.00 AM', event: null },
    { time: '01.00 AM', event: null },
  ];

  // Filtered people
  const filteredPeople = schedulePeople.filter(p =>
    p.name.toLowerCase().includes(peopleSearch.toLowerCase()) ||
    p.email.toLowerCase().includes(peopleSearch.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Controls: Calendar Title & Day | Week | Month | Year View Switcher matching Figma */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827]">
          Calendar
        </h2>

        {/* View Switcher Tabs: Day | Week | Month | Year */}
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

      {/* Main Layout: Left Planner Sub-Panel (4 cols) & Calendar Grid (8 cols) */}
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
              {filteredPeople.map((person) => (
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

        {/* Right Calendar Area: Day View | Week View | Month View | Year View */}

        {/* VIEW 1: DAY SCHEDULE VIEW matching Figma media_1793684989979_63c3f76c.png "Calendar day" */}
        {calendarView === 'Day' && (
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#F1F5F9] shadow-card space-y-4">
            {/* Header: Date with navigation arrows */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <h3 className="font-bold text-base sm:text-lg text-[#111827]">
                December 2, 2021
              </h3>
              <div className="flex items-center gap-1.5 text-slate-400">
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-700 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-700 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Hourly Schedule Rows matching exact Figma screenshot */}
            <div className="divide-y divide-gray-100 pt-1">
              {dayScheduleSlots.map((slot, sIdx) => {
                // Compute alignment for event pill
                let alignClass = 'justify-start pl-8';
                if (slot.event?.align === 'center') alignClass = 'justify-center';
                if (slot.event?.align === 'right') alignClass = 'justify-end pr-8';
                if (slot.event?.align === 'left-center') alignClass = 'justify-start pl-28';
                if (slot.event?.align === 'right-center') alignClass = 'justify-end pr-28';

                return (
                  <div
                    key={sIdx}
                    className="flex items-center min-h-[46px] py-1.5 group hover:bg-slate-50/50 transition-colors"
                  >
                    {/* Time Label on left */}
                    <div className="w-20 text-[11px] font-semibold text-slate-400 flex-shrink-0">
                      {slot.time}
                    </div>

                    {/* Timeline Line & Content Area */}
                    <div className={`flex-1 flex items-center ${alignClass}`}>
                      {slot.event && (
                        <div
                          className={`px-5 py-2 rounded-xl text-white text-xs font-semibold shadow-sm transition-transform hover:scale-[1.02] cursor-pointer ${slot.event.bg}`}
                        >
                          {slot.event.text}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 2: WEEK SCHEDULE VIEW */}
        {calendarView === 'Week' && (
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#F1F5F9] shadow-card space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="font-bold text-base text-[#111827]">
                December 2021 (Week 1)
              </h3>
              <div className="flex items-center gap-1.5 text-slate-400">
                <button type="button" className="p-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-700">
                  <ChevronLeft size={16} />
                </button>
                <button type="button" className="p-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-700">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 text-center text-xs font-semibold text-slate-500 py-2 border-b border-gray-100">
              {['Sun 29', 'Mon 30', 'Tue 01', 'Wed 02', 'Thu 03', 'Fri 04', 'Sat 05'].map((d, i) => (
                <div key={i} className={`p-1 ${i === 3 ? 'text-[#5046E5] font-bold' : ''}`}>{d}</div>
              ))}
            </div>

            <div className="divide-y divide-gray-100">
              {['09.00 AM', '12.00 PM', '02.00 PM', '06.00 PM', '09.00 PM'].map((t, idx) => (
                <div key={idx} className="grid grid-cols-7 min-h-[50px] py-1.5 items-center text-center">
                  <div className="text-[11px] font-semibold text-slate-400 text-left">{t}</div>
                  <div className="col-span-6 grid grid-cols-6 gap-2">
                    {idx === 0 && (
                      <div className="col-start-3 bg-[#FF7A59] text-white text-[11px] font-semibold py-1.5 px-2 rounded-lg shadow-2xs truncate">
                        Invited by friends
                      </div>
                    )}
                    {idx === 1 && (
                      <div className="col-start-4 bg-[#00D2D3] text-white text-[11px] font-semibold py-1.5 px-2 rounded-lg shadow-2xs truncate">
                        Prayer Time
                      </div>
                    )}
                    {idx === 2 && (
                      <div className="col-start-5 bg-[#FF7A59] text-white text-[11px] font-semibold py-1.5 px-2 rounded-lg shadow-2xs truncate">
                        lunch Time
                      </div>
                    )}
                    {idx === 3 && (
                      <div className="col-start-3 bg-[#16A34A] text-white text-[11px] font-semibold py-1.5 px-2 rounded-lg shadow-2xs truncate">
                        Prayer Time
                      </div>
                    )}
                    {idx === 4 && (
                      <div className="col-start-5 bg-[#5046E5] text-white text-[11px] font-semibold py-1.5 px-2 rounded-lg shadow-2xs truncate">
                        Dinner Time
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: 12-MONTH YEAR VIEW matching Figma media_1793680926178_3625fe68.png "Calendar year" */}
        {calendarView === 'Year' && (
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#F1F5F9] shadow-card">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {yearMonths2021.map((m, mIdx) => (
                <div key={mIdx} className="space-y-2">
                  {/* Month Title Header */}
                  <h4 className="font-bold text-xs sm:text-sm text-[#111827]">
                    {m.name}
                  </h4>

                  {/* Day of Week Letters */}
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-slate-400">
                    {['S', 'S', 'M', 'T', 'W', 'T', 'F'].map((d, i) => (
                      <span key={i}>{d}</span>
                    ))}
                  </div>

                  {/* Month 5-Week Grid */}
                  <div className="space-y-1 text-center text-[11px]">
                    {m.weeks.map((wk, wIdx) => (
                      <div key={wIdx} className="grid grid-cols-7 gap-1">
                        {wk.map((dayNum, dIdx) => {
                          const isMuted =
                            (wIdx === 0 && dayNum > 20) || (wIdx >= 4 && dayNum < 10);
                          const isPurpleHighlighted =
                            m.highlightDay === dayNum && !isMuted;

                          return (
                            <div
                              key={dIdx}
                              className="h-6 flex items-center justify-center"
                            >
                              {isPurpleHighlighted ? (
                                <span className="w-5 h-5 rounded-full bg-[#5046E5] text-white font-bold text-[10px] flex items-center justify-center shadow-sm">
                                  {dayNum}
                                </span>
                              ) : (
                                <span
                                  className={`${
                                    isMuted
                                      ? 'text-slate-300 font-normal'
                                      : 'text-slate-700 font-medium hover:text-indigo-600'
                                  }`}
                                >
                                  {dayNum}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: CALENDAR MONTH GRID matching Figma media_1793682011691_49e07e65.png "Calendar Month" */}
        {calendarView === 'Month' && (
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
            <div className="grid grid-cols-7 text-center text-xs font-semibold text-slate-500 py-2 border-b border-gray-100">
              {daysOfWeek.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            {/* Calendar Month Cells Seamless Table Grid matching Figma */}
            <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-2xs">
              {monthWeeks.map((week, wIdx) => (
                <div key={wIdx} className="grid grid-cols-7 border-b border-gray-100 last:border-b-0">
                  {week.map((cell, cIdx) => (
                    <div
                      key={cIdx}
                      onClick={() => setIsEventModalOpen(true)}
                      className={`min-h-[95px] sm:min-h-[110px] p-2 sm:p-2.5 border-r border-gray-100 last:border-r-0 hover:bg-slate-50/60 transition-all cursor-pointer flex flex-col items-center justify-start relative ${
                        !cell.isCurrentMonth ? 'bg-slate-50/20' : 'bg-white'
                      }`}
                    >
                      {/* Coral Accent Line on top of Day 02 */}
                      {cell.isHighlighted && (
                        <div className="absolute top-0 left-2 right-2 h-0.5 bg-[#FF7A59]" />
                      )}

                      {/* Day Number */}
                      <span
                        className={`text-xs sm:text-sm font-bold pt-0.5 ${
                          !cell.isCurrentMonth
                            ? 'text-slate-300'
                            : cell.isHighlighted
                            ? 'text-[#FF7A59]'
                            : 'text-[#1E293B]'
                        }`}
                      >
                        {cell.display}
                      </span>

                      {/* Event Badges Centered Underneath */}
                      {cell.events && (
                        <div className="w-full flex flex-col items-center space-y-1 mt-1.5">
                          {cell.events.map((ev, eIdx) =>
                            ev.isLink ? (
                              <span
                                key={eIdx}
                                className="text-[10px] text-[#3B82F6] font-medium pt-0.5 hover:underline"
                              >
                                More
                              </span>
                            ) : (
                              <div
                                key={eIdx}
                                className={`text-[9px] sm:text-[10px] font-bold text-white px-2 py-0.5 rounded-sm shadow-2xs w-full max-w-[85px] text-center truncate ${ev.bg}`}
                              >
                                {ev.text}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Centered Create an Event Modal */}
      <CreateEventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
    </div>
  );
}
