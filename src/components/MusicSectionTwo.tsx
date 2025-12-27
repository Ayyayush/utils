import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import img9 from "../assets/img9.jpeg";

// ✅ import local audio
import aud2 from "../assets/aud2.mp3";

export default function MusicSectionTwo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;

    const duration = audioRef.current.duration || 0;
    if (duration === 0) return;

    setProgress((audioRef.current.currentTime / duration) * 100);
  };

  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-amber-50/40 via-rose-50/60 to-pink-50/50">

      {/* Ambient Glows */}
      <div className="section-glow-rose top-0 left-0" />
      <div className="section-glow-pink bottom-0 right-0" />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => {
          const elements = ["🎵", "🎶", "💕", "✨"];
          return (
            <span
              key={i}
              className="absolute floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${16 + Math.random() * 12}px`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            >
              {elements[i % elements.length]}
            </span>
          );
        })}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-rose-500 mb-3">
            Our Song
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-rose-900 mb-4 px-4 text-shadow-soft">
            The One We Chose Together
          </h2>
        </div>

        {/* Music Card */}
        <div className="glass-card-strong overflow-hidden mx-auto max-w-lg">

          <div className="relative">
            <img
              src={img9}
              className="w-full h-72 sm:h-80 object-cover"
              alt="music"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          <div className="p-6 sm:p-8 text-center bg-gradient-to-b from-rose-900 to-rose-950 text-white">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-1">
              Oo Rangrez
            </h3>

            {/* Progress */}
            <div className="mt-5 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-400 to-rose-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={togglePlay}
                className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all shadow-lg"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="text-white" size={24} />
                ) : (
                  <Play className="text-white ml-1" size={24} />
                )}
              </button>
            </div>

            <p className="mt-6 text-base sm:text-lg italic text-rose-200 leading-relaxed">
              "Humne decide kiya tha na…<br className="sm:hidden" />
              iss gaane pe saath dance karenge. We will 💗"
            </p>
          </div>

          {/* ✅ Local audio */}
          <audio
            ref={audioRef}
            src={aud2}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
          />
        </div>

        {/* Closing Message */}
        <div className="mt-20 sm:mt-28 md:mt-32 text-center">
          <h2 className="text-3xl sm:text-4xl font-playfair text-rose-900 mb-5 sm:mb-6 px-4">
            Bas ek hi baat…
          </h2>
          <p className="text-lg sm:text-xl text-rose-700 max-w-2xl mx-auto leading-relaxed px-4 font-cormorant italic">
            Main galat ho sakta hoon…<br className="sm:hidden" />
            par jo mehsoos karta hoon, wo kabhi jhooth nahi hota.<br />
            Agar tum saath ho — toh sab theek ho sakta hai.
          </p>
        </div>
      </div>
    </section>
  );
}
