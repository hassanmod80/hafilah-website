export const COMPANY_NAME = "حافلة Hafilah";
export const PHONE_NUMBER = "053 676 6958";
export const WHATSAPP_NUMBER = "966536766958";
export const EMAIL = "info@hafilah.com";

export const LOCATION_AR = "الرياض، المملكة العربية السعودية";
export const LOCATION_EN = "Riyadh, Kingdom of Saudi Arabia";

export const OP_HOURS_AR = "يومياً: 24 ساعة";
export const OP_HOURS_EN = "Daily: 24 Hours";

export interface Bus {
  id: number;
  nameAr: string;
  nameEn: string;
  capacity: number;
  image: string;
  featuresAr: string[];
  featuresEn: string[];
  link: string;
}

export const BUSES: Bus[] = [
  {
    id: 1,
    nameAr: "ميني باص",
    nameEn: "Minibus",
    capacity: 14,
    image: "/images/buses/minibus.webp",
    featuresAr: ["تكييف هواء ممتاز", "مقاعد مريحة ومتباعدة", "سائق محترف ومرخص", "أنظمة أمان حديثة", "بلوتوث وراديو"],
    featuresEn: ["Excellent air conditioning", "Spacious and comfortable seats", "Professional and licensed driver", "Modern safety systems", "Bluetooth & Radio"],
    link: "/services/minibus"
  },
  {
    id: 2,
    nameAr: "باص كوستر",
    nameEn: "Coaster Bus",
    capacity: 30,
    image: "/images/buses/coaster-new.webp",
    featuresAr: ["مكيف هواء قوي جداً", "ثلاجة مشروبات صغيرة", "مقاعد مخمل مريحة", "مدخل USB لشحن الهواتف", "ميكروفون للاسترشاد السياحي"],
    featuresEn: ["Very strong air conditioning", "Small drinks refrigerator", "Comfortable velvet seats", "USB charging ports", "Microphone for tourist guidance"],
    link: "/services/coaster"
  },
  {
    id: 3,
    nameAr: "حافلة 49 - 50 راكب (مرسيدس)",
    nameEn: "50-Seater Coach (Mercedes)",
    capacity: 50,
    image: "/images/buses/bus-50.webp",
    featuresAr: ["دورة مياه داخلية", "شاشات عرض DVD", "مساحة واسعة ومريحة للأرجل", "شاحن منفصل لكل مقعد", "صندوق أمتعة كبير وسفلي"],
    featuresEn: ["Internal clean restroom", "DVD display screens", "Spacious legroom", "Separate charger for each seat", "Huge lower luggage compartment"],
    link: "/services/bus-50-seater"
  },
  {
    id: 4,
    nameAr: "باصات VIP (كنب وطاولات)",
    nameEn: "VIP Bus (Sofa & Tables)",
    capacity: 30,
    image: "/images/buses/vip.webp",
    featuresAr: ["مقاعد كنب مريحة وواسعة", "باص طاولات للاجتماعات", "إنترنت واي فاي مجاني وسريع", "نظام صوتي وسينمائي متطور", "خدمة ضيافة ومشروبات مجانية"],
    featuresEn: ["Luxurious, spacious sofas", "Tables for meetings", "Free and fast Wi-Fi", "Advanced cinema & sound system", "Free hospitality & drinks"],
    link: "/services/vip-bus"
  },
  {
    id: 5,
    nameAr: "مرسيدس VIP (سبرينتر وفي كلاس)",
    nameEn: "Mercedes VIP (Sprinter & V-Class)",
    capacity: 19,
    image: "/images/buses/mercedes-sprinter.webp",
    featuresAr: ["مرسيدس V-Class فاخرة (7 مقاعد)", "مرسيدس Sprinter فخم (15 - 19 مقعد)", "مقاعد جلدية متحركة ومريحة للغاية", "ثلاجة ضيافة وشاشات عرض متطورة", "سائق كبار شخصيات محترف وملتزم"],
    featuresEn: ["Luxury Mercedes V-Class (7 seats)", "VIP Mercedes Sprinter (15 - 19 seats)", "Highly comfortable adjustable leather seats", "Hospitality fridge and advanced screens", "Professional dedicated VIP driver"],
    link: "/services/vip-bus"
  }
];

export interface Service {
  id: number;
  nameAr: string;
  nameEn: string;
  icon: string;
  descAr: string;
  descEn: string;
  link: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    nameAr: "تأجير باصات سياحية",
    nameEn: "Tourist Bus Rental",
    icon: "FaBus",
    descAr: "تنقلات سياحية وترفيهية واستكشافية داخل وخارج مدينة الرياض بأحدث الباصات المكيفة والمريحة.",
    descEn: "Sightseeing, entertainment, and exploratory trips inside and outside Riyadh with the latest comfortable, air-conditioned buses.",
    link: "/services/tourist-rental",
    image: "/images/services/tourist.webp"
  },
  {
    id: 2,
    nameAr: "نقل الموظفين والشركات",
    nameEn: "Employee & Corporate Transport",
    icon: "FaBuilding",
    descAr: "عقود نقل يومية وشهرية وسنوية مرنة للموظفين والعمال والشركات في الرياض بأسعار منافسة وبجودة عالية.",
    descEn: "Flexible daily, monthly, and yearly transport contracts for employees, workers, and companies in Riyadh at competitive rates and high quality.",
    link: "/services/employee-transport",
    image: "/images/services/employees-new.webp"
  },
  {
    id: 3,
    nameAr: "باصات للمناسبات والفعاليات",
    nameEn: "Event & Wedding Buses",
    icon: "FaGlassCheers",
    descAr: "تأجير باصات مجهزة لنقل الضيوف في الأعراس، المؤتمرات، الحفلات، والفعاليات الرياضية والترفيهية.",
    descEn: "Renting fully equipped buses to transport guests for weddings, conferences, parties, sports, and entertainment events.",
    link: "/services/event-buses",
    image: "/images/services/events.webp"
  },
  {
    id: 4,
    nameAr: "توصيل مطار الملك خالد",
    nameEn: "King Khalid Airport Transfers",
    icon: "FaPlane",
    descAr: "خدمات توصيل واستقبل من وإلى مطار الملك خالد الدولي بالرياض على مدار الساعة مع ترتيب الحقائب وسائقين ملتزمين.",
    descEn: "Airport pickup and drop-off from and to King Khalid International Airport in Riyadh 24/7 with bag arrangements and punctual drivers.",
    link: "/services/airport-transfer",
    image: "/images/services/airport.webp"
  },
  {
    id: 5,
    nameAr: "باصات في اي بي كبيره (vib)",
    nameEn: "VIP Bus Rentals (VIB)",
    icon: "FaCrown",
    descAr: "نقل فاخر مخصص لكبار الشخصيات عبر باصات كنب وطاولات للايجار مع توفير الخصوصية والراحة التامة والرفاهية المطلقة.",
    descEn: "Luxurious transfer dedicated to VIPs via sofa and table buses for rent, ensuring complete privacy, supreme comfort, and absolute luxury.",
    link: "/services/vip-bus",
    image: "/images/services/vip-service.webp"
  },
  {
    id: 6,
    nameAr: "تأجير مرسيدس VIP ورجال الأعمال",
    nameEn: "VIP Mercedes & Executive Rental",
    icon: "FaStar",
    descAr: "خدمات نقل فاخرة وحصرية لرجال الأعمال والشخصيات الهامة عبر أحدث فانات مرسيدس V-Class وسبرينتر المجهزة بالكامل.",
    descEn: "Exclusive luxury transport services for business executives and VIPs via the latest fully-equipped Mercedes V-Class and Sprinter vans.",
    link: "/services/mercedes-vip",
    image: "/images/buses/mercedes-vclass.webp"
  },
  {
    id: 7,
    nameAr: "نقل العمال والمقاولات",
    nameEn: "Worker & Labor Transport",
    icon: "FaBus",
    descAr: "حلول نقل موثوقة واقتصادية للعمال والفنيين للمشاريع الإنشائية والمصانع في الرياض بعقود مرنة.",
    descEn: "Reliable and cost-effective worker and labor transport solutions for construction sites and factories in Riyadh with flexible contracts.",
    link: "/services/worker-transport",
    image: "/images/services/employees.webp"
  }
];

export interface Testimonial {
  id: number;
  nameAr: string;
  nameEn: string;
  rating: number;
  textAr: string;
  textEn: string;
  image: string;
  roleAr?: string;
  roleEn?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    nameAr: "أبو فهد العتيبي",
    nameEn: "Abu Fahad Al-Otaibi",
    rating: 5,
    textAr: "استأجرنا باص كوستر لتنقل عائلي إلى الدرعية، الخدمة كانت فوق الممتازة والباص نظيف جداً ومكيفه بارد، والسائق كان قمة في الأخلاق والتعاون.",
    textEn: "We rented a Coaster bus for a family trip to Diriyah. The service was excellent, the bus was very clean and cold, and the driver was extremely polite and cooperative.",
    image: "/images/testimonials/avatar1.webp",
    roleAr: "عميل شخصي",
    roleEn: "Personal Client"
  },
  {
    id: 2,
    nameAr: "م. أحمد الشمري",
    nameEn: "Eng. Ahmed Al-Shammari",
    rating: 5,
    textAr: "تعاقدنا مع شركة حافلة لنقل مهندسي وموظفي المشروع لدينا في الرياض. التزام تام بالمواعيد، وباصات حديثة وخدمة عملاء متجاوبة على مدار الساعة.",
    textEn: "We contracted Hafilah to transport our project engineers and staff in Riyadh. Total commitment to schedules, modern buses, and extremely responsive 24/7 customer service.",
    image: "/images/testimonials/avatar2.webp",
    roleAr: "مدير مشاريع بشركة مقاولات",
    roleEn: "Project Manager at Construction Co."
  },
  {
    id: 3,
    nameAr: "سارة القحطاني",
    nameEn: "Sarah Al-Qahtani",
    rating: 5,
    textAr: "قمنا بطلب حافلة 50 راكب لنقل ضيوف حفل الزفاف من الفندق إلى القاعة. التنسيق كان رائعاً، والضيوف أشادوا براحة الحافلة ونظافتها.",
    textEn: "We requested a 50-seater coach to transfer wedding guests from hotel to venue. The coordination was brilliant, and guests highly praised the comfort and cleanliness of the bus.",
    image: "/images/testimonials/avatar3.webp",
    roleAr: "منظمة حفلات",
    roleEn: "Event Organizer"
  },
  {
    id: 4,
    nameAr: "خالد الحربي",
    nameEn: "Khaled Al-Harbi",
    rating: 5,
    textAr: "خدمة التوصيل من مطار الملك خالد كانت دقيقة وسلسة. السائق كان بانتظارنا عند البوابة وساعدنا بالحقائب. الباص VIP كان مريحاً للغاية بعد عناء السفر.",
    textEn: "The pickup from King Khalid Airport was precise and smooth. The driver was waiting at the gate and helped with the bags. The VIP bus was incredibly comfortable after travel exhaustion.",
    image: "/images/testimonials/avatar4.webp",
    roleAr: "رجل أعمال",
    roleEn: "Businessman"
  },
  {
    id: 5,
    nameAr: "أ. عبد الرحمن الدوسري",
    nameEn: "Mr. Abdulrahman Al-Dawsari",
    rating: 5,
    textAr: "نظمت المدرسة نشاطاً للطلاب وطلبنا باصين من حافلة. معايير الأمن والسلامة متوفرة بالباصات والسائقين يقودون بهدوء وحرص. نوصي بالتعامل معهم بشدة.",
    textEn: "Our school organized an outdoor student activity and rented two buses from Hafilah. Safety standards are fully met, and drivers drive very carefully. Highly recommended.",
    image: "/images/testimonials/avatar5.webp",
    roleAr: "رائد نشاط مدرسي",
    roleEn: "School Activity Coordinator"
  }
];
