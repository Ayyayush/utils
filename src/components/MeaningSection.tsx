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
  {
    icon: Smile,
    title: "My Silly Side",
    image: img3,
    position: "center 50%",
  },
  {
    icon: Users,
    title: "Mere Bachpan Ki Dost",
    image: img2,
    position: "center 25%",
  },
  {
    icon: Heart,
    title: "My Person",
    image: img5,
    position: "center",
  },
  {
    icon: Star,
    title: "My Serenity",
    image: img10,
    position: "center 65%",
  },
  {
    icon: Heart,
    title: "All of My Heart",
    image: img1,
    position: "center",
  },
  {
    icon: Sun,
    title: "Side by Side",
    image: img6,
    position: "center 50%",
  },
  {
    icon: Music,
    title: "Us, In Motion",
    image: img8,
    position: "center",
  },
  {
    icon: Camera,
    title: "Winter Sunshine",
    image: img7,
    position: "center 18%",
  },
  {
    icon: Coffee,
    title: "Wrapped in You",
    image: img9,
    position: "center",
  },
  {
    icon: Home,
    title: "Home Is You",
    image: img4,
    position: "center",
  },
  {
    icon: Sparkles,
    title: "Your Magic",
    image: img11,
    position: "center 60%",
  },
  {
    icon: Sparkles,
    title: "All That Matters",
    image: img12,
    position: "center 50%",
  },
];

import { useEffect, useRef, useState } from "react";


function AnimatedPoem({ lines }) {
  const [activeLine, setActiveLine] = useState(-1);

  useEffect(() => {
    let timeout;

    if (activeLine < lines.length - 1) {
      timeout = setTimeout(() => {
        setActiveLine((prev) => prev + 1);
      }, 1700); // time between lines
    } else {
      // pause after last line, then restart
      timeout = setTimeout(() => {
        setActiveLine(-1);
      }, 2600);
    }

    return () => clearTimeout(timeout);
  }, [activeLine, lines.length]);

  return (
    <div className="text-center font-cormorant italic leading-relaxed">
      {lines.map((line, index) => (
        <p
          key={index}
          className={`transition-all duration-700 ease-out
            ${
              index <= activeLine
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }
          `}
          style={{
            color: "#d49a2a", // 🌻 soft warm yellow (not harsh)
            fontSize: "clamp(15px, 4vw, 21px)", // mobile friendly
         textShadow: "0 2px 8px rgba(212,154,42,0.45)",
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}


export default function MeaningSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-rose-50/70 to-amber-50/60" />
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-pink-300/30 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[460px] h-[460px] bg-rose-300/30 blur-[180px]" />

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 36 }).map((_, i) => {
          const flowers = ["🌸","🌻","🌻","🌻", "💮", "🌼", "💕", "💗"];
          return (
            <span
              key={i}
              className="absolute floating-element select-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${12 + Math.random() * 22}px`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: 0.9,
              }}
            >
              {flowers[i % flowers.length]}
            </span>
          );
        })}
      </div>


      

      {/* Floating Hearts and Flowers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => {
          const elements = ['🌸', '🌺', '💕', '💗', '🌷',"🌻", "🌼"];
          const element = elements[i % elements.length];
          return (
            <span
              key={i}
              className="absolute opacity-50 floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${16 + Math.random() * 20}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            >
              {element}
            </span>
          );
        })}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-rose-500 mb-3">
            You Are Everything
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-rose-900 text-shadow-soft">
            What You Mean To Me
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {meanings.map((item, i) => (
            <div
              key={i}
              className="relative transition-transform duration-500 hover:-translate-y-1"
            >
              {/* Paper stack */}
              <div className="absolute -bottom-8 -right-8 w-full h-full rounded-[28px] bg-[#fdf1ec]
                rotate-[2.5deg] shadow-[0_30px_60px_rgba(122,31,61,0.20)]" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[28px] bg-[#fff4f0]
                rotate-[1.2deg] shadow-[0_18px_36px_rgba(122,31,61,0.14)]" />

              {/* Card */}
              <article className="relative rounded-[28px] bg-[#fffaf8] border border-rose-100
                shadow-[0_28px_70px_rgba(122,31,61,0.25)] overflow-hidden">

                {/* Image */}
                <div className="relative h-[260px] sm:h-[300px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover sepia-[0.22] contrast-95 brightness-95"
                    style={{
                      objectPosition: item.position || "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />
                </div>

                {/* Label */}
              <div className="absolute bottom-0 right-0 flex justify-center">
  <div className="inline-flex items-center gap-2 px-4 py-1.5
    rounded-full bg-white/70 backdrop-blur-md
    border border-rose-200/60 shadow-sm">

    <item.icon className="w-4 h-4 text-rose-500" />

    <span className="font-playfair text-sm sm:text-base text-rose-900 tracking-wide">
      {item.title}
    </span>

    {/* subtle romantic underline */}
    <span className="absolute -bottom-[2px] left-1/2 -translate-x-1/2
      h-[2px] w-10 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full" />
  </div>
</div>

              </article>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-20 text-center font-cormorant text-2xl sm:text-3xl text-rose-900 italic leading-relaxed max-w-3xl mx-auto">
          You are not just a part of my life…<br />
          you are the warmth behind every smile I carry.
        </p>




{/* ❤️ POEM STANZA — MODERN SPOTLIGHT */}
<div className="mt-24 flex justify-center px-4">
  <div className="relative max-w-2xl w-full">

    {/* Ambient glow */}
    <div className="absolute -inset-6 bg-gradient-to-br from-amber-200/40 via-rose-200/30 to-pink-200/40 blur-3xl rounded-full" />

    {/* Poem Card */}
    <div
      className="
        relative
        px-6 sm:px-10 py-10
        rounded-[32px]
        backdrop-blur-xl
        shadow-[0_40px_100px_rgba(122,31,61,0.25)]
      "
      style={{
        background:
          "linear-gradient(135deg, rgba(255,248,235,0.75), rgba(255,235,220,0.65))",
      }}
    >

      {/* Inner highlight */}
      <div className="absolute inset-0 rounded-[32px] ring-1 ring-amber-200/40 pointer-events-none" />

      <AnimatedPoem
        lines={[
          "Tujh Bin Suraj Mein Aag Nahi Re",
          "Tujh Bin Koyal Mein Raag Nahi Re",
          "Tujh Bin Jaage Bhi Jaag Nahi Re",
          "Jism Ye Kya Hai Khokhli Shipi",
          "Rooh da Moti Hai Tu",
        ]}
      />

    </div>
  </div>
</div>

      </div>
    </section>
  );
}
