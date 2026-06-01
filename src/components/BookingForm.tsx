import React from "react";
import { useForm } from "react-hook-form";
import useBooking from "../hooks/useBooking";
import type { BookingData } from "../hooks/useBooking";
import { BUSES } from "../utils/constants";
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaBus, FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "../utils/LanguageContext";

export const BookingForm: React.FC = () => {
  const { language, t } = useLanguage();
  const { submitBooking, loading, success, error } = useBooking();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingData>();

  const isAr = language === "ar";

  const [captchaNum1, setCaptchaNum1] = React.useState(0);
  const [captchaNum2, setCaptchaNum2] = React.useState(0);
  const [captchaAnswer, setCaptchaAnswer] = React.useState("");
  const [captchaError, setCaptchaError] = React.useState<string | null>(null);

  const generateCaptcha = () => {
    setCaptchaNum1(Math.floor(Math.random() * 9) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 9) + 1);
    setCaptchaAnswer("");
    setCaptchaError(null);
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const onSubmit = async (data: BookingData) => {
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
    const result = await submitBooking(data);
    if (result.success) {
      reset();
      generateCaptcha();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-primary text-center mb-2">
        {t("form.title")}
      </h3>
      <p className="text-gray-500 text-sm text-center mb-8">
        {t("form.desc")}
      </p>

      {success && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm text-center animate-pulse">
          {t("form.success")}
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            {t("form.name")}
          </label>
          <div className="relative">
            <div className={`absolute inset-y-0 ${isAr ? "right-0 pr-3" : "left-0 pl-3"} flex items-center pointer-events-none text-gray-400`}>
              <FaUser />
            </div>
            <input
              type="text"
              placeholder={t("form.namePlaceholder")}
              {...register("name", { required: t("validation.nameRequired") })}
              className={`w-full ${isAr ? "pr-10 pl-4 text-right" : "pl-10 pr-4 text-left"} py-3 bg-gray-50 border rounded-xl outline-none transition duration-200 text-gray-800 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent text-sm ${
                errors.name ? "border-red-400 focus:ring-red-400" : "border-gray-200"
              }`}
            />
          </div>
          {errors.name && (
            <p className={`text-red-500 text-xs mt-1 ${isAr ? "text-right" : "text-left"}`}>{errors.name.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            {t("form.phone")}
          </label>
          <div className="relative">
            <div className={`absolute inset-y-0 ${isAr ? "right-0 pr-3" : "left-0 pl-3"} flex items-center pointer-events-none text-gray-400`}>
              <FaPhoneAlt />
            </div>
            <input
              type="tel"
              placeholder={t("form.phonePlaceholder")}
              {...register("phone", {
                required: t("validation.phoneRequired"),
                pattern: {
                  value: /^(05|5|\+9665|9665)[0-9]{8}$/,
                  message: t("validation.phoneInvalid")
                }
              })}
              className={`w-full ${isAr ? "pr-10 pl-4 text-right" : "pl-10 pr-4 text-left"} py-3 bg-gray-50 border rounded-xl outline-none transition duration-200 text-gray-800 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent text-sm ${
                errors.phone ? "border-red-400 focus:ring-red-400" : "border-gray-200"
              }`}
            />
          </div>
          {errors.phone && (
            <p className={`text-red-500 text-xs mt-1 ${isAr ? "text-right" : "text-left"}`}>{errors.phone.message}</p>
          )}
        </div>

        {/* Date Picker */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            {t("form.date")}
          </label>
          <div className="relative">
            <div className={`absolute inset-y-0 ${isAr ? "right-0 pr-3" : "left-0 pl-3"} flex items-center pointer-events-none text-gray-400`}>
              <FaCalendarAlt />
            </div>
            <input
              type="date"
              {...register("date", { required: t("validation.dateRequired") })}
              className={`w-full ${isAr ? "pr-10 pl-4 text-right" : "pl-10 pr-4 text-left"} py-3 bg-gray-50 border rounded-xl outline-none transition duration-200 text-gray-800 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent text-sm ${
                errors.date ? "border-red-400 focus:ring-red-400" : "border-gray-200"
              }`}
            />
          </div>
          {errors.date && (
            <p className={`text-red-500 text-xs mt-1 ${isAr ? "text-right" : "text-left"}`}>{errors.date.message}</p>
          )}
        </div>

        {/* Bus Type Select */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            {t("form.busType")}
          </label>
          <div className="relative">
            <div className={`absolute inset-y-0 ${isAr ? "right-0 pr-3" : "left-0 pl-3"} flex items-center pointer-events-none text-gray-400`}>
              <FaBus />
            </div>
            <select
              {...register("busType", { required: t("validation.busRequired") })}
              className={`w-full ${isAr ? "pr-10 pl-4 text-right" : "pl-10 pr-4 text-left"} py-3 bg-gray-50 border rounded-xl outline-none transition duration-200 text-gray-800 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent text-sm appearance-none cursor-pointer ${
                errors.busType ? "border-red-400 focus:ring-red-400" : "border-gray-200"
              }`}
            >
              <option value="">{t("form.busPlaceholder")}</option>
              {BUSES.map((bus) => (
                <option key={bus.id} value={isAr ? bus.nameAr : bus.nameEn}>
                  {isAr ? bus.nameAr : bus.nameEn} ({isAr ? `${bus.capacity} راكب` : `${bus.capacity} Seats`})
                </option>
              ))}
            </select>
            {/* Custom arrow for select */}
            <div className={`absolute inset-y-0 ${isAr ? "left-0 pl-3" : "right-0 pr-3"} flex items-center pointer-events-none text-gray-400 text-xs`}>
              ▼
            </div>
          </div>
          {errors.busType && (
            <p className={`text-red-500 text-xs mt-1 ${isAr ? "text-right" : "text-left"}`}>{errors.busType.message}</p>
          )}
        </div>

        {/* Notes (Optional) */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            {t("form.notes")}
          </label>
          <textarea
            placeholder={t("form.notesPlaceholder")}
            rows={3}
            {...register("notes")}
            className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none transition duration-200 text-gray-800 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent text-sm resize-none ${
              isAr ? "text-right" : "text-left"
            }`}
          />
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
            <p className={`text-red-500 text-xs mt-1.5 ${isAr ? "text-right" : "text-left"}`}>{captchaError}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-xl transition duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 hover:shadow-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary cursor-pointer ${
            loading ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          <FaPaperPlane className="text-sm" />
          <span>{loading ? t("form.submitting") : t("form.submit")}</span>
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
