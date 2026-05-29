import React from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaBullhorn } from "react-icons/fa";
import { SEO_CONFIGS } from "../utils/seo";
import { useLanguage } from "../utils/LanguageContext";

export const About: React.FC = () => {
  const { language, t } = useLanguage();
  const seo = SEO_CONFIGS.about[language];

  const isAr = language === "ar";

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
            {t("about.heroTitle")}
          </h1>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            {t("about.heroDesc")}
          </p>
        </div>
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-16 translate-y-16"></div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800" 
                alt={isAr ? "حافلات شركة حافلة بالرياض" : "Hafilah buses in Riyadh"} 
                className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
              />
              <div className={`absolute -bottom-6 ${
                isAr ? "-right-6" : "-left-6"
              } bg-secondary text-white p-6 rounded-2xl shadow-lg text-center hidden md:block border border-emerald-400`}>
                <span className="block text-3xl font-extrabold">{t("about.storyExperienceCount")}</span>
                <span className="block text-xs mt-1">{t("about.storyExperienceLabel")}</span>
              </div>
            </div>

            {/* Story Text */}
            <div className="text-start space-y-6">
              <span className="text-secondary font-bold text-sm uppercase tracking-wider block">
                {t("about.storyBadge")}
              </span>
              <h2 className="text-3xl font-bold text-slate-900">
                {t("about.storyTitle")}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("about.storyDesc1")}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("about.storyDesc2")}
              </p>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                <div>
                  <span className="block text-3xl font-extrabold text-primary">{t("about.storyStat1Count")}</span>
                  <span className="block text-xs text-gray-500 mt-1">{t("about.storyStat1Label")}</span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-primary">{t("about.storyStat2Count")}</span>
                  <span className="block text-xs text-gray-500 mt-1">{t("about.storyStat2Label")}</span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-primary">{t("about.storyStat3Count")}</span>
                  <span className="block text-xs text-gray-500 mt-1">{t("about.storyStat3Label")}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-start flex flex-col justify-between">
              <div className="space-y-4">
                <div className={`w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6`}>
                  <FaEye className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t("about.visionTitle")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("about.visionDesc")}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-start flex flex-col justify-between">
              <div className="space-y-4">
                <div className={`w-12 h-12 bg-emerald-100 text-secondary rounded-xl flex items-center justify-center mb-6`}>
                  <FaBullhorn className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t("about.missionTitle")}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("about.missionDesc")}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">{t("about.valuesTitle")}</h2>
            <p className="text-gray-500 text-sm mt-2">{t("about.valuesDesc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
            {/* Value 1 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                <span>{t("about.value1Title")}</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("about.value1Desc")}
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full"></span>
                <span>{t("about.value2Title")}</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("about.value2Desc")}
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-accent rounded-full"></span>
                <span>{t("about.value3Title")}</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("about.value3Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
