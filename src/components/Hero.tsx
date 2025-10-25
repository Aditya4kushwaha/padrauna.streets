import React from "react";
import Galaxy from "./Galaxy";
import { FileText } from "lucide-react"; // ✅ Import the icon

interface HeroProps {
  scrollToSection: (id: string) => void;
  Button: React.FC<any>;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, Button }) => (
  <section className="relative text-center py-20 overflow-hidden">
    {/* Galaxy Background */}
    <div className="absolute inset-0 -z-10">
      <Galaxy
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
      />
    </div>

    {/* Hero Content */}
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
      Creating Content for <br className="hidden md:inline" />
      <span className="text-sky-400">Padrauna, Kushinagar</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
      Specializing in high impact video editing and local promotions that connect with your audience.
      Let's tell your story.
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      {/* Let's Collaborate Button */}
<Button
  onClick={() => scrollToSection("contact")}
  className="bg-sky-500 hover:bg-sky-600 text-sky-50 text-base font-medium rounded-full px-6 py-3 transition-all duration-300"
>
  Let's Collaborate
</Button>


      {/* Contact Us Button */}
<a
  href="https://forms.gle/peHUZEUGWM54xdkdA"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] px-6 py-3 rounded-full text-base font-medium transition-all duration-300"
>
  <FileText className="text-purple-500 w-5 h-5" />
  <span>Contact Us</span>
</a>


    </div>
  </section>
);

export default Hero;
