"use client";
import React, { useState, useRef, useEffect } from 'react';
import ImageSkeleton from './ImageSkeleton';
cases
// Cache to store loaded images
const imageCache = new Map();

const SkeletonImage = ({
  src,
  alt = '',
  className = '',
  backgroundColor = 'bg-gray-200',
  minLoadTime = 200, // Reduced for snappier experience
  onLoad,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const loadingTimerRef = useRef(null);
  const imageLoadedRef = useRef(false); // Track if image is already loaded
  const instanceIdRef = useRef(Math.random().toString(36).substr(2, 9)); // Unique instance ID

  useEffect(() => {
    if (!src) {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    // Create a unique cache key for this instance
    const cacheKey = `${src}-${instanceIdRef.current}`;
    
    // Check if image is already cached globally
    const cachedImage = imageCache.get(src);
    if (cachedImage) {
      // For cached images, show immediately without loading state
      setIsLoading(false);
      setHasError(false);
      setShowImage(true);
      imageLoadedRef.current = true;
      onLoad?.();
      return;
    }

    // Reset states for new image
    setIsLoading(true);
    setHasError(false);
    setShowImage(false);
    imageLoadedRef.current = false;

    // Clear any existing timer
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
      loadingTimerRef.current = null;
    }

    const img = new Image();

    const handleImageLoad = () => {
      if (imageLoadedRef.current) return; // Prevent double execution
      imageLoadedRef.current = true;

      // Cache the loaded image globally (not per instance)
      imageCache.set(src, img);

      // Use shorter delay for better UX
      loadingTimerRef.current = setTimeout(() => {
        setIsLoading(false);
        setHasError(false);
        setShowImage(true);
        onLoad?.();
      }, minLoadTime);
    };

    const handleImageError = () => {
      if (imageLoadedRef.current) return; // Prevent double execution
      imageLoadedRef.current = true;

      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
        loadingTimerRef.current = null;
      }
      setIsLoading(false);
      setHasError(true);
      onError?.();
    };

    img.onload = handleImageLoad;
    img.onerror = handleImageError;
    img.src = src;

    return () => {
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
        loadingTimerRef.current = null;
      }
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, onError, minLoadTime]);

  return (
    <div
      ref={containerRef}
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
          src={src || '/placeholder.svg'}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
            showImage ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
};

export default SkeletonImage;
