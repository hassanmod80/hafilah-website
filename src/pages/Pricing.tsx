import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTag, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import BookingForm from "../components/BookingForm";
import { SEO_CONFIGS } from "../utils/seo";
import { PHONE_NUMBER } from "../utils/constants";
import { useLanguage } from "../utils/LanguageContext";

export const Pricing: React.FC = () => {
  const { language, t } = useLanguage();
  const seo = SEO_CONFIGS.pricing[language];

  const isAr = language === "ar";

  const pricingRows = [
    {
      name: t("pricing.minibusPrice"),
      capacity: isAr ? "14 راكب" : "14 Seats",
      daily: t("pricing.minibusDaily"),
      weekly: t("pricing.minibusWeekly"),
      monthly: t("pricing.minibusMonthly")
    },
    {
      name: t("pricing.coasterPrice"),
      capacity: isAr ? "30 راكب" : "30 Seats",
      daily: t("pricing.coasterDaily"),
      weekly: t("pricing.coasterWeekly"),
      monthly: t("pricing.coasterMonthly")
    },
    {
      name: t("pricing.bus50Price"),
      capacity: isAr ? "50 راكب" : "50 Seats",
      daily: t("pricing.bus50Daily"),
      weekly: t("pricing.bus50Weekly"),
      monthly: t("pricing.bus50Monthly")
    },
    {
      name: t("pricing.vipPrice"),
      capacity: isAr ? "30 راكب" : "30 Seats",
      daily: t("pricing.vipDaily"),
      weekly: t("pricing.vipWeekly"),
      monthly: t("pricing.vipMonthly")
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t("pricing.heroTitle")}
          </h1>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            {t("pricing.heroDesc")}
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
            
            {/* Left Pricing Details */}
            <div className="lg:col-span-7 space-y-8 text-start">
              {/* Detailed Pricing Table */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <FaTag className="text-primary" />
                  <span>{t("pricing.tableTitle")}</span>
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-start border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 text-xs md:text-sm font-bold border-b border-gray-200">
                        <th className="p-4 text-start">{t("pricing.colBusType")}</th>
                        <th className="p-4 text-start">{t("pricing.colCapacity")}</th>
                        <th className="p-4 text-start">{t("pricing.colDaily")}</th>
                        <th className="p-4 text-start">{t("pricing.colWeekly")}</th>
                        <th className="p-4 text-start">{t("pricing.colMonthly")}</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs md:text-sm text-gray-700">
                      {pricingRows.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-slate-50 transition">
                          <td className="p-4 font-semibold text-slate-900">{row.name}</td>
                          <td className="p-4">{row.capacity}</td>
                          <td className="p-4 text-secondary font-bold whitespace-nowrap">{row.daily}</td>
                          <td className="p-4 text-primary-light font-semibold whitespace-nowrap">{row.weekly}</td>
                          <td className="p-4 text-slate-500 whitespace-nowrap">{row.monthly}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Important Notice Callout */}
                <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                  <FaExclamationCircle className="text-amber-500 text-xl flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-amber-950 text-sm">{t("pricing.notesTitle")}</h4>
                    <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                      {t("pricing.tableDesc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing terms details */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {isAr ? "ماذا يشمل سعر تأجير الباص؟" : "What does the bus rental price include?"}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "سائق محترف ومسؤول طوال فترة الحجز." : "A professional and responsible driver throughout the booking."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "تكاليف الوقود اللازمة لخط السير المتفق عليه." : "Necessary fuel costs for the agreed-upon route."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "حافلة نظيفة ومعقمة وصيانة وقائية كاملة." : "Clean, sanitized bus with full preventive maintenance."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "رسوم تذاكر الوقوف في مطار الرياض." : "Parking ticket fees at Riyadh airport."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "التأمين الشامل للمركبة والركاب طوال فترة التأجير." : "Comprehensive insurance for the vehicle and passengers."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "توفير مياه شرب معدنية للضيوف (عند الطلب)." : "Mineral drinking water for guests (upon request)."}</span>
                  </li>
                </ul>
              </div>

              {/* Extra notes */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {t("pricing.notesTitle")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("pricing.note1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("pricing.note2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("pricing.note3")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("pricing.note4")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <BookingForm />
                <div className="mt-6 bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-start">
                  <h4 className="font-bold text-secondary-dark text-base mb-2">
                    {isAr ? "استشارات مخصصة مجانية" : "Free Custom Consultations"}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    {isAr
                      ? "هل تحتاج إلى تنسيق لوجستي ونقل جماعي لفعالية كبيرة أو عقود نقل موظفين مستمرة؟ تواصل مع مستشارينا لتخصيص الخطة والأسعار لشركتك."
                      : "Do you need logistical coordination and group transport for a major event or ongoing corporate shuttles? Contact our consultants to customize the plan and rates."}
                  </p>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                    className="w-full py-3 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-xl text-center block text-sm transition shadow-md"
                  >
                    {isAr ? "اتصل بنا: " : "Call Us: "} {PHONE_NUMBER}
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

export default Pricing;
