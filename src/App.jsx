import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./pages/Banner";
import Commercial from "./pages/Commercial";
import Features from "./pages/Features";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <>
      <div id="hero">
        <Navbar />
        <Banner />
      </div>
      <div id="commercial">
        <Commercial />
      </div>
      <div className="section-bg">
        <div id="features">
          <Features />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
      </div>
      <div id="team">
        <Team />
      </div>
      <Footer />
    </>
  );
}

export default App;
