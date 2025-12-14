import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath, ROUTES } from "@/constants/routes";
import { serviceDomains, industries } from "@/data/navigation";
import PageTransition from "@/components/PageTransition";
import { Home, Map, Briefcase, Building2, FileText, Phone, User } from "lucide-react";

export default function Sitemap() {
  const { language } = useLanguage();

  const journeyStages = [
    { name: language === "en" ? "Tamkeen" : "تمكين", path: ROUTES.JOURNEY_STAGES.TAMKEEN },
    { name: language === "en" ? "Himaya" : "حماية", path: ROUTES.JOURNEY_STAGES.HIMAYA },
    { name: language === "en" ? "Mana'a" : "منع", path: ROUTES.JOURNEY_STAGES.MANAA },
    { name: language === "en" ? "Thiqah" : "ثقة", path: ROUTES.JOURNEY_STAGES.THIQAH },
    { name: language === "en" ? "Riyada" : "ريادة", path: ROUTES.JOURNEY_STAGES.RIYADA },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 text-primary">
                <Map className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {language === "en" ? "Site Map" : "خريطة الموقع"}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === "en"
                  ? "Navigate through all our services, solutions, and resources"
                  : "تصفح جميع خدماتنا وحلولنا ومواردنا"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Main Pages */}
              <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Home className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">
                    {language === "en" ? "Main Pages" : "الصفحات الرئيسية"}
                  </h2>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to={getLocalizedPath(ROUTES.HOME, language)}
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      {language === "en" ? "Home" : "الرئيسية"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={getLocalizedPath(ROUTES.ABOUT, language)}
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      {language === "en" ? "About Us" : "من نحن"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={getLocalizedPath(ROUTES.CONTACT, language)}
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      {language === "en" ? "Contact" : "تواصل معنا"}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Journey Stages */}
              <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Map className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">
                    {language === "en" ? "Cybersecurity Journey" : "رحلة الأمن السيبراني"}
                  </h2>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to={getLocalizedPath(ROUTES.JOURNEY, language)}
                      className="text-foreground/80 hover:text-primary transition-colors font-medium"
                    >
                      {language === "en" ? "Journey Overview" : "نظرة عامة على الرحلة"}
                    </Link>
                  </li>
                  {journeyStages.map((stage) => (
                    <li key={stage.path} className="ml-4">
                      <Link
                        to={getLocalizedPath(stage.path, language)}
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        {stage.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              {Object.entries(serviceDomains).map(([key, domain]) => (
                <div
                  key={key}
                  className="bg-card/50 backdrop-blur border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">
                      {language === "en" ? domain.title.en : domain.title.ar}
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to={getLocalizedPath(domain.path, language)}
                        className="text-foreground/80 hover:text-primary transition-colors font-medium"
                      >
                        {language === "en" ? "Overview" : "نظرة عامة"}
                      </Link>
                    </li>
                    {domain.subpages.map((subPage) => (
                      <li key={subPage.path} className="ml-4">
                        <Link
                          to={getLocalizedPath(subPage.path, language)}
                          className="text-foreground/80 hover:text-primary transition-colors"
                        >
                          {language === "en" ? subPage.title.en : subPage.title.ar}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Industries */}
              <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-6 hover:shadow-lg transition-shadow md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">
                    {language === "en" ? "Industries We Serve" : "القطاعات التي نخدمها"}
                  </h2>
                </div>
                <ul className="grid md:grid-cols-4 gap-3">
                  {industries.map((industry) => (
                    <li key={industry.path}>
                      <Link
                        to={getLocalizedPath(industry.path, language)}
                        className="text-foreground/80 hover:text-primary transition-colors block"
                      >
                        {language === "en" ? industry.title.en : industry.title.ar}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
