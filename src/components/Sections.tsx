import React from "react";

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
);

export default Sections;
