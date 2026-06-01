import React from "react";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle, FaBuilding, FaBriefcase, FaCalendarCheck, FaHandshake } from "react-icons/fa";
import BookingForm from "../components/BookingForm";
import { SEO_CONFIGS, getServiceSchema } from "../utils/seo";
import { PHONE_NUMBER } from "../utils/constants";
import { useLanguage } from "../utils/LanguageContext";

export const EmployeeTransport: React.FC = () => {
  const { language, t } = useLanguage();
  const seo = SEO_CONFIGS.employee[language];
  const serviceSchema = getServiceSchema(
    language === "ar" ? "خدمة نقل الموظفين والشركات بالرياض" : "Corporate & Staff Commuting Service in Riyadh",
    language === "ar" ? "عقود نقل يومية وشهرية وسنوية مرنة للموظفين والعمال والشركات في الرياض بأسعار منافسة وبجودة عالية." : "Daily, monthly, and yearly flexible employee transport contracts for companies in Riyadh.",
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
        <meta property="og:url" content="https://hafilah.com/services/employee-transport" />
        <meta property="og:image" content="https://hafilah.com/images/services/employees-new.webp" />
        <link rel="canonical" href="https://hafilah.com/services/employee-transport" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t("service.employee.title")}
          </h1>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            {t("service.employee.subtitle")}
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
                    src="/images/services/employees-new.webp" 
                    alt={t("service.employee.galleryAlt")} 
                    className="w-full h-full object-contain rounded-xl hover:scale-105 transition duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{isAr ? "خدمات وحلول النقل للشركات" : "Corporate Transport Services & Solutions"}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t("service.employee.desc")}
                </p>

                {/* Corporate benefits grids */}
                <h4 className="font-bold text-slate-900 text-base mb-4">{isAr ? "لماذا تعتمد الشركات في الرياض علينا؟" : "Why Do Riyadh Companies Rely on Us?"}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <FaBuilding className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{isAr ? "تغطية جغرافية كاملة" : "Full Geographic Coverage"}</h5>
                      <p className="text-xs text-gray-500 mt-1">{isAr ? "نغطي كافة أحياء الرياض والمناطق الصناعية (المدينة الصناعية الأولى والثانية والثالثة)." : "We cover all neighborhoods of Riyadh and industrial areas (1st, 2nd, and 3rd Industrial Cities)."}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <FaCalendarCheck className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{isAr ? "عقود مرنة للغاية" : "Highly Flexible Contracts"}</h5>
                      <p className="text-xs text-gray-500 mt-1">{isAr ? "عقود نقل مخصصة (يومية، شهرية، سنوية) بما يتوافق مع ميزانية شركتك ونظام العمل." : "Customized transport contracts (daily, monthly, yearly) matching your company budget and work schedule."}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <FaHandshake className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{isAr ? "التزام صارم بالمواعيد" : "Strict Punctuality & Timing"}</h5>
                      <p className="text-xs text-gray-500 mt-1">{isAr ? "نظام تتبع ذكي يضمن وصول الحافلات قبل موعدها وبدء تنقل الموظفين بسلاسة وسهولة." : "Smart tracking system ensuring buses arrive early and employees commute smoothly."}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex gap-3">
                    <FaBriefcase className="text-primary text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{isAr ? "توفير بدائل فورية" : "Immediate Backup Buses"}</h5>
                      <p className="text-xs text-gray-500 mt-1">{isAr ? "في حال الطوارئ أو الأعطال، نضمن إرسال باص بديل فوراً دون تأثر سير العمل." : "In case of emergencies or breakdowns, we guarantee sending a replacement bus immediately without work interruption."}</p>
                    </div>
                  </div>
                </div>

                {/* Key features checklist */}
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "أسطول باصات حديث ومتنوع يبدأ من ميني باص 14 راكب إلى حافلات 50 راكب." : "A modern and diverse fleet of buses starting from 14-seater minibuses up to 50-seater coaches."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "تكييف بارد وقوي مخصص للأجواء الصيفية القاسية بالمملكة." : "Cool and powerful air conditioning tailored for the harsh summer weather of the Kingdom."}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    <span>{isAr ? "سائقون ذوو خبرة وحسن المظهر وملتزمون بقواعد القيادة الآمنة." : "Experienced, presentable drivers strictly committed to safe driving practices."}</span>
                  </li>
                </ul>
              </div>

              {/* Pricing information for contracts */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{isAr ? "أسعار وعقود الشركات" : "Corporate Rates & Contracts"}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {isAr 
                    ? "نحن نوفر عروض أسعار تفضيلية مخصصة للشركات والمصانع التي تتطلب عقوداً طويلة الأجل أو تشغيل حافلات متعددة. تعتمد التكلفة على المسافة، نوع الباص المختار، وعدد التنقلات اليومية."
                    : "We offer customized preferential price offers for companies and factories requiring long-term contracts or operating multiple buses. The cost depends on travel distance, selected bus type, and the number of daily shifts."}
                </p>
                <div className="border border-gray-200 rounded-xl p-6 text-center bg-slate-50">
                  <h4 className="font-bold text-primary text-lg mb-2">{isAr ? "طلب استشارة وعرض سعر خاص للشركات" : "Request Consultation & Special Corporate Quote"}</h4>
                  <p className="text-xs text-gray-500 mb-4">
                    {isAr 
                      ? "تواصل مع قسم مبيعات العقود والشركات مباشرة لترتيب زيارة أو الحصول على عرض سعر مكتوب ومفصل."
                      : "Reach out to our contract and corporate sales department directly to arrange a visit or receive a written, detailed price quote."}
                  </p>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                    className="inline-block py-3 px-8 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-xl text-sm transition"
                  >
                    {isAr ? "اتصل بنا لمبيعات الشركات: " : "Call corporate sales: "} {PHONE_NUMBER}
                  </a>
                </div>
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

export default EmployeeTransport;
