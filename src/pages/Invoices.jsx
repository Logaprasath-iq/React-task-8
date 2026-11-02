import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Mail,
  Calendar as CalendarIcon,
  Star,
  MoreHorizontal,
  Trash2,
  Check,
  Plus,
  Filter,
  Download
} from 'lucide-react';
import StatusBadge from '../components/common/StatusBadge';
import { initialInvoices } from '../data/mockData';

export default function Invoices() {
  const { searchTerm, openCreateInvoice } = useOutletContext();
  const [invoices, setInvoices] = useState(initialInvoices);
  const [selectedIds, setSelectedIds] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
  const [activeMenuId, setActiveMenuId] = useState(null);

  // Filter invoices based on search & active status tab
  const filteredInvoices = invoices.filter((item) => {
    const matchesSearch =
      searchTerm === '' ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTab =
      activeTab === 'All' || item.status.toLowerCase() === activeTab.toLowerCase();

    return matchesSearch && matchesTab;
  });

  // Toggle selection
  const handleSelectRow = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Toggle select all
  const handleSelectAll = () => {
    if (selectedIds.length === filteredInvoices.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredInvoices.map((inv) => inv.id));
    }
  };

  // Toggle star
  const handleToggleStar = (id) => {
    setInvoices(
      invoices.map((inv) =>
        inv.id === id ? { ...inv, starred: !inv.starred } : inv
      )
    );
  };

  // Delete single
  const handleDeleteRow = (id) => {
    setInvoices(invoices.filter((inv) => inv.id !== id));
    setSelectedIds(selectedIds.filter((item) => item !== id));
    setActiveMenuId(null);
  };

  // Batch delete
  const handleBatchDelete = () => {
    if (selectedIds.length === 0) return;
    if (window.confirm(`Delete ${selectedIds.length} selected invoices?`)) {
      setInvoices(invoices.filter((inv) => !selectedIds.includes(inv.id)));
      setSelectedIds([]);
    }
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      {/* Sub-Header Tabs & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-2xl border border-[#F1F5F9] shadow-sm">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {['All', 'Complete', 'Pending', 'Cancel'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                activeTab === tab
                  ? 'bg-[#5046E5] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {selectedIds.length > 0 && (
            <button
              type="button"
              onClick={handleBatchDelete}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors"
            >
              <Trash2 size={14} />
              <span>Delete ({selectedIds.length})</span>
            </button>
          )}

          <button
            type="button"
            onClick={openCreateInvoice}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#5046E5] bg-[#EEF2FF] hover:bg-indigo-100 rounded-xl transition-colors"
          >
            <Plus size={14} />
            <span>Create Statement</span>
          </button>
        </div>
      </div>

      {/* Invoices Table Card (Matching Figma preview 4) */}
      <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-gray-100 bg-slate-50/50 text-[11px] sm:text-xs font-semibold text-[#64748B]">
                {/* Master Checkbox */}
                <th className="py-4 pl-6 pr-3 w-10">
                  <input
                    type="checkbox"
                    checked={
                      filteredInvoices.length > 0 &&
                      selectedIds.length === filteredInvoices.length
                    }
                    onChange={handleSelectAll}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer accent-[#5046E5]"
                  />
                </th>
                <th className="py-4 px-3">Invoice Id</th>
                <th className="py-4 px-3">Name</th>
                <th className="py-4 px-3">Email</th>
                <th className="py-4 px-3">Date</th>
                <th className="py-4 px-3 text-center">Status</th>
                <th className="py-4 pr-6 pl-3 text-right">
                  {selectedIds.length > 0 ? (
                    <button
                      type="button"
                      onClick={handleBatchDelete}
                      className="text-rose-500 hover:text-rose-700"
                      title="Delete selected"
                    >
                      <Trash2 size={16} />
                    </button>
                  ) : (
                    <span className="sr-only">Actions</span>
                  )}
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50 text-xs sm:text-sm font-medium">
              {filteredInvoices.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    No invoices found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredInvoices.map((inv) => {
                  const isSelected = selectedIds.includes(inv.id);
                  return (
                    <tr
                      key={inv.id}
                      className={`hover:bg-slate-50/80 transition-colors ${
                        isSelected ? 'bg-indigo-50/30' : ''
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="py-4 pl-6 pr-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleSelectRow(inv.id)}
                          className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer accent-[#5046E5]"
                        />
                      </td>

                      {/* Invoice ID */}
                      <td className="py-4 px-3 font-semibold text-slate-800">
                        #{inv.id}
                      </td>

                      {/* Name & Avatar */}
                      <td className="py-4 px-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={inv.avatar}
                            alt={inv.name}
                            className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-100 flex-shrink-0"
                          />
                          <span className="font-semibold text-slate-900">
                            {inv.name}
                          </span>
                        </div>
                      </td>

                      {/* Email with Green Mail Icon */}
                      <td className="py-4 px-3">
                        <div className="flex items-center gap-2 text-slate-600">
                          <div className="w-5 h-5 rounded-full bg-emerald-100/60 text-emerald-600 flex items-center justify-center flex-shrink-0">
                            <Mail size={12} />
                          </div>
                          <span className="text-xs truncate max-w-[190px]">
                            {inv.email}
                          </span>
                        </div>
                      </td>

                      {/* Date with Blue Calendar Icon */}
                      <td className="py-4 px-3">
                        <div className="flex items-center gap-2 text-slate-600">
                          <div className="w-5 h-5 rounded-full bg-blue-100/60 text-blue-600 flex items-center justify-center flex-shrink-0">
                            <CalendarIcon size={12} />
                          </div>
                          <span className="text-xs text-slate-700 whitespace-nowrap">
                            {inv.date}
                          </span>
                        </div>
                      </td>

                      {/* Status Badge */}
                      <td className="py-4 px-3 text-center">
                        <StatusBadge status={inv.status} type="status" />
                      </td>

                      {/* Star & Action Menu */}
                      <td className="py-4 pr-6 pl-3 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {/* Star Toggle */}
                          <button
                            type="button"
                            onClick={() => handleToggleStar(inv.id)}
                            className="text-gray-300 hover:text-amber-400 transition-colors p-1"
                            title={inv.starred ? 'Starred' : 'Not starred'}
                          >
                            <Star
                              size={16}
                              className={
                                inv.starred
                                  ? 'text-amber-400 fill-amber-400'
                                  : 'text-gray-300'
                              }
                            />
                          </button>

                          {/* Action Menu */}
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() =>
                                setActiveMenuId(
                                  activeMenuId === inv.id ? null : inv.id
                                )
                              }
                              className="text-gray-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100"
                            >
                              <MoreHorizontal size={16} />
                            </button>

                            {activeMenuId === inv.id && (
                              <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-100 rounded-xl shadow-dropdown py-1 z-30 text-xs text-left">
                                <button
                                  type="button"
                                  onClick={() => {
                                    alert(`Invoice #${inv.id} amount: ${inv.amount}`);
                                    setActiveMenuId(null);
                                  }}
                                  className="w-full px-3 py-1.5 hover:bg-slate-50 text-slate-700"
                                >
                                  View Details
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    alert(`Downloading invoice #${inv.id} PDF...`);
                                    setActiveMenuId(null);
                                  }}
                                  className="w-full px-3 py-1.5 hover:bg-slate-50 text-slate-700"
                                >
                                  Download PDF
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteRow(inv.id)}
                                  className="w-full px-3 py-1.5 hover:bg-rose-50 text-rose-600 font-semibold"
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
