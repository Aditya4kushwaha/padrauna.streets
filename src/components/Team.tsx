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
      bio: "Alok is behind our creative and amazing video that we see on our page.",
    },
  ];

  return (
    <section id="team" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Meet Our <span className="text-sky-400">Team</span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
        {members.map((m, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center border border-gray-700 rounded-xl p-8 gap-8 hover:border-sky-500 transition-colors"
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-48 h-48 rounded-full border-4 border-sky-500 object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold">{m.name}</h3>
              <p className="text-sky-400 mb-2">{m.title}</p>
              <p className="text-gray-300">{m.bio}</p>
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                <a href={m.insta} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                  <Instagram className="text-pink-500" />
                </a>
                <a href={`tel:${m.phone}`} className="hover:text-green-400 transition-colors">
                  <Phone className="text-green-500" />
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
