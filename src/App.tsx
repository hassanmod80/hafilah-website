import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingCall from "./components/FloatingCall";

// Pages
import Home from "./pages/Home";
import KousterRental from "./pages/KousterRental";
import BusRental50Seater from "./pages/BusRental50Seater";
import EmployeeTransport from "./pages/EmployeeTransport";
import EventBuses from "./pages/EventBuses";
import AirportTransfer from "./pages/AirportTransfer";
import VipBus from "./pages/VipBus";
import MercedesVip from "./pages/MercedesVip";
import TouristRental from "./pages/TouristRental";
import WorkerTransport from "./pages/WorkerTransport";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import { initTracking } from "./utils/tracking";
import { LanguageProvider, useLanguage } from "./utils/LanguageContext";

// Scroll to top on route change helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const { direction, language } = useLanguage();

  // Initialize GA4 and Facebook Pixel tracking scripts
  useEffect(() => {
    initTracking();
  }, []);

  return (
    <div 
      className={`flex flex-col min-h-screen bg-light text-dark ${
        language === "ar" ? "font-arabic" : "font-english"
      } antialiased selection:bg-primary selection:text-white`} 
      dir={direction}
    >
      {/* Global Header */}
      <Header />

      {/* Main Layout Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/tourist-rental" element={<TouristRental />} />
          <Route path="/services/coaster" element={<KousterRental />} />
          <Route path="/services/bus-50-seater" element={<BusRental50Seater />} />
          <Route path="/services/employee-transport" element={<EmployeeTransport />} />
          <Route path="/services/worker-transport" element={<WorkerTransport />} />
          <Route path="/services/event-buses" element={<EventBuses />} />
          <Route path="/services/airport-transfer" element={<AirportTransfer />} />
          <Route path="/services/vip-bus" element={<VipBus />} />
          <Route path="/services/mercedes-vip" element={<MercedesVip />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Actions */}
      <FloatingWhatsApp />
      <FloatingCall />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <AppContent />
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
