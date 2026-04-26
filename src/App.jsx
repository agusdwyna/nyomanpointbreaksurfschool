import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import Home from "./Home";
import Footer from "./components/Footer";
import About from "./About";
import SurfCoaching from "./SurfCoaching";
import GuidedTrips from "./GuidedTrips";
import Contact from "./Contact";
import FAQ from "./FAQ";
import ScrollToTop from "./components/ScrollToTop";





function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <div className="bg-[#f5f7f8] text-[#101518] min-h-screen font-['Plus_Jakarta_Sans']">
        
        <Header />

        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/surf-coaching" element={<SurfCoaching />} />
            <Route path="/guided-trips" element={<GuidedTrips />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />

        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

export default App;