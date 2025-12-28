import ourimg1 from "../assets/ourimg1.jpeg";
import ourimg2 from "../assets/ourimg2.jpeg";
import ourimg3 from "../assets/ourimg3.jpeg";
import ourimg4 from "../assets/ourimg4.jpeg";
import ourimg5 from "../assets/ourimg5.jpeg";
import ourimg6 from "../assets/ourimg6.jpeg";
import ourimg7 from "../assets/ourimg7.jpeg";
import ourimg8 from "../assets/ourimg8.jpeg";
import ourimg9 from "../assets/ourimg9.jpeg";




const memories = [
  {
    caption: "You, glowing in your own world",
    image: ourimg4,
    size: "md:col-span-1",
  },
  {
    caption: "The kind of joy I fell for",
    image: ourimg1,
    size: "md:col-span-2 md:row-span-2",
  },
  {
    caption: "This smileeee",
    image: ourimg3,
    size: "md:col-span-1",
  },
  {
    caption: "You in your moment",
    image: ourimg6,
    size: "md:col-span-1",
    position: "object-[50%_20%]",
  },
  {
    caption: "Soft days, softer memories",
    image: ourimg5,
    size: "md:col-span-1",
    position: "object-[50%_60%]",
  },
  {
    caption: "Comfort looks like this",
    image: ourimg9,
    size: "md:col-span-1",
    position: "object-[50%_40%]",
  },
  {
    caption: "Calm joy",
    image: ourimg7,
    size: "md:col-span-1",
    position: "object-[50%_40%]",
  },
  {
    caption: "Quietly holding my heart",
    image: ourimg8,
    size: "md:col-span-1",
    position: "object-[50%_30%]",
  },
  {
    caption: "Us, without trying",
    image: ourimg2,
    size: "md:col-span-1",
    position: "object-[50%_35%]",
  },
];

export default function MemoryGallery() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 px-6 bg-gradient-to-b from-amber-50/50 via-rose-50/60 to-pink-50/70 overflow-hidden">

      {/* Ambient Glows */}
      <div className="section-glow-rose top-0 left-0" />
      <div className="section-glow-pink bottom-0 right-0" />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => {
          const elements = ["💕", "💗", "🌸"];
          return (
            <span
              key={i}
              className="absolute floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${14 + Math.random() * 10}px`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            >
              {elements[i % elements.length]}
            </span>
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-rose-500 mb-3">
            For You, Sweetu
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-rose-900 mb-4 px-4 text-shadow-soft">
            Sweetu, This Is Us
          </h2>

          <p className="font-cormorant text-xl sm:text-2xl text-rose-700 italic px-4">
            Moments that remind me what truly matters — you
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 auto-rows-[240px] sm:auto-rows-[260px] md:auto-rows-[280px]">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${memory.size} glass-card`}
            >
              <img
                src={memory.image}
                alt={memory.caption}
                className={`w-full h-full object-cover ${
                  memory.position || "object-center"
                } transition-transform duration-700 group-hover:scale-110`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-cormorant text-white text-xl sm:text-2xl drop-shadow-2xl">
                  {memory.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
