import {
  Heart,
  Home,
  Users,
  Smile,
  Sparkles,
  Sun,
  Music,
  Camera,
  Coffee,
  Star,
} from "lucide-react";

// Images
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";

const meanings = [
  { icon: Users, title: "My Silly Side", image: img3 },
  { icon: Home, title: "Mere Bachpan ki Dost", image: img2 },
  { icon: Sparkles, title: "My Person", image: img5 },
  { icon: Star, title: "My Serenity", image: img10 },
  { icon: Heart, title: "All of my Heart", image: img1 },
  { icon: Sun, title: "Side by Side", image: img6 },
  { icon: Music, title: "Us,in Motion", image: img8 },
  { icon: Camera, title: "Winter Sunshine", image: img7},
  { icon: Coffee, title: "Wrapped in You", image: img9 },
  { icon: Smile, title: "Home is you", image: img4 },
 { icon: Sparkles, title: "Your Magic", image: img11 },
  { icon: Sparkles, title: "All That Matters", image: img12 },
];

export default function MeaningSection() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-pink-50/70 via-rose-50/50 to-amber-50/60">
      {/* Ambient Glows */}
      <div className="section-glow-pink top-10 right-10" />
      <div className="section-glow-rose bottom-20 left-0" />

      {/* Extra floating flowers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 28 }).map((_, i) => {
          const flowers = ["🌸", "🌷", "💮", "💕", "💗"];
          return (
            <span
              key={i}
              className="absolute floating-element select-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${12 + Math.random() * 18}px`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: 0.85,
              }}
            >
              {flowers[i % flowers.length]}
            </span>
          );
        })}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-18">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-rose-500 mb-3">
            You Are Everything
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-rose-900 px-4 text-shadow-soft">
            What You Mean To Me
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {meanings.map((item, i) => (
            <div key={i} className="relative">
              {/* Stacked paper layers behind the main card */}
              <div
                className="absolute -bottom-6 -right-6 w-full h-full rounded-[28px] pointer-events-none"
                style={{
                  background: "linear-gradient(180deg,#fff6f3,#ffecec)",
                  transform: "rotate(2deg)",
                  boxShadow: "0 20px 40px rgba(122,31,61,0.08)",
                }}
              />
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-[28px] pointer-events-none"
                style={{
                  background: "linear-gradient(180deg,#fffaf8,#fff0ec)",
                  transform: "rotate(1deg)",
                  boxShadow: "0 10px 26px rgba(122,31,61,0.06)",
                }}
              />

              {/* Main paper card */}
              <article
                className="relative overflow-hidden rounded-[28px] bg-[#fffaf8] border border-rose-100
                           shadow-[0_30px_60px_rgba(122,31,61,0.18)] transition-transform duration-500
                           hover:-translate-y-1"
                aria-label={item.title}
              >
                {/* top-left paperclip / pin */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  {/* paperclip SVG styled to look metallic */}
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-md"
                    style={{ transform: "rotate(-15deg)" }}
                  >
                    <path
                      d="M7.5 6.5L16 15c2 2 0 5-3 5s-5-3-3-5L15 9"
                      stroke="#D69CA3"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.5 7.5L15 16c1.5 1.5 0 3.8-2 3.8S11 17 9.5 15.5L7 13"
                      stroke="#F7D9D6"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* image (nostalgic treatment) */}
                <div className="relative h-[260px] sm:h-[300px] overflow-hidden rounded-t-[28px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[1800ms] group-hover:scale-110
                               sepia-[0.24] contrast-95 brightness-95"
                    style={{ transformOrigin: "center" }}
                  />

                  {/* subtle vignette + soft gradient to bottom for label readability */}
                  <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to top, rgba(0,0,0,0.32), rgba(0,0,0,0.06) 40%, transparent 70%)"}} />
                </div>

                {/* content area (keeps the paper feel but compact) */}
                <div className="p-1">
                  {/* MMT-style label on image area (keeps same feel) */}
                  <div className="mt-[-56px]">
                    <div
                      className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/90 border border-rose-200 shadow-sm"
                      style={{ backdropFilter: "blur(6px)" }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-rose-500 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-playfair text-rose-900 text-lg">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  {/* short description placeholder (if you want text under image) */}
                  <div className="mt-4 text-rose-700">
                    {/* keep minimal to preserve MMT look — change if desired */}
                    <p className="text-sm opacity-90">
                      {/* optional subtitle — remove or supply real text if needed */}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Footer quote */}
        <p className="mt-16 sm:mt-20 text-center font-cormorant text-2xl sm:text-3xl md:text-4xl text-rose-900 italic px-4 leading-relaxed max-w-3xl mx-auto">
          You are not just a part of my life…<br className="sm:hidden" />
          you are the reason of my life.
        </p>
      </div>
    </section>
  );
}
