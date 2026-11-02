import React, { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { MoreHorizontal } from 'lucide-react';
import { analyticsTransactions } from '../../data/mockData';

export default function AnalyticsDonutChart() {
  const [menuOpen, setMenuOpen] = useState(false);
  const data = analyticsTransactions.breakdown;

  return (
    <div className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card relative flex flex-col h-full justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base sm:text-lg font-bold text-[#111827]">
          Analytics
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
                Weekly View
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-full text-left px-3 py-1.5 hover:bg-slate-50 text-slate-700 font-medium"
              >
                Monthly View
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Donut Chart with Center Percentage */}
      <div className="relative w-full h-56 sm:h-64 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              cornerRadius={10}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value}%`, name]}
              contentStyle={{
                backgroundColor: '#111827',
                borderRadius: '12px',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '12px',
              }}
              itemStyle={{ color: '#FFFFFF' }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text (80% Transactions) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            {analyticsTransactions.percentage}%
          </span>
          <span className="text-xs font-medium text-[#64748B] mt-0.5">
            {analyticsTransactions.label}
          </span>
        </div>
      </div>

      {/* Bottom Legend matching Figma reference */}
      <div className="flex items-center justify-center gap-6 pt-3 border-t border-gray-50 text-xs font-medium text-[#64748B]">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-slate-700 font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
