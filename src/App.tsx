import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Works from "./components/Works";
import PopularReels from "./components/PopularReels";
import Team from "./components/Team";
import ContactAndFooter from "./components/ContactAndFooter";

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const Button = ({ children, ...props }: any) => (
    <button
      {...props}
      className="inline-flex items-center justify-center rounded-md font-medium bg-sky-500 hover:bg-sky-600 text-white shadow px-4 py-2 transition-colors"
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,180,255,0.20),transparent_70%)] z-0" />
      <div className="relative z-10">
        <Navbar scrollToSection={scrollToSection} />

        <main className="container mx-auto px-6 pt-24 md:pt-32">
          <Hero scrollToSection={scrollToSection} Button={Button} />
          <Sections />
          <Works />
          <PopularReels />
          <Team />
          <ContactAndFooter />
        </main>
      </div>
    </div>
  );
};

export default App;
