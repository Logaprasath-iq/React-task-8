import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Filter,
  CheckCircle2,
  Circle,
  MoreHorizontal,
  MessageSquare,
  Heart,
  Plus,
  Briefcase,
  Clock,
  MapPin,
  Edit2,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
  Check
} from 'lucide-react';
import StatusBadge from '../components/common/StatusBadge';
import {
  initialBoardTasks,
  initialScheduleList,
  schedulePeople
} from '../data/mockData';

export default function Schedule() {
  const { searchTerm, openAddTask } = useOutletContext();
  const [viewMode, setViewMode] = useState('List'); // Default to 'List' matching Figma Screenshot 3
  const [listType, setListType] = useState('tasks'); // 'tasks' (Grouped ToDo/Doing/Done) | 'agenda' (Calendar List)
  const [tasks, setTasks] = useState(initialBoardTasks);
  const [schedules, setSchedules] = useState(initialScheduleList);
  const [selectedScheduleIds, setSelectedScheduleIds] = useState([]);
  const [peopleSearch, setPeopleSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState(3);
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [taskSearch, setTaskSearch] = useState('');

  // Grouped Tasks for "Task view" matching Figma media_1793680904352_0b88b6e4.png
  const [taskGroups, setTaskGroups] = useState({
    todo: [
      {
        id: 'td-1',
        name: 'UI Design',
        startDate: '03/12/2021',
        endDate: '5/12/2021',
        member: '5 Member',
        status: 'Pending',
        checked: false,
        iconBg: 'bg-rose-50 text-rose-500'
      },
      {
        id: 'td-2',
        name: 'Logo Design',
        startDate: '01/12/2021',
        endDate: '3/12/2021',
        member: '5 Member',
        status: 'Pending',
        checked: false,
        iconBg: 'bg-amber-50 text-amber-500'
      }
    ],
    doing: [
      {
        id: 'do-1',
        name: 'Grapich Design',
        startDate: '03/12/2021',
        endDate: '5/12/2021',
        member: '5 Member',
        status: 'Running',
        checked: true,
        iconBg: 'bg-blue-50 text-blue-500'
      },
      {
        id: 'do-2',
        name: 'Web Design',
        startDate: '03/12/2021',
        endDate: '3/12/2021',
        member: '5 Member',
        status: 'Running',
        checked: true,
        iconBg: 'bg-cyan-50 text-cyan-500'
      }
    ],
    done: [
      {
        id: 'dn-1',
        name: 'Logo Design',
        startDate: '01/12/2021',
        endDate: '3/12/2021',
        member: '5 Member',
        status: 'Done',
        checked: true,
        iconBg: 'bg-emerald-50 text-emerald-500'
      }
    ]
  });

  // Toggle group task checkbox
  const handleToggleGroupCheck = (groupKey, taskId) => {
    setTaskGroups({
      ...taskGroups,
      [groupKey]: taskGroups[groupKey].map((t) =>
        t.id === taskId ? { ...t, checked: !t.checked } : t
      )
    });
  };

  // Delete group task
  const handleDeleteGroupTask = (groupKey, taskId) => {
    setTaskGroups({
      ...taskGroups,
      [groupKey]: taskGroups[groupKey].filter((t) => t.id !== taskId)
    });
  };

  // Toggle task completed state
  const handleToggleTaskCheck = (colId, taskId) => {
    setTasks({
      ...tasks,
      [colId]: tasks[colId].map((t) =>
        t.id === taskId ? { ...t, checked: !t.checked } : t
      ),
    });
  };

  // Move task to next column
  const handleMoveTask = (fromCol, toCol, taskId) => {
    const taskToMove = tasks[fromCol].find((t) => t.id === taskId);
    if (!taskToMove) return;

    setTasks({
      ...tasks,
      [fromCol]: tasks[fromCol].filter((t) => t.id !== taskId),
      [toCol]: [...tasks[toCol], { ...taskToMove, checked: toCol === 'done' }],
    });
  };

  const columns = [
    { id: 'todo', label: 'ToDo', next: 'inProgress' },
    { id: 'inProgress', label: 'In Progress', next: 'inReview' },
    { id: 'inReview', label: 'In Review', next: 'done' },
    { id: 'done', label: 'Done', next: null },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Header Controls matching Figma Image 3: Task Preview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* View Switcher Pills: List | Board | Timeline */}
        <div className="inline-flex bg-white p-1 rounded-2xl border border-[#F1F5F9] shadow-sm">
          {['List', 'Board', 'Timeline'].map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setViewMode(mode)}
              className={`px-6 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                viewMode === mode
                  ? 'bg-[#5046E5] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Top Right: Search Box + + Add Task Purple Button matching Figma */}
        <div className="flex items-center gap-3">
          <div className="relative w-44 sm:w-56">
            <input
              type="text"
              placeholder="Search"
              value={taskSearch}
              onChange={(e) => setTaskSearch(e.target.value)}
              className="w-full pl-4 pr-9 py-2 bg-white border border-[#E2E8F0] focus:border-[#5046E5] rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 shadow-sm outline-none"
            />
            <Search
              size={15}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          <button
            type="button"
            onClick={openAddTask}
            className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-sm shadow-indigo-100 transition-all active:scale-95 whitespace-nowrap"
          >
            <Plus size={16} />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: KANBAN BOARD (matching Screenshot 1: Board List / Task Preview) */}
      {viewMode === 'Board' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {columns.map((col) => {
            const colTasks = (tasks[col.id] || []).filter((task) => {
              if (priorityFilter !== 'All' && task.priority !== priorityFilter)
                return false;
              if (
                searchTerm &&
                !task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                !task.description.toLowerCase().includes(searchTerm.toLowerCase())
              )
                return false;
              return true;
            });

            return (
              <div key={col.id} className="flex flex-col space-y-4">
                {/* Column Title */}
                <h3 className="font-bold text-base text-[#111827] px-1">
                  {col.label}
                </h3>

                {/* Cards Container */}
                <div className="space-y-4 min-h-[480px]">
                  {colTasks.map((task) => (
                    <div
                      key={task.id}
                      className="bg-white rounded-3xl p-5 border border-[#F1F5F9] shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group"
                    >
                      {/* Top Row: Radio/Checked Circle + Title + More Options */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          {task.checked ? (
                            <div
                              onClick={() => handleToggleTaskCheck(col.id, task.id)}
                              className="w-4 h-4 rounded-full bg-[#5046E5] text-white flex items-center justify-center flex-shrink-0 cursor-pointer"
                            >
                              <Check size={10} strokeWidth={3} />
                            </div>
                          ) : (
                            <div
                              onClick={() => handleToggleTaskCheck(col.id, task.id)}
                              className="w-4 h-4 rounded-full border-2 border-slate-300 hover:border-indigo-500 flex-shrink-0 cursor-pointer transition-colors"
                            />
                          )}

                          <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                            {task.title}
                          </h4>
                        </div>

                        <button
                          type="button"
                          className="text-gray-400 hover:text-slate-700 p-0.5"
                        >
                          <MoreHorizontal size={16} />
                        </button>
                      </div>

                      {/* Badges: Priority (Low/Medium/High) + Health (On Track/At risk) */}
                      <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                        {task.priority && (
                          <StatusBadge status={task.priority} type="priority" />
                        )}
                        {task.status && (
                          <StatusBadge status={task.status} type="health" />
                        )}
                      </div>

                      {/* Description Text */}
                      <p className="text-xs text-[#64748B] mb-3 line-clamp-2">
                        {task.description}
                      </p>

                      {/* Preview Graphic / Attachments matching Screenshot 1 */}
                      {task.previewGraphic && (
                        <div className="mb-3 rounded-2xl overflow-hidden border border-slate-100 max-h-40 shadow-2xs">
                          <img
                            src={task.previewGraphic}
                            alt="Mockup preview"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      {task.attachments && task.attachments.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {task.attachments.map((img, i) => (
                            <div
                              key={i}
                              className="rounded-xl overflow-hidden border border-slate-100 h-18 shadow-2xs"
                            >
                              <img
                                src={img}
                                alt="Attachment"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Bottom Row: Assignee Stack + Comments + Likes */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-50 mt-1">
                        {/* Assignee Avatar Stack with Cyan Plus Button */}
                        <div className="flex items-center -space-x-2">
                          {(task.assignees || []).map((avatar, idx) => (
                            <img
                              key={idx}
                              src={avatar}
                              alt="Assignee"
                              className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                            />
                          ))}
                          <button
                            type="button"
                            className="w-7 h-7 rounded-full bg-[#00D2D3] text-white flex items-center justify-center text-xs font-bold ring-2 ring-white hover:opacity-90 transition-opacity"
                            title="Add member"
                          >
                            +
                          </button>
                        </div>

                        {/* Comments & Likes */}
                        <div className="flex items-center gap-3 text-slate-400 text-xs">
                          <div className="flex items-center gap-1">
                            <MessageSquare size={14} />
                            <span>{task.comments}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart size={14} />
                            <span>{task.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: LIST VIEW (matching Figma media_1793680904352_0b88b6e4.png "Task view") */}
      {viewMode === 'List' && (
        <div className="space-y-6">
          {/* Sub Switcher between Task Groups and Schedule Agenda */}
          <div className="flex items-center justify-between pb-1">
            <div className="inline-flex bg-white p-1 rounded-2xl border border-[#F1F5F9] shadow-2xs">
              <button
                type="button"
                onClick={() => setListType('tasks')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                  listType === 'tasks'
                    ? 'bg-[#5046E5] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Task Groups
              </button>
              <button
                type="button"
                onClick={() => setListType('agenda')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                  listType === 'agenda'
                    ? 'bg-[#5046E5] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Schedule Agenda
              </button>
            </div>
          </div>

          {listType === 'tasks' ? (
            /* GROUPED TABLES: To Do, Doing, and Done matching Figma Screenshot 3 */
            <div className="space-y-6">
              {[
                { key: 'todo', title: 'To Do', badgeClass: 'bg-[#FFEDD5] text-[#EA580C]' },
                { key: 'doing', title: 'Doing', badgeClass: 'bg-[#DBEAFE] text-[#2563EB]' },
                { key: 'done', title: 'Done', badgeClass: 'bg-[#DCFCE7] text-[#16A34A]' }
              ].map(({ key, title, badgeClass }) => {
                const groupItems = (taskGroups[key] || []).filter((item) => {
                  if (!taskSearch) return true;
                  return item.name.toLowerCase().includes(taskSearch.toLowerCase());
                });

                return (
                  <div
                    key={key}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F1F5F9] shadow-card space-y-4"
                  >
                    {/* Header Row: Title on Left, See More on Right */}
                    <div className="flex items-center justify-between pb-2 border-b border-gray-50">
                      <h3 className="font-bold text-base sm:text-lg text-[#111827]">
                        {title}
                      </h3>
                      <button
                        type="button"
                        className="text-xs font-semibold text-[#5046E5] hover:underline"
                      >
                        See More
                      </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-gray-100 text-[11px] sm:text-xs font-semibold text-[#94A3B8]">
                            <th className="pb-3 pl-2 w-24">Check Box</th>
                            <th className="pb-3 px-4 font-semibold text-[#64748B]">
                              Task Name <span className="text-gray-400 font-normal">▾</span>
                            </th>
                            <th className="pb-3 px-4 font-semibold text-[#64748B]">
                              Start Date <span className="text-gray-400 font-normal">▾</span>
                            </th>
                            <th className="pb-3 px-4 font-semibold text-[#64748B]">
                              End Date <span className="text-gray-400 font-normal">▾</span>
                            </th>
                            <th className="pb-3 px-4 font-semibold text-[#64748B]">
                              Member <span className="text-gray-400 font-normal">▾</span>
                            </th>
                            <th className="pb-3 px-4 font-semibold text-[#64748B]">
                              Status <span className="text-gray-400 font-normal">▾</span>
                            </th>
                            <th className="pb-3 pr-4 text-right font-semibold text-[#64748B]">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 font-medium">
                          {groupItems.map((item) => (
                            <tr
                              key={item.id}
                              className="hover:bg-slate-50/70 transition-colors"
                            >
                              {/* Checkbox Column */}
                              <td className="py-4 pl-2">
                                <div
                                  onClick={() => handleToggleGroupCheck(key, item.id)}
                                  className={`w-4 h-4 rounded-md border flex items-center justify-center cursor-pointer transition-colors ${
                                    item.checked
                                      ? 'bg-[#5046E5] border-[#5046E5] text-white'
                                      : 'border-gray-300 bg-white hover:border-indigo-400'
                                  }`}
                                >
                                  {item.checked && (
                                    <Check size={12} strokeWidth={3} />
                                  )}
                                </div>
                              </td>

                              {/* Task Name with colored square icon */}
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-6 h-6 rounded-lg ${item.iconBg} flex items-center justify-center flex-shrink-0 font-bold text-xs`}
                                  >
                                    <Briefcase size={12} />
                                  </div>
                                  <span className="font-semibold text-slate-800">
                                    {item.name}
                                  </span>
                                </div>
                              </td>

                              {/* Start Date */}
                              <td className="py-4 px-4 text-slate-600">
                                {item.startDate}
                              </td>

                              {/* End Date */}
                              <td className="py-4 px-4 text-slate-600">
                                {item.endDate}
                              </td>

                              {/* Member */}
                              <td className="py-4 px-4 text-slate-600">
                                {item.member}
                              </td>

                              {/* Status Badge */}
                              <td className="py-4 px-4">
                                <span
                                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${badgeClass}`}
                                >
                                  {item.status}
                                </span>
                              </td>

                              {/* Actions: Blue Edit Pencil & Red Delete Trash */}
                              <td className="py-4 pr-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                                    type="button"
                                    onClick={() => alert(`Editing task: ${item.name}`)}
                                    className="p-1.5 text-[#3B82F6] hover:bg-blue-50 rounded-lg transition-colors"
                                    title="Edit"
                                  >
                                    <Edit2 size={14} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteGroupTask(key, item.id)}
                                    className="p-1.5 text-[#EF4444] hover:bg-rose-50 rounded-lg transition-colors"
                                    title="Delete"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* AGENDA CALENDAR VIEW (Left Planner Sub-Panel + Schedule Table) */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Sub-Panel */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card space-y-6">
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
                          const isActive = dayNum === 2 && wIdx === 0;
                          const isMuted =
                            (wIdx === 0 && dayNum > 20) || (wIdx === 4 && dayNum < 5);

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

                {/* People List */}
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

              {/* Right Schedule Table */}
              <div className="lg:col-span-8 bg-white rounded-3xl border border-[#F1F5F9] shadow-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-gray-100 text-[11px] sm:text-xs font-semibold text-[#94A3B8]">
                        <th className="py-5 pl-8 pr-2 w-12">
                          <input
                            type="checkbox"
                            checked={
                              selectedScheduleIds.length === schedules.length &&
                              schedules.length > 0
                            }
                            onChange={() => {
                              if (selectedScheduleIds.length === schedules.length) {
                                setSelectedScheduleIds([]);
                              } else {
                                setSelectedScheduleIds(schedules.map((s) => s.id));
                              }
                            }}
                            className="w-4 h-4 rounded text-indigo-600 accent-[#5046E5]"
                          />
                        </th>
                        <th className="py-5 px-4 font-semibold text-[#64748B]">Date ▾</th>
                        <th className="py-5 px-4 font-semibold text-[#64748B]">Time ▾</th>
                        <th className="py-5 px-4 font-semibold text-[#64748B]">Location ▾</th>
                        <th className="py-5 pr-8 pl-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 text-xs sm:text-sm font-medium">
                      {schedules.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-4 pl-8 pr-2">
                            <input
                              type="checkbox"
                              checked={selectedScheduleIds.includes(item.id)}
                              onChange={() => {
                                if (selectedScheduleIds.includes(item.id)) {
                                  setSelectedScheduleIds(
                                    selectedScheduleIds.filter((id) => id !== item.id)
                                  );
                                } else {
                                  setSelectedScheduleIds([...selectedScheduleIds, item.id]);
                                }
                              }}
                              className="w-4 h-4 rounded text-indigo-600 accent-[#5046E5]"
                            />
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2.5 text-slate-800">
                              <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                                <Briefcase size={12} />
                              </div>
                              <span className="font-semibold">{item.date}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-slate-600">
                            <div className="flex items-center gap-2">
                              <Clock size={14} className="text-slate-400" />
                              <span>{item.time}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EEF2FF] text-[#5046E5]">
                              <MapPin size={12} />
                              <span>{item.location}</span>
                            </div>
                          </td>
                          <td className="py-4 pr-8 pl-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                type="button"
                                className="w-7 h-7 rounded-full bg-[#FEF3C7] text-[#D97706] hover:bg-amber-200 flex items-center justify-center"
                              >
                                <Edit2 size={12} />
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setSchedules(schedules.filter((s) => s.id !== item.id))
                                }
                                className="w-7 h-7 rounded-full bg-[#FEE2E2] text-[#DC2626] hover:bg-rose-200 flex items-center justify-center"
                              >
                                <Trash2 size={12} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* VIEW 3: TIMELINE VIEW */}
      {viewMode === 'Timeline' && (
        <div className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div>
              <h3 className="font-bold text-base text-[#111827]">
                Sprint Roadmap & Milestones
              </h3>
              <p className="text-xs text-[#64748B]">Q4 Product Engineering Timeline</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-xl bg-indigo-50 text-indigo-600">
              Nov 2026 - Dec 2026
            </span>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Dashboard UI Revamp', start: '10%', width: '45%', col: '#6366F1', phase: 'Sprint 1' },
              { title: 'Payment & Invoice Gateway', start: '30%', width: '35%', col: '#10B981', phase: 'Sprint 2' },
              { title: 'Mobile React Native App', start: '50%', width: '40%', col: '#F59E0B', phase: 'Sprint 3' },
              { title: 'Security Audit & Compliance', start: '75%', width: '20%', col: '#EC4899', phase: 'Sprint 4' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-slate-700">
                  <span className="font-bold">{item.title}</span>
                  <span className="text-slate-400">{item.phase}</span>
                </div>
                <div className="w-full h-8 bg-slate-50 rounded-xl relative overflow-hidden border border-slate-100">
                  <div
                    className="absolute top-1 bottom-1 rounded-lg text-white text-[10px] font-bold flex items-center px-3 shadow-sm transition-all duration-300"
                    style={{
                      left: item.start,
                      width: item.width,
                      backgroundColor: item.col,
                    }}
                  >
                    Active Progress
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
