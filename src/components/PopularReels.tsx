import React from "react";
import { Instagram } from "lucide-react";

import reel1 from "../assets/reel1.png";
import reel2 from "../assets/reel2.png";
import reel3 from "../assets/reel3.png";

const PopularReels: React.FC = () => {
  const reels = [
    { img: reel1, link: "https://www.instagram.com/padrauna.streets/reel/DKRvcNDvtkI/", title: "Sunny dancer meetup", views: "3M+ views" },
    { img: reel2, link: "https://www.instagram.com/padrauna.streets/reel/DCVk3vUP4-z/", title: "Shardi ka aatank", views: "37M+ views" },
    { img: reel3, link: "https://www.instagram.com/padrauna.streets/reel/C6vurAwxnGR/", title: "Kushinagar Medical College", views: "480K+ views" },
  ];

  return (
    <section id="reels" className="py-20 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Most <span className="text-sky-400">Popular Reels</span>
      </h2>

      {/* Reel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
        {reels.map((reel, i) => (
          <a
            key={i}
            href={reel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-xl overflow-hidden border border-gray-700 hover:border-sky-500 transition-all group hover:scale-105"
          >
            <img
              src={reel.img}
              alt={reel.title}
              className="w-full h-72 object-cover rounded-xl"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white text-center p-4">
              <p className="text-lg font-semibold">{reel.title}</p>
              <p className="text-sky-400">{reel.views}</p>
              <Instagram className="mt-3 text-pink-500" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PopularReels;
