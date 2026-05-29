import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { PHONE_NUMBER } from "../utils/constants";
import { trackCallClick } from "../utils/tracking";
import { useLanguage } from "../utils/LanguageContext";

export const FloatingCall: React.FC = () => {
  const { language } = useLanguage();
  
  const handleClick = () => {
    trackCallClick("Floating Button");
    window.open(`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`, "_self");
  };

  return (
    <div className="fixed bottom-6 right-[5.5rem] z-50 group">
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        {language === "ar" ? "اتصل بنا الآن" : "Call Us Now"}
      </span>
      
      {/* Pulse Outer Ring */}
      <span className="absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ping pointer-events-none"></span>

      {/* Button */}
      <button
        onClick={handleClick}
        aria-label="Call Phone"
        className="relative bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-red-300 cursor-pointer"
      >
        <FaPhoneAlt className="text-2xl" />
      </button>
    </div>
  );
};

export default FloatingCall;
