"use client";
import React from 'react';

const ImageSkeleton = ({ 
  width = 'w-full', 
  height = 'h-48', 
  borderRadius = '',
  className = '',
  backgroundColor = 'bg-gray-200',
  ...props 
}) => {
  return (
    <div
      className={`${backgroundColor} animate-pulse ${width} ${height} ${borderRadius} ${className}`}
      style={{
        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
        ...props.style
      }}
      {...props}
    >
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSkeleton;
