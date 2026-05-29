import { useState } from "react";
import { saveBookingToDb } from "../utils/firebase";
import { trackBookingSubmit } from "../utils/tracking";
import { WHATSAPP_NUMBER } from "../utils/constants";
import { useLanguage } from "../utils/LanguageContext";

export interface BookingData {
  name: string;
  phone: string;
  date: string;
  busType: string;
  notes?: string;
}

export const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const submitBooking = async (data: BookingData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const payload = {
        ...data,
        createdAt: new Date().toISOString()
      };

      // 1. Save to Firebase / LocalStorage
      const dbResult = await saveBookingToDb(payload);

      // 2. Track Event in Analytics
      trackBookingSubmit(data);

      // 3. Set success state
      setSuccess(true);
      setLoading(false);

      // 4. Construct WhatsApp message and redirect
      const message = language === "ar" 
        ? `السلام عليكم ورحمة الله وبركاته، أريد استفسار/تأجير باص:
- *الاسم:* ${data.name}
- *الجوال:* ${data.phone}
- *تاريخ التأجير:* ${data.date}
- *نوع الباص:* ${data.busType}
${data.notes ? `- *تفاصيل إضافية:* ${data.notes}` : ""}

الرجاء تزويدي بعرض السعر المتاح. وشكراً.`
        : `Hello, I would like to inquire about/rent a bus:
- *Name:* ${data.name}
- *Mobile:* ${data.phone}
- *Date:* ${data.date}
- *Bus Type:* ${data.busType}
${data.notes ? `- *Additional Details:* ${data.notes}` : ""}

Please provide me with the available price offer. Thank you.`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

      // Open in a new tab after a brief delay to allow user to see success UI
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1500);

      return { success: true, dbResult };
    } catch (err: any) {
      console.error("Booking submission error:", err);
      setError(err.message || t("form.error"));
      setLoading(false);
      return { success: false, error: err };
    }
  };

  return {
    submitBooking,
    loading,
    success,
    error
  };
};

export default useBooking;
