import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { getPathWithoutLang } from "@/constants/routes";

interface BreadcrumbItem {
  label: string;
  path: string;
}

export default function Breadcrumb() {
  const location = useLocation();
  const { t } = useTranslation();
  
  const pathWithoutLang = getPathWithoutLang(location.pathname);
  const pathSegments = pathWithoutLang.split("/").filter(Boolean);
  
  if (pathSegments.length === 0) return null;
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: t("nav.home"), path: "/" }
  ];
  
  let accumulatedPath = "";
  pathSegments.forEach((segment, index) => {
    accumulatedPath += `/${segment}`;
    
    // Convert segment to readable label
    let label = segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    
    // Try to get translation if it exists
    const translationKey = `nav.${segment}`;
    const translated = t(translationKey);
    if (translated !== translationKey) {
      label = translated;
    }
    
    breadcrumbs.push({
      label,
      path: accumulatedPath
    });
  });
  
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
      <ol className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-foreground font-medium">{crumb.label}</span>
              ) : (
                <>
                  <Link
                    to={crumb.path}
                    className={cn(
                      "text-muted-foreground hover:text-foreground transition-colors",
                      "hover:underline"
                    )}
                  >
                    {crumb.label}
                  </Link>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
