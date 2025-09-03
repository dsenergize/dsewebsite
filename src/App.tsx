import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// No longer need AppLayout if it's not being used, but keep if you have other uses for it.
import Index from "./pages/Index";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./lib/ScrollToTop";
import Navbar from "./components/Navbar";

// Import your new resource pages
import CaseStudies from "./pages/resources/CaseStudies";
import Whitepapers from "./pages/resources/WhitePapers";
import Brochures from "./pages/resources/Brochures";
import Blog from "./pages/resources/Blog";
import ResidentialSolar from "./pages/Solutions/ResidentialSolar";
import IndustrialSolar from "./pages/Solutions/IndustrialSolar";
import EnergyStorage from "./pages/Solutions/EnergyStorage";
import CommercialSolar from "./pages/Solutions/CommercialSolar";
import OMServices from "./pages/Solutions/OMServices";
import RemoteMonitoring from "./pages/Solutions/RemoteMonitoring";
import Contact from "./components/Contact";
import Gallery from "./pages/resources/Gallery";
import About from "./components/About";

// Import the new PageLayout component
import PageLayout from "./components/PageLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* The Index page does NOT use PageLayout because of its hero section */}
          <Route path="/" element={<Index />} />

          {/* Wrap all other pages with the PageLayout component */}
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Wrap your resource pages */}
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/whitepapers" element={<Whitepapers />} />
          <Route path="/resources/brochures" element={<Brochures />} />
          <Route path="/resources/Blog" element={<Blog />} />
          <Route path="/resources/gallery-media" element={<Gallery/>} />
          <Route path="/Solutions/residential" element={<ResidentialSolar />} />
          <Route path="/Solutions/industrial" element={<IndustrialSolar />} />
          <Route path="/Solutions/energy-storage" element={<EnergyStorage />} />
          <Route path="/Solutions/commercial" element={<CommercialSolar />} />
          <Route path="/Solutions/om-services" element={<OMServices />} />
          <Route
            path="/Solutions/remote-monitoring"
            element={<RemoteMonitoring />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          {/* Wrap the catch-all Not Found page */}
          <Route
            path="*"
            element={
              <PageLayout>
                <NotFound />
              </PageLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
