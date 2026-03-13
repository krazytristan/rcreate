import { useState } from "react";

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

function App() {
  const [isCareerPage, setIsCareerPage] = useState(false);

  return (
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

            {/* HERO */}
            <Hero />

            {/* WHO WE HELP */}
            <WhoWeHelp />

            {/* BOOK CALL */}
            <BookCall />

            {/* ABOUT */}
            <About />

            {/* SERVICES */}
            <Services />

            {/* PartnershipPhilosophy */}
            <PartnershipPhilosophy/>

            {/* HOW IT WORKS */}
            <HowItWorks />

            {/* WHY CHOOSE */}
            <WhyChoose />

            {/* BENEFITS */}
            <Benefits />

            {/* WHO WE SERVE */}
            <WhoWeServe />

            {/* TEAM */}
            <Team />

            {/* TESTIMONIALS */}
            <Testimonials />

            {/* FAQ */}
            <FrequentlyAsk />

            {/* Ready to Elevate*/}
            <ReadyToElevate/>

            {/* BLOGS */}
            <Blogs />

            {/* CONTACT */}
            <Contact />

          </>
        ) : (
          <Career />
        )}

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;