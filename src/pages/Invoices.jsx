import React, { useState, useEffect } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import {
  Calendar as CalendarIcon,
  Star,
  MoreHorizontal,
  Trash2,
  Edit2,
  Check,
  Plus,
  FileText
} from 'lucide-react';
import StatusBadge from '../components/common/StatusBadge';
import { initialInvoices } from '../data/mockData';
import CreateInvoice from './CreateInvoice';

export default function Invoices() {
  const { searchTerm, openCreateInvoice } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const viewParam = searchParams.get('view');
  const [activeTab, setActiveTab] = useState(viewParam === 'create' ? 'create' : 'list');

  useEffect(() => {
    if (viewParam === 'create') {
      setActiveTab('create');
    }
  }, [viewParam]);

  const [invoices, setInvoices] = useState(initialInvoices);
  // Default selected IDs matching Figma Image 3: rows #876213, #876987, #872345, #878769
  const [selectedIds, setSelectedIds] = useState(["876213", "876987", "872345", "878769"]);
  const [activeMenuId, setActiveMenuId] = useState(null);

  // Filter invoices based on header search
  const filteredInvoices = invoices.filter((item) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      item.id.toLowerCase().includes(term) ||
      item.name.toLowerCase().includes(term) ||
      item.email.toLowerCase().includes(term)
    );
  });

  // Toggle row checkbox
  const handleToggleRow = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Toggle master checkbox
  const handleToggleAll = () => {
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

  // Delete invoice
  const handleDeleteRow = (id) => {
    setInvoices(invoices.filter((inv) => inv.id !== id));
    setSelectedIds(selectedIds.filter((item) => item !== id));
    setActiveMenuId(null);
  };

  // Batch delete
  const handleBatchDelete = () => {
    if (selectedIds.length === 0) return;
    setInvoices(invoices.filter((inv) => !selectedIds.includes(inv.id)));
    setSelectedIds([]);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Controls: View Switcher between Invoice List & Create Invoice */}
      <div className="flex items-center justify-between gap-4">
        <div className="inline-flex bg-white p-1 rounded-2xl border border-[#F1F5F9] shadow-sm">
          <button
            type="button"
            onClick={() => setActiveTab('list')}
            className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'list'
                ? 'bg-[#5046E5] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Invoice List
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('create')}
            className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'create'
                ? 'bg-[#5046E5] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Create Invoice
          </button>
        </div>
      </div>

      {activeTab === 'create' ? (
        <CreateInvoice />
      ) : (
        /* Invoices Table Card matching Figma Image 3 & 4 */
        <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[840px]">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] sm:text-xs font-semibold text-[#94A3B8]">
                {/* Master Checkbox */}
                <th className="py-5 pl-8 pr-2 w-12">
                  <div
                    onClick={handleToggleAll}
                    className={`w-4 h-4 rounded-md border flex items-center justify-center cursor-pointer transition-colors ${
                      filteredInvoices.length > 0 &&
                      selectedIds.length === filteredInvoices.length
                        ? 'bg-[#5046E5] border-[#5046E5] text-white'
                        : 'border-gray-300 bg-white hover:border-indigo-400'
                    }`}
                  >
                    {filteredInvoices.length > 0 &&
                      selectedIds.length === filteredInvoices.length && (
                        <Check size={12} strokeWidth={3} />
                      )}
                  </div>
                </th>
                <th className="py-5 px-4 font-semibold text-[#64748B]">
                  Invoice Id <span className="text-gray-400 font-normal">▾</span>
                </th>
                <th className="py-5 px-4 font-semibold text-[#64748B]">
                  Name <span className="text-gray-400 font-normal">▾</span>
                </th>
                <th className="py-5 px-4 font-semibold text-[#64748B]">
                  Email <span className="text-gray-400 font-normal">▾</span>
                </th>
                <th className="py-5 px-4 font-semibold text-[#64748B]">
                  Date <span className="text-gray-400 font-normal">▾</span>
                </th>
                <th className="py-5 px-4 text-center font-semibold text-[#64748B]">
                  Status <span className="text-gray-400 font-normal">▾</span>
                </th>
                <th className="py-5 pr-8 pl-4 text-right">
                  <button
                    type="button"
                    onClick={handleBatchDelete}
                    className="text-gray-400 hover:text-rose-500 transition-colors p-1"
                    title="Delete selected"
                  >
                    <Trash2 size={16} />
                  </button>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50 text-xs sm:text-sm font-medium">
              {filteredInvoices.map((inv) => {
                const isSelected = selectedIds.includes(inv.id);
                const isMenuOpen = activeMenuId === inv.id;

                return (
                  <tr
                    key={inv.id}
                    className="hover:bg-slate-50/70 transition-colors group"
                  >
                    {/* Checkbox */}
                    <td className="py-4 pl-8 pr-2">
                      <div
                        onClick={() => handleToggleRow(inv.id)}
                        className={`w-4 h-4 rounded-md border flex items-center justify-center cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-[#5046E5] border-[#5046E5] text-white shadow-xs'
                            : 'border-gray-300 bg-white hover:border-indigo-400'
                        }`}
                      >
                        {isSelected && <Check size={12} strokeWidth={3} />}
                      </div>
                    </td>

                    {/* Invoice ID */}
                    <td className="py-4 px-4 text-slate-800 font-semibold font-mono text-xs">
                      #{inv.id}
                    </td>

                    {/* Name + Avatar */}
                    <td className="py-4 px-4">
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

                    {/* Email with green checked icon */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-slate-600">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span className="text-xs">{inv.email}</span>
                      </div>
                    </td>

                    {/* Date with Blue Calendar Icon */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-slate-600">
                        <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                          <CalendarIcon size={12} />
                        </div>
                        <span className="text-xs text-slate-700 whitespace-nowrap">
                          {inv.date}
                        </span>
                      </div>
                    </td>

                    {/* Status Pill Badge (Matching Figma: Complete, Pending, Cancel) */}
                    <td className="py-4 px-4 text-center">
                      <StatusBadge status={inv.status} type="status" />
                    </td>

                    {/* Star & Action Menu */}
                    <td className="py-4 pr-8 pl-4 text-right relative">
                      <div className="flex items-center justify-end gap-3">
                        {/* Star Toggle */}
                        <button
                          type="button"
                          onClick={() => handleToggleStar(inv.id)}
                          className="p-1 transition-colors"
                        >
                          <Star
                            size={16}
                            className={
                              inv.starred
                                ? 'text-[#F59E0B] fill-[#F59E0B]'
                                : 'text-gray-300'
                            }
                          />
                        </button>

                        {/* Three Dots Menu Button */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() =>
                              setActiveMenuId(isMenuOpen ? null : inv.id)
                            }
                            className="text-gray-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
                          >
                            <MoreHorizontal size={16} />
                          </button>

                          {/* Dropdown Menu (Matching Image 4: Edit & Delete) */}
                          {isMenuOpen && (
                            <div className="absolute right-0 top-8 w-28 bg-white border border-gray-100 rounded-2xl shadow-dropdown py-2 z-30 text-xs text-left animate-in fade-in duration-150">
                              <button
                                type="button"
                                onClick={() => {
                                  alert(`Editing invoice #${inv.id}`);
                                  setActiveMenuId(null);
                                }}
                                className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 text-[#3B82F6] font-medium"
                              >
                                <Edit2 size={13} />
                                <span>Edit</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteRow(inv.id)}
                                className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-rose-50 text-[#EF4444] font-medium"
                              >
                                <Trash2 size={13} />
                                <span>Delete</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      )}
    </div>
  );
}
