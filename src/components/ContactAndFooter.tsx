import React from "react";
import { Instagram, Youtube, Facebook, Mail } from "lucide-react";
import { FaTwitter } from "react-icons/fa";

const ContactAndFooter: React.FC = () => (
  <>
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-slate-300">
        Connect with us on <span className="text-sky-400">social media</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          { 
            icon: <Instagram className="text-pink-500" />, 
            label: "Instagram", 
            link: "https://www.instagram.com/padrauna.streets/",
            color: "hover:border-pink-500"
          },
          { 
            icon: <Youtube className="text-red-600" />, 
            label: "YouTube", 
            link: "https://youtube.com/@vlogswithme.16?si=UTmapQlst6Ld6GER",
            color: "hover:border-red-500"
          },
          { 
            icon: <Facebook className="text-blue-600" />, 
            label: "Facebook", 
            link: "https://www.facebook.com/share/1GkZneQ3AA/?mibextid=wwXIfr",
            color: "hover:border-blue-500"
          },
          { 
            icon: <Mail className="text-green-500" />, 
            label: "Email", 
            link: "mailto:mystreets16@gmail.com",
            color: "hover:border-green-500"
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target={item.link.startsWith('mailto:') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className={`p-6 rounded-2xl border border-gray-700 ${item.color} text-center hover:scale-105 transition-all block`}
          >
            <div className="flex justify-center mb-2">{item.icon}</div>
            <span className="text-white font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </section>

    <footer className="border-t border-gray-800 mt-20 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center">
        <p className="text-gray-400 text-sm mb-3 md:mb-0">
          Made with <span className="text-red-500">❤️</span> by <span className="text-white font-medium">AdityaXdev</span>
        </p>
        <p className="text-gray-400 text-sm mb-3 md:mb-0">
          <span className="text-sky-400">© padrauna.streets</span> All rights reserved.
        </p>
        <a href="https://x.com/adityakush_04" target="_blank" className="text-gray-400 hover:text-sky-400 transition-colors">
          <FaTwitter className="text-lg" />
        </a>
      </div>
    </footer>
  </>
);

export default ContactAndFooter;
