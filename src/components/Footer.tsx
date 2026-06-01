import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { COMPANY_NAME, PHONE_NUMBER, WHATSAPP_NUMBER, EMAIL, LOCATION_AR, LOCATION_EN, OP_HOURS_AR, OP_HOURS_EN } from "../utils/constants";
import { trackCallClick, trackWhatsAppClick } from "../utils/tracking";
import { useLanguage } from "../utils/LanguageContext";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const handleCall = () => {
    trackCallClick("Footer Link");
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick("Footer Link");
  };

  const location = language === "ar" ? LOCATION_AR : LOCATION_EN;
  const opHours = language === "ar" ? OP_HOURS_AR : OP_HOURS_EN;

  const sectionHeaderClass = `text-white text-base font-bold mb-6 relative pb-2 before:absolute before:bottom-0 ${
    language === "ar" ? "before:right-0" : "before:left-0"
  } before:w-10 before:h-0.5 before:bg-primary`;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900">
                <span className="text-xl">{language === "ar" ? "ح" : "H"}</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t("footer.desc")}
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-primary text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook Page"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-primary text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter Account"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-primary text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={sectionHeaderClass}>
              {t("footer.links")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services Links */}
          <div>
            <h4 className={sectionHeaderClass}>
              {t("footer.services")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services/tourist-rental" className="hover:text-primary transition-colors font-semibold">
                  {t("nav.tourist")}
                </Link>
              </li>
              <li>
                <Link to="/services/coaster" className="hover:text-primary transition-colors">
                  {t("nav.coaster")}
                </Link>
              </li>
              <li>
                <Link to="/services/bus-50-seater" className="hover:text-primary transition-colors">
                  {t("nav.bus50")}
                </Link>
              </li>
              <li>
                <Link to="/services/employee-transport" className="hover:text-primary transition-colors font-semibold">
                  {t("nav.employee")}
                </Link>
              </li>
              <li>
                <Link to="/services/worker-transport" className="hover:text-primary transition-colors font-semibold">
                  {t("nav.worker")}
                </Link>
              </li>
              <li>
                <Link to="/services/event-buses" className="hover:text-primary transition-colors">
                  {t("nav.events")}
                </Link>
              </li>
              <li>
                <Link to="/services/airport-transfer" className="hover:text-primary transition-colors">
                  {t("nav.airport")}
                </Link>
              </li>
              <li>
                <Link to="/services/vip-bus" className="hover:text-primary transition-colors font-semibold">
                  {t("nav.vip")}
                </Link>
              </li>
              <li>
                <Link to="/services/mercedes-vip" className="hover:text-primary transition-colors font-semibold">
                  {t("nav.mercedes")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className={sectionHeaderClass}>
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0 text-base" />
                <span className="leading-relaxed">{location}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary flex-shrink-0" />
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                  onClick={handleCall}
                  className="hover:text-primary transition-colors text-ltr"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-primary flex-shrink-0 text-lg" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  onClick={handleWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-ltr"
                >
                  +{WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="pt-2 text-xs text-slate-400">
                {language === "ar" ? "ساعات العمل: " : "Operating Hours: "} {opHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs gap-4">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-primary transition-colors">
              {language === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
            </Link>
            <span>|</span>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
          </div>

          <p className="mt-2 sm:mt-0">
            {language === "ar" ? "بني بكل حب لخدمة ضيوف الرياض." : "Built with love to serve Riyadh's guests."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
