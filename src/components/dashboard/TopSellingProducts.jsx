import React, { useState } from 'react';
import { MoreHorizontal, Star } from 'lucide-react';
import { topSellingProductsData } from '../../data/mockData';

export default function TopSellingProducts() {
  const [products, setProducts] = useState(topSellingProductsData);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-6 border border-[#F1F5F9] shadow-card flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-bold text-[#111827]">
          Top selling Products
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
                Top 10 Products
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-full text-left px-3 py-1.5 hover:bg-slate-50 text-slate-700 font-medium"
              >
                Weekly Winners
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product List Cards */}
      <div className="space-y-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-2 rounded-2xl hover:bg-slate-50/80 transition-all duration-200 group"
          >
            {/* Image in Soft Blue Rounded Container */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#E8F1FD] flex items-center justify-center p-3 flex-shrink-0 overflow-hidden shadow-2xs">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Meta */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-[#111827] truncate">
                {item.name}
              </h4>

              {/* Star Rating */}
              <div className="flex items-center gap-1 my-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className={`${
                      star <= item.rating
                        ? 'text-[#F59E0B] fill-[#F59E0B]'
                        : 'text-gray-200 fill-gray-200'
                    }`}
                  />
                ))}
              </div>

              {/* Price */}
              <p className="text-base sm:text-lg font-bold text-[#111827]">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
