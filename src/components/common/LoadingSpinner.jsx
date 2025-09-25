"use client";
import React from "react";

const LoadingSpinner = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    // spinner sits under header/footer (header/footer use z-40)
    <div className="fixed inset-0 z-20 bg-white/90 backdrop-blur-sm flex items-center justify-center transition-opacity duration-150">
      <div className="flex flex-col items-center gap-4">
        {/* Modern spinner with site colors */}
        <div className="relative">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#2e7dfc] rounded-full animate-spin"></div>
        </div>
        
        {/* Loading text with custom font */}
        <div className="text-[#222] text-sm font-medium" style={{ fontFamily: 'MyCustomFont' }}>
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
