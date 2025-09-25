"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLoading } from "@/components/common/LoadingProvider";

export const useNavigationLoader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { showLoading, hideLoading } = useLoading();

  // Enhanced navigation with loading
  const navigateWithLoader = (href) => {
    showLoading();
    router.push(href);
    // The LoadingProvider will automatically hide the loader after 300ms when pathname changes
  };

  const navigateReplaceWithLoader = (href) => {
    showLoading();
    router.replace(href);
  };

  const navigateBackWithLoader = () => {
    showLoading();
    router.back();
  };

  return {
    navigateWithLoader,
    navigateReplaceWithLoader,
    navigateBackWithLoader,
    showLoading,
    hideLoading,
  };
};
