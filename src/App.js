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
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="font-sans min-h-screen"
      style={{
        backgroundColor: "#FCFAF4",
        color: "#2D5D46",
      }}
    >
      <Navbar />

      <main className="space-y-24">

        {/* 1️⃣ Hero */}
        <Hero />

        {/* 2️⃣ Authority Logos */}
        <WhoWeHelp />

        {/* 3️⃣ Early CTA */}
        <BookCall />

        {/* 4️⃣ About */}
        <About />

        {/* 5️⃣ Services */}
        <Services />

        {/* 6️⃣ Process */}
        <HowItWorks />

        {/* 7️⃣ Differentiation */}
        <WhyChoose />

        {/* 8️⃣ Benefits */}
        <Benefits />

        {/* 9️⃣ Target Audience */}
        <WhoWeServe />

        {/* 🔟 Social Proof */}
        <Testimonials />

        {/* 1️⃣1️⃣ Contact / Lead Form */}
        <Contact />

      </main>

      <Footer />
    </div>
  );
}

export default App;
