import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";

export const Privacy: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <>
      <Helmet>
        <title>
          {isAr
            ? "سياسة الخصوصية | حافلة Hafilah"
            : "Privacy Policy | Hafilah Bus Rental"}
        </title>
      </Helmet>

      <section className="bg-primary text-white py-16 px-4 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-start leading-relaxed space-y-6 text-gray-700 text-sm">
          {isAr ? (
            <>
              <h2 className="text-xl font-bold text-slate-900">1. جمع المعلومات</h2>
              <p>نحن نجمع فقط المعلومات الضرورية لإتمام حجزك وتقديم خدمة متميزة، وتشمل الاسم، رقم الهاتف، وتفاصيل الحجز والطلب.</p>

              <h2 className="text-xl font-bold text-slate-900">2. استخدام المعلومات</h2>
              <p>نستخدم معلوماتك الشخصية للتواصل معك وتأكيد تفاصيل الحجز وتسهيل الدفع وتحديث خدماتنا وإرسال العروض الحصرية لك.</p>

              <h2 className="text-xl font-bold text-slate-900">3. حماية البيانات</h2>
              <p>بياناتك محمية بشكل كامل ومشفرة. نحن لا نشارك أو نبيع معلوماتك الشخصية لأي طرف ثالث خارج نطاق تقديم الخدمة.</p>

              <h2 className="text-xl font-bold text-slate-900">4. ملفات تعريف الارتباط</h2>
              <p>نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربة تصفحك وتخصيص محتوى الموقع وحفظ تفضيلات اللغة الخاصة بك.</p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold text-slate-900">1. Information Collection</h2>
              <p>We only collect information necessary to complete your booking, which includes name, phone number, and rental booking details.</p>

              <h2 className="text-xl font-bold text-slate-900">2. How We Use Information</h2>
              <p>We use your personal details to communicate with you, confirm booking schedules, facilitate payments, and update you with exclusive offers.</p>

              <h2 className="text-xl font-bold text-slate-900">3. Data Protection</h2>
              <p>Your personal data is strictly protected. We do not sell, trade, or share your personal details with third parties outside of our booking operations.</p>

              <h2 className="text-xl font-bold text-slate-900">4. Cookies</h2>
              <p>We use cookies to improve your browsing experience, display personalized layout options, and save your preferred language settings.</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Privacy;
