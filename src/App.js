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
import Blogs from "./components/Blogs";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

function App() {
  const [isCareerPage, setIsCareerPage] = useState(false);

  return (
    <div className="relative min-h-screen bg-neutral-background text-primary font-body overflow-x-hidden">

      {/* Ambient Glow */}
      <div className="pointer-events-none fixed top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent/5 blur-[220px] rounded-full -z-10" />

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
            <SectionDivider />

            <WhoWeHelp />
            <SectionDivider />

            <BookCall />
            <SectionDivider />

            <About />
            <SectionDivider />

            <Services />
            <SectionDivider />

            <HowItWorks />
            <SectionDivider />

            <WhyChoose />
            <SectionDivider />

            <Benefits />
            <SectionDivider />

            <WhoWeServe />
            <SectionDivider />

            <Testimonials />
            <SectionDivider />

            <Blogs />
            <SectionDivider />

            <Contact />
          </>
        ) : (
          <Career />
        )}

      </main>

      <Footer />
    </div>
  );
}

export default App;
