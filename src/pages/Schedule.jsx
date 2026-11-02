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
  ArrowRight,
  Clock,
  Calendar,
  Layers
} from 'lucide-react';
import StatusBadge from '../components/common/StatusBadge';
import { initialBoardTasks } from '../data/mockData';

export default function Schedule() {
  const { searchTerm, openAddTask } = useOutletContext();
  const [tasks, setTasks] = useState(initialBoardTasks);
  const [viewMode, setViewMode] = useState('Board'); // 'List' | 'Board' | 'Timeline'
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Filter tasks based on search & priority
  const filterList = (taskList) => {
    return taskList.filter((task) => {
      const matchesSearch =
        searchTerm === '' ||
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPriority =
        priorityFilter === 'All' || task.priority === priorityFilter;

      return matchesSearch && matchesPriority;
    });
  };

  // Move task to next column
  const handleMoveTask = (fromCol, toCol, taskId) => {
    const taskToMove = tasks[fromCol].find((t) => t.id === taskId);
    if (!taskToMove) return;

    setTasks({
      ...tasks,
      [fromCol]: tasks[fromCol].filter((t) => t.id !== taskId),
      [toCol]: [...tasks[toCol], taskToMove],
    });
  };

  // Columns definition
  const columns = [
    { id: 'todo', label: 'ToDo', next: 'inProgress' },
    { id: 'inProgress', label: 'In Progress', next: 'inReview' },
    { id: 'inReview', label: 'In Review', next: 'done' },
    { id: 'done', label: 'Done', next: null },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Controls: View Switcher (List | Board | Timeline) and Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* View Switcher Pills (Matching Figma preview 5) */}
        <div className="inline-flex bg-white p-1 rounded-2xl border border-[#F1F5F9] shadow-sm">
          {['List', 'Board', 'Timeline'].map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setViewMode(mode)}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                viewMode === mode
                  ? 'bg-[#5046E5] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Filter Dropdown Button */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="flex items-center gap-2 px-4 py-2 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all"
            >
              <Filter size={15} />
              <span>Filter</span>
            </button>

            {showFilterDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-dropdown p-2 z-30 text-xs">
                <p className="px-3 py-1 font-semibold text-gray-400 text-[10px] uppercase">
                  Filter by Priority
                </p>
                {['All', 'Low', 'Medium', 'High'].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setPriorityFilter(p);
                      setShowFilterDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg ${
                      priorityFilter === p
                        ? 'bg-indigo-50 text-indigo-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {p} Priority
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={openAddTask}
            className="flex items-center gap-1.5 px-4 py-2 bg-white border border-[#E2E8F0] hover:border-indigo-400 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all"
          >
            <Plus size={16} className="text-indigo-600" />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: KANBAN BOARD (Default from Figma preview 5) */}
      {viewMode === 'Board' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {columns.map((col) => {
            const colTasks = filterList(tasks[col.id] || []);
            return (
              <div key={col.id} className="flex flex-col space-y-4">
                {/* Column Title */}
                <div className="flex items-center justify-between px-1">
                  <h3 className="font-bold text-base text-[#111827]">
                    {col.label}
                  </h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-600">
                    {colTasks.length}
                  </span>
                </div>

                {/* Cards Container */}
                <div className="space-y-4 min-h-[400px]">
                  {colTasks.map((task) => (
                    <div
                      key={task.id}
                      className="bg-white rounded-3xl p-5 border border-[#F1F5F9] shadow-card hover:shadow-card-hover transition-all duration-200 group flex flex-col justify-between"
                    >
                      {/* Top Row: Radio/Check + Title + Options */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 min-w-0">
                          {col.id === 'done' ? (
                            <CheckCircle2
                              size={18}
                              className="text-indigo-600 fill-indigo-100 flex-shrink-0"
                            />
                          ) : (
                            <Circle
                              size={18}
                              className="text-gray-300 hover:text-indigo-600 flex-shrink-0 cursor-pointer"
                              onClick={() => {
                                if (col.next) {
                                  handleMoveTask(col.id, col.next, task.id);
                                }
                              }}
                            />
                          )}
                          <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                            {task.title}
                          </h4>
                        </div>

                        <button
                          type="button"
                          className="text-gray-400 hover:text-slate-700 p-1"
                        >
                          <MoreHorizontal size={16} />
                        </button>
                      </div>

                      {/* Badges: Priority & Health */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <StatusBadge status={task.priority} type="priority" />
                        <StatusBadge status={task.status} type="health" />
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#64748B] mb-3 line-clamp-2">
                        {task.description}
                      </p>

                      {/* Graphical Attachment Preview (if present) */}
                      {task.previewGraphic && (
                        <div className="mb-3 rounded-2xl overflow-hidden border border-slate-100 max-h-36">
                          <img
                            src={task.previewGraphic}
                            alt="Preview graphic"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      {task.attachments && task.attachments.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {task.attachments.map((img, i) => (
                            <div
                              key={i}
                              className="rounded-xl overflow-hidden border border-slate-100 h-16"
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

                      {/* Bottom Row: Assignee Stack & Metrics */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-50 mt-1">
                        {/* Assignee Avatar Stack */}
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
                            className="w-7 h-7 rounded-full bg-[#00D2D3] text-white flex items-center justify-center text-xs font-bold ring-2 ring-white hover:opacity-90"
                            title="Add assignee"
                          >
                            +
                          </button>
                        </div>

                        {/* Comments & Likes */}
                        <div className="flex items-center gap-3 text-gray-400 text-xs">
                          <div className="flex items-center gap-1">
                            <MessageSquare size={14} />
                            <span>{task.comments}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart size={14} />
                            <span>{task.likes}</span>
                          </div>

                          {/* Quick Advance Button */}
                          {col.next && (
                            <button
                              type="button"
                              onClick={() => handleMoveTask(col.id, col.next, task.id)}
                              className="text-gray-300 hover:text-indigo-600 transition-colors ml-1"
                              title={`Advance to ${col.next}`}
                            >
                              <ArrowRight size={14} />
                            </button>
                          )}
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

      {/* VIEW 2: LIST VIEW */}
      {viewMode === 'List' && (
        <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50/50 text-xs font-semibold text-[#64748B]">
                  <th className="py-4 pl-6 pr-3">Task Title</th>
                  <th className="py-4 px-3">Column</th>
                  <th className="py-4 px-3">Priority</th>
                  <th className="py-4 px-3">Status</th>
                  <th className="py-4 px-3">Assignees</th>
                  <th className="py-4 pr-6 pl-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-xs sm:text-sm font-medium">
                {columns.flatMap((col) =>
                  filterList(tasks[col.id] || []).map((t) => (
                    <tr key={t.id} className="hover:bg-slate-50/70">
                      <td className="py-4 pl-6 pr-3 font-semibold text-slate-900">
                        {t.title}
                      </td>
                      <td className="py-4 px-3 text-slate-500 font-medium">
                        {col.label}
                      </td>
                      <td className="py-4 px-3">
                        <StatusBadge status={t.priority} type="priority" />
                      </td>
                      <td className="py-4 px-3">
                        <StatusBadge status={t.status} type="health" />
                      </td>
                      <td className="py-4 px-3">
                        <div className="flex items-center -space-x-2">
                          {(t.assignees || []).map((av, idx) => (
                            <img
                              key={idx}
                              src={av}
                              alt="Assignee"
                              className="w-6 h-6 rounded-full object-cover ring-2 ring-white"
                            />
                          ))}
                        </div>
                      </td>
                      <td className="py-4 pr-6 pl-3 text-right">
                        {col.next ? (
                          <button
                            type="button"
                            onClick={() => handleMoveTask(col.id, col.next, t.id)}
                            className="text-xs font-semibold text-indigo-600 hover:underline"
                          >
                            Move Next →
                          </button>
                        ) : (
                          <span className="text-emerald-600 font-semibold text-xs">
                            Done ✓
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 3: TIMELINE (GANTT) VIEW */}
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
