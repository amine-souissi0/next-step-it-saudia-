import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Start Your <span className="text-gradient">Digital Transformation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our experts to discuss your needs and receive a personalized solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-border card-elevated">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@company.com"
                      className="bg-background"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+966..."
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project or needs..."
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full icon-glow-green bg-gradient-to-r from-nextstep-green to-nextstep-green-light hover:from-nextstep-green-light hover:to-nextstep-gold transition-all">
                    <Send className="w-6 h-6 mr-2" strokeWidth={2} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="border-border hover:border-primary/50 transition-all card-elevated group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-nextstep-green to-nextstep-green-light flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:icon-glow-green transition-all">
                    <MapPin className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Next Step Middle East<br />
                      Riyadh, Saudi Arabia<br />
                      Kingdom of Saudi Arabia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-all card-elevated group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-nextstep-green-light to-nextstep-gold flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:icon-glow-gold transition-all">
                    <Mail className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <a
                      href="mailto:sales@nextstep-me.sa"
                      className="text-sm text-primary hover:underline"
                    >
                      sales@nextstep-me.sa
                    </a>
                    <br />
                    <a
                      href="mailto:support@nextstep-me.sa"
                      className="text-sm text-primary hover:underline"
                    >
                      support@nextstep-me.sa
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-all card-elevated group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-nextstep-gold to-nextstep-green flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:icon-glow-green transition-all">
                    <Phone className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <a href="tel:+966530376341" className="text-sm text-primary hover:underline">
                      +966530376341
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border-border bg-gradient-to-br from-nextstep-green/10 to-nextstep-gold/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday - Thursday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Friday - Saturday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-primary">
                      24/7 Emergency Support Available for Managed Services Clients
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
