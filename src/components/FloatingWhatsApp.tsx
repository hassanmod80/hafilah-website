import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../utils/constants";
import { trackWhatsAppClick } from "../utils/tracking";
import { useLanguage } from "../utils/LanguageContext";

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();

  const handleClick = () => {
    trackWhatsAppClick("Floating Button");
    const msg = language === "ar"
      ? "السلام عليكم، أريد استفسار عن خدماتكم في تأجير الحافلات."
      : "Hello, I would like to inquire about your bus rental services.";
    const encodedMessage = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        {language === "ar" ? "راسلنا عبر واتساب" : "Chat on WhatsApp"}
      </span>
      
      {/* Pulse Outer Ring */}
      <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping pointer-events-none"></span>

      {/* Button */}
      <button
        onClick={handleClick}
        aria-label="Contact on WhatsApp"
        className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
      >
        <FaWhatsapp className="text-3xl" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
