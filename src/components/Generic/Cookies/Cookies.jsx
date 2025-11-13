"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Function to get a cookie value
    const getCookie = (name) => {
      const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
      return match ? match[2] : null;
    };

    const cookieChoice = getCookie("cookieConsent");

    // Show banner if cookieChoice is null (i.e., cookie expired or was never set)
    if (!cookieChoice) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = "cookieConsent=accepted; max-age=" + 60 * 60 * 24 * 90 + "; path=/"; // 90 days (3 months)
    setIsVisible(false);
  };

  const handleReject = () => {
    document.cookie = "cookieConsent=rejected; max-age=" + 60 * 60 * 24 * 3 + "; path=/"; // 3 days
    setIsVisible(false);
  };


  if (!isVisible) return null

  return (
    <div className="fixed  right-4 bottom-0 md:bottom-8 px-4 py-4 flex justify-center items-center z-50 ">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-4 relative border border-gray-200">
        {/* Close button */}
        <button onClick={()=>setIsVisible(false)} className="absolute right-4 top-2 text-gray-800 hover:text-gray-600 border border-gray-300 rounded-full p-2">
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Privacy & Cookies Settings</h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-2">
        We use cookies and similar technologies to enhance your experience, personalize content, analyze site traffic, and serve targeted advertisements.
        </p>
        <p className="text-gray-500  text-sm mb-2">
        By clicking "Accept," you agree to our use of cookies and data processing as described in our Privacy Policy and Cookies Policy.
        </p>

        <Link href="/privacy-policy" className="text-primary text-[14px] underline">See our privacy policy and cookies page</Link>
        <br/>
        <Link href="/terms-and-conditions" className="text-primary text-[14px] underline">See our terms and condtions page</Link>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end mt-4">
          <button
            onClick={handleReject}
            className="nav-outlined-button hidden  md:block  !px-6 !py-3"
          >
            Cancel
          </button>
          <button
            onClick={handleAccept}
            className="nav-contained-button !px-6 !py-3 hover:shadow-2xl"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

