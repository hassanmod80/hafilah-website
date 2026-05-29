import React from "react";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle, FaUsers, FaGasPump, FaCogs, FaSnowflake, FaStar } from "react-icons/fa";
import BookingForm from "../components/BookingForm";
import { SEO_CONFIGS, getProductSchema } from "../utils/seo";
import { PHONE_NUMBER } from "../utils/constants";
import { useLanguage } from "../utils/LanguageContext";

export const VipBus: React.FC = () => {
  const { language, t } = useLanguage();
  const seo = SEO_CONFIGS.vipBus[language];
  const productSchema = getProductSchema(
    language === "ar" ? "مرسيدس VIP ورجال الأعمال" : "Mercedes VIP & Executive Vans",
    19,
    language
  );

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
      <section className="bg-slate-950 text-white py-20 px-4 md:px-8 text-center relative overflow-hidden border-b-4 border-amber-500">
        {/* Background dark pattern overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img 
            src="/images/services/vip-service.webp" 
            alt="VIP background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto z-10 relative space-y-4">
          <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-2">
            <FaStar className="animate-spin-slow" />
            <span>{isAr ? "الخدمة الملكية الفاخرة" : "ROYAL VIP SERVICE"}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">
            {t("service.vip.title")}
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {t("service.vip.subtitle")}
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full translate-x-20 -translate-y-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full -translate-x-20 translate-y-20 blur-3xl"></div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Details Panel */}
            <div className="lg:col-span-7 space-y-8 text-start">
              
              {/* Luxury Double Gallery Grid */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-gray-100 pb-3">
                  <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
                  {isAr ? "معرض الأسطول الفخم للشركة" : "Our Ultra-Luxury Fleet Gallery"}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mercedes Sprinter VIP Card */}
                  <div className="bg-slate-50 rounded-xl overflow-hidden border border-gray-200/60 shadow-sm flex flex-col group">
                    <div className="h-48 overflow-hidden relative bg-white flex items-center justify-center p-2">
                      <img 
                        src="/images/buses/mercedes-sprinter.webp" 
                        alt={t("service.vip.gallerySide")} 
                        className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                      <span className="absolute bottom-2 left-2 bg-slate-900/90 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                        {isAr ? "سبرينتر (15-19 مقعد)" : "Sprinter (15-19 Seats)"}
                      </span>
                    </div>
                    <div className="p-3 flex-grow bg-slate-900 text-white text-center">
                      <h4 className="font-bold text-sm text-amber-400">{t("service.vip.gallerySide")}</h4>
                    </div>
                  </div>

                  {/* Mercedes V-Class VIP Card */}
                  <div className="bg-slate-50 rounded-xl overflow-hidden border border-gray-200/60 shadow-sm flex flex-col group">
                    <div className="h-48 overflow-hidden relative bg-white flex items-center justify-center p-2">
                      <img 
                        src="/images/buses/mercedes-vclass.webp" 
                        alt={t("service.vip.galleryInside")} 
                        className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                      <span className="absolute bottom-2 left-2 bg-slate-900/90 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                        {isAr ? "في كلاس (7 مقاعد)" : "V-Class (7 Seats)"}
                      </span>
                    </div>
                    <div className="p-3 flex-grow bg-slate-900 text-white text-center">
                      <h4 className="font-bold text-sm text-amber-400">{t("service.vip.galleryInside")}</h4>
                    </div>
                  </div>
                </div>

                <div className="text-center text-xs font-semibold text-gray-500 bg-slate-100 py-2 rounded-lg border border-slate-200">
                  ⚡ {t("service.realPhotos")}
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t("service.descHeader")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("service.vip.desc")}
                </p>

                {/* Specs list */}
                <h4 className="font-bold text-slate-900 text-base mb-4">{t("service.specsTitle")}</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-xl text-center border border-gray-100">
                    <FaUsers className="text-amber-500 text-xl mx-auto mb-2" />
                    <span className="block text-xs text-gray-400">{t("service.capacity")}</span>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{isAr ? "7 - 19 راكب" : "7 - 19 Seats"}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl text-center border border-gray-100">
                    <FaSnowflake className="text-amber-500 text-xl mx-auto mb-2" />
                    <span className="block text-xs text-gray-400">{t("service.ac")}</span>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{t("service.acStrong")}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl text-center border border-gray-100">
                    <FaCogs className="text-amber-500 text-xl mx-auto mb-2" />
                    <span className="block text-xs text-gray-400">{t("service.state")}</span>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{isAr ? "فخامة مطلقة" : "Ultimate Luxury"}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl text-center border border-gray-100">
                    <FaGasPump className="text-amber-500 text-xl mx-auto mb-2" />
                    <span className="block text-xs text-gray-400">{t("service.driver")}</span>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{isAr ? "سائق كبار شخصيات" : "VIP Chauffeur"}</span>
                  </div>
                </div>

                {/* Key features checklist */}
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-amber-500 flex-shrink-0" />
                    <span>{isAr ? "مقاعد جلدية فاخرة متحركة تدعم التدليك والتحكم الكهربائي الكامل." : "Luxurious leather seats with electric adjustment and massage support."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-amber-500 flex-shrink-0" />
                    <span>{isAr ? "شاشات عرض ذكية متصلة بإنترنت واي فاي سريع للغاية ومقابس طاقة." : "Smart display screens connected to superfast Wi-Fi and power sockets."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-amber-500 flex-shrink-0" />
                    <span>{isAr ? "ثلاجة مشروبات خاصة محملة بضيافة مجانية من المشروبات والمياه." : "Private beverage fridge loaded with free complimentary drinks and water."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-amber-500 flex-shrink-0" />
                    <span>{isAr ? "خصوصية كاملة مع زجاج معتم وعازل للصوت وأنظمة إضاءة محيطية هادئة." : "Absolute privacy with tinted soundproof glass and warm ambient lighting."}</span>
                  </li>
                </ul>
              </div>

              {/* Uses */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t("service.usesTitle")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 bg-slate-50 rounded-xl ${isAr ? "border-r-4" : "border-l-4"} border-slate-900`}>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{t("service.vip.use1Title")}</h4>
                    <p className="text-xs text-gray-500">{t("service.vip.use1Desc")}</p>
                  </div>
                  <div className={`p-4 bg-slate-50 rounded-xl ${isAr ? "border-r-4" : "border-l-4"} border-slate-900`}>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{t("service.vip.use2Title")}</h4>
                    <p className="text-xs text-gray-500">{t("service.vip.use2Desc")}</p>
                  </div>
                  <div className={`p-4 bg-slate-50 rounded-xl ${isAr ? "border-r-4" : "border-l-4"} border-slate-900`}>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{t("service.vip.use3Title")}</h4>
                    <p className="text-xs text-gray-500">{t("service.vip.use3Desc")}</p>
                  </div>
                  <div className={`p-4 bg-slate-50 rounded-xl ${isAr ? "border-r-4" : "border-l-4"} border-slate-900`}>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{t("service.vip.use4Title")}</h4>
                    <p className="text-xs text-gray-500">{t("service.vip.use4Desc")}</p>
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
                  className="inline-block py-3 px-8 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl transition shadow-md"
                >
                  {t("service.requestQuoteBtn")}
                </a>
              </div>
            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <BookingForm />
                <div className="mt-6 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 text-start">
                  <h4 className="font-bold text-amber-400 text-base mb-2">{t("service.inquireFast")}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {t("service.inquireFastDesc")}
                  </p>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-center block text-sm transition"
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

export default VipBus;
