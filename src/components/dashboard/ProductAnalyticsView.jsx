import React, { useState } from 'react';
import {
  Package,
  ShoppingCart,
  TrendingUp,
  MoreHorizontal,
  Plus,
  Award,
  ChevronDown,
  Activity
} from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip
} from 'recharts';
import { productAnalyticsData } from '../../data/mockData';

export default function ProductAnalyticsView() {
  const [activeSubTab, setActiveSubTab] = useState('Product');
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Subheader: Product | Customer Tabs & + Add Product Button matching Screenshot 5 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Subheader tabs */}
        <div className="inline-flex bg-white p-1 rounded-2xl border border-[#F1F5F9] shadow-sm">
          {['Product', 'Customer'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveSubTab(tab)}
              className={`px-6 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                activeSubTab === tab
                  ? 'bg-[#5046E5] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* + Add Product Button */}
        <button
          type="button"
          onClick={() => setShowAddProductModal(true)}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-2xl shadow-sm shadow-indigo-100 transition-all active:scale-[0.98] self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Add Product</span>
        </button>
      </div>

      {/* Row 1: Two KPI Sparkline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Product Card */}
        <div className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                <Package size={22} />
              </div>
              <div>
                <p className="text-xs font-medium text-[#64748B]">Total Product</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mt-0.5">
                  {productAnalyticsData.totalProduct}
                </h3>
              </div>
            </div>

            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              {productAnalyticsData.newAdded}
            </span>
          </div>

          {/* Blue Sparkline Wave Vector */}
          <div className="w-full h-12 mt-4">
            <svg viewBox="0 0 400 60" className="w-full h-full preserve-3d" fill="none">
              <path
                d="M 0 45 C 50 45, 70 25, 120 35 C 170 45, 200 15, 260 20 C 320 25, 350 48, 400 40"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 0 45 C 50 45, 70 25, 120 35 C 170 45, 200 15, 260 20 C 320 25, 350 48, 400 40 L 400 60 L 0 60 Z"
                fill="url(#blueWaveGlow)"
              />
              <defs>
                <linearGradient id="blueWaveGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Total Sales Card */}
        <div className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0">
                <ShoppingCart size={22} />
              </div>
              <div>
                <p className="text-xs font-medium text-[#64748B]">Total Sales</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mt-0.5">
                  {productAnalyticsData.totalSales}
                </h3>
              </div>
            </div>

            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              {productAnalyticsData.salesToday}
            </span>
          </div>

          {/* Yellow Sparkline Wave Vector */}
          <div className="w-full h-12 mt-4">
            <svg viewBox="0 0 400 60" className="w-full h-full preserve-3d" fill="none">
              <path
                d="M 0 40 C 50 40, 80 50, 140 45 C 200 40, 240 18, 300 25 C 340 30, 370 45, 400 40"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 0 40 C 50 40, 80 50, 140 45 C 200 40, 240 18, 300 25 C 340 30, 370 45, 400 40 L 400 60 L 0 60 Z"
                fill="url(#yellowWaveGlow)"
              />
              <defs>
                <linearGradient id="yellowWaveGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Row 2: Top Selling Products Table (Left 7 cols) & Right Charts (Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Top Selling Products Table matching Screenshot 5 */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-gray-50">
            <h3 className="font-bold text-base text-[#111827]">
              Top Selling Products
            </h3>
            <button
              type="button"
              className="text-xs font-semibold text-[#5046E5] hover:underline"
            >
              See More
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-100 text-[11px] sm:text-xs font-semibold text-[#94A3B8]">
                  <th className="pb-3 w-10">SN ▾</th>
                  <th className="pb-3">Name ▾</th>
                  <th className="pb-3">Price ▾</th>
                  <th className="pb-3">Total Order ▾</th>
                  <th className="pb-3 text-right">Total Sales ▾</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-xs sm:text-sm font-medium">
                {productAnalyticsData.topSellingProducts.map((prod) => (
                  <tr key={prod.sn} className="hover:bg-slate-50/70 transition-colors">
                    {/* SN with Medal Ribbon icon for top 3 */}
                    <td className="py-3.5">
                      {prod.isMedal ? (
                        <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center font-bold text-xs">
                          <Award size={14} className="stroke-[2.5]" />
                        </div>
                      ) : (
                        <span className="text-slate-400 font-bold pl-1.5">{prod.sn}</span>
                      )}
                    </td>

                    {/* Thumbnail + Name */}
                    <td className="py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-semibold text-slate-800">
                          {prod.name}
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="py-3.5 text-slate-600 font-medium">
                      {prod.price}
                    </td>

                    {/* Total Order Pieces */}
                    <td className="py-3.5 text-slate-600 font-medium">
                      {prod.totalOrder}
                    </td>

                    {/* Total Sales (Green text) */}
                    <td className="py-3.5 text-right font-bold text-[#10B981]">
                      {prod.totalSales}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Product Add by Month & Product Sales Analytics */}
        <div className="lg:col-span-5 space-y-6">
          {/* Top Card: Product Add by Month (Horizontal Bar Chart) */}
          <div className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card space-y-4">
            <h3 className="font-bold text-base text-[#111827]">
              Product Add by Month
            </h3>

            <div className="space-y-3 pt-2">
              {productAnalyticsData.productAddByMonth.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs">
                  <span className="w-8 text-slate-500 font-medium text-[11px]">
                    {item.month}
                  </span>
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${(item.count / 32000) * 100}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                  <span className="w-12 text-right text-slate-700 font-semibold text-[11px]">
                    {item.count.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Card: Product Sales Analytics Donut */}
          <div className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-[#111827]">
                Product Sales Analytics
              </h3>
              <button type="button" className="text-gray-400 hover:text-slate-700">
                <MoreHorizontal size={16} />
              </button>
            </div>

            <div className="relative w-full h-48 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={productAnalyticsData.salesAnalyticsBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={75}
                    paddingAngle={4}
                    dataKey="value"
                    cornerRadius={8}
                  >
                    {productAnalyticsData.salesAnalyticsBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val, name) => [`${val}%`, name]}
                    contentStyle={{
                      backgroundColor: '#111827',
                      borderRadius: '12px',
                      color: '#FFF',
                      fontSize: '11px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shadow-2xs">
                  <Activity size={18} />
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-4 text-xs font-medium text-[#64748B] pt-2 border-t border-gray-50">
              {productAnalyticsData.salesAnalyticsBreakdown.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-slate-700 font-medium text-[11px]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for + Add Product */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Add New Product</h3>
            <p className="text-xs text-slate-500 mb-4">Register an inventory SKU in Base</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Product added successfully!');
                setShowAddProductModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Wireless Headset Pro"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Price ($)</label>
                  <input
                    type="number"
                    required
                    placeholder="99"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Stock Count</label>
                  <input
                    type="number"
                    required
                    placeholder="500"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddProductModal(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#5046E5] text-white rounded-xl font-bold shadow-md shadow-indigo-100"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
