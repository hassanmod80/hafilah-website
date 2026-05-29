// Analytics Tracking Utilities

// Initialize GA4 and Facebook Pixel dynamically based on env variables
export const initTracking = () => {
  if (typeof window === "undefined") return;

  const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
  const FB_ID = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

  // 1. Google Analytics 4 Setup
  if (GA_ID && GA_ID !== "G-XXXXXXXXXX" && !GA_ID.includes("your_")) {
    try {
      // Inject gtag script
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      // Initialize gtag function
      const win = window as any;
      win.dataLayer = win.dataLayer || [];
      win.gtag = function () {
        win.dataLayer.push(arguments);
      };
      win.gtag("js", new Date());
      win.gtag("config", GA_ID);
      console.log(`[Tracking] GA4 Initialized with ID: ${GA_ID}`);
    } catch (e) {
      console.error("[Tracking] GA4 initialization error:", e);
    }
  }

  // 2. Facebook Pixel Setup
  if (FB_ID && !FB_ID.includes("your_")) {
    try {
      const win = window as any;
      const doc = document;
      
      if (!win.fbq) {
        win.fbq = function () {
          win.fbq.callMethod ? win.fbq.callMethod.apply(win, arguments) : win.fbq.queue.push(arguments);
        };
        win.fbq.queue = [];
        win.fbq.loaded = true;
        win.fbq.version = "2.0";
        
        const script = doc.createElement("script");
        script.async = true;
        script.src = "https://connect.facebook.net/en_US/fbevents.js";
        doc.head.appendChild(script);
      }
      
      win.fbq("init", FB_ID);
      win.fbq("track", "PageView");
      console.log(`[Tracking] FB Pixel Initialized with ID: ${FB_ID}`);
    } catch (e) {
      console.error("[Tracking] FB Pixel initialization error:", e);
    }
  }
};

// Google Analytics 4 event logging
export const logGAEvent = (eventName: string, params?: Record<string, any>) => {
  // Check if gtag is defined
  const win = window as any;
  if (typeof win.gtag === "function") {
    win.gtag("event", eventName, params);
    console.log(`[GA4] Event tracked: ${eventName}`, params);
  } else {
    console.log(`[GA4 Mock] Event: ${eventName}`, params);
  }
};

// Facebook Pixel event logging
export const logFBPixelEvent = (eventName: string, params?: Record<string, any>) => {
  const win = window as any;
  if (typeof win.fbq === "function") {
    win.fbq("track", eventName, params);
    console.log(`[FB Pixel] Event tracked: ${eventName}`, params);
  } else {
    console.log(`[FB Pixel Mock] Event: ${eventName}`, params);
  }
};

// Custom triggers
export const trackBookingSubmit = (bookingData: { name: string; phone: string; busType: string; date: string }) => {
  const payload = {
    bus_type: bookingData.busType,
    booking_date: bookingData.date,
    value: 0, // value can be calculated dynamically or left as custom
    currency: "SAR",
    timestamp: new Date().toISOString()
  };
  
  logGAEvent("booking_submit", payload);
  logFBPixelEvent("Lead", {
    content_name: `Booking - ${bookingData.busType}`,
    content_category: "Booking",
    ...payload
  });
};

export const trackWhatsAppClick = (location: string) => {
  const payload = {
    click_location: location,
    timestamp: new Date().toISOString()
  };
  
  logGAEvent("whatsapp_click", payload);
  logFBPixelEvent("Contact", {
    content_name: `WhatsApp - ${location}`,
    ...payload
  });
};

export const trackCallClick = (location: string) => {
  const payload = {
    click_location: location,
    timestamp: new Date().toISOString()
  };
  
  logGAEvent("phone_call_click", payload);
  logFBPixelEvent("Contact", {
    content_name: `Phone Call - ${location}`,
    ...payload
  });
};

