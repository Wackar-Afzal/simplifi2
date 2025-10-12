"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loading when pathname changes
    setIsLoading(true);
    
    // Hide loading after exactly 300ms (0.3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  const value = {
    isLoading,
    showLoading,
    hideLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      <LoadingSpinner isVisible={isLoading} />
      {children}
    </LoadingContext.Provider>
  );
};
