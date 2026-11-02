import React from 'react';
import StatCard from '../components/common/StatCard';
import ReportsSplineChart from '../components/charts/ReportsSplineChart';
import AnalyticsDonutChart from '../components/charts/AnalyticsDonutChart';
import RecentOrdersTable from '../components/dashboard/RecentOrdersTable';
import TopSellingProducts from '../components/dashboard/TopSellingProducts';
import { dashboardStats } from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 4 Summary Stat Cards (Figma preview 2 & 3) */}
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

      {/* Main Charts Row: Reports Spline Chart (2 cols) & Analytics Donut (1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ReportsSplineChart />
        </div>
        <div className="lg:col-span-1">
          <AnalyticsDonutChart />
        </div>
      </div>

      {/* Bottom Section: Recent Orders Table (2 cols) & Top Selling Products (1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentOrdersTable />
        </div>
        <div className="lg:col-span-1">
          <TopSellingProducts />
        </div>
      </div>
    </div>
  );
}
