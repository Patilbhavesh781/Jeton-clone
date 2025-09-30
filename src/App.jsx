import React from "react";
import Navbar from "./components/Navbar";
import HeroIntro from "./components/Hero";
import Hero from "./components/HeroIntro";
import Features from "./components/Features";
import CardSection from "./components/CardSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import BottomMenu from "./components/BottomMenu";
import VantaBackground from "./components/VantaBackground";

export default function App() {
  return (
    <div>
      <VantaBackground>
        <Navbar />
        <Hero />
      </VantaBackground>

      <main className="bg-white relative z-20">
        <HeroIntro />
        <Features />
        <CardSection />
        <Testimonials />
      </main>

      <Footer />
      <BottomMenu />
    </div>
  );
}
