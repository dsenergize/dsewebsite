import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ✅ Import Clerk
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

import Index from "./pages/Index";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./lib/ScrollToTop";
import Navbar from "./components/Navbar";

// Import resource pages
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
import PageLayout from "./components/PageLayout";
import CreateBlog from "./pages/CreateBlog";

const queryClient = new QueryClient();

// ✅ Get Clerk Publishable Key
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Clerk Publishable Key. Add VITE_CLERK_PUBLISHABLE_KEY to .env.local");
}

// ✅ Protected Route Component using Clerk
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

const App = () => (
  <ClerkProvider publishableKey={clerkPubKey}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/resources/whitepapers" element={<Whitepapers />} />
            <Route path="/resources/brochures" element={<Brochures />} />
            <Route path="/resources/Blog" element={<Blog />} />
            <Route path="/resources/gallery-media" element={<Gallery />} />
            <Route path="/Solutions/residential" element={<ResidentialSolar />} />
            <Route path="/Solutions/industrial" element={<IndustrialSolar />} />
            <Route path="/Solutions/energy-storage" element={<EnergyStorage />} />
            <Route path="/Solutions/commercial" element={<CommercialSolar />} />
            <Route path="/Solutions/om-services" element={<OMServices />} />
            <Route path="/Solutions/remote-monitoring" element={<RemoteMonitoring />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/About" element={<About />} />

            {/* ✅ Protected route with Clerk */}
            <Route
              path="/create-blog"
              element={
                <ProtectedRoute>
                  <CreateBlog />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
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
  </ClerkProvider>
);

export default App;