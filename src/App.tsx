import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { NavigationProvider } from "./contexts/NavigationContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import { BottomTabBar } from "./components/navigation/BottomTabBar";
import { ServicesDrawer } from "./components/navigation/ServicesDrawer";
import { MoreMenu } from "./components/navigation/MoreMenu";
import GlobalSearch from "./components/navigation/GlobalSearch";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import LoadingProgress from "./components/LoadingProgress";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Cybersecurity from "./pages/Cybersecurity";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import CloudService from "./pages/services/CloudService";
import CybersecurityService from "./pages/services/CybersecurityService";
import IntegrationService from "./pages/services/IntegrationService";
import ManagedService from "./pages/services/ManagedService";
import CollaborationService from "./pages/services/CollaborationService";
import Government from "./pages/industries/Government";
import Banking from "./pages/industries/Banking";
import Telecom from "./pages/industries/Telecom";
import OilGas from "./pages/industries/OilGas";
import Healthcare from "./pages/industries/Healthcare";
import Retail from "./pages/industries/Retail";
import Education from "./pages/industries/Education";
import SmartCities from "./pages/industries/SmartCities";
import PrivateCloud from "./pages/services/subservices/PrivateCloud";
import PublicCloud from "./pages/services/subservices/PublicCloud";
import BackupStorage from "./pages/services/subservices/BackupStorage";
import Virtualization from "./pages/services/subservices/Virtualization";
import ContainerPlatform from "./pages/services/subservices/ContainerPlatform";
import HybridCloud from "./pages/services/subservices/HybridCloud";
import DisasterRecovery from "./pages/services/subservices/DisasterRecovery";
import CloudMigration from "./pages/services/subservices/CloudMigration";
import InfrastructureManagement from "./pages/services/subservices/InfrastructureManagement";
import NOCServices from "./pages/services/subservices/NOCServices";
import ApplicationManagement from "./pages/services/subservices/ApplicationManagement";
import DatabaseManagement from "./pages/services/subservices/DatabaseManagement";
import NetworkSecurityDesign from "./pages/services/subservices/NetworkSecurityDesign";
import SystemIntegration from "./pages/services/subservices/SystemIntegration";
import MigrationProjects from "./pages/services/subservices/MigrationProjects";
import ProjectManagement from "./pages/services/subservices/ProjectManagement";
import ITStrategy from "./pages/services/subservices/ITStrategy";
import TestingQA from "./pages/services/subservices/TestingQA";
import ManagedSOC from "./pages/services/subservices/cybersecurity/ManagedSOC";
import RiskCompliance from "./pages/services/subservices/cybersecurity/RiskCompliance";
import ThreatIntelligence from "./pages/services/subservices/cybersecurity/ThreatIntelligence";
import IdentityAccess from "./pages/services/subservices/cybersecurity/IdentityAccess";
import VulnerabilityManagement from "./pages/services/subservices/cybersecurity/VulnerabilityManagement";
import IncidentResponse from "./pages/services/subservices/cybersecurity/IncidentResponse";
import ZeroTrust from "./pages/services/subservices/cybersecurity/ZeroTrust";
import GRCCompliance from "./pages/services/subservices/cybersecurity/GRCCompliance";
import UnifiedComms from "./pages/services/subservices/collaboration/UnifiedComms";
import VDI from "./pages/services/subservices/collaboration/VDI";
import PowerPlatform from "./pages/services/subservices/collaboration/PowerPlatform";
import AICopilot from "./pages/services/subservices/collaboration/AICopilot";
import ChangeManagement from "./pages/services/subservices/collaboration/ChangeManagement";
import ServiceDesk from "./pages/services/subservices/managed/ServiceDesk";
import SLAPerformance from "./pages/services/subservices/managed/SLAPerformance";
import Tamkeen from "./pages/journey/Tamkeen";
import Himaya from "./pages/journey/Himaya";
import Manaa from "./pages/journey/Manaa";
import Thiqah from "./pages/journey/Thiqah";
import Riyada from "./pages/journey/Riyada";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const LanguageRedirect = () => {
  const browserLang = navigator.language.split("-")[0];
  const lang = browserLang === "ar" ? "ar" : "en";
  return <Navigate to={`/${lang}`} replace />;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LanguageRedirect />} />
        <Route path="/:lang" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/:lang/journey" element={<PageTransition><Journey /></PageTransition>} />
        <Route path="/:lang/cybersecurity" element={<PageTransition><Cybersecurity /></PageTransition>} />
        <Route path="/:lang/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/:lang/contact" element={<PageTransition><Contact /></PageTransition>} />
        
        {/* All Services Overview */}
        <Route path="/:lang/services" element={<PageTransition><Services /></PageTransition>} />
        
        {/* Service Pages */}
        <Route path="/:lang/services/cloud" element={<PageTransition><CloudService /></PageTransition>} />
        <Route path="/:lang/services/cybersecurity" element={<PageTransition><CybersecurityService /></PageTransition>} />
        <Route path="/:lang/services/integration" element={<PageTransition><IntegrationService /></PageTransition>} />
        <Route path="/:lang/services/managed" element={<PageTransition><ManagedService /></PageTransition>} />
        <Route path="/:lang/services/collaboration" element={<PageTransition><CollaborationService /></PageTransition>} />
        
        {/* Industry Pages */}
        <Route path="/:lang/industries/government" element={<PageTransition><Government /></PageTransition>} />
        <Route path="/:lang/industries/banking" element={<PageTransition><Banking /></PageTransition>} />
        <Route path="/:lang/industries/telecom" element={<PageTransition><Telecom /></PageTransition>} />
        <Route path="/:lang/industries/oil-gas" element={<PageTransition><OilGas /></PageTransition>} />
        <Route path="/:lang/industries/healthcare" element={<PageTransition><Healthcare /></PageTransition>} />
        <Route path="/:lang/industries/retail" element={<PageTransition><Retail /></PageTransition>} />
        <Route path="/:lang/industries/education" element={<PageTransition><Education /></PageTransition>} />
        <Route path="/:lang/industries/smart-cities" element={<PageTransition><SmartCities /></PageTransition>} />
        
        {/* Subservice Pages */}
        <Route path="/:lang/services/cloud/private-cloud" element={<PageTransition><PrivateCloud /></PageTransition>} />
        <Route path="/:lang/services/cloud/public-cloud" element={<PageTransition><PublicCloud /></PageTransition>} />
        <Route path="/:lang/services/cloud/backup-storage" element={<PageTransition><BackupStorage /></PageTransition>} />
        <Route path="/:lang/services/cloud/virtualization" element={<PageTransition><Virtualization /></PageTransition>} />
        <Route path="/:lang/services/cloud/container-platform" element={<PageTransition><ContainerPlatform /></PageTransition>} />
        <Route path="/:lang/services/cloud/hybrid-cloud" element={<PageTransition><HybridCloud /></PageTransition>} />
        <Route path="/:lang/services/cloud/disaster-recovery" element={<PageTransition><DisasterRecovery /></PageTransition>} />
        <Route path="/:lang/services/cloud/cloud-migration" element={<PageTransition><CloudMigration /></PageTransition>} />
        
        {/* Managed Services Subservices */}
        <Route path="/:lang/services/managed/infrastructure" element={<PageTransition><InfrastructureManagement /></PageTransition>} />
        <Route path="/:lang/services/managed/noc" element={<PageTransition><NOCServices /></PageTransition>} />
        <Route path="/:lang/services/managed/application" element={<PageTransition><ApplicationManagement /></PageTransition>} />
        <Route path="/:lang/services/managed/database" element={<PageTransition><DatabaseManagement /></PageTransition>} />
        <Route path="/:lang/services/managed/service-desk" element={<PageTransition><ServiceDesk /></PageTransition>} />
        <Route path="/:lang/services/managed/sla" element={<PageTransition><SLAPerformance /></PageTransition>} />
        
        {/* Integration & Professional Services Subservices */}
        <Route path="/:lang/services/integration/network-security-design" element={<PageTransition><NetworkSecurityDesign /></PageTransition>} />
        <Route path="/:lang/services/integration/system-integration" element={<PageTransition><SystemIntegration /></PageTransition>} />
        <Route path="/:lang/services/integration/migration-projects" element={<PageTransition><MigrationProjects /></PageTransition>} />
        <Route path="/:lang/services/integration/project-management" element={<PageTransition><ProjectManagement /></PageTransition>} />
        <Route path="/:lang/services/integration/it-strategy" element={<PageTransition><ITStrategy /></PageTransition>} />
        <Route path="/:lang/services/integration/testing-qa" element={<PageTransition><TestingQA /></PageTransition>} />
        
        {/* Cybersecurity & SOC Subservices */}
        <Route path="/:lang/services/cybersecurity/managed-soc" element={<PageTransition><ManagedSOC /></PageTransition>} />
        <Route path="/:lang/services/cybersecurity/risk-compliance" element={<PageTransition><RiskCompliance /></PageTransition>} />
        <Route path="/:lang/services/cybersecurity/threat-intelligence" element={<PageTransition><ThreatIntelligence /></PageTransition>} />
        <Route path="/:lang/services/cybersecurity/identity-access" element={<PageTransition><IdentityAccess /></PageTransition>} />
        <Route path="/:lang/services/cybersecurity/vulnerability" element={<PageTransition><VulnerabilityManagement /></PageTransition>} />
        <Route path="/:lang/services/cybersecurity/incident-response" element={<PageTransition><IncidentResponse /></PageTransition>} />
        <Route path="/:lang/services/cybersecurity/zero-trust" element={<PageTransition><ZeroTrust /></PageTransition>} />
        <Route path="/:lang/services/cybersecurity/grc" element={<PageTransition><GRCCompliance /></PageTransition>} />
        
        {/* Collaboration & Digital Subservices */}
        <Route path="/:lang/services/collaboration/unified-comms" element={<PageTransition><UnifiedComms /></PageTransition>} />
        <Route path="/:lang/services/collaboration/vdi" element={<PageTransition><VDI /></PageTransition>} />
        <Route path="/:lang/services/collaboration/power-platform" element={<PageTransition><PowerPlatform /></PageTransition>} />
        <Route path="/:lang/services/collaboration/ai-copilot" element={<PageTransition><AICopilot /></PageTransition>} />
        <Route path="/:lang/services/collaboration/change-management" element={<PageTransition><ChangeManagement /></PageTransition>} />
        
        {/* Managed Services Subservices */}
        <Route path="/:lang/services/managed/service-desk" element={<PageTransition><ServiceDesk /></PageTransition>} />
        <Route path="/:lang/services/managed/sla" element={<PageTransition><SLAPerformance /></PageTransition>} />
        
        {/* Journey Stages */}
        <Route path="/:lang/journey/tamkeen" element={<PageTransition><Tamkeen /></PageTransition>} />
        <Route path="/:lang/journey/himaya" element={<PageTransition><Himaya /></PageTransition>} />
        <Route path="/:lang/journey/manaa" element={<PageTransition><Manaa /></PageTransition>} />
        <Route path="/:lang/journey/thiqah" element={<PageTransition><Thiqah /></PageTransition>} />
        <Route path="/:lang/journey/riyada" element={<PageTransition><Riyada /></PageTransition>} />
        
        {/* Sitemap */}
        <Route path="/:lang/sitemap" element={<PageTransition><Sitemap /></PageTransition>} />
        
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <NavigationProvider>
            <LoadingProgress />
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-1">
                <AnimatedRoutes />
              </main>
              <Footer />
              <BottomTabBar />
              <ServicesDrawer />
              <MoreMenu />
              <GlobalSearch />
              <ScrollToTop />
            </div>
          </NavigationProvider>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
