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
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-neutral-background text-primary font-body overflow-x-hidden">

      {/* Global Ambient Glow */}
      <div className="pointer-events-none fixed top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent/5 blur-[220px] rounded-full -z-10" />

      <Navbar />

      <main>

        {/* 01 — Hero */}
        <Hero />

        {/* 02 — Authority */}
        <WhoWeHelp />

        {/* 03 — Early CTA */}
        <BookCall />

        {/* 04 — About */}
        <About />

        {/* 05 — Services */}
        <Services />

        {/* 06 — Process */}
        <HowItWorks />

        {/* 07 — Why Choose */}
        <WhyChoose />

        {/* 08 — Benefits */}
        <Benefits />

        {/* 09 — Who We Serve */}
        <WhoWeServe />

        {/* 10 — Team */}
        <Team />

        {/* 11 — Testimonials */}
        <Testimonials />

        {/* 12 — Contact */}
        <Contact />

      </main>

      <Footer />
    </div>
  );
}

export default App;
