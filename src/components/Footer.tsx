import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Linkedin, Twitter, Map } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { language } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <img 
                src={logo} 
                alt="Next Step Middle East" 
                className="h-10"
              />
              <span className="text-lg font-bold text-gradient">Next Step Middle East</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering Saudi enterprises to build, secure, and scale their digital future.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/nextstep-me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_hsl(153,55%,24%,0.6)]" strokeWidth={1.5} />
              </a>
              <a 
                href="https://twitter.com/nextstep_me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 group"
              >
                <Twitter className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_hsl(153,55%,24%,0.6)]" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={getLocalizedPath("/services/cybersecurity", language)} className="text-muted-foreground hover:text-primary transition-colors">
                  Cybersecurity & SOC
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/services/cloud", language)} className="text-muted-foreground hover:text-primary transition-colors">
                  Cloud & Datacenter
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/services/integration", language)} className="text-muted-foreground hover:text-primary transition-colors">
                  Integration Services
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/services/managed", language)} className="text-muted-foreground hover:text-primary transition-colors">
                  Managed Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={getLocalizedPath("/about", language)} className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/journey", language)} className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Journey
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/about", language)} className="text-muted-foreground hover:text-primary transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/contact", language)} className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to={getLocalizedPath("/sitemap", language)} 
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  <Map className="w-3.5 h-3.5" />
                  {language === "en" ? "Sitemap" : "خريطة الموقع"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-muted-foreground">Riyadh, Saudi Arabia</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                <a href="mailto:sales@nextstep-me.sa" className="text-muted-foreground hover:text-primary transition-colors">
                  sales@nextstep-me.sa
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                <a href="tel:+966530376341" className="text-muted-foreground hover:text-primary transition-colors">
                  +966530376341
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
            <p>&copy; 2025 Next Step Middle East. All rights reserved.</p>
            <div className="flex space-x-6">
              <span className="text-xs">ISO 9001 | ISO 27001 | ISO 22301</span>
              <span className="text-xs">NCA ECC | CCC | CITC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
