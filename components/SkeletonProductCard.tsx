import React from 'react';

export const SkeletonProductCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col h-full overflow-hidden">
      {/* Image Area - 4:3 Ratio */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden animate-pulse">
        <div className="absolute top-3 left-3 w-14 h-6 bg-gray-300 rounded-lg"></div>
        <div className="absolute top-3 right-3 w-10 h-10 bg-gray-300 rounded-xl"></div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2 mb-2">
          <div className="h-5 bg-gray-200 rounded-md w-20 animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded-md w-12 animate-pulse"></div>
        </div>
        
        <div className="h-4 bg-gray-200 rounded w-full mb-1 animate-pulse min-h-[2.5rem]"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3 mb-4 animate-pulse"></div>
        
        <div className="mt-auto pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1">
              <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
            </div>
            <div className="h-10 w-24 bg-gray-200 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};