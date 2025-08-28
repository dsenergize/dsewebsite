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
import Downloads from "./pages/resources/Downloads";

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
          <Route
            path="/terms"
            element={<PageLayout><TermsOfService /></PageLayout>}
          />
          <Route
            path="/privacy"
            element={<PageLayout><PrivacyPolicy /></PageLayout>}
          />

          {/* Wrap your resource pages */}
          <Route
            path="/resources/case-studies"
            element={<PageLayout><CaseStudies /></PageLayout>}
          />
          <Route
            path="/resources/whitepapers"
            element={<PageLayout><Whitepapers /></PageLayout>}
          />
          <Route
            path="/resources/brochures"
            element={<PageLayout><Brochures /></PageLayout>}
          />
          <Route
            path="/resources/downloads"
            element={<PageLayout><Downloads /></PageLayout>}
          />

          {/* Wrap the catch-all Not Found page */}
          <Route
            path="*"
            element={<PageLayout><NotFound /></PageLayout>}
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;