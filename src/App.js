import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeHelp from "./components/WhoWeHelp";
import BookCall from "./components/BookCall";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import WhyChoose from "./components/WhyChoose";
import Benefits from "./components/Benefits";
import WhoWeServe from "./components/WhoWeServe";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import FrequentlyAsk from "./components/FrequentlyAsk";
import Blogs from "./components/Blogs";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PartnershipPhilosophy from "./components/PartnershipPhilosophy";
import ReadyToElevate from "./components/ReadyToElevate";

import AdminLayout from "./components/admin/AdminLayout"; // full dashboard layout

function App() {
  const [isCareerPage, setIsCareerPage] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Hidden admin/dashboard route */}
        <Route path="/dashboard" element={<AdminLayout />} />

        {/* Main site route */}
        <Route
          path="/*"
          element={
            <div className="relative min-h-screen bg-neutral-background text-primary font-body overflow-x-hidden">
              {/* Ambient Glow Background */}
              <div className="pointer-events-none fixed top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent/5 blur-[220px] rounded-full -z-10" />

              {/* NAVBAR */}
              <Navbar
                onCareerClick={() => {
                  setIsCareerPage(true);
                  window.scrollTo(0, 0);
                }}
                isCareerPage={isCareerPage}
              />

              <main className="relative z-10">
                {!isCareerPage ? (
                  <>
                    <Hero />
                    <WhoWeHelp />
                    <BookCall />
                    <About />
                    <Services />
                    <PartnershipPhilosophy />
                    <HowItWorks />
                    <WhyChoose />
                    <Benefits />
                    <WhoWeServe />
                    <Team />
                    <Testimonials />
                    <FrequentlyAsk />
                    <ReadyToElevate />
                    <Blogs />
                    <Contact />
                  </>
                ) : (
                  <Career />
                )}
              </main>

              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;