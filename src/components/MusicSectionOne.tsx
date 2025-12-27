import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function MusicSectionOne() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    );
  };

  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50/60 to-amber-50/40">

      {/* Ambient Glows */}
      <div className="section-glow-pink top-0 left-0" />
      <div className="section-glow-rose bottom-0 right-0" />

      {/* Floating Flowers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 16 }).map((_, i) => {
          const flowers = ['🌻', '🌼', '🌺', '🌸'];
          const flower = flowers[i % flowers.length];
          return (
            <span
              key={i}
              className="absolute floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 16}px`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            >
              {flower}
            </span>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Text */}
        <p className="text-xs sm:text-sm tracking-widest text-rose-600 uppercase mb-3">
          Please read this slowly
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold text-[#7a1f3d] mb-5 sm:mb-6 px-4 text-shadow-soft">
          I Messed Up… And I Know It
        </h2>

        <p className="text-base sm:text-lg text-rose-700 leading-relaxed max-w-2xl mx-auto mb-12 sm:mb-16 px-4">
          This song reminds me of you — of the silence, the emotions,
          and everything I couldn't say out loud.
        </p>

        {/* Music Card */}
        <div className="glass-card-strong mx-auto max-w-md overflow-hidden">

          {/* Cover */}
          <div className="relative">
            <img
              src="https://i.imgur.com/2nCt3Sbl.jpg"
              alt="Song cover"
              className="w-full h-64 sm:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Player */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-rose-900 to-rose-950 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-1">
              Heer Toh Badi Sad Hai
            </h3>
            <p className="text-sm text-rose-200">
              Tamasha • Mika Singh
            </p>

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
          </div>

          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/audio/song1.mp3" type="audio/mpeg" />
          </audio>
        </div>

        {/* Closing Line */}
        <p className="mt-12 sm:mt-14 text-lg sm:text-xl text-rose-800 italic font-cormorant max-w-xl mx-auto px-4 leading-relaxed">
          "Meri phatakdi…<br className="sm:hidden" />
          ye gaana udaasi nahi, tumhari gehraai yaad dilata hai."
        </p>
      </div>

    </section>
  );
}
