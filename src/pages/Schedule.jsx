import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Edit2,
  Trash2,
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Check
} from 'lucide-react';
import { initialScheduleList, schedulePeople } from '../data/mockData';

export default function Schedule() {
  const { openAddTask } = useOutletContext();
  const [schedules, setSchedules] = useState(initialScheduleList);
  const [selectedIds, setSelectedIds] = useState([]);
  const [peopleSearch, setPeopleSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState(3); // Dec 3 active in Image 5

  // Filter people
  const filteredPeople = schedulePeople.filter(
    (p) =>
      p.name.toLowerCase().includes(peopleSearch.toLowerCase()) ||
      p.email.toLowerCase().includes(peopleSearch.toLowerCase())
  );

  // Toggle row checkbox
  const handleToggleRow = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Toggle all checkboxes
  const handleToggleAll = () => {
    if (selectedIds.length === schedules.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(schedules.map((s) => s.id));
    }
  };

  // Delete row
  const handleDeleteRow = (id) => {
    setSchedules(schedules.filter((s) => s.id !== id));
  };

  // Mini calendar data for Dec 2021
  const daysHeader = ['S', 'S', 'M', 'T', 'W', 'T', 'F'];
  const calendarGrid = [
    [29, 30, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 1, 2],
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
      {/* Left Column: Sub-panel matching Image 5 (Create Schedule, Mini Calendar, People, My Schedule) */}
      <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card space-y-6">
        {/* + Create Schedule Button */}
        <button
          type="button"
          onClick={openAddTask}
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
            {daysHeader.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>

          <div className="space-y-1 text-center text-xs">
            {calendarGrid.map((week, wIdx) => (
              <div key={wIdx} className="grid grid-cols-7 gap-1">
                {week.map((dayNum, dIdx) => {
                  const isActive = dayNum === 3 && wIdx === 0;
                  const isMuted = (wIdx === 0 && dayNum > 20) || (wIdx === 4 && dayNum < 5);

                  return (
                    <button
                      key={dIdx}
                      type="button"
                      onClick={() => setSelectedDate(dayNum)}
                      className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center font-medium transition-all ${
                        isActive
                          ? 'bg-[#5046E5] text-white font-bold shadow-sm'
                          : isMuted
                          ? 'text-slate-300'
                          : 'text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'
                      }`}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* People Section */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm text-[#111827]">People</h3>

          {/* Search for People */}
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

          {/* People List */}
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

        {/* My Schedule Button */}
        <button
          type="button"
          onClick={() => alert('Viewing your personal schedule assignments...')}
          className="w-full py-2.5 px-4 bg-white border border-slate-200 hover:border-indigo-500 text-xs font-bold text-slate-700 hover:text-indigo-600 rounded-xl transition-colors shadow-2xs"
        >
          My Schedule
        </button>
      </div>

      {/* Right Column: Schedule List Table matching Image 5 */}
      <div className="lg:col-span-8 bg-white rounded-3xl border border-[#F1F5F9] shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] sm:text-xs font-semibold text-[#94A3B8]">
                {/* Master Checkbox */}
                <th className="py-5 pl-8 pr-2 w-12">
                  <div
                    onClick={handleToggleAll}
                    className={`w-4 h-4 rounded-md border flex items-center justify-center cursor-pointer transition-colors ${
                      selectedIds.length === schedules.length
                        ? 'bg-[#5046E5] border-[#5046E5] text-white'
                        : 'border-gray-300 bg-white hover:border-indigo-400'
                    }`}
                  >
                    {selectedIds.length === schedules.length && (
                      <Check size={12} strokeWidth={3} />
                    )}
                  </div>
                </th>
                <th className="py-5 px-4 font-semibold text-[#64748B]">
                  Date <span className="text-gray-400 font-normal">▾</span>
                </th>
                <th className="py-5 px-4 font-semibold text-[#64748B]">
                  Time <span className="text-gray-400 font-normal">▾</span>
                </th>
                <th className="py-5 px-4 font-semibold text-[#64748B]">
                  Location <span className="text-gray-400 font-normal">▾</span>
                </th>
                <th className="py-5 pr-8 pl-4 text-right">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50 text-xs sm:text-sm font-medium">
              {schedules.map((item) => {
                const isSelected = selectedIds.includes(item.id);

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/70 transition-colors group"
                  >
                    {/* Checkbox */}
                    <td className="py-4 pl-8 pr-2">
                      <div
                        onClick={() => handleToggleRow(item.id)}
                        className={`w-4 h-4 rounded-md border flex items-center justify-center cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-[#5046E5] border-[#5046E5] text-white'
                            : 'border-gray-300 bg-white hover:border-indigo-400'
                        }`}
                      >
                        {isSelected && <Check size={12} strokeWidth={3} />}
                      </div>
                    </td>

                    {/* Date with Blue Briefcase/Calendar icon */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2.5 text-slate-800">
                        <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                          <Briefcase size={12} />
                        </div>
                        <span className="font-semibold">{item.date}</span>
                      </div>
                    </td>

                    {/* Time with Clock icon */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Clock size={14} className="text-slate-400" />
                        <span className="font-medium">{item.time}</span>
                      </div>
                    </td>

                    {/* Location Pill Badge (e.g. Office Meeting, Home, Friends Zone) */}
                    <td className="py-4 px-4">
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EEF2FF] text-[#5046E5]">
                        <MapPin size={12} className="text-[#5046E5]" />
                        <span>{item.location}</span>
                      </div>
                    </td>

                    {/* Yellow Edit Circle & Red Trash Circle Buttons */}
                    <td className="py-4 pr-8 pl-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Edit Yellow Circle */}
                        <button
                          type="button"
                          onClick={() => alert(`Edit schedule on ${item.date}`)}
                          className="w-7 h-7 rounded-full bg-[#FEF3C7] text-[#D97706] hover:bg-amber-200 flex items-center justify-center transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={12} />
                        </button>

                        {/* Delete Red Circle */}
                        <button
                          type="button"
                          onClick={() => handleDeleteRow(item.id)}
                          className="w-7 h-7 rounded-full bg-[#FEE2E2] text-[#DC2626] hover:bg-rose-200 flex items-center justify-center transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
