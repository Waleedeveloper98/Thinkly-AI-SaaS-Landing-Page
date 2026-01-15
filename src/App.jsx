import React, { useEffect } from "react";
import Navbar from "./components/ui/Navbar/Navbar";
import LandingPage from "./components/pages/LandingPage";
import Footer from "./components/ui/Footer/Footer";
import Lenis from "@studio-freight/lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <Navbar />
      <LandingPage />
      <Footer />
    </main>
  );
};

export default App;
