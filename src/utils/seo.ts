import { COMPANY_NAME, PHONE_NUMBER, EMAIL, LOCATION_AR, LOCATION_EN } from "./constants";

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
}

export const SEO_CONFIGS: Record<string, { ar: SEOData; en: SEOData }> = {
  home: {
    ar: {
      title: "تأجير باصات وحافلات مع سائق في الرياض | حافلة Hafilah",
      description: "نوفر خدمة تأجير باصات حديثة ومكيفة مع سائقين محترفين لجميع التنقلات السياحية، نقل الموظفين، المناسبات، وتوصيل المطار في الرياض بأفضل الأسعار.",
      keywords: "باصات للايجار, شركة تاجير باصات الرياض, باصات للايجار اليومي والشهري, باصات للايجار المشاوير الخاصه, شركة تاجير باصات كبيره, تأجير باصات الرياض"
    },
    en: {
      title: "Bus & Coach Rental with Driver in Riyadh | Hafilah Bus Rental",
      description: "We provide a modern, air-conditioned fleet of passenger buses with professional drivers for all sightseeing, corporate commutes, weddings, and airport transfers in Riyadh at competitive rates.",
      keywords: "bus rental riyadh, bus hire with driver, rent coach riyadh, minibus rental ksa, riyadh passenger transport"
    }
  },
  coaster: {
    ar: {
      title: "تأجير باص كوستر بالرياض | حافلة Hafilah",
      description: "استأجر باص تويوتا كوستر حديث 30 راكب مع سائق محترف في الرياض. خيار مثالي للتنقلات العائلية، السياحية، والوفود بأسعار تنافسية وتأجير سريع.",
      keywords: "باصات كوستر للايجار, تأجير كوستر الرياض, إيجار باص كوستر, باص 30 راكب"
    },
    en: {
      title: "Toyota Coaster Bus Rental Riyadh | Hafilah Bus Rental",
      description: "Rent a modern 30-seater Toyota Coaster bus with a professional driver in Riyadh. Ideal for family tours, corporate events, and delegation transfers at competitive rates.",
      keywords: "coaster bus rental, rent toyota coaster riyadh, 30 seater bus hire, coaster rent riyadh"
    }
  },
  bus50: {
    ar: {
      title: "إيجار حافلات 50 راكب في الرياض | حافلة Hafilah",
      description: "تأجير حافلات كبيرة 50 راكب مكيفة ومجهة بدورة مياه وشاشات عرض مع سائقين ذوي خبرة لنقل المجموعات الكبيرة والتنقلات الطويلة والمناسبات بالرياض.",
      keywords: "باصات 49 راكب للايجار, باصات مرسيدس للايحار الشهري, باص مرسيدس للايجار, إيجار حافلة 50 راكب الرياض, شركة تاجير باصات كبيره"
    },
    en: {
      title: "50-Seater Coach & Bus Rental Riyadh | Hafilah Bus Rental",
      description: "Rent large 50-passenger air-conditioned coaches equipped with an internal restroom and screens with experienced drivers for group travel and events in Riyadh.",
      keywords: "50 seater bus rental riyadh, large coach hire, mercedes bus rent, massive group transport"
    }
  },
  employee: {
    ar: {
      title: "نقل الموظفين والشركات في الرياض | حافلة Hafilah",
      description: "عقود نقل يومية وشهرية وسنوية للموظفين والشركات بالرياض. نوفر حلول نقل جماعي آمنة ومريحة وبأسعار مرنة تتناسب مع احتياجات مؤسستكم.",
      keywords: "باصات عمال للايجار اليومي, باصات عماله للايجار, باصات كبيره نقل عمال للايجار, نقل الموظفين الرياض, عقود نقل شركات"
    },
    en: {
      title: "Corporate & Staff Commuting Riyadh | Hafilah Bus Rental",
      description: "Daily, monthly, and yearly flexible employee transport contracts for companies in Riyadh. We offer safe, comfortable corporate passenger transport at flexible rates.",
      keywords: "corporate shuttle service, employee transport riyadh, staff commuting contracts, bus rent for workers"
    }
  },
  events: {
    ar: {
      title: "تأجير باصات للمناسبات والفعاليات بالرياض | حافلة Hafilah",
      description: "باصات فاخرة وحديثة مخصصة للمناسبات، الأعراس، المؤتمرات والمعارض بالرياض. تنظيم متكامل لنقل ضيوفكم براحة وأمان تام.",
      keywords: "باصات للمناسبات الرياض, تأجير باصات فعاليات, نقل ضيوف مؤتمرات الرياض"
    },
    en: {
      title: "Wedding & Event Bus Hire Riyadh | Hafilah Bus Rental",
      description: "Luxury and modern buses customized for weddings, family parties, business conferences, and exhibitions in Riyadh. Pristine coordination for passenger comfort.",
      keywords: "wedding bus rental riyadh, event bus hire, transport wedding guests, party coach rent"
    }
  },
  airport: {
    ar: {
      title: "توصيل واستقبل مطار الملك خالد بالرياض | حافلة Hafilah",
      description: "توصيل واستقبل من وإلى مطار الملك خالد الدولي بالرياض بأحدث الباصات والميني باصات. خدمة دقيقة على مدار الساعة مع سائقين بانتظاركم.",
      keywords: "توصيل مطار الملك خالد, استقبال مطار الرياض, باصات توصيل للمطار الرياض"
    },
    en: {
      title: "King Khalid Airport Transfers Riyadh | Hafilah Bus Rental",
      description: "Reliable airport pickup and drop-off service from and to King Khalid International Airport (RUH) in Riyadh with modern shuttle buses 24/7.",
      keywords: "riyadh airport shuttle, king khalid airport transfer, airport pickup bus, hotel airport shuttle"
    }
  },
  pricing: {
    ar: {
      title: "أسعار تأجير الباصات والحافلات بالرياض | حافلة Hafilah",
      description: "جدول أسعار تقريبي وتنافسي لتأجير الميني باص، الكوستر، وحافلات 50 راكب والـ VIP بالرياض. احصل على عرض سعر دقيق لطلبك الآن.",
      keywords: "أسعار تأجير الباصات الرياض, سعر إيجار باص كوستر, أسعار الحافلات الرياض"
    },
    en: {
      title: "Bus & Coach Rental Pricing Riyadh | Hafilah Bus Rental",
      description: "Approximate and highly competitive pricing sheet for renting minibuses, Coaster buses, 50-seater coaches, and VIP buses in Riyadh. Request your custom quote.",
      keywords: "bus rental rates riyadh, coaster rent price, coach hire cost, corporate transport rates"
    }
  },
  about: {
    ar: {
      title: "من نحن | حافلة Hafilah لتأجير الحافلات بالرياض",
      description: "تعرف على شركة حافلة، خبرتنا الطويلة في مجال تأجير الحافلات ونقل الركاب بالرياض. نلتزم بالأمان، الجودة، والراحة لعملائنا.",
      keywords: "شركة حافلة الرياض, شركات نقل الركاب بالرياض, تأجير حافلات الرياض"
    },
    en: {
      title: "About Us | Hafilah Bus Rental Riyadh",
      description: "Learn about Hafilah Bus Rental, our long journey in providing high-quality group transport in Riyadh. We are strictly committed to safety, punctuality, and comfort.",
      keywords: "hafilah company, passenger transport company ksa, bus rental history, safe travel riyadh"
    }
  },
  contact: {
    ar: {
      title: "اتصل بنا | حافلة Hafilah لتأجير الحافلات بالرياض",
      description: "تواصل معنا لطلب تأجير باص مع سائق بالرياض. متواجدون على مدار الساعة للرد على استفساراتكم عبر الهاتف، الواتساب، والبريد الإلكتروني.",
      keywords: "رقم شركة حافلة, تأجير باص الرياض, واتساب حافلة الرياض"
    },
    en: {
      title: "Contact Us | Hafilah Bus Rental Riyadh",
      description: "Get in touch with us to book a passenger bus with a driver in Riyadh. We are available 24/7 via phone, WhatsApp, and email.",
      keywords: "hafilah contact number, book bus riyadh, whatsapp bus rental, email hafilah"
    }
  },
  vipBus: {
    ar: {
      title: "تأجير مرسيدس VIP ورجال الأعمال بالرياض | حافلة Hafilah",
      description: "خدمات نقل فاخرة وحصرية لرجال الأعمال والشخصيات الهامة عبر أحدث فانات مرسيدس V-Class وسبرينتر المجهزة بالكامل مع سائق محترف بالرياض.",
      keywords: "تأجير مرسيدس vip الرياض, ايجار مرسيدس سبرينتر, مرسيدس في كلاس مع سائق, باصات رجال الاعمال الرياض"
    },
    en: {
      title: "Mercedes VIP & Executive Rental Riyadh | Hafilah Bus Rental",
      description: "Exclusive luxury transport services for business executives and VIPs via the latest fully-equipped Mercedes V-Class and Sprinter vans with driver in Riyadh.",
      keywords: "mercedes sprinter hire riyadh, rent mercedes v-class riyadh, vip van rental saudi arabia, executive transport"
    }
  }
};

// LocalBusiness Schema
export const getLocalBusinessSchema = (lang: "ar" | "en" = "ar") => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_NAME,
    "image": "https://hafilah.com/images/hero/bus-hero.webp",
    "@id": "https://hafilah.com/#localbusiness",
    "url": "https://hafilah.com",
    "telephone": PHONE_NUMBER,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": lang === "ar" ? "الرياض" : "Riyadh",
      "addressLocality": lang === "ar" ? "الرياض" : "Riyadh",
      "addressRegion": lang === "ar" ? "منطقة الرياض" : "Riyadh Region",
      "postalCode": "11564",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://facebook.com/hafilah.sa",
      "https://twitter.com/hafilah_sa",
      "https://instagram.com/hafilah_sa"
    ]
  };
};

// Service Schema
export const getServiceSchema = (serviceName: string, serviceDesc: string, lang: "ar" | "en" = "ar") => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bus Rental",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_NAME,
      "telephone": PHONE_NUMBER
    },
    "areaServed": {
      "@type": "Place",
      "name": lang === "ar" ? LOCATION_AR : LOCATION_EN
    },
    "name": serviceName,
    "description": serviceDesc
  };
};

// Product Schema for Bus (no pricing)
export const getProductSchema = (busName: string, capacity: number, lang: "ar" | "en" = "ar") => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": busName,
    "description": lang === "ar" 
      ? `تأجير باص ${busName} مع سائق بالرياض حمولة ${capacity} راكب`
      : `Rent a ${busName} passenger bus with a driver in Riyadh, capacity ${capacity} seats`,
    "brand": {
      "@type": "Brand",
      "name": COMPANY_NAME
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "SAR",
      "availability": "https://schema.org/InStock",
      "url": "https://hafilah.com/contact"
    }
  };
};

