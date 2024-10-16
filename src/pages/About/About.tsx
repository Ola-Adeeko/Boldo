import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import OurNumbers from "./components/OurNumbers";
import OurStory from "./components/OurStory";
import OurTeam from "./components/OurTeam";
import OurValues from "./components/OurValues";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <OurStory />
      <OurNumbers />
      <OurTeam />
      <OurValues />
      <Footer />
    </main>
  );
};

export default About;
