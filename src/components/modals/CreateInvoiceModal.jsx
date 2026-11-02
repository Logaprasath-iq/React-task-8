import React, { useState } from 'react';
import { X, Plus, Trash2, Calendar, DollarSign } from 'lucide-react';

export default function CreateInvoiceModal({ isOpen, onClose, onAddInvoice }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    status: 'Pending',
    amount: '1,250.00',
    itemDescription: 'UI/UX Design Consultation',
    quantity: 1,
    unitPrice: 1250,
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill out all required fields.');
      return;
    }

    const newInvoice = {
      id: Math.floor(870000 + Math.random() * 9999).toString(),
      name: formData.name,
      email: formData.email,
      date: formData.date,
      status: formData.status,
      starred: false,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      amount: `$${formData.amount}`,
    };

    if (onAddInvoice) {
      onAddInvoice(newInvoice);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-2 rounded-xl hover:bg-slate-50 transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-[#111827] mb-1">
          Create New Invoice
        </h2>
        <p className="text-xs text-[#64748B] mb-6">
          Issue a billing statement to a client or company.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Client Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Connor"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Client Email *
              </label>
              <input
                type="email"
                required
                placeholder="client@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Invoice Date
              </label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              >
                <option value="Complete">Complete</option>
                <option value="Pending">Pending</option>
                <option value="Cancel">Cancel</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Service / Product Description
            </label>
            <input
              type="text"
              value={formData.itemDescription}
              onChange={(e) => setFormData({ ...formData, itemDescription: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Total Amount ($)
              </label>
              <input
                type="text"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100 font-semibold"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-xl shadow-md shadow-indigo-100 transition-all active:scale-95"
              >
                Create Invoice
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
