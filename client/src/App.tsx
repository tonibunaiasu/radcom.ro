import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Servicii from "./pages/Servicii";
import ServicesCategory from "./pages/ServicesCategory";
import SolutionDetail from "./pages/SolutionDetail";
import Compania from "./pages/Compania";
import Cariere from "./pages/Cariere";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/servicii" component={Servicii} />
      <Route path="/servicii/:category" component={ServicesCategory} />
      <Route path="/solutii/:slug" component={SolutionDetail} />
      <Route path="/compania/:section?" component={Compania} />
      <Route path="/cariere" component={Cariere} />
      <Route path="/blog" component={Blog} />
      <Route path="/stiri" component={Blog} />
      <Route path="/contact" component={Contact} />
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
