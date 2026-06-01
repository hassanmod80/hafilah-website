import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";

export const Terms: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <>
      <Helmet>
        <title>
          {isAr
            ? "الشروط والأحكام | حافلة Hafilah"
            : "Terms & Conditions | Hafilah Bus Rental"}
        </title>
      </Helmet>

      <section className="bg-primary text-white py-16 px-4 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {isAr ? "الشروط والأحكام" : "Terms & Conditions"}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-start leading-relaxed space-y-6 text-gray-700 text-sm">
          {isAr ? (
            <>
              <h2 className="text-xl font-bold text-slate-900">1. مقدمة</h2>
              <p>مرحباً بكم في موقع حافلة (Hafilah). باستخدامكم لهذا الموقع وحجز حافلاتنا، فإنكم توافقون على الالتزام بالشروط والأحكام التالية.</p>

              <h2 className="text-xl font-bold text-slate-900">2. سياسة الحجز والإلغاء</h2>
              <p>تخضع جميع الحجوزات لمدى توفر الحافلات في التاريخ المطلوب. للإلغاء أو تعديل الحجز، يرجى التواصل معنا قبل 24 ساعة على الأقل من موعد الرحلة المخطط له لتجنب أي رسوم إلغاء.</p>

              <h2 className="text-xl font-bold text-slate-900">3. التزامات العميل</h2>
              <p>يتحمل العميل المسؤولية عن أي أضرار تلحق بالحافلة نتيجة سوء الاستخدام من قبل الركاب التابعين له. كما يجب الالتزام بالحمولة القصوى المحددة لكل حافلة لسلامة الجميع.</p>

              <h2 className="text-xl font-bold text-slate-900">4. حدود المسؤولية</h2>
              <p>نحن نبذل قصارى جهدنا لضمان دقة مواعيدنا وصيانة حافلاتنا بشكل دوري. ولا نتحمل المسؤولية عن أي تأخير خارج عن إرادتنا مثل أحوال الطقس السيئة أو الازدحام المروري الشديد.</p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
              <p>Welcome to Hafilah Bus Rental. By using our website and booking our buses, you agree to comply with and be bound by the following terms and conditions.</p>

              <h2 className="text-xl font-bold text-slate-900">2. Booking & Cancellation Policy</h2>
              <p>All bookings are subject to availability. To cancel or modify your reservation, please contact us at least 24 hours prior to the scheduled trip to avoid cancellation charges.</p>

              <h2 className="text-xl font-bold text-slate-900">3. Customer Obligations</h2>
              <p>Customers are responsible for any damage caused to the vehicles due to misuse by their passengers. The maximum seating capacity must be strictly respected for everyone's safety.</p>

              <h2 className="text-xl font-bold text-slate-900">4. Limitation of Liability</h2>
              <p>We do our best to ensure punctual schedules and top maintenance. We shall not be liable for delays caused by force majeure, severe weather conditions, or extreme traffic congestion.</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Terms;
