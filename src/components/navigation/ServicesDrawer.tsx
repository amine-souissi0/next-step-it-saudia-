import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, ChevronRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Drawer, DrawerContent, DrawerClose, DrawerHeader } from "@/components/ui/drawer";
import { serviceDomains } from "@/data/navigation";
import { useNavigation } from "@/contexts/NavigationContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";

export function ServicesDrawer() {
  const { servicesDrawerOpen, setServicesDrawerOpen } = useNavigation();
  const { language } = useLanguage();
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDomains = Object.entries(serviceDomains).filter(([key, domain]) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      domain.title.en.toLowerCase().includes(query) ||
      domain.subpages.some(sub => sub.title.en.toLowerCase().includes(query))
    );
  });

  const handleDomainClick = (key: string) => {
    setExpandedDomain(expandedDomain === key ? null : key);
  };

  const handleClose = () => {
    setServicesDrawerOpen(false);
    setExpandedDomain(null);
    setSearchQuery("");
  };

  return (
    <Drawer open={servicesDrawerOpen} onOpenChange={setServicesDrawerOpen}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="text-lg font-semibold text-foreground">Services</h2>
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

        <div className="px-4 py-3 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="overflow-y-auto flex-1 px-4 py-2">
          {filteredDomains.map(([key, domain]) => {
            const Icon = domain.icon;
            const isExpanded = expandedDomain === key;

            return (
              <div key={key} className="mb-2">
                <button
                  onClick={() => handleDomainClick(key)}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${domain.gradient}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="font-medium text-foreground">{domain.title.en}</span>
                      <p className="text-xs text-muted-foreground">
                        {domain.subpages.length} services
                      </p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-12 mt-2 space-y-1">
                        {domain.subpages.slice(0, 3).map((subpage) => (
                          <Link
                            key={subpage.path}
                            to={`/${language}${subpage.path}`}
                            onClick={handleClose}
                            className="block py-2 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                          >
                            {subpage.title.en}
                          </Link>
                        ))}
                        <Link
                          to={`/${language}${domain.path}`}
                          onClick={handleClose}
                          className="block py-2 px-3 rounded-lg text-sm text-primary hover:bg-primary/10 transition-colors font-medium"
                        >
                          → View all ({domain.subpages.length})
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
