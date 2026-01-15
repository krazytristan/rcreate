import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookCall from "./components/BookCall";
import About from "./components/About";
import Services from "./components/Services";
import WhoWeServe from "./components/WhoWeServe";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";

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
        <Hero />
        <BookCall />
        <About />
        <Services />
        <Benefits />
        <WhoWeServe />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;
