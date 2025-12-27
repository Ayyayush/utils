import { useEffect, useState } from "react";
import { ChevronDown, Heart } from "lucide-react";

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🌸 Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://proxy.electricblaze.com/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1651745889672-576f6ac829db%3Fixid%3DM3w0Mzc5fDB8MXxzZWFyY2h8MTR8fGZsb3dlcnMlMkMlMjBoZWFydCUyQyUyMGxldHRlcnxlbnwwfDB8fHwxNzY1MzcyNTE3fDA%26ixlib%3Drb-4.1.0%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D50')",
        }}
      />

      {/* 🌫 Soft romantic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-rose-50/70 to-pink-100/80 backdrop-blur-[2px]" />

      {/* Floating Hearts and Flowers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => {
          const elements = ['🌸', '🌺', '💕', '💗', '🌷'];
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

      {/* 💖 Content */}
      <div
        className={`relative z-10 text-center max-w-4xl px-6 transition-all duration-1000 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Top Line */}
        <p className="text-xs sm:text-sm tracking-widest text-rose-600 italic mb-3 uppercase">
          It was my bad…
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold text-[#7a1f3d] mb-5 text-shadow-soft leading-tight">
          My Dearest Sweetu <span className="text-red-600">❤️</span>
        </h1>

        {/* Sub Text */}
        <p className="text-base sm:text-lg md:text-xl text-rose-700 font-cormorant italic mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
          I know I messed up.<br className="sm:hidden" />
          This isn't an excuse…<br className="sm:hidden" />
          just something from my heart. <br className="sm:hidden" />
          Any word here  is not for the sake of having it...It is my prommise to you<br className="sm:hidden" />
          <br/>
          It is just an effort to make you smile

        </p>

        {/* Image Card */}
        <div className="glass-card-strong mx-auto max-w-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583932107899-1c83d76ca2ca?auto=format&fit=crop&w=1400&q=80"
            className="w-full h-[320px] sm:h-[380px] md:h-[440px] object-cover"
            alt="love"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
        </div>

        {/* Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4">
          <button className="px-10 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all">
            Maan Jao ❤️
          </button>

          <button className="px-10 py-3.5 rounded-full glass-card-strong text-rose-700 font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2">
            <Heart size={18} className="fill-rose-500 text-rose-500" />
            Always Yours
          </button>
        </div>

        {/* Bottom Line */}
       <p className="mt-10 sm:mt-12 text-rose-800 text-base sm:text-lg italic font-cormorant max-w-xl mx-auto px-4 leading-relaxed">
  "I am not Perfect…  
  I just want you to know that i will try to be a better person for you with each day moving forward "
</p>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-rose-500">
        <ChevronDown size={32} strokeWidth={2} />
      </div>
    </section>
  );
}
