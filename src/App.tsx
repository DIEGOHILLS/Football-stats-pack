import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FactGenerator from "./pages/FactGenerator";
import Quiz from "./pages/Quiz";
import ManchesterUnited from "./pages/teams/ManchesterUnited";
import RealMadrid from "./pages/teams/RealMadrid";
import Barcelona from "./pages/teams/Barcelona";
import Juventus from "./pages/teams/Juventus";
import Ronaldo from "./pages/players/Ronaldo";
import Messi from "./pages/players/Messi";
import Maradona from "./pages/players/Maradona";
import Pele from "./pages/players/Pele";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/facts" element={<FactGenerator />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/teams/manchester-united" element={<ManchesterUnited />} />
          <Route path="/teams/real-madrid" element={<RealMadrid />} />
          <Route path="/teams/barcelona" element={<Barcelona />} />
          <Route path="/teams/juventus" element={<Juventus />} />
          <Route path="/players/ronaldo" element={<Ronaldo />} />
          <Route path="/players/messi" element={<Messi />} />
          <Route path="/players/maradona" element={<Maradona />} />
          <Route path="/players/pele" element={<Pele />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
