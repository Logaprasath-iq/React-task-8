import React from 'react';
import { Heart, Package, ShoppingBag, Briefcase } from 'lucide-react';

const iconMap = {
  heart: {
    icon: Heart,
    bg: 'bg-[#EEF2FF]',
    color: 'text-[#6366F1]',
  },
  box: {
    icon: Package,
    bg: 'bg-[#FEF3C7]',
    color: 'text-[#F59E0B]',
  },
  bag: {
    icon: ShoppingBag,
    bg: 'bg-[#FFEDD5]',
    color: 'text-[#F97316]',
  },
  briefcase: {
    icon: Briefcase,
    bg: 'bg-[#F3E8FF]',
    color: 'text-[#9333EA]',
  },
};

export default function StatCard({ title, value, type }) {
  const config = iconMap[type] || iconMap.heart;
  const Icon = config.icon;

  return (
    <div className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card hover:shadow-card-hover transition-all duration-300 flex items-center gap-5 group">
      {/* Icon Circle */}
      <div
        className={`w-14 h-14 rounded-full ${config.bg} ${config.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
      >
        <Icon size={24} className="stroke-[2.2]" />
      </div>

      {/* Metric details */}
      <div className="flex flex-col">
        <span className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
          {value}
        </span>
        <span className="text-xs sm:text-sm font-medium text-[#64748B] mt-0.5">
          {title}
        </span>
      </div>
    </div>
  );
}
