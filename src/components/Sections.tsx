import React from "react";
import { Instagram, Phone } from "lucide-react";
import promo1 from "../assets/promo1.png";
import promo2 from "../assets/promo2.png";
import promo3 from "../assets/promo3.png";
import anoop from "../assets/Anoop.png";
import alok from "../assets/Alok.png";

// Card Components
const Card = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`} {...props} />
);
const CardTitle = ({ className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className}`} {...props} />
);
const CardDescription = ({ className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props} />
);

const Sections: React.FC = () => (
  <>
    {/* Services Section */}
    <section id="services" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        What <span className="text-sky-400">We Offer</span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
        {[
          {
            icon: "📱",
            title: "Social Media • Marketing • Strategy",
            desc: "Comprehensive social media marketing strategies to grow your brand online.",
          },
          {
            icon: "🎥",
            title: "Reels • Ads • Video Editing",
            desc: "Creative reels, ads, and video content to engage your audience effectively.",
          },
        ].map((s, i) => (
          <div key={i}>
            <Card className="bg-gray-900/50 border border-gray-700 h-full flex flex-col items-center text-center p-6 hover:border-sky-500 transition-colors">
              <div className="text-5xl mb-4">{s.icon}</div>
              <CardTitle className="text-2xl text-white mb-2">{s.title}</CardTitle>
              <CardDescription className="text-gray-400">{s.desc}</CardDescription>
            </Card>
          </div>
        ))}
      </div>
    </section>



    

    {/* Work Section */}
    <section id="work" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-sky-400">Promotional Works</span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10">
        {[
          {
            img: promo1,
            title: "Kushwaha Medical Store",
            link: "https://www.instagram.com/padrauna.streets/reel/DPIjeWkD9wR/",
            platform: "Instagram"
          },
          {
            img: promo2,
            title: "Car Booking for Events",
            link: "https://www.instagram.com/padrauna.streets/reel/DPtHUdCDx7s/",
            platform: "Instagram"
          },
          {
            img: promo3,
            title: "Shops promotion",
            link: "https://www.instagram.com/padrauna.streets/reel/CzIT4t1ReVP/",
            platform: "Instagram"
          }
        ].map((work, i) => (
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
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white text-center p-4">
              <p className="text-lg font-semibold">{work.title}</p>
              <p className="text-sky-400">{work.platform}</p>
              <div className="mt-3 text-pink-500">
                <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>





    {/* Team Section */}
    <section id="team" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Meet Our <span className="text-sky-400">Team</span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
        {[
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
        ].map((m, i) => (
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
  </>
);

export default Sections;
