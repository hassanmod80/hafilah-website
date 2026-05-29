import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  FaUserShield, FaBus, FaTags, FaClock, 
  FaArrowLeft, FaPhoneAlt, FaWhatsapp, 
  FaRegStar, FaStar, FaEnvelope, FaMapMarkerAlt 
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BUSES, SERVICES, TESTIMONIALS, PHONE_NUMBER, WHATSAPP_NUMBER, EMAIL, LOCATION_AR, LOCATION_EN } from "../utils/constants";
import { SEO_CONFIGS, getLocalBusinessSchema } from "../utils/seo";
import BookingForm from "../components/BookingForm";
import { trackWhatsAppClick } from "../utils/tracking";
import { useLanguage } from "../utils/LanguageContext";

export const Home: React.FC = () => {
  const { language, t } = useLanguage();
  const seo = SEO_CONFIGS.home[language];
  const businessSchema = getLocalBusinessSchema(language);

  const handleWhatsApp = () => trackWhatsAppClick("Home Hero");

  // Helper to render stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  const isEn = language === "en";
  const location = language === "ar" ? LOCATION_AR : LOCATION_EN;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden min-h-[85vh] flex items-center pt-24 pb-16">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-40 mix-blend-multiply">
          <img 
            src="/images/hero/bus-hero.webp" 
            alt={language === "ar" ? "حافلات حديثة في الرياض" : "Modern buses in Riyadh"} 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't exist yet
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1920";
            }}
          />
        </div>
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-y from-slate-950/20 to-slate-900/60 lg:bg-gradient-to-${isEn ? "r" : "l"} lg:from-slate-950 lg:via-slate-900/80 lg:to-transparent`}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero text content */}
            <div className="lg:col-span-7 text-start">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-bold bg-primary/20 text-blue-300 border border-primary/30 mb-6 animate-pulse">
                {t("home.heroBadge")}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                {t("home.heroTitle1")} <br />
                <span className="text-secondary">{t("home.heroTitle2")}</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                {t("home.heroDesc")}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-start">
                <a 
                  href="#booking-section" 
                  className="px-8 py-4 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-xl transition duration-300 flex items-center gap-2 shadow-lg shadow-emerald-900/30"
                >
                  <span>{t("home.heroCallCTA")}</span>
                  <FaArrowLeft className={`text-sm transition ${isEn ? "rotate-180" : ""}`} />
                </a>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  onClick={handleWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition duration-300 flex items-center gap-2 border border-slate-700"
                >
                  <FaWhatsapp className="text-lg text-emerald-400" />
                  <span>{t("home.heroWhatsappCTA")}</span>
                </a>
              </div>
            </div>

            {/* Quick Booking form container */}
            <div className="lg:col-span-5" id="booking-section">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t("home.featuresTitle")}
            </h2>
            <p className="text-gray-500 text-sm">
              {t("home.featuresDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:bg-white transition duration-300 group text-start">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition duration-300">
                <FaUserShield className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{t("home.feature1Title")}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("home.feature1Desc")}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:bg-white transition duration-300 group text-start">
              <div className="w-14 h-14 bg-emerald-50 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition duration-300">
                <FaBus className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{t("home.feature2Title")}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("home.feature2Desc")}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:bg-white transition duration-300 group text-start">
              <div className="w-14 h-14 bg-amber-50 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition duration-300">
                <FaTags className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{t("home.feature3Title")}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("home.feature3Desc")}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:bg-white transition duration-300 group text-start">
              <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition duration-300">
                <FaClock className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{t("home.feature4Title")}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("home.feature4Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t("home.servicesTitle")}
            </h2>
            <p className="text-gray-500 text-sm">
              {t("home.servicesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col h-full text-start">
                <div className="h-48 overflow-hidden relative bg-slate-50">
                  <img 
                    src={service.image} 
                    alt={language === "ar" ? service.nameAr : service.nameEn} 
                    className={`w-full h-full ${
                      service.image.includes("mercedes") 
                        ? "object-contain p-4 bg-slate-100" 
                        : "object-cover"
                    } hover:scale-105 transition duration-500`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className={`absolute top-4 ${isEn ? "left-4" : "right-4"} bg-primary text-white p-3 rounded-xl shadow-lg`}>
                    {service.id === 1 && <FaBus className="text-lg" />}
                    {service.id === 2 && <FaUserShield className="text-lg" />}
                    {service.id === 3 && <FaClock className="text-lg" />}
                    {service.id === 4 && <FaBus className="text-lg" />}
                    {service.id === 5 && <FaUserShield className="text-lg" />}
                    {service.id === 6 && <FaStar className="text-lg" />}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {language === "ar" ? service.nameAr : service.nameEn}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {language === "ar" ? service.descAr : service.descEn}
                  </p>
                  <Link 
                    to={service.link}
                    className="text-primary hover:text-primary-light font-bold text-sm flex items-center gap-2 self-start mt-auto"
                  >
                    <span>{t("home.servicesCTA")}</span>
                    <FaArrowLeft className={`text-xs ${isEn ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section (Swiper Carousel) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t("home.fleetTitle")}
            </h2>
            <p className="text-gray-500 text-sm">
              {t("home.fleetDesc")}
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {BUSES.map((bus) => (
              <SwiperSlide key={bus.id} className="h-auto">
                <div className="bg-slate-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition duration-300 h-full flex flex-col text-start">
                  <div className="h-56 overflow-hidden relative bg-white flex items-center justify-center">
                    <img 
                      src={bus.image} 
                      alt={language === "ar" ? bus.nameAr : bus.nameEn} 
                      className={`w-full h-full ${
                        bus.image.includes("mercedes") 
                          ? "object-contain p-4" 
                          : "object-cover"
                      }`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    <span className={`absolute top-4 ${isEn ? "left-4" : "right-4"} bg-primary text-white text-xs px-3 py-1.5 rounded-full font-bold`}>
                      {t("home.fleetCapacity", { capacity: bus.capacity })}
                    </span>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {language === "ar" ? bus.nameAr : bus.nameEn}
                    </h3>
                    
                    {/* CTA badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-secondary font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">
                        {t("home.fleetOfferBadge")}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6 flex-grow">
                      {(language === "ar" ? bus.featuresAr : bus.featuresEn).slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="text-gray-600 text-xs flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <Link 
                        to={bus.link}
                        className="py-2.5 bg-primary hover:bg-primary-light text-white text-center text-xs font-bold rounded-lg transition"
                      >
                        {t("home.fleetSpecsCTA")}
                      </Link>
                      <a 
                        href="#booking-section"
                        className="py-2.5 bg-secondary hover:bg-secondary-dark text-white text-center text-xs font-bold rounded-lg transition"
                      >
                        {t("home.fleetDirectCTA")}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("home.testimonialsTitle")}
            </h2>
            <p className="text-slate-400 text-sm">
              {t("home.testimonialsDesc")}
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {TESTIMONIALS.map((test) => (
              <SwiperSlide key={test.id} className="h-auto">
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 h-full flex flex-col justify-between text-start">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {renderStars(test.rating)}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                      " {language === "ar" ? test.textAr : test.textEn} "
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-slate-700 pt-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-700">
                      <img 
                        src={test.image} 
                        alt={language === "ar" ? test.nameAr : test.nameEn} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Avatar placeholder
                          const name = language === "ar" ? test.nameAr : test.nameEn;
                          (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`;
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">
                        {language === "ar" ? test.nameAr : test.nameEn}
                      </h4>
                      {(language === "ar" ? test.roleAr : test.roleEn) && (
                        <p className="text-xs text-primary mt-0.5">
                          {language === "ar" ? test.roleAr : test.roleEn}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Contact Details cards */}
            <div className="lg:col-span-5 text-start">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {t("home.contactTitle")}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {t("home.contactDesc")}
              </p>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-base">{t("home.contactLocation")}</h4>
                    <p className="text-gray-500 text-sm mt-1">{location}</p>
                  </div>
                </div>

                {/* Call */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 text-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-base">{t("home.contactPhone")}</h4>
                    <p className="text-gray-500 text-sm mt-1 text-ltr">{PHONE_NUMBER}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-base">{t("home.contactEmail")}</h4>
                    <p className="text-gray-500 text-sm mt-1">{EMAIL}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map stub */}
            <div className="lg:col-span-7 h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                title={t("home.mapTitle")}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m11!1m3!1d115911.68761066708!2d46.7248315!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
