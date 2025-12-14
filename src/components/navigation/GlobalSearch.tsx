import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigation } from "@/contexts/NavigationContext";
import { serviceDomains, industries } from "@/data/navigation";
import { z } from "zod";

// Search input validation
const searchSchema = z.string().trim().max(100, "Search query too long");

interface SearchResult {
  title: string;
  path: string;
  category: string;
  description?: string;
  icon?: string;
}

const GlobalSearch = () => {
  const { searchOpen, setSearchOpen } = useNavigation();
  const [query, setQuery] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Build searchable data
  const searchableData = useMemo(() => {
    const data: SearchResult[] = [];

    // Add service domains and subpages
    Object.values(serviceDomains).forEach((domain) => {
      data.push({
        title: domain.title.en,
        path: domain.path,
        category: "Services",
        description: `${domain.subpages.length} services available`,
        icon: domain.emoji,
      });

      domain.subpages.forEach((subpage) => {
        data.push({
          title: subpage.title.en,
          path: subpage.path,
          category: `Services > ${domain.title.en}`,
          icon: domain.emoji,
        });
      });
    });

    // Add industries
    industries.forEach((industry) => {
      data.push({
        title: industry.title.en,
        path: industry.path,
        category: "Industries",
        description: "Tailored solutions for this sector",
      });
    });

    // Add main pages
    const mainPages = [
      { title: "Home", path: "/", category: "Main Pages" },
      { title: "Digital Journey", path: "/journey", category: "Main Pages" },
      { title: "About Next Step", path: "/about", category: "Main Pages" },
      { title: "Contact Us", path: "/contact", category: "Main Pages" },
    ];

    data.push(...mainPages);

    return data;
  }, []);

  // Filter results based on query
  const filteredResults = useMemo(() => {
    if (!query || validationError) return [];

    const lowerQuery = query.toLowerCase();
    return searchableData.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.description?.toLowerCase().includes(lowerQuery)
    );
  }, [query, searchableData, validationError]);

  // Group results by category
  const groupedResults = useMemo(() => {
    const grouped: Record<string, SearchResult[]> = {};
    filteredResults.forEach((result) => {
      if (!grouped[result.category]) {
        grouped[result.category] = [];
      }
      grouped[result.category].push(result);
    });
    return grouped;
  }, [filteredResults]);

  // Handle search input with validation
  const handleSearchChange = (value: string) => {
    setQuery(value);
    
    try {
      searchSchema.parse(value);
      setValidationError(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setValidationError(error.errors[0].message);
      }
    }
  };

  // Navigate to result and close search
  const handleResultClick = (path: string) => {
    navigate(path);
    setSearchOpen(false);
    setQuery("");
    setValidationError(null);
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
        setQuery("");
        setValidationError(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [searchOpen, setSearchOpen]);

  // Keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyboard);
    return () => document.removeEventListener("keydown", handleKeyboard);
  }, [setSearchOpen]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-[60]"
            onClick={() => {
              setSearchOpen(false);
              setQuery("");
              setValidationError(null);
            }}
          />

          {/* Search Modal */}
          <div
            className="fixed inset-0 z-[70] px-4 pt-24 flex justify-center items-start"
            onClick={() => {
              setSearchOpen(false);
              setQuery("");
              setValidationError(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
              className="bg-background border border-border rounded-xl shadow-2xl overflow-hidden w-full max-w-2xl max-h-[calc(100vh-8rem)] md:max-h-[calc(100vh-12rem)] flex flex-col"
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-border flex-shrink-0">
                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <Input
                  autoFocus
                  placeholder="Search services, industries, pages..."
                  value={query}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSearchOpen(false);
                    setQuery("");
                    setValidationError(null);
                  }}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Validation Error */}
              {validationError && (
                <div className="px-4 py-2 bg-destructive/10 text-destructive text-sm">
                  {validationError}
                </div>
              )}

              {/* Search Results */}
              <div className="overflow-y-auto flex-1 pb-24 md:pb-0">
                {query && !validationError && filteredResults.length === 0 && (
                  <div className="p-8 text-center text-muted-foreground">
                    <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No results found for "{query}"</p>
                    <p className="text-sm mt-1">Try a different search term</p>
                  </div>
                )}

                {query && !validationError && filteredResults.length > 0 && (
                  <div className="py-2">
                    {Object.entries(groupedResults).map(([category, results]) => (
                      <div key={category} className="mb-4">
                        <h3 className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          {category}
                        </h3>
                        {results.map((result) => (
                          <button
                            key={result.path}
                            onClick={() => handleResultClick(result.path)}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors text-left group"
                          >
                            {result.icon && (
                              <span className="text-xl flex-shrink-0">{result.icon}</span>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                {result.title}
                              </p>
                              {result.description && (
                                <p className="text-sm text-muted-foreground truncate">
                                  {result.description}
                                </p>
                              )}
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {!query && (
                  <div className="p-8 text-center text-muted-foreground">
                    <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Start typing to search...</p>
                    <p className="text-sm mt-1">
                      Search across all services, industries, and pages
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-border bg-muted/30 flex items-center justify-between text-xs text-muted-foreground flex-shrink-0">
                <div className="flex items-center gap-4">
                  <span>
                    <kbd className="px-2 py-1 bg-background border border-border rounded">
                      ESC
                    </kbd>{" "}
                    to close
                  </span>
                </div>
                <span>
                  {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""}
                </span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GlobalSearch;
