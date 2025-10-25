import React from "react";
import { Instagram, Youtube, Facebook, FileText, Globe } from "lucide-react";
import { FaTwitter } from "react-icons/fa";

const ContactAndFooter: React.FC = () => (
  <>
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-slate-300">
        Connect with us on <span className="text-sky-400">social media</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
            icon: <FileText className="text-purple-500" />, 
            label: "Contact us", 
            link: "https://forms.gle/peHUZEUGWM54xdkdA",
            color: "hover:border-purple-500"
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
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
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-white font-medium">AdityaXdev</span>
        </p>

        <p className="text-gray-400 text-sm mb-3 md:mb-0">
          <span className="text-sky-400">© padrauna.streets</span> All rights reserved.
        </p>

        <div className="flex items-center gap-3 text-gray-400">
          <span className="text-sm text-gray-400">Connect with me :</span>
          <a
            href="https://x.com/adityakush_04"
            target="_blank"
            className="hover:text-sky-400 transition-colors"
          >
            <FaTwitter className="text-lg" />
          </a>
          <a
            href="https://portfolio-rose-three-24.vercel.app/"
            target="_blank"
            className="hover:text-sky-400 transition-colors"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  </>
);

export default ContactAndFooter;
