import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Servicii from "./pages/Servicii";
import IFleet from "./pages/IFleet";
import OptiFare from "./pages/OptiFare";
import Exact from "./pages/Exact";
import SolutionDetail from "./pages/SolutionDetail";
import Compania from "./pages/Compania";
import Cariere from "./pages/Cariere";
import Articole from "./pages/Articole";
import Contact from "./pages/Contact";
import PoliticaCookie from "./pages/PoliticaCookie";
import PoliticaConfidentialitate from "./pages/PoliticaConfidentialitate";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/servicii" component={Servicii} />
      <Route path="/servicii/ifleet" component={IFleet} />
      <Route path="/servicii/optifare" component={OptiFare} />
      <Route path="/servicii/exact" component={Exact} />
      <Route path="/solutii/:slug" component={SolutionDetail} />
      <Route path="/compania/:section?" component={Compania} />
      <Route path="/cariere" component={Cariere} />
      <Route path="/articole" component={Articole} />
      <Route path="/blog" component={Articole} />
      <Route path="/stiri" component={Articole} />
      <Route path="/contact" component={Contact} />
      <Route path="/politica-cookie" component={PoliticaCookie} />
      <Route path="/politica-confidentialitate" component={PoliticaConfidentialitate} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
