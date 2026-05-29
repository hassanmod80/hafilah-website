import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logGAEvent, logFBPixelEvent, trackBookingSubmit, trackWhatsAppClick, trackCallClick } from "../utils/tracking";

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views on location change
  useEffect(() => {
    const path = location.pathname + location.search;
    
    // Log GA4 page view
    logGAEvent("page_view", {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href
    });

    // Log FB Pixel page view
    logFBPixelEvent("PageView");

  }, [location]);

  return {
    trackBooking: (data: { name: string; phone: string; busType: string; date: string }) => trackBookingSubmit(data),
    trackWhatsApp: (locationName: string) => trackWhatsAppClick(locationName),
    trackCall: (locationName: string) => trackCallClick(locationName),
    trackCustomEvent: (name: string, params?: Record<string, any>) => logGAEvent(name, params)
  };
};
export default useAnalytics;
