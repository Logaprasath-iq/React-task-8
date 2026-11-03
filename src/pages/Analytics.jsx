import React, { useState } from 'react';
import {
  Plus,
  Mail,
  Phone,
  MapPin,
  MoreHorizontal,
  X,
  Camera,
  Edit2,
  Trash2,
  ChevronDown
} from 'lucide-react';
import { initialCustomers } from '../data/mockData';

export default function Analytics() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedCustomerId, setSelectedCustomerId] = useState('cust-1');
  const [isAddingCustomer, setIsAddingCustomer] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);

  // New Customer Form State (matching Screenshot 3: Add Customer)
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Deo',
    email: 'Example@gmail.com',
    phone: '33757005467',
    gender: 'Male',
  });

  const activeCustomer =
    customers.find((c) => c.id === selectedCustomerId) || customers[0];

  const handleAddCustomerSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;

    const newCust = {
      id: `cust-${Date.now()}`,
      name: `${formData.firstName} ${formData.lastName}`,
      role: 'New Member',
      email: formData.email,
      contactEmail: formData.email,
      phone: formData.phone,
      gender: formData.gender,
      address: '742 Evergreen Terrace Springfield',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      performance: [
        { month: 'Jan', val: 1.5 },
        { month: 'Feb', val: 2.1, highlighted: true },
        { month: 'Mar', val: 2.3 },
        { month: 'Apr', val: 2.4 },
        { month: 'May', val: 2.6 },
        { month: 'Jun', val: 2.9 },
      ],
      ring1: 75,
      ring2: 65,
    };

    setCustomers([newCust, ...customers]);
    setSelectedCustomerId(newCust.id);
    setIsAddingCustomer(false);
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
    setActiveMenuId(null);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Page Title & Add Customer Action matching Screenshot 2 */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827]">
          Customer List
        </h2>

        <button
          type="button"
          onClick={() => setIsAddingCustomer(true)}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold rounded-2xl shadow-sm shadow-indigo-100 transition-all active:scale-[0.98]"
        >
          <Plus size={16} />
          <span>Add Customer</span>
        </button>
      </div>

      {/* Main Grid: Customer List Table (8 cols) & Right Profile/Add Panel (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Customer List Table matching Screenshot 2 */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-[#F1F5F9] shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-gray-100 text-[11px] sm:text-xs font-semibold text-[#94A3B8]">
                  <th className="py-4 pl-6 pr-3">
                    Name <span className="text-gray-400 font-normal">▾</span>
                  </th>
                  <th className="py-4 px-3">
                    Email <span className="text-gray-400 font-normal">▾</span>
                  </th>
                  <th className="py-4 px-3">
                    Phone number <span className="text-gray-400 font-normal">▾</span>
                  </th>
                  <th className="py-4 px-3 text-center">
                    Gender <span className="text-gray-400 font-normal">▾</span>
                  </th>
                  <th className="py-4 pr-6 pl-3 text-right">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-xs sm:text-sm font-medium">
                {customers.map((cust) => {
                  const isSelected = cust.id === selectedCustomerId;
                  const isMenuOpen = activeMenuId === cust.id;

                  return (
                    <tr
                      key={cust.id}
                      onClick={() => {
                        setSelectedCustomerId(cust.id);
                        setIsAddingCustomer(false);
                      }}
                      className={`hover:bg-slate-50/70 cursor-pointer transition-colors ${
                        isSelected ? 'bg-indigo-50/30' : ''
                      }`}
                    >
                      {/* Name with Avatar */}
                      <td className="py-3.5 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={cust.avatar}
                            alt={cust.name}
                            className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-100 flex-shrink-0"
                          />
                          <span className="font-semibold text-slate-800 whitespace-nowrap">
                            {cust.name}
                          </span>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="py-3.5 px-3 text-slate-600 font-mono text-[11px] sm:text-xs">
                        {cust.email}
                      </td>

                      {/* Phone */}
                      <td className="py-3.5 px-3 text-slate-600 font-mono text-[11px] sm:text-xs whitespace-nowrap">
                        {cust.phone}
                      </td>

                      {/* Gender Badge */}
                      <td className="py-3.5 px-3 text-center">
                        <span
                          className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-semibold ${
                            cust.gender === 'Male'
                              ? 'bg-[#EEF2FF] text-[#5046E5]'
                              : 'bg-[#FFF0F0] text-[#FF647C]'
                          }`}
                        >
                          {cust.gender}
                        </span>
                      </td>

                      {/* Action Menu */}
                      <td className="py-3.5 pr-6 pl-3 text-right relative">
                        <div className="relative inline-block">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMenuId(isMenuOpen ? null : cust.id);
                            }}
                            className="p-1 text-gray-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                          >
                            <MoreHorizontal size={16} />
                          </button>

                          {/* Action Dropdown Menu matching Screenshot 2 */}
                          {isMenuOpen && (
                            <div className="absolute right-0 top-7 w-28 bg-white border border-gray-100 rounded-2xl shadow-dropdown py-2 z-30 text-xs text-left animate-in fade-in duration-150">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  alert(`Editing ${cust.name}`);
                                  setActiveMenuId(null);
                                }}
                                className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 text-[#3B82F6] font-medium"
                              >
                                <Edit2 size={13} />
                                <span>Edit</span>
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteCustomer(cust.id);
                                }}
                                className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-rose-50 text-[#EF4444] font-medium"
                              >
                                <Trash2 size={13} />
                                <span>Delete</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Customer Details Profile Card OR Add Customer Form */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card">
          {!isAddingCustomer ? (
            /* VIEW A: Customer Profile Details matching Screenshot 2 */
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Profile Top */}
              <div className="text-center pb-4 border-b border-gray-50">
                <img
                  src={activeCustomer.avatar}
                  alt={activeCustomer.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-3 ring-4 ring-indigo-50 shadow-sm"
                />
                <h3 className="font-bold text-base text-[#111827]">
                  {activeCustomer.name}
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  {activeCustomer.role}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pb-4 border-b border-gray-50">
                <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider text-slate-400">
                  Contact Info
                </h4>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Mail size={15} className="text-slate-400 flex-shrink-0" />
                    <span className="truncate">{activeCustomer.contactEmail}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <Phone size={15} className="text-slate-400 flex-shrink-0" />
                    <span>{activeCustomer.phone}</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate-600">
                    <MapPin size={15} className="text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{activeCustomer.address}</span>
                  </div>
                </div>
              </div>

              {/* Performance Card with Monthly Bar Chart & Progress Rings */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs text-[#111827] uppercase tracking-wider text-slate-400">
                    Performance
                  </h4>
                  <button type="button" className="text-gray-400 hover:text-slate-700">
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                {/* Bar Chart with February orange highlighted callout */}
                <div className="pt-6 pb-2">
                  <div className="flex items-end justify-between h-28 gap-2 px-2 border-b border-gray-100">
                    {activeCustomer.performance.map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center flex-1 relative group">
                        {/* Tooltip for highlighted month (e.g. Feb: 2.33k) */}
                        {item.highlighted && (
                          <div className="absolute -top-7 px-2 py-0.5 bg-[#FF7A59] text-white text-[10px] font-bold rounded-lg shadow-sm whitespace-nowrap">
                            {item.val}k
                            <div className="w-0 h-0 border-x-3 border-x-transparent border-t-3 border-t-[#FF7A59] mx-auto" />
                          </div>
                        )}

                        {/* Bar */}
                        <div
                          className={`w-2.5 rounded-full transition-all duration-300 ${
                            item.highlighted
                              ? 'bg-[#FF7A59]'
                              : 'bg-[#FFEBE5] hover:bg-[#FFD1C4]'
                          }`}
                          style={{ height: `${(item.val / 3.4) * 100}%` }}
                        />
                        <span className="text-[10px] text-slate-400 mt-2 font-medium">
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom 2 Circular Progress Rings (70% Yellow & 60% Blue) */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {/* 70% Yellow Gauge */}
                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50/50 border border-slate-100">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          fill="none"
                          stroke="#F1F5F9"
                          strokeWidth="3.5"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          fill="none"
                          stroke="#FBBF24"
                          strokeWidth="3.5"
                          strokeDasharray="88"
                          strokeDashoffset={88 - (88 * activeCustomer.ring1) / 100}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute font-extrabold text-xs text-slate-800">
                        {activeCustomer.ring1}%
                      </span>
                    </div>
                  </div>

                  {/* 60% Blue Gauge */}
                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50/50 border border-slate-100">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          fill="none"
                          stroke="#F1F5F9"
                          strokeWidth="3.5"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="3.5"
                          strokeDasharray="88"
                          strokeDashoffset={88 - (88 * activeCustomer.ring2) / 100}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute font-extrabold text-xs text-slate-800">
                        {activeCustomer.ring2}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* VIEW B: Add Customer Form matching Screenshot 3 */
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-bold text-base text-[#111827]">
                  Add Customer
                </h3>
                <button
                  type="button"
                  onClick={() => setIsAddingCustomer(false)}
                  className="w-7 h-7 rounded-full bg-[#FFF0F0] text-[#FF647C] flex items-center justify-center hover:bg-rose-100 transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Big Circular Avatar Upload with Camera icon in center */}
              <div className="flex justify-center py-2">
                <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors group">
                  <Camera size={26} className="text-slate-400 group-hover:text-slate-600" />
                </div>
              </div>

              <form onSubmit={handleAddCustomerSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs font-bold rounded-2xl shadow-md shadow-indigo-100 transition-all active:scale-[0.98] mt-2"
                >
                  Add Customer
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
