import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { recentOrdersData } from '../../data/mockData';

export default function RecentOrdersTable() {
  const [orders, setOrders] = useState(recentOrdersData);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-bold text-[#111827]">
          Recent Orders
        </h3>

        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-slate-50 transition-colors"
            aria-label="Options"
          >
            <MoreHorizontal size={18} />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-100 rounded-xl shadow-dropdown py-1 z-20 text-xs">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-full text-left px-3 py-1.5 hover:bg-slate-50 text-slate-700 font-medium"
              >
                All Orders
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-full text-left px-3 py-1.5 hover:bg-slate-50 text-slate-700 font-medium"
              >
                Export CSV
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Table responsive container */}
      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-gray-100 text-[11px] sm:text-xs font-semibold text-[#94A3B8]">
              <th className="pb-3 font-semibold text-[#94A3B8]">
                Tracking no <span className="text-gray-400 font-normal">▾</span>
              </th>
              <th className="pb-3 font-semibold text-[#94A3B8]">
                Product Name <span className="text-gray-400 font-normal">▾</span>
              </th>
              <th className="pb-3 font-semibold text-[#94A3B8]">
                Price <span className="text-gray-400 font-normal">▾</span>
              </th>
              <th className="pb-3 font-semibold text-[#94A3B8]">
                Total Order <span className="text-gray-400 font-normal">▾</span>
              </th>
              <th className="pb-3 text-right font-semibold text-[#94A3B8]">Total Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-xs sm:text-sm font-medium">
            {orders.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-slate-50/70 transition-colors group"
              >
                {/* Tracking ID */}
                <td className="py-3.5 text-slate-600 font-mono text-xs">
                  {item.trackingNo}
                </td>

                {/* Product with thumbnail */}
                <td className="py-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl ${item.bgTint} flex items-center justify-center p-1.5 overflow-hidden flex-shrink-0 shadow-2xs`}
                    >
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="font-semibold text-slate-800">
                      {item.productName}
                    </span>
                  </div>
                </td>

                {/* Price */}
                <td className="py-3.5 text-slate-600 font-medium">
                  ${item.price}
                </td>

                {/* Total Order (Cyan pill badge matching Figma: 325, 53, 78, 98) */}
                <td className="py-3.5">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-xl text-xs font-bold bg-[#E0F7FA] text-[#0097A7]">
                    {item.totalOrder}
                  </span>
                </td>

                {/* Total Amount */}
                <td className="py-3.5 text-right font-semibold text-slate-800">
                  {item.totalAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
