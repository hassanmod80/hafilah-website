import React from "react";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle, FaHeart, FaAward, FaCalendarAlt, FaGlassCheers } from "react-icons/fa";
import BookingForm from "../components/BookingForm";
import { SEO_CONFIGS, getServiceSchema } from "../utils/seo";
import { useLanguage } from "../utils/LanguageContext";

export const EventBuses: React.FC = () => {
  const { language, t } = useLanguage();
  const seo = SEO_CONFIGS.events[language];
  const serviceSchema = getServiceSchema(
    language === "ar" ? "خدمة تأجير باصات للمناسبات والفعاليات بالرياض" : "Event & Wedding Bus Rental Service in Riyadh",
    language === "ar" ? "باصات فاخرة وحديثة مخصصة للمناسبات، الأعراس، المؤتمرات والمعارض بالرياض. تنظيم متكامل لنقل ضيوفكم براحة وأمان تام." : "Luxury and modern buses customized for weddings, family parties, business conferences, and exhibitions in Riyadh. Pristine coordination for passenger comfort.",
    language
  );

  const isAr = language === "ar";

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hafilah.com/services/event-buses" />
        <meta property="og:image" content="https://hafilah.com/images/services/events.webp" />
        <link rel="canonical" href="https://hafilah.com/services/event-buses" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t("service.events.title")}
          </h1>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            {t("service.events.subtitle")}
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
              {/* Previous Events Gallery */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{isAr ? "معرض صور من مناسبات سابقة" : "Photo Gallery of Previous Events"}</h3>
                <div className="w-full h-80 bg-slate-50 flex items-center justify-center rounded-xl p-2 overflow-hidden mb-4">
                  <img 
                    src="/images/services/events.webp" 
                    alt={t("service.events.galleryAlt")} 
                    className="w-full h-full object-contain rounded-xl hover:scale-105 transition duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-100 h-20 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=300" alt="مناسبة 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-gray-100 h-20 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=300" alt="مناسبة 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-gray-100 h-20 rounded-lg overflow-hidden flex items-center justify-center text-xs font-bold text-gray-500 bg-slate-200">
                    {isAr ? "فعاليات الرياض" : "Riyadh Events"}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{isAr ? "خدمة نقل الضيوف الفاخرة" : "Luxury Guest Transport Service"}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("service.events.desc")}
                </p>

                {/* Event features grids */}
                <h4 className="font-bold text-slate-900 text-base mb-4">{isAr ? "مميزات النقل للمناسبات:" : "Event Transport Features:"}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <FaHeart className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{isAr ? "تنسيق مخصص للأعراس" : "Custom Wedding Coordination"}</h5>
                      <p className="text-xs text-gray-500 mt-1">{isAr ? "نقل منظم لأقارب العروسين وضيوف حفل الزفاف من الفنادق والمطار إلى صالة الأفراح مع توفير الخصوصية والراحة الكاملة." : "Organized transport for relatives and wedding guests from hotels and airport to wedding halls with complete privacy and comfort."}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <FaAward className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{isAr ? "تنظيم الوفود والمؤتمرات" : "Delegations & Conferences"}</h5>
                      <p className="text-xs text-gray-500 mt-1">{isAr ? "خدمات نقل رسمية لضيوف المؤتمرات الدولية والندوات ووفود كبار الشخصيات VIP بباصات فاخرة مزودة بخدمات الرفاهية." : "Official transport services for international conference guests, seminars, and VIP delegations in luxury buses with high-end amenities."}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <FaCalendarAlt className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{isAr ? "مواسم وفعاليات الرياض" : "Riyadh Seasons & Events"}</h5>
                      <p className="text-xs text-gray-500 mt-1">{isAr ? "خدمات نقل الجماهير والمنظمين لمناطق موسم الرياض، الفعاليات الترفيهية، والحفلات الفنية والفعاليات الرياضية." : "Transport services for audiences and organizers to Riyadh Season zones, entertainment events, concerts, and sports games."}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <FaGlassCheers className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{isAr ? "سائقون محترفون وودودون" : "Professional & Friendly Drivers"}</h5>
                      <p className="text-xs text-gray-500 mt-1">{isAr ? "سائقونا يتميزون بحسن المظهر واللباقة التامة في التعامل مع الضيوف والوفود بمستوى يليق بمناسبتك." : "Our drivers feature elegant appearance and complete politeness in dealing with guests and delegations at a level that suits your event."}</p>
                    </div>
                  </div>
                </div>

                {/* Additional services list */}
                <h4 className="font-bold text-slate-900 text-base mb-4">{isAr ? "خدمات إضافية عند الطلب:" : "Additional Services Upon Request:"}</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "توفير مياه ومشروبات باردة للضيوف مجاناً." : "Free cold water and beverages for guests."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "إمكانية وضع شعار الفعالية أو أسماء العروسين على الباص." : "Possibility of placing event logo or wedding couple names on the bus."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "تنسيق منسق لوجستي ميداني لتنظيم صعود ونزول الضيوف وحركة الحافلات." : "On-site logistics coordinator to organize guest boarding, alighting, and bus movement."}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <BookingForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default EventBuses;
