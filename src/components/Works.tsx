import React from "react";
import promo1 from "../assets/promo1.png";
import promo2 from "../assets/promo2.png";
import promo3 from "../assets/promo3.png";

const Works: React.FC = () => {
  const works = [
    {
      img: promo1,
      title: "Kushwaha Medical Store",
      link: "https://www.instagram.com/padrauna.streets/reel/DPIjeWkD9wR/",
      platform: "Instagram",
    },
    {
      img: promo2,
      title: "Car Booking for Events",
      link: "https://www.instagram.com/padrauna.streets/reel/DPtHUdCDx7s/",
      platform: "Instagram",
    },
    {
      img: promo3,
      title: "Shops promotion",
      link: "https://www.instagram.com/padrauna.streets/reel/CzIT4t1ReVP/",
      platform: "Instagram",
    },
  ];

  return (
    <section id="work" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-sky-400">Promotional Works</span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10">
        {works.map((work, i) => (
          <a
            key={i}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-xl overflow-hidden border border-gray-700 hover:border-sky-500 transition-all group hover:scale-105"
          >
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white text-center p-4">
              <p className="text-lg font-semibold">{work.title}</p>
              <p className="text-sky-400">{work.platform}</p>
              <div className="mt-3 text-pink-500">
                <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 ..."/>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Works;
