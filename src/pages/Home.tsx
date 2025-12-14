import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Cloud, Network, Shield, Settings, Sparkles, ArrowRight, 
  Building2, Landmark, Radio, Fuel, Heart, ShoppingBag, GraduationCap, Building,
  Server, Eye, Database, CloudCog, CheckCircle2, HeadphonesIcon, Globe, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StatsCounter from "@/components/StatsCounter";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

// Partner logos
import microsoftLogo from "@/assets/partners/microsoft.png";
import awsLogo from "@/assets/partners/aws.png";
import ciscoLogo from "@/assets/partners/cisco.png";
import vmwareLogo from "@/assets/partners/vmware.png";
import fortinetLogo from "@/assets/partners/fortinet.png";
import dellEmcLogo from "@/assets/partners/dell-emc.png";
import paloaltoLogo from "@/assets/partners/paloalto.png";
import hpeLogo from "@/assets/partners/hpe.png";
import sophosLogo from "@/assets/partners/sophos.png";
import secureworksLogo from "@/assets/partners/secureworks.png";

const Home = () => {
  const { language } = useLanguage();
  
  const services = [
    {
      icon: Cloud,
      title: "Cloud & Datacenter",
      description: "Sovereign, scalable, and sustainable cloud infrastructure for the Saudi digital future.",
      color: "from-nextstep-green to-nextstep-green-light",
      link: "/services/cloud",
    },
    {
      icon: Network,
      title: "Integration & Infrastructure",
      description: "Connecting intelligence across systems with seamless architecture and migration.",
      color: "from-nextstep-green-light to-nextstep-gold",
      link: "/services/integration",
    },
    {
      icon: Shield,
      title: "Cybersecurity & SOC",
      description: "National-level cyber defense compliant with NCA ECC, ISO 27001, and CITC.",
      color: "from-nextstep-green to-nextstep-gold-light",
      link: "/services/cybersecurity",
    },
    {
      icon: Settings,
      title: "Managed Services",
      description: "24/7 reliability with multi-channel support, monitoring, and maintenance.",
      color: "from-nextstep-gold to-nextstep-green-light",
      link: "/services/managed",
    },
    {
      icon: Sparkles,
      title: "Innovation & AI Labs",
      description: "Pioneering cyber and AI laboratories for enterprises and government entities.",
      color: "from-nextstep-green via-nextstep-gold to-nextstep-green-light",
      link: "/services/collaboration",
    },
  ];

  const featuredServices = [
    {
      icon: Server,
      title: "Private Cloud Infrastructure",
      description: "Saudi-sovereign private cloud with full data residency, custom configurations, and enterprise-grade SLAs. Built for government and regulated industries.",
      link: "/services/cloud/private-cloud",
      gradient: "from-nextstep-green to-nextstep-green-light",
    },
    {
      icon: Eye,
      title: "Managed SOC 24/7",
      description: "Round-the-clock security operations center with NCA ECC-certified analysts, threat intelligence, and incident response. Protect your digital assets.",
      link: "/services/cybersecurity/managed-soc",
      gradient: "from-nextstep-green-light to-nextstep-gold",
    },
    {
      icon: Database,
      title: "NOC Services",
      description: "Network Operations Center with proactive monitoring, 15-minute response times, and multi-channel support. Keep your infrastructure running smoothly.",
      link: "/services/managed/noc",
      gradient: "from-nextstep-gold to-nextstep-green",
    },
    {
      icon: CloudCog,
      title: "Cloud Migration",
      description: "Strategic migration services with comprehensive assessment, zero-downtime transitions, and post-migration optimization. Move to cloud confidently.",
      link: "/services/cloud/cloud-migration",
      gradient: "from-nextstep-green to-nextstep-gold-light",
    },
  ];

  const industries = [
    {
      icon: Building2,
      title: "Government",
      description: "Digital transformation for public sector entities",
      link: "/industries/government",
      gradient: "from-nextstep-green to-nextstep-green-light",
    },
    {
      icon: Landmark,
      title: "Banking & Financial",
      description: "Secure and compliant financial services solutions",
      link: "/industries/banking",
      gradient: "from-nextstep-gold to-nextstep-gold-light",
    },
    {
      icon: Radio,
      title: "Telecommunications",
      description: "Infrastructure for telecom service providers",
      link: "/industries/telecom",
      gradient: "from-nextstep-green-light to-nextstep-gold",
    },
    {
      icon: Fuel,
      title: "Oil & Gas",
      description: "Mission-critical systems for energy sector",
      link: "/industries/oil-gas",
      gradient: "from-nextstep-gold-light to-nextstep-green",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant healthcare IT solutions",
      link: "/industries/healthcare",
      gradient: "from-nextstep-green to-nextstep-gold",
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Omnichannel retail technology platforms",
      link: "/industries/retail",
      gradient: "from-nextstep-green-light to-nextstep-gold-light",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Digital learning infrastructure",
      link: "/industries/education",
      gradient: "from-nextstep-gold to-nextstep-green-light",
    },
    {
      icon: Building,
      title: "Smart Cities",
      description: "IoT and smart infrastructure solutions",
      link: "/industries/smart-cities",
      gradient: "from-nextstep-green to-nextstep-green-light",
    },
  ];

  const valueProps = [
    {
      icon: Globe,
      title: "Saudi Sovereign Cloud",
      description: "100% data residency within Saudi Arabia with localized infrastructure compliant with national data sovereignty requirements.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Local Support",
      description: "Round-the-clock technical support in Arabic and English from Saudi-based certified engineers and specialists.",
    },
    {
      icon: Award,
      title: "National Compliance",
      description: "Full compliance with NCA ECC, ISO 27001, CITC, SAMA, and other Saudi regulatory frameworks.",
    },
    {
      icon: CheckCircle2,
      title: "Vision 2030 Aligned",
      description: "Solutions designed to support Saudi Vision 2030 objectives and digital transformation initiatives.",
    },
  ];

  const complianceBadges = [
    { name: "NCA ECC", level: "Essential" },
    { name: "ISO 27001", level: "Certified" },
    { name: "CITC", level: "Compliant" },
    { name: "Vision 2030", level: "Aligned" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nextstep-green/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nextstep-gold/15 rounded-full blur-3xl animate-pulse-glow delay-1000" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
            >
              <span className="text-sm text-primary font-medium">
                Your trusted cybersecurity partner
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Empowering Saudi</span>
              <br />
              <span className="text-foreground">Enterprises to Build,</span>
              <br />
              <span className="text-foreground">Secure & Scale</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From Tamkeen to Riyada — Transform your digital journey with cloud, cybersecurity,
              and managed services compliant with Saudi national frameworks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to={getLocalizedPath("/journey", language)}>
                <Button size="lg" className="glow-green bg-gradient-to-r from-nextstep-green to-nextstep-green-light hover:shadow-xl transition-shadow">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={getLocalizedPath("/journey", language)}>
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all">
                  Explore Digital Maturity
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              <StatsCounter value={2000} label="Projects Delivered" suffix="+" />
              <StatsCounter value={900} label="Trusted Clients" suffix="+" />
              <StatsCounter value={15} label="Countries Served" />
              <StatsCounter value={100} label="Certified Experts" suffix="+" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-12 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nextstep-green/5 to-nextstep-gold/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
              Trusted & Certified for Saudi National Standards
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {complianceBadges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/30 bg-background/50 backdrop-blur-sm">
                    {badge.name}
                  </Badge>
                  <span className="text-xs text-muted-foreground mt-1">{badge.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive <span className="text-gradient">Digital Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end services designed for Saudi Vision 2030 and national compliance frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={getLocalizedPath(service.link, language)}>
                    <Card className="h-full border-border hover:border-primary/50 transition-all card-elevated group cursor-pointer">
                      <CardContent className="p-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all`}>
                          <Icon className="w-7 h-7 text-white drop-shadow-sm" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform">
                          Learn more
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* View All Services Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to={getLocalizedPath("/services", language)}>
              <Button size="lg" variant="outline" className="group">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Subservices Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nextstep-green/5 via-transparent to-nextstep-gold/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most requested services for Saudi enterprises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={getLocalizedPath(service.link, language)}>
                    <Card className="h-full border-border hover:border-primary/50 transition-all card-elevated group cursor-pointer">
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all`}>
                          <Icon className="w-8 h-8 text-white drop-shadow-sm" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                          Explore Service
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for every sector of the Saudi economy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={getLocalizedPath(industry.link, language)}>
                    <Card className="h-full border-border hover:border-primary/50 transition-all group cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:shadow-2xl group-hover:icon-glow-green transition-all`}>
                          <Icon className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={2.5} />
                        </div>
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {industry.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nextstep-green/5 via-transparent to-nextstep-gold/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">NextStep</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for Saudi Arabia, trusted by regional leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-nextstep-green to-nextstep-gold flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 glow-green">
                    <Icon className="w-10 h-10 text-white drop-shadow-lg" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted <span className="text-gradient">Technology Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We collaborate with global leaders to deliver world-class solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                name: "Microsoft",
                logo: microsoftLogo,
                description: "Cloud platforms, Microsoft 365, Azure infrastructure, and enterprise solutions",
                category: "Cloud & Productivity",
              },
              {
                name: "AWS",
                logo: awsLogo,
                description: "Amazon Web Services for scalable cloud infrastructure and managed services",
                category: "Cloud Infrastructure",
              },
              {
                name: "Cisco",
                logo: ciscoLogo,
                description: "Networking equipment, security appliances, and collaboration platforms",
                category: "Network & Security",
              },
              {
                name: "VMware",
                logo: vmwareLogo,
                description: "Virtualization, hybrid cloud, and software-defined datacenter solutions",
                category: "Virtualization",
              },
              {
                name: "Fortinet",
                logo: fortinetLogo,
                description: "Next-generation firewalls, network security, and threat intelligence",
                category: "Cybersecurity",
              },
              {
                name: "Dell EMC",
                logo: dellEmcLogo,
                description: "Enterprise storage, servers, and datacenter infrastructure solutions",
                category: "Infrastructure",
              },
              {
                name: "Palo Alto",
                logo: paloaltoLogo,
                description: "Advanced cybersecurity platforms and cloud-native security solutions",
                category: "Cybersecurity",
              },
              {
                name: "HPE",
                logo: hpeLogo,
                description: "Hewlett Packard Enterprise servers, storage, and edge computing solutions",
                category: "Infrastructure",
              },
              {
                name: "Sophos",
                logo: sophosLogo,
                description: "Advanced endpoint protection, network security, and cloud cybersecurity solutions",
                category: "Cybersecurity",
              },
              {
                name: "SecureWorks",
                logo: secureworksLogo,
                description: "Managed detection and response (MDR), threat intelligence, and security operations",
                category: "Cybersecurity",
              },
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <Card className="h-full border-border hover:border-primary/50 transition-all cursor-pointer overflow-hidden bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    {/* Partner Logo */}
                    <div className="w-full h-28 flex items-center justify-center mb-6 bg-background/80 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 p-6 border border-border/50">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Category Badge */}
                    <Badge variant="outline" className="mb-4 text-xs font-medium border-primary/30 bg-primary/5">
                      {partner.category}
                    </Badge>
                    
                    {/* Description - Visible on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                      <p className="text-xs text-muted-foreground leading-relaxed mt-3">
                        {partner.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground">
              And many more strategic partnerships to deliver comprehensive solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey CTA */}
      <section className="py-20 relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 bg-gradient-to-r from-nextstep-blue/10 via-transparent to-bright-teal/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where are you on your <span className="text-gradient">Digital Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Assess your organization's digital maturity across four progressive stages
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              <span className="font-semibold text-foreground">Tamkeen</span> (Foundation) → 
              <span className="font-semibold text-foreground"> Himaya</span> (Protection) → 
              <span className="font-semibold text-foreground"> Mana'a</span> (Defense) → 
              <span className="font-semibold text-foreground"> Thiqah</span> (Trust) → 
              <span className="font-semibold text-foreground"> Riyada</span> (Leadership)
            </p>
            <Link to={getLocalizedPath("/journey", language)}>
              <Button size="lg" className="glow-blue bg-gradient-to-r from-nextstep-blue to-nextstep-blue-light">
                Explore Interactive Journey Map
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nextstep-blue via-bright-teal to-nextstep-blue-light opacity-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your <span className="text-gradient">Digital Future?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a consultation with our certified experts to discuss your digital transformation roadmap
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={getLocalizedPath("/contact", language)}>
                <Button size="lg" className="glow-blue bg-gradient-to-r from-nextstep-blue to-nextstep-blue-light group">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to={getLocalizedPath("/services", language)}>
                <Button size="lg" variant="outline">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
