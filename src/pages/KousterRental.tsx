import React from "react";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle, FaUsers, FaGasPump, FaCogs, FaSnowflake } from "react-icons/fa";
import BookingForm from "../components/BookingForm";
import { SEO_CONFIGS, getProductSchema } from "../utils/seo";
import { PHONE_NUMBER } from "../utils/constants";
import { useLanguage } from "../utils/LanguageContext";

export const KousterRental: React.FC = () => {
  const { language, t } = useLanguage();
  const seo = SEO_CONFIGS.coaster[language];
  const productSchema = getProductSchema(language === "ar" ? "باص تويوتا كوستر" : "Toyota Coaster Bus", 30, language);

  const isAr = language === "ar";

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t("service.coaster.title")}
          </h1>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            {t("service.coaster.subtitle")}
          </p>
        </div>
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-16 translate-y-16"></div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Details Panel */}
            <div className="lg:col-span-7 space-y-8 text-start">
              {/* Product Gallery Placeholder */}
              <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                <div className="w-full h-80 bg-slate-50 flex items-center justify-center rounded-xl p-2 overflow-hidden">
                  <img 
                    src="/images/buses/coaster-new.webp" 
                    alt={t("service.coaster.galleryAlt")} 
                    className="w-full h-full object-contain rounded-xl hover:scale-105 transition duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-gray-100 h-20 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=300" alt={t("service.coaster.gallerySide")} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-gray-100 h-20 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=300" alt={t("service.coaster.galleryInside")} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-gray-100 h-20 rounded-lg overflow-hidden flex items-center justify-center text-xs font-bold text-gray-500 bg-slate-200">
                    {t("service.realPhotos")}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t("service.descHeader")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("service.coaster.desc")}
                </p>

                {/* Specs list */}
                <h4 className="font-bold text-slate-900 text-base mb-4">{t("service.specsTitle")}</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-xl text-center border border-gray-100">
                    <FaUsers className="text-primary text-xl mx-auto mb-2" />
                    <span className="block text-xs text-gray-400">{t("service.capacity")}</span>
                    <span className="font-bold text-slate-800 text-sm">{isAr ? "30 راكب" : "30 Seats"}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl text-center border border-gray-100">
                    <FaSnowflake className="text-primary text-xl mx-auto mb-2" />
                    <span className="block text-xs text-gray-400">{t("service.ac")}</span>
                    <span className="font-bold text-slate-800 text-sm">{t("service.acStrong")}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl text-center border border-gray-100">
                    <FaCogs className="text-primary text-xl mx-auto mb-2" />
                    <span className="block text-xs text-gray-400">{t("service.state")}</span>
                    <span className="font-bold text-slate-800 text-sm">{t("service.stateVal")}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl text-center border border-gray-100">
                    <FaGasPump className="text-primary text-xl mx-auto mb-2" />
                    <span className="block text-xs text-gray-400">{t("service.driver")}</span>
                    <span className="font-bold text-slate-800 text-sm">{t("service.driverIncluded")}</span>
                  </div>
                </div>

                {/* Key features checklist */}
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "مقاعد مريحة مغطاة بالمخمل مع أحزمة أمان متطورة." : "Comfortable velvet-covered seats with advanced seat belts."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "ميكروفون وسماعات داخلية للاسترشاد السياحي والتواصل مع الركاب." : "Internal microphone and speakers for tourist guidance."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "مساحة مناسبة للحقائب اليدوية والأمتعة." : "Suitable space for hand bags and luggage."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "ستائر جانبية للحماية من الشمس الحارقة والخصوصية التامة." : "Side curtains for protection from hot sun rays and complete privacy."}</span>
                  </li>
                </ul>
              </div>

              {/* Uses */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t("service.usesTitle")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 bg-slate-50 rounded-xl ${isAr ? "border-r-4" : "border-l-4"} border-primary`}>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{t("service.coaster.use1Title")}</h4>
                    <p className="text-xs text-gray-500">{t("service.coaster.use1Desc")}</p>
                  </div>
                  <div className={`p-4 bg-slate-50 rounded-xl ${isAr ? "border-r-4" : "border-l-4"} border-primary`}>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{t("service.coaster.use2Title")}</h4>
                    <p className="text-xs text-gray-500">{t("service.coaster.use2Desc")}</p>
                  </div>
                  <div className={`p-4 bg-slate-50 rounded-xl ${isAr ? "border-r-4" : "border-l-4"} border-primary`}>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{t("service.coaster.use3Title")}</h4>
                    <p className="text-xs text-gray-500">{t("service.coaster.use3Desc")}</p>
                  </div>
                  <div className={`p-4 bg-slate-50 rounded-xl ${isAr ? "border-r-4" : "border-l-4"} border-primary`}>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{t("service.coaster.use4Title")}</h4>
                    <p className="text-xs text-gray-500">{t("service.coaster.use4Desc")}</p>
                  </div>
                </div>
              </div>

              {/* Pricing section */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t("service.ratesTitle")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("service.ratesDesc")}
                </p>
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                  className="inline-block py-3 px-8 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-xl transition shadow-md"
                >
                  {t("service.requestQuoteBtn")}
                </a>
              </div>
            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <BookingForm />
                <div className="mt-6 bg-blue-50 p-6 rounded-2xl border border-blue-100 text-start">
                  <h4 className="font-bold text-primary text-base mb-2">{t("service.inquireFast")}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    {t("service.inquireFastDesc")}
                  </p>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                    className="w-full py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-xl text-center block text-sm transition"
                  >
                    {t("service.contactUsNumber")} {PHONE_NUMBER}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default KousterRental;
