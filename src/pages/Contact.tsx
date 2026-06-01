import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";
import { SEO_CONFIGS } from "../utils/seo";
import { PHONE_NUMBER, WHATSAPP_NUMBER, EMAIL, LOCATION_AR, LOCATION_EN, OP_HOURS_AR, OP_HOURS_EN } from "../utils/constants";
import { saveContactMessageToDb } from "../utils/firebase";
import { trackCallClick, trackWhatsAppClick } from "../utils/tracking";
import { useLanguage } from "../utils/LanguageContext";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const seo = SEO_CONFIGS.contact[language];
  const isAr = language === "ar";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const generateCaptcha = () => {
    setCaptchaNum1(Math.floor(Math.random() * 9) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 9) + 1);
    setCaptchaAnswer("");
    setCaptchaError(null);
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    const sum = captchaNum1 + captchaNum2;
    if (parseInt(captchaAnswer) !== sum) {
      setCaptchaError(
        isAr
          ? "إجابة التحقق غير صحيحة، يرجى المحاولة مرة أخرى."
          : "Incorrect CAPTCHA answer, please try again."
      );
      return;
    }
    setCaptchaError(null);
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const payload = {
        ...data,
        createdAt: new Date().toISOString()
      };

      await saveContactMessageToDb(payload);
      
      setSuccess(true);
      setLoading(false);
      reset();
      generateCaptcha();
    } catch (err: any) {
      console.error("Contact message submission error:", err);
      setError(err.message || t("form.error"));
      setLoading(false);
    }
  };

  const handleCall = () => trackCallClick("Contact Page");
  const handleWhatsApp = () => trackWhatsAppClick("Contact Page");

  const location = isAr ? LOCATION_AR : LOCATION_EN;
  const opHours = isAr ? OP_HOURS_AR : OP_HOURS_EN;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hafilah.com/contact" />
        <meta property="og:image" content="https://hafilah.com/images/hero/bus-hero.webp" />
        <link rel="canonical" href="https://hafilah.com/contact" />
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t("nav.contact")}
          </h1>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            {isAr
              ? "يسعدنا تلقي رسائلكم واستفساراتكم بخصوص تأجير الحافلات ونقل الموظفين. تواصل معنا وسنقوم بالرد عليك في أقرب وقت."
              : "We are pleased to receive your messages and inquiries regarding bus rental and staff transport. Get in touch and we will reply as soon as possible."}
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-16 translate-y-16"></div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & Maps (Left/Right depending on RTL) */}
            <div className="lg:col-span-5 space-y-8 text-start order-last lg:order-first">
              
              {/* Contact Info Card */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{t("contact.cardTitle")}</h3>
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-blue-50 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t("home.contactLocation")}</h4>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{location}</p>
                  </div>
                </div>

                {/* Call */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-red-50 text-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{language === "ar" ? "الجوال والاتصال" : "Mobile & Phone"}</h4>
                    <p className="text-gray-500 text-xs mt-1 text-ltr">
                      <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`} onClick={handleCall} className="hover:text-primary transition-colors">
                        {PHONE_NUMBER}
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{language === "ar" ? "واتساب مباشر" : "Direct WhatsApp"}</h4>
                    <p className="text-gray-500 text-xs mt-1 text-ltr">
                      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} onClick={handleWhatsApp} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        +{WHATSAPP_NUMBER}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-blue-50 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t("home.contactEmail")}</h4>
                    <p className="text-gray-500 text-xs mt-1">
                      <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">
                        {EMAIL}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 bg-gray-50 text-gray-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{language === "ar" ? "ساعات العمل الرسمية" : "Official Working Hours"}</h4>
                    <p className="text-gray-500 text-xs mt-1">{opHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-start">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t("contact.formTitle")}</h3>
                <p className="text-gray-500 text-xs mb-8">{t("contact.formDesc")}</p>

                {success && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm text-center animate-pulse">
                    {t("contact.formSuccess")}
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-sm text-center">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">{t("contact.formName")}</label>
                    <input 
                      type="text"
                      placeholder={isAr ? "مثال: محمد السديري" : "e.g., John Doe"}
                      {...register("name", { required: t("validation.nameRequired") })}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-xl outline-none transition duration-200 text-gray-800 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent text-sm ${
                        isAr ? "text-right" : "text-left"
                      } ${
                        errors.name ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">{t("contact.formEmail")}</label>
                    <input 
                      type="email"
                      placeholder={t("contact.formEmailPlaceholder")}
                      {...register("email", { 
                        required: isAr ? "حقل البريد الإلكتروني مطلوب" : "Email field is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: isAr ? "الرجاء إدخال عنوان بريد إلكتروني صحيح" : "Please enter a valid email address"
                        }
                      })}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-xl outline-none transition duration-200 text-gray-800 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent text-sm text-left border-gray-200 ${
                        errors.email ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">{t("contact.formSubject")}</label>
                    <input 
                      type="text"
                      placeholder={t("contact.formSubjectPlaceholder")}
                      {...register("subject", { required: isAr ? "حقل موضوع الرسالة مطلوب" : "Subject field is required" })}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-xl outline-none transition duration-200 text-gray-800 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent text-sm ${
                        isAr ? "text-right" : "text-left"
                      } ${
                        errors.subject ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">{t("contact.formMessage")}</label>
                    <textarea 
                      placeholder={t("contact.formMessagePlaceholder")}
                      rows={5}
                      {...register("message", { required: isAr ? "حقل الرسالة مطلوب" : "Message field is required" })}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-xl outline-none transition duration-200 text-gray-800 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent text-sm resize-none ${
                        isAr ? "text-right" : "text-left"
                      } ${
                        errors.message ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  {/* Security Captcha (Spam Prevention) */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
                    <label className="block text-gray-700 text-xs sm:text-sm font-semibold mb-2">
                      {isAr ? "التحقق الأمني (منع السبام)" : "Security Captcha (Spam Prevention)"}
                    </label>
                    <div className="flex items-center gap-3">
                      <span className="bg-primary text-white font-bold py-2.5 px-4 rounded-xl text-sm select-none">
                        {captchaNum1} + {captchaNum2} =
                      </span>
                      <input
                        type="number"
                        value={captchaAnswer}
                        onChange={(e) => setCaptchaAnswer(e.target.value)}
                        placeholder={isAr ? "الإجابة؟" : "Answer?"}
                        className={`flex-grow py-2.5 px-3 bg-white border border-gray-200 rounded-xl outline-none text-sm text-center ${
                          isAr ? "text-right" : "text-left"
                        }`}
                        required
                      />
                    </div>
                    {captchaError && (
                      <p className="text-red-500 text-xs mt-1.5">{captchaError}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-200 cursor-pointer ${
                      loading ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    <FaPaperPlane className="text-sm" />
                    <span>{loading ? t("form.submitting") : t("contact.formSubmit")}</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
