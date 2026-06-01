import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaTimes, FaBars, FaGlobe } from "react-icons/fa";
import { COMPANY_NAME, PHONE_NUMBER, WHATSAPP_NUMBER } from "../utils/constants";
import { trackCallClick, trackWhatsAppClick } from "../utils/tracking";
import { useLanguage } from "../utils/LanguageContext";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const handleCall = () => {
    trackCallClick("Header Button");
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick("Header Button");
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition duration-200 py-2 border-b-2 ${
      isActive
        ? "text-primary border-primary"
        : "text-gray-600 border-transparent hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md shadow-md z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2.5">
              {/* Bus icon / logo shape */}
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
                <span className="text-xl">{language === "ar" ? "ح" : "H"}</span>
              </div>
              <span className="text-2xl font-bold text-primary tracking-tight">
                {COMPANY_NAME}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 items-center">
            <NavLink to="/" className={navLinkClass}>
              {t("nav.home")}
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-sm font-semibold text-gray-600 hover:text-primary py-2 flex items-center gap-1 focus:outline-none cursor-pointer"
              >
                <span>{t("nav.services")}</span>
                <span className="text-[10px]">▼</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className={`absolute ${
                    language === "ar" ? "right-0" : "left-0"
                  } mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fadeIn`}
                >
                  <Link
                    to="/services/tourist-rental"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition font-semibold"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("nav.tourist")}
                  </Link>
                  <Link
                    to="/services/coaster"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("nav.coaster")}
                  </Link>
                  <Link
                    to="/services/bus-50-seater"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("nav.bus50")}
                  </Link>
                  <Link
                    to="/services/employee-transport"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition font-semibold"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("nav.employee")}
                  </Link>
                  <Link
                    to="/services/worker-transport"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("nav.worker")}
                  </Link>
                  <Link
                    to="/services/event-buses"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("nav.events")}
                  </Link>
                  <Link
                    to="/services/airport-transfer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("nav.airport")}
                  </Link>
                  <Link
                    to="/services/vip-bus"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition font-semibold"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("nav.vip")}
                  </Link>
                  <Link
                    to="/services/mercedes-vip"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition font-semibold"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("nav.mercedes")}
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClass}>
              {t("nav.about")}
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              {t("nav.contact")}
            </NavLink>
          </nav>

          {/* Actions & Switcher (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-gray-600 hover:text-primary rounded-xl border border-gray-200 hover:bg-gray-50 transition duration-200 cursor-pointer focus:outline-none"
              title={language === "ar" ? "Switch to English" : "تغيير للغة العربية"}
            >
              <FaGlobe className="text-gray-400 text-sm" />
              <span>{t("lang.toggle")}</span>
            </button>

            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
              onClick={handleCall}
              className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition duration-200"
            >
              <FaPhoneAlt />
              <span>{t("cta.call")}</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              onClick={handleWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition duration-200 shadow-md shadow-emerald-100"
            >
              <FaWhatsapp className="text-base" />
              <span>{t("cta.whatsapp")}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Language Switcher (Mobile Quick toggle) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 p-2 text-xs font-bold text-gray-600 border border-gray-150 rounded-lg hover:bg-gray-50 focus:outline-none"
            >
              <FaGlobe className="text-gray-400" />
              <span>{language === "ar" ? "EN" : "عربي"}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white py-4 px-6 animate-slideIn">
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-semibold py-2 ${isActive ? "text-primary" : "text-gray-600"}`
              }
              onClick={() => setIsOpen(false)}
            >
              {t("nav.home")}
            </NavLink>

            {/* Mobile Services list */}
            <div className={`border-r-2 ${language === "ar" ? "border-gray-100 pr-3" : "border-gray-100 pl-3 border-l-2 border-r-0"} py-1 flex flex-col space-y-2.5`}>
              <span className="text-xs font-bold text-gray-400">{t("nav.services")}:</span>
              <Link
                to="/services/tourist-rental"
                className="text-gray-600 text-sm hover:text-primary font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.tourist")}
              </Link>
              <Link
                to="/services/coaster"
                className="text-gray-600 text-sm hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.coaster")}
              </Link>
              <Link
                to="/services/bus-50-seater"
                className="text-gray-600 text-sm hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.bus50")}
              </Link>
              <Link
                to="/services/employee-transport"
                className="text-gray-600 text-sm hover:text-primary font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.employee")}
              </Link>
              <Link
                to="/services/worker-transport"
                className="text-gray-600 text-sm hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.worker")}
              </Link>
              <Link
                to="/services/event-buses"
                className="text-gray-600 text-sm hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.events")}
              </Link>
              <Link
                to="/services/airport-transfer"
                className="text-gray-600 text-sm hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.airport")}
              </Link>
              <Link
                to="/services/vip-bus"
                className="text-gray-600 text-sm hover:text-primary font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.vip")}
              </Link>
              <Link
                to="/services/mercedes-vip"
                className="text-gray-600 text-sm hover:text-primary font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.mercedes")}
              </Link>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base font-semibold py-2 ${isActive ? "text-primary" : "text-gray-600"}`
              }
              onClick={() => setIsOpen(false)}
            >
              {t("nav.about")}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-base font-semibold py-2 ${isActive ? "text-primary" : "text-gray-600"}`
              }
              onClick={() => setIsOpen(false)}
            >
              {t("nav.contact")}
            </NavLink>

            {/* Mobile CTAs */}
            <div className="flex flex-col space-y-2.5 pt-4 border-t border-gray-100">
              {/* Language Selector (Mobile Drawer Toggle) */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-center font-bold text-gray-700 hover:bg-gray-50 transition cursor-pointer"
              >
                <FaGlobe className="text-gray-400" />
                <span>{t("lang.toggle")}</span>
              </button>

              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                onClick={handleCall}
                className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <FaPhoneAlt />
                <span>{t("cta.callMobile")}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                onClick={handleWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                <span>{t("cta.whatsappMobile")}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
