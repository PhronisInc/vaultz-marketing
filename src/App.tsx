import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { TrustProps } from "./components/TrustProps";
import { Roadmap } from "./components/Roadmap";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <TrustProps />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
