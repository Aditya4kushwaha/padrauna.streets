import React from "react";
import { Instagram, Phone } from "lucide-react";
import anoop from "../assets/Anoop.png";
import alok from "../assets/Alok.png";

const Team: React.FC = () => {
  const members = [
    {
      name: "Anoop Kushwaha",
      title: "Content Strategist & Manager",
      img: anoop,
      insta: "https://www.instagram.com/im.anoop6/",
      phone: "+917275870666",
      bio: "Anoop is the mastermind behind our captivating content strategies.",
    },
    {
      name: "Alok Singh",
      title: "Lead Video Editor",
      img: alok,
      insta: "https://www.instagram.com/itz_alok_r15/?igsh=dXJqZ3Z5ODg1NHQz#",
      phone: "+918009746098",
      bio: "Alok is behind our creative and amazing videos that bring our vision to life.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Meet Our <span className="text-sky-400">Team</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 sm:px-10 lg:px-20">
        {members.map((m, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row lg:flex-row items-center lg:items-start border border-gray-700 rounded-2xl p-6 sm:p-8 gap-6 sm:gap-8 hover:border-sky-500 transition-colors bg-gray-900/40"
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={m.img}
                alt={m.name}
                className="w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full border-4 border-sky-500 object-cover"
              />
            </div>

            {/* Info */}
            <div className="text-center md:text-left mt-4 md:mt-0 flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold">{m.name}</h3>
              <p className="text-sky-400 mb-2 text-base sm:text-lg">
                {m.title}
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {m.bio}
              </p>

              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                <a
                  href={m.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-pink-500" />
                </a>
                <a
                  href={`tel:${m.phone}`}
                  className="hover:text-green-400 transition-colors"
                >
                  <Phone className="w-6 h-6 text-green-500" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
