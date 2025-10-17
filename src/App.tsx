import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuoteFormProvider } from "./contexts/QuoteFormContext";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { QuoteFormModal } from "./components/QuoteFormModal";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SmartHome from "./pages/SmartHome";
import Locations from "./pages/Locations";
import CityDetail from "./pages/CityDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <QuoteFormProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/smart-home" element={<SmartHome />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/locations/:citySlug" element={<CityDetail />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <SiteFooter />
          </div>
          <QuoteFormModal />
        </BrowserRouter>
      </QuoteFormProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
