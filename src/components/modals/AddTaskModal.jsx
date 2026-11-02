import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AddTaskModal({ isOpen, onClose, onAddTask }) {
  const [formData, setFormData] = useState({
    title: '',
    column: 'todo',
    priority: 'Medium',
    status: 'On Track',
    description: 'Discussion for management dashboard ui design',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) {
      alert('Please enter a task title.');
      return;
    }

    const newTask = {
      id: `task-${Date.now()}`,
      title: formData.title,
      priority: formData.priority,
      status: formData.status,
      description: formData.description,
      comments: 0,
      likes: '0',
      assignees: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face'
      ]
    };

    if (onAddTask) {
      onAddTask(formData.column, newTask);
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
          Add New Task
        </h2>
        <p className="text-xs text-[#64748B] mb-6">
          Create an actionable task item for the project board.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Task Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Design System Documentation"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Column
              </label>
              <select
                value={formData.column}
                onChange={(e) => setFormData({ ...formData, column: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              >
                <option value="todo">ToDo</option>
                <option value="inProgress">In Progress</option>
                <option value="inReview">In Review</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Health Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            >
              <option value="On Track">On Track</option>
              <option value="At risk">At risk</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Description
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-md shadow-indigo-100 transition-all active:scale-95"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}
