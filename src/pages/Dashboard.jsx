import React, { useState } from 'react';
import StatCard from '../components/common/StatCard';
import ReportsSplineChart from '../components/charts/ReportsSplineChart';
import AnalyticsDonutChart from '../components/charts/AnalyticsDonutChart';
import RecentOrdersTable from '../components/dashboard/RecentOrdersTable';
import TopSellingProducts from '../components/dashboard/TopSellingProducts';
import ProductAnalyticsView from '../components/dashboard/ProductAnalyticsView';
import { dashboardStats } from '../data/mockData';

export default function Dashboard() {
  const [dashboardTab, setDashboardTab] = useState('Overview'); // 'Overview' | 'Product'

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* View Switcher: Dashboard Overview vs Product Analytics */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setDashboardTab('Overview')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-2xl transition-all ${
            dashboardTab === 'Overview'
              ? 'bg-[#5046E5] text-white shadow-sm'
              : 'bg-white text-slate-600 hover:text-slate-900 border border-[#F1F5F9]'
          }`}
        >
          Dashboard Overview
        </button>

        <button
          type="button"
          onClick={() => setDashboardTab('Product')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-2xl transition-all ${
            dashboardTab === 'Product'
              ? 'bg-[#5046E5] text-white shadow-sm'
              : 'bg-white text-slate-600 hover:text-slate-900 border border-[#F1F5F9]'
          }`}
        >
          Product Analytics
        </button>
      </div>

      {dashboardTab === 'Overview' ? (
        /* SCREEN 1: Dashboard Overview (matching Figma preview 2 & user upload 1) */
        <div className="space-y-6">
          {/* 4 Summary Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {dashboardStats.map((stat) => (
              <StatCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                type={stat.type}
              />
            ))}
          </div>

          {/* Main Charts Row: Reports Spline Chart & Analytics Donut */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ReportsSplineChart />
            </div>
            <div className="lg:col-span-1">
              <AnalyticsDonutChart />
            </div>
          </div>

          {/* Bottom Section: Recent Orders Table & Top Selling Products */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentOrdersTable />
            </div>
            <div className="lg:col-span-1">
              <TopSellingProducts />
            </div>
          </div>
        </div>
      ) : (
        /* SCREEN 2: Product Analytics (matching Screenshot 5: Product) */
        <ProductAnalyticsView />
      )}
    </div>
  );
}
