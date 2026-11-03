import React, { useState } from 'react';
import {
  Package,
  ShoppingCart,
  MoreHorizontal,
  Plus,
  Award,
  Activity,
  ChevronLeft,
  ChevronDown,
  Camera,
  Check,
  Download
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [productForm, setProductForm] = useState({
    name: 'Mackbook Pro 2021 14"',
    brand: 'Apple',
    price: '$1200',
    negotiable: true,
    description: 'This the New creation Of apple This the New creation Of apple This the New creation Of apple This the New creation Of apple.'
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Controls: Product | Customer Pill Tabs & + Add Product Button matching Figma */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Floating Pill Switcher matching user uploaded closeup */}
        <div className="inline-flex bg-white p-1 rounded-2xl border border-[#F1F5F9] shadow-sm">
          {['Product', 'Customer'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveSubTab(tab)}
              className={`px-6 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
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
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#5046E5] hover:bg-[#4338CA] rounded-2xl shadow-sm shadow-indigo-100 transition-all active:scale-[0.98] self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Add Product</span>
        </button>
      </div>

      {/* Row 1: The Two Hero Stat Cards matching user uploaded closeup */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Total Product (5,00,874 with blue wave) */}
        <div className="bg-white rounded-[26px] border border-[#F1F5F9] shadow-card relative overflow-hidden flex flex-col justify-between pt-6">
          <div className="px-6 flex items-start justify-between">
            <div className="flex items-center gap-4">
              {/* Soft circular icon container */}
              <div className="w-14 h-14 rounded-full bg-[#F2F6FE] text-[#3B82F6] flex items-center justify-center flex-shrink-0 shadow-2xs">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="m3.3 7 8.7 5 8.7-5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#64748B]">Total Product</p>
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#111827] tracking-tight mt-0.5">
                  5,00,874
                </h3>
              </div>
            </div>

            {/* Plain Green Text matching closeup */}
            <span className="text-[12px] font-semibold text-[#10B981] pt-1">
              +1400 New Added
            </span>
          </div>

          {/* Edge-to-Edge Blue Smooth Spline Wave Vector */}
          <div className="w-full h-16 mt-2 overflow-hidden leading-none -mb-1">
            <svg
              viewBox="0 0 400 80"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="none"
            >
              <defs>
                <linearGradient id="blueWaveGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                  <stop offset="60%" stopColor="#60A5FA" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Shaded Area Underneath */}
              <path
                d="M 0 60 C 35 60, 50 48, 75 48 C 105 48, 125 58, 145 54 C 175 46, 185 24, 215 24 C 245 24, 260 48, 290 48 C 325 48, 350 24, 400 12 L 400 80 L 0 80 Z"
                fill="url(#blueWaveGlow)"
              />

              {/* Blue Wave Line Stroke */}
              <path
                d="M 0 60 C 35 60, 50 48, 75 48 C 105 48, 125 58, 145 54 C 175 46, 185 24, 215 24 C 245 24, 260 48, 290 48 C 325 48, 350 24, 400 12"
                stroke="#4D88FF"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Card 2: Total Sales (2,34,888 with yellow wave) */}
        <div className="bg-white rounded-[26px] border border-[#F1F5F9] shadow-card relative overflow-hidden flex flex-col justify-between pt-6">
          <div className="px-6 flex items-start justify-between">
            <div className="flex items-center gap-4">
              {/* Soft yellow circular icon container */}
              <div className="w-14 h-14 rounded-full bg-[#FEF9E7] text-[#F59E0B] flex items-center justify-center flex-shrink-0 shadow-2xs">
                <ShoppingCart size={22} className="stroke-[2.2] fill-[#F59E0B]/20" />
              </div>

              <div>
                <p className="text-xs font-semibold text-[#64748B]">Total Sales</p>
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#111827] tracking-tight mt-0.5">
                  2,34,888
                </h3>
              </div>
            </div>

            {/* Plain Green Text matching closeup */}
            <span className="text-[12px] font-semibold text-[#10B981] pt-1">
              +1000 Sales Today
            </span>
          </div>

          {/* Edge-to-Edge Yellow Smooth Spline Wave Vector */}
          <div className="w-full h-16 mt-2 overflow-hidden leading-none -mb-1">
            <svg
              viewBox="0 0 400 80"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="none"
            >
              <defs>
                <linearGradient id="yellowWaveGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.22" />
                  <stop offset="60%" stopColor="#FBBF24" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Shaded Area Underneath */}
              <path
                d="M 0 48 C 35 48, 55 42, 80 40 C 110 38, 130 50, 160 48 C 190 46, 205 24, 235 22 C 265 20, 275 42, 305 48 C 335 54, 365 44, 400 32 L 400 80 L 0 80 Z"
                fill="url(#yellowWaveGlow)"
              />

              {/* Yellow Wave Line Stroke */}
              <path
                d="M 0 48 C 35 48, 55 42, 80 40 C 110 38, 130 50, 160 48 C 190 46, 205 24, 235 22 C 265 20, 275 42, 305 48 C 335 54, 365 44, 400 32"
                stroke="#FBBF24"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Row 2: Top Selling Products Table (7 cols) & Charts (5 cols) matching Screenshot 5 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Top Selling Products Table */}
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

      {/* Slide-out Drawer for "Add a New Product" matching Figma media_1793680847653_eebe90f1.png */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Dimmed backdrop over the dashboard */}
          <div
            onClick={() => setIsDrawerOpen(false)}
            className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-200"
          />

          {/* Right-aligned sliding drawer panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-[460px] bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
              {/* Drawer Content */}
              <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
                {/* Header: < Back Arrow + Title "Add a New Product" */}
                <div className="flex items-center gap-4 pb-4">
                  <button
                    type="button"
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-1.5 -ml-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    <ChevronLeft size={22} className="stroke-[2.5]" />
                  </button>
                  <h2 className="text-base sm:text-lg font-bold text-[#111827]">
                    Add a New Product
                  </h2>
                </div>

                {/* Center Circular Camera Photo Upload Placeholder */}
                <div className="my-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#F4F5F7] flex items-center justify-center text-slate-700 cursor-pointer hover:bg-slate-200/70 transition-all shadow-inner group">
                    <Camera size={26} className="text-slate-700 group-hover:scale-110 transition-transform stroke-[1.8]" />
                  </div>
                </div>

                {/* Product Form Fields matching Figma */}
                <form
                  id="addProductDrawerForm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Product "${productForm.name}" created successfully!`);
                    setIsDrawerOpen(false);
                  }}
                  className="space-y-4"
                >
                  {/* Field 1: Product Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Product Name
                    </label>
                    <input
                      type="text"
                      value={productForm.name}
                      onChange={(e) =>
                        setProductForm({ ...productForm, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#F8F9FB] border border-transparent focus:border-[#5046E5] focus:bg-white text-xs sm:text-sm text-slate-800 rounded-xl outline-none transition-all placeholder:text-slate-400 font-medium"
                      placeholder='Mackbook Pro 2021 14"'
                      required
                    />
                  </div>

                  {/* Field 2: Brand Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Brand
                    </label>
                    <div className="relative">
                      <select
                        value={productForm.brand}
                        onChange={(e) =>
                          setProductForm({ ...productForm, brand: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#F8F9FB] border border-transparent focus:border-[#5046E5] focus:bg-white text-xs sm:text-sm text-slate-800 rounded-xl outline-none appearance-none transition-all cursor-pointer font-medium"
                      >
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Sony">Sony</option>
                        <option value="Nike">Nike</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Field 3: Price + Negotiable Checkbox */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Price
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={productForm.price}
                          onChange={(e) =>
                            setProductForm({ ...productForm, price: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#F8F9FB] border border-transparent focus:border-[#5046E5] focus:bg-white text-xs sm:text-sm text-slate-800 rounded-xl outline-none transition-all font-medium"
                          placeholder="$1200"
                        />
                      </div>

                      {/* Negotiable Checkbox matching Figma */}
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <div
                          onClick={() =>
                            setProductForm({
                              ...productForm,
                              negotiable: !productForm.negotiable,
                            })
                          }
                          className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                            productForm.negotiable
                              ? 'bg-[#5046E5] text-white'
                              : 'border border-slate-300 bg-white'
                          }`}
                        >
                          {productForm.negotiable && (
                            <Check size={14} strokeWidth={3} />
                          )}
                        </div>
                        <span className="text-xs font-semibold text-slate-700">
                          Negotiable
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Field 4: Descriptions */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Descriptions
                    </label>
                    <textarea
                      rows={4}
                      value={productForm.description}
                      onChange={(e) =>
                        setProductForm({
                          ...productForm,
                          description: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-[#F8F9FB] border border-transparent focus:border-[#5046E5] focus:bg-white text-xs text-slate-700 rounded-xl outline-none transition-all resize-none leading-relaxed font-normal"
                      placeholder="This the New creation Of apple..."
                    />
                  </div>
                </form>
              </div>

              {/* Bottom Action Button: Save Product */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  type="submit"
                  form="addProductDrawerForm"
                  className="w-full py-3.5 px-6 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg shadow-indigo-200 flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]"
                >
                  <Download size={18} className="stroke-[2.2]" />
                  <span>Save Product</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
