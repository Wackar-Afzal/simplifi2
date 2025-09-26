"use client";
import React, { useState, useRef, useEffect } from 'react';
import ImageSkeleton from './ImageSkeleton';

const SkeletonImage = ({
  src,
  alt = '',
  className = '',
  backgroundColor = 'bg-gray-200',
  minLoadTime = 800,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!src) {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    setIsLoading(true);
    setHasError(false);
    setShowImage(false);

    const minLoadTimer = setTimeout(() => {}, minLoadTime);

    const img = new Image();
    img.onload = () => {
      clearTimeout(minLoadTimer);
      setIsLoading(false);
      setHasError(false);
      setShowImage(true);
      onLoad?.();
    };
    img.onerror = () => {
      clearTimeout(minLoadTimer);
      setIsLoading(false);
      setHasError(true);
      onError?.();
    };
    img.src = src;

    return () => clearTimeout(minLoadTimer);
  }, [src, onLoad, onError, minLoadTime]);

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        aspectRatio: '16/9', // fixed ratio for all states
        borderRadius: '1rem', // optional, matches your card rounding
      }}
    >
      {/* Skeleton (only when loading) */}
      {isLoading && !hasError && (
        <ImageSkeleton
          className="absolute inset-0"
          backgroundColor={backgroundColor}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div
          className={`${backgroundColor} absolute inset-0 flex items-center justify-center text-gray-500`}
        >
          <span className="text-sm">Failed to load image</span>
        </div>
      )}

      {/* Image */}
      {!hasError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onTransitionEnd={() => setIsLoading(false)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showImage ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
};

export default SkeletonImage;
