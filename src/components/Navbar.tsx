import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Galaxy from "./Galaxy";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "services", label: "Services", color: "hover:text-sky-400" },
    { href: "work", label: "My Work", color: "hover:text-sky-400" },
    { href: "team", label: "Team", color: "hover:text-sky-400" },
    { href: "reels", label: "Reels", color: "hover:text-sky-400" },
    { href: "contact", label: "Contact", color: "hover:text-sky-400" },
  ];

  const handleClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      {/* Galaxy background for navbar */}
      <div className="absolute inset-0 -z-10 opacity-60">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={0.8}
          glowIntensity={0.3}
          saturation={0.5}
          hueShift={200}
        />
      </div>

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-bold cursor-pointer text-white hover:text-sky-400 transition-all hover:scale-105"
        >
          padrauna.streets
        </a>

        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-gray-300 ${link.color} transition-all hover:-translate-y-1`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-sky-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90 py-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`text-gray-300 ${link.color} transition-colors`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
