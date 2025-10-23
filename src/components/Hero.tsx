import React from "react";

interface HeroProps {
  scrollToSection: (id: string) => void;
  Button: React.FC<any>;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, Button }) => (
  <section className="text-center py-20">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
      Creating Content for <br className="hidden md:inline" />
      <span className="text-sky-400">Padrauna, Kushinagar</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
      Specializing in high impact video editing and local promotions that connect with your audience.
      Let's tell your story.
    </p>
    <div>
      <Button
        size="lg"
        onClick={() => scrollToSection("contact")}
        className="bg-sky-500 cursor-pointer hover:bg-sky-600 text-lg rounded-full px-8 py-6 transition-colors"
      >
        Let's Collaborate
      </Button>
    </div>
  </section>
);

export default Hero;
