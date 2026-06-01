import React from "react";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle, FaPlaneArrival, FaPlaneDeparture, FaClock, FaSuitcase } from "react-icons/fa";
import BookingForm from "../components/BookingForm";
import { SEO_CONFIGS, getServiceSchema } from "../utils/seo";
import { useLanguage } from "../utils/LanguageContext";

export const AirportTransfer: React.FC = () => {
  const { language, t } = useLanguage();
  const seo = SEO_CONFIGS.airport[language];
  const serviceSchema = getServiceSchema(
    language === "ar" ? "خدمة استقبال وتوصيل مطار الملك خالد بالرياض" : "King Khalid Airport Reception & Transfer Service in Riyadh",
    language === "ar" ? "توصيل واستقبل من وإلى مطار الملك خالد الدولي بالرياض بأحدث الباصات والميني باصات. خدمة دقيقة على مدار الساعة مع سائقين بانتظاركم." : "Reliable airport pickup and drop-off service from and to King Khalid International Airport (RUH) in Riyadh with modern shuttle buses 24/7.",
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
        <meta property="og:url" content="https://hafilah.com/services/airport-transfer" />
        <meta property="og:image" content="https://hafilah.com/images/services/airport.webp" />
        <link rel="canonical" href="https://hafilah.com/services/airport-transfer" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t("service.airport.title")}
          </h1>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            {t("service.airport.subtitle")}
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
              {/* Image Placeholder */}
              <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                <div className="w-full h-80 bg-slate-50 flex items-center justify-center rounded-xl p-2 overflow-hidden">
                  <img 
                    src="/images/services/airport.webp" 
                    alt={t("service.airport.galleryAlt")} 
                    className="w-full h-full object-contain rounded-xl hover:scale-105 transition duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1530521951415-3dbd69856cba?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{isAr ? "راحة تامة منذ لحظة وصولك" : "Complete Comfort Since the Moment You Arrive"}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("service.airport.desc")}
                </p>

                {/* Airport features grids */}
                <h4 className="font-bold text-slate-900 text-base mb-4">{isAr ? "تفاصيل خدمة المطار:" : "Airport Service Details:"}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <FaPlaneArrival className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{isAr ? "استقبال باللوحات (صالات الوصول)" : "Meet & Greet with Signboards (Arrival Halls)"}</h5>
                      <p className="text-xs text-gray-500 mt-1">{isAr ? "تسهيل عملية التقاء السائق بالوفود والمسافرين حاملاً لوحة إرشادية بالاسم." : "Facilitating the driver's meeting with delegations and travelers holding a name guide board."}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <FaPlaneDeparture className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{isAr ? "التوصيل للمغادرة بدقة" : "Punctual Departure Transfer"}</h5>
                      <p className="text-xs text-gray-500 mt-1">{isAr ? "نقل دقيق يضمن وصولك للمطار قبل موعد الرحلة بوقت كافٍ لإنهاء إجراءات السفر." : "Punctual transport ensuring your arrival at the airport with plenty of time before your flight to complete check-in."}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <FaClock className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{isAr ? "تتبع ذكي للرحلات الجوية" : "Smart Flight Tracking"}</h5>
                      <p className="text-xs text-gray-500 mt-1">{isAr ? "نقوم بمتابعة مواعيد إقلاع وهبوط طائرتك تلقائياً للتعامل مع أي تقديم أو تأخير." : "We monitor your flight departure and landing times automatically to handle any early arrivals or delays."}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <FaSuitcase className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{isAr ? "مساحة شاسعة للحقائب والأمتعة" : "Ample Space for Bags & Luggage"}</h5>
                      <p className="text-xs text-gray-500 mt-1">{isAr ? "حافلاتنا مجهزة بصناديق أمتعة واسعة لحماية حقائب الركاب ونقلها بأمان." : "Our buses are equipped with spacious luggage compartments to protect passenger bags and transport them safely."}</p>
                    </div>
                  </div>
                </div>

                {/* Key features checklist */}
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "توفير خدمة الاستقبال لجميع صالات المطار (صالة 1، 2، 3، 4، والصالة الملكية)." : "Providing reception service for all airport terminals (Terminal 1, 2, 3, 4, and the Royal Terminal)."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "مجموعة متنوعة من المركبات: ميني باص، كوستر، حافلات 50 راكب، وباصات VIP." : "A wide variety of vehicles: minibuses, Coasters, 50-seater coaches, and VIP buses."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "سعر ثابت محدد مسبقاً شامل الوقود والرسوم الجمركية والوقوف بالمطار." : "Pre-determined fixed price including fuel, customs fees, and airport parking fees."}</span>
                  </li>
                </ul>
              </div>

              {/* Fixed Pricing information */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{isAr ? "الأسعار الثابتة لتوصيل المطار" : "Fixed Airport Transfer Rates"}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-start border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 text-xs md:text-sm font-bold border-b border-gray-200">
                        <th className="p-3">{isAr ? "نوع الباص" : "Bus Type"}</th>
                        <th className="p-3">{isAr ? "السعة (راكب)" : "Capacity (Seats)"}</th>
                        <th className="p-3">{isAr ? "التوصيل من المطار للفندق" : "Airport to Hotel Transfer"}</th>
                        <th className="p-3">{isAr ? "الاستقبال والتوصيل ثنائي الاتجاه" : "Two-way Pickup & Return"}</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs md:text-sm text-gray-600">
                      <tr className="border-b border-gray-100 hover:bg-slate-50">
                        <td className="p-3 font-semibold text-center" colSpan={4}>
                          {isAr ? "يرجى التواصل معنا عبر الهاتف أو الواتساب للحصول على عرض سعر دقيق لخدمة توصيل المطار." : "Please contact us via phone or WhatsApp to get an exact quote for the airport transfer service."}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
                <div className="mb-6 flex justify-center gap-4">
                  <span className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg shadow-md flex items-center gap-1.5">
                    <FaPlaneArrival /> {isAr ? "من المطار إلى الفندق" : "Airport to Hotel"}
                  </span>
                  <span className="px-4 py-2 bg-secondary text-white text-xs font-bold rounded-lg shadow-md flex items-center gap-1.5">
                    <FaPlaneDeparture /> {isAr ? "من الفندق إلى المطار" : "Hotel to Airport"}
                  </span>
                </div>
                <BookingForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AirportTransfer;
