// Track viewers
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
ReactGA.initialize('G-EZQTKQPERD');

import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./pages/Banner";
import Commercial from "./pages/Commercial";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Footer from "./components/Footer";

function App() {
   useEffect(() => {
    ReactGA.initialize('G-EZQTKQPERD'); 
  }, []);

  // Track page views
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <div id="hero">
        <Navbar />
        <Banner />
      </div>
      <div id="commercial">
        <Commercial />
      </div>
      <div id="features">
        <Features />
      </div>
      {/* <div id="pricing">
        <Pricing />
      </div> */}
      <div id="team">
        <Team />
      </div>
      <Footer />
    </>
  );
}

export default App;
