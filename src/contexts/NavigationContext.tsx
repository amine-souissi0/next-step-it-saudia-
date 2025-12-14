import { createContext, useContext, useState, ReactNode } from "react";

type NavigationTab = "home" | "journey" | "services" | "search" | "more";

interface NavigationContextType {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  servicesDrawerOpen: boolean;
  setServicesDrawerOpen: (open: boolean) => void;
  moreMenuOpen: boolean;
  setMoreMenuOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<NavigationTab>("home");
  const [servicesDrawerOpen, setServicesDrawerOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <NavigationContext.Provider
      value={{
        activeTab,
        setActiveTab,
        servicesDrawerOpen,
        setServicesDrawerOpen,
        moreMenuOpen,
        setMoreMenuOpen,
        searchOpen,
        setSearchOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
