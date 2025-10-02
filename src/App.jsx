import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroIntro";
import HeroIntro from "./components/Hero";
import Features from "./components/Features";
import CardSection from "./components/CardSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import BottomMenu from "./components/BottomMenu";
import VideoBackground from "./components/VideoBackground";
import JetonWalkthrough from "./components/JetonWalkthrough";
import MobileAppHero from "./components/MobileAppHero";
import JetonCardOverview from "./components/JetonCardOverview";

export default function App() {
  return (
    <div>
      <VideoBackground>
        <Navbar />
        <Hero />
      </VideoBackground>

      <main className="bg-white relative z-20">
        <HeroIntro />
        <JetonWalkthrough />
        <MobileAppHero />
        <JetonCardOverview />
        <Features />
        <CardSection />
        <Testimonials />
      </main>

      <Footer />
      <BottomMenu />
    </div>
  );
}
