import React from 'react';

export default function StatusBadge({ status, type = 'status' }) {
  const normalized = (status || '').toLowerCase().trim();

  // Invoice status badge styles (matching Figma preview 4)
  if (type === 'status') {
    switch (normalized) {
      case 'complete':
      case 'completed':
      case 'paid':
        return (
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold bg-[#E8F8F0] text-[#16A34A]">
            Complete
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold bg-[#FFF3E8] text-[#EA580C]">
            Pending
          </span>
        );
      case 'cancel':
      case 'cancelled':
        return (
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold bg-[#FEECEB] text-[#EF4444]">
            Cancel
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
            {status}
          </span>
        );
    }
  }

  // Priority badges for Kanban tasks (matching Figma preview 5)
  if (type === 'priority') {
    switch (normalized) {
      case 'low':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FFEBEF] text-[#FF4961]">
            Low
          </span>
        );
      case 'medium':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FFF3D6] text-[#D97706]">
            Medium
          </span>
        );
      case 'high':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E0F7FA] text-[#0097A7]">
            High
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-600">
            {status}
          </span>
        );
    }
  }

  // Task health badges (matching Figma preview 5)
  if (type === 'health') {
    switch (normalized) {
      case 'on track':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FEF3C7] text-[#B45309]">
            On Track
          </span>
        );
      case 'at risk':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FEE2E2] text-[#DC2626]">
            At risk
          </span>
        );
      default:
        return null;
    }
  }

  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
      {status}
    </span>
  );
}
