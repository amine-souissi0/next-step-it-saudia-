import { motion } from "framer-motion";
import { Building2, Users, Globe, Award, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StatsCounter from "@/components/StatsCounter";

const About = () => {
  const offices = [
    { city: "Riyadh", country: "Saudi Arabia", type: "Headquarters" },
    { city: "Tunis", country: "Tunisia", type: "Regional Office" },
    { city: "Kigali", country: "Rwanda", type: "East Africa Hub" },
    { city: "Nice", country: "France", type: "European Office" },
    { city: "Nouakchott", country: "Mauritania", type: "West Africa Hub" },
    { city: "Tripoli", country: "Libya", type: "Regional Office" },
  ];

  const partners = [
    "Microsoft", "Cisco", "Fortinet", "Sophos", "VMware",
    "Secureworks", "Palo Alto Networks", "AWS", "Google Cloud"
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "Pioneering cutting-edge solutions for digital transformation",
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our mission, with dedicated support 24/7",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Certified expertise and unwavering quality standards",
    },
    {
      icon: Users,
      title: "Human-Driven",
      description: "Technology excellence powered by passionate professionals",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Regional IT Partner <span className="text-gradient">of Choice</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Since 2012, Next Step has been empowering organizations across the Middle East,
              Africa, and Europe with world-class IT solutions and cybersecurity services.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            <StatsCounter value={13} label="Years of Excellence" suffix="+" />
            <StatsCounter value={2000} label="Projects Delivered" suffix="+" />
            <StatsCounter value={900} label="Satisfied Clients" suffix="+" />
            <StatsCounter value={15} label="Countries Served" />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Our <span className="text-gradient">Story</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded in 2012, Next Step emerged with a clear vision: to become the most trusted
                technology partner for organizations navigating their digital transformation journey.
              </p>
              <p>
                Today, we serve over 900 clients across 15 countries, delivering comprehensive solutions
                in cloud infrastructure, cybersecurity, integration, and managed services. Our team of
                150+ certified experts works around the clock to ensure your digital success.
              </p>
              <p>
                As a Saudi-based company with regional presence, we understand the unique challenges
                and opportunities in our markets. We're committed to supporting Vision 2030 and helping
                build a secure, innovative digital ecosystem.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border hover:border-primary/50 transition-all card-elevated group">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${
                        index % 3 === 0 
                          ? 'from-nextstep-green to-nextstep-green-light'
                          : index % 3 === 1
                            ? 'from-nextstep-green-light to-nextstep-gold'
                            : 'from-nextstep-gold to-nextstep-green'
                      } flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:icon-glow-green transition-all`}>
                        <Icon className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-nextstep-green to-nextstep-gold flex items-center justify-center animate-float shadow-xl icon-glow-green">
              <Globe className="w-10 h-10 text-white drop-shadow-xl" strokeWidth={2} />
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Global Presence</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Offices across three continents to serve you better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border hover:border-primary/50 transition-all group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nextstep-green-light to-nextstep-gold flex items-center justify-center mb-3 shadow-md group-hover:scale-110 group-hover:icon-glow-gold transition-all">
                      <Building2 className="w-6 h-6 text-white drop-shadow-md" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{office.city}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{office.country}</p>
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {office.type}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="px-6 py-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
                >
                  <span className="font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
