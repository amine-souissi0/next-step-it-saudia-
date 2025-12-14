import { Link } from "react-router-dom";
import { X, Lightbulb, BookOpen, Info, Mail, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Drawer, DrawerContent, DrawerClose, DrawerHeader } from "@/components/ui/drawer";
import { useNavigation } from "@/contexts/NavigationContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { industries } from "@/data/navigation";

export function MoreMenu() {
  const { moreMenuOpen, setMoreMenuOpen } = useNavigation();
  const { language } = useLanguage();

  const handleClose = () => {
    setMoreMenuOpen(false);
  };

  const moreItems = [
    {
      title: "Industries",
      icon: Building2,
      description: "Sectors we serve",
      items: industries.slice(0, 4).map(ind => ({
        label: ind.title.en,
        path: ind.path,
      })),
      viewAllPath: null, // No dedicated industries page yet
    },
    {
      title: "Services",
      icon: Lightbulb,
      description: "Our solutions",
      items: [
        { label: "Cloud & Datacenter", path: "/services/cloud" },
        { label: "Cybersecurity & SOC", path: "/services/cybersecurity" },
        { label: "Managed Services", path: "/services/managed" },
        { label: "Collaboration & Digital", path: "/services/collaboration" },
      ],
      viewAllPath: "/services",
    },
    {
      title: "Journey Stages",
      icon: BookOpen,
      description: "Digital maturity path",
      items: [
        { label: "Tamkeen - Foundation", path: "/journey/tamkeen" },
        { label: "Himaya - Protection", path: "/journey/himaya" },
        { label: "Mana'a - Resilience", path: "/journey/manaa" },
        { label: "Thiqah - Trust", path: "/journey/thiqah" },
        { label: "Riyada - Leadership", path: "/journey/riyada" },
      ],
      viewAllPath: "/journey",
    },
    {
      title: "About Next Step",
      icon: Info,
      description: "Company info",
      items: [
        { label: "Who We Are", path: "/about" },
        { label: "Contact Us", path: "/contact" },
        { label: "Sitemap", path: "/sitemap" },
      ],
      viewAllPath: "/about",
    },
  ];

  return (
    <Drawer open={moreMenuOpen} onOpenChange={setMoreMenuOpen}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="text-lg font-semibold text-foreground">More</h2>
          <DrawerClose asChild>
            <button
              onClick={handleClose}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </DrawerClose>
        </DrawerHeader>

        <div className="overflow-y-auto flex-1 px-4 py-4 space-y-4">
          {moreItems.map((section) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl p-4 border border-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{section.title}</h3>
                    <p className="text-xs text-muted-foreground">{section.description}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.path}
                      to={`/${language}${item.path}`}
                      onClick={handleClose}
                      className="block py-2 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  {section.viewAllPath && (
                    <Link
                      to={`/${language}${section.viewAllPath}`}
                      onClick={handleClose}
                      className="block py-2 px-3 rounded-lg text-sm text-primary hover:bg-primary/10 transition-colors font-medium"
                    >
                      → View all
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Contact CTA */}
          <Link
            to={`/${language}/contact`}
            onClick={handleClose}
            className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-primary to-accent text-white hover:shadow-lg transition-shadow"
          >
            <Mail className="w-5 h-5" />
            <div>
              <p className="font-semibold">Contact Us</p>
              <p className="text-xs opacity-90">Get in touch with our team</p>
            </div>
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
