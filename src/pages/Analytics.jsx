import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  CreditCard,
  Percent,
  Download,
  Calendar,
  Share2
} from 'lucide-react';
import { analyticsExtendedData } from '../data/mockData';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('7d');
  const [data, setData] = useState(analyticsExtendedData.monthlyRevenue);

  const stats = [
    {
      title: 'Net Revenue',
      value: '$444,000',
      change: '+14.6%',
      isPositive: true,
      icon: DollarSign,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
    {
      title: 'Monthly Recurring (MRR)',
      value: '$78,420',
      change: '+8.2%',
      isPositive: true,
      icon: CreditCard,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Active Subscribers',
      value: '24,850',
      change: '+22.4%',
      isPositive: true,
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      title: 'Churn Rate',
      value: '1.82%',
      change: '-0.4%',
      isPositive: true,
      icon: Percent,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-[#F1F5F9] shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Performance Overview
          </h2>
          <p className="text-xs text-slate-500">
            Real-time financial statistics and growth dynamics
          </p>
        </div>

        <div className="flex items-center gap-2">
          {['24h', '7d', '30d', '1y'].map((period) => (
            <button
              key={period}
              type="button"
              onClick={() => setTimeRange(period)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                timeRange === period
                  ? 'bg-[#5046E5] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {period}
            </button>
          ))}

          <button
            type="button"
            onClick={() => alert('Exporting analytics report as CSV...')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-colors ml-2"
          >
            <Download size={14} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center`}
                >
                  <Icon size={22} />
                </div>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                    s.isPositive
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'bg-rose-50 text-rose-600'
                  }`}
                >
                  {s.isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {s.change}
                </span>
              </div>
              <h4 className="text-xs font-medium text-slate-500 mb-1">{s.title}</h4>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {s.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Charts: Revenue vs Expenses and Traffic Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Revenue vs Expenses Dual Area Chart (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Revenue vs Expenses
              </h3>
              <p className="text-xs text-slate-500">
                Monthly fiscal comparisons in USD
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#5046E5]" />
                <span className="text-slate-700">Gross Revenue</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#00D2D3]" />
                <span className="text-slate-700">Operating Cost</span>
              </div>
            </div>
          </div>

          <div className="w-full h-80 -ml-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5046E5" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#5046E5" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D2D3" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00D2D3" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} dy={5} />
                <YAxis
                  stroke="#94A3B8"
                  fontSize={12}
                  tickLine={false}
                  tickFormatter={(val) => `$${val / 1000}k`}
                />
                <Tooltip
                  formatter={(value) => [`$${value.toLocaleString()}`, '']}
                  contentStyle={{
                    backgroundColor: '#111827',
                    borderRadius: '12px',
                    border: 'none',
                    color: '#FFF',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#5046E5"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorRev)"
                />
                <Area
                  type="monotone"
                  dataKey="expenses"
                  stroke="#00D2D3"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorExp)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: Traffic Sources Breakdown (1 col) */}
        <div className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Acquisition Channels
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Visitor origin and conversion distribution
            </p>

            <div className="space-y-4">
              {analyticsExtendedData.trafficSources.map((source, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-800">{source.name}</span>
                    <span className="text-slate-500">{source.percentage}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${source.percentage}%`,
                        backgroundColor: source.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <button
              type="button"
              onClick={() => alert('Opening full analytics audit...')}
              className="text-xs font-bold text-[#5046E5] hover:underline"
            >
              View Detailed Source Analytics →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
