import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { MoreHorizontal } from 'lucide-react';
import { hourlySalesData } from '../../data/mockData';

// Custom dot matching the Figma hollow circular purple dots
const CustomDot = ({ cx, cy, payload, activeIndex, index }) => {
  const isSelected = activeIndex === index || (!activeIndex && payload.highlighted);

  return (
    <g key={`dot-${index}`}>
      <circle
        cx={cx}
        cy={cy}
        r={isSelected ? 5.5 : 4}
        fill="#FFFFFF"
        stroke="#8B5CF6"
        strokeWidth={2.5}
        className="transition-all duration-200"
      />
      {isSelected && (
        <line
          x1={cx}
          y1={cy}
          x2={cx}
          y2={250}
          stroke="#8B5CF6"
          strokeWidth={1.5}
          strokeDasharray="3 3"
          opacity={0.6}
        />
      )}
    </g>
  );
};

// Custom Tooltip matching the Figma black box tooltip ("Sales \n 2,678")
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="relative -translate-y-8 flex flex-col items-center">
        <div className="bg-[#111827] text-white px-3.5 py-1.5 rounded-xl shadow-xl text-center min-w-[70px]">
          <p className="text-[10px] text-gray-300 font-medium">Sales</p>
          <p className="text-xs font-bold tracking-tight">{data.amount || '2,678'}</p>
        </div>
        <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#111827]" />
      </div>
    );
  }
  return null;
};

export default function ReportsSplineChart() {
  const [activeIndex, setActiveIndex] = useState(5); // default to 03am (index 5)
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card relative flex flex-col h-full justify-between">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base sm:text-lg font-bold text-[#111827]">
          Reports
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
                Refresh Data
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-full text-left px-3 py-1.5 hover:bg-slate-50 text-slate-700 font-medium"
              >
                Download CSV
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Spline Area Chart with Cyan-to-Purple-to-Pink Gradient */}
      <div className="w-full h-72 sm:h-80 -ml-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={hourlySalesData}
            margin={{ top: 30, right: 20, left: -10, bottom: 0 }}
            onMouseMove={(state) => {
              if (state && state.activeTooltipIndex !== undefined) {
                setActiveIndex(state.activeTooltipIndex);
              }
            }}
            onMouseLeave={() => setActiveIndex(5)}
          >
            <defs>
              <linearGradient id="splineStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="35%" stopColor="#6366F1" />
                <stop offset="70%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>

              <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A855F7" stopOpacity={0.08} />
                <stop offset="90%" stopColor="#38BDF8" stopOpacity={0.01} />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F8FAFC"
            />

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              dx={-5}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
              isAnimationActive={false}
            />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="url(#splineStroke)"
              strokeWidth={3}
              fill="url(#areaGlow)"
              dot={(props) => (
                <CustomDot
                  {...props}
                  activeIndex={activeIndex}
                />
              )}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
