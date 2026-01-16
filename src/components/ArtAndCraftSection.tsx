import art1 from "../assets/art1.jpeg";
import art2 from "../assets/art2.jpeg";
import art3 from "../assets/art3.jpeg";

const reflectionCards = [
  { title: "My Blunder", text: "I hurt you. I should have been more careful with your heart." },
  { title: "Your Pain", text: "I see the pain I caused. I truly regret it." },
  { title: "Reflection", text: "I've thought about what I did — and who I want to be for you." },
  { title: "Learning", text: "Love needs patience. And presence. I'm learning that." },
  { title: "Your Worth", text: "You deserve effort, softness, and honesty — always." },
  { title: "Growth", text: "I want to be better. Not just say it — actually be it." },
];

export default function ArtAndCraftSection() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-pink-50/50 via-rose-50/60 to-amber-50/40">

      {/* Ambient Glows */}
      <div className="section-glow-pink top-10 left-10" />
      <div className="section-glow-rose bottom-10 right-10" />

     {/* Floating Hearts and Flowers - Gentle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => {
          const elements = ['🌸', '🌺', '💕', '💗', '🌷',"🌻", "🌼"];
          const element = elements[i % elements.length];
          return (
            <span
              key={i}
              className="absolute opacity-25 floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${14 + Math.random() * 14}px`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${20 + Math.random() * 15}s`,
              }}
            >
              {element}
            </span>
          );
        })}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <p className="text-sm sm:text-base text-rose-500 mb-3 font-cormorant italic">
            honest reflections
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-rose-900 mb-5 sm:mb-6 px-4 text-shadow-soft">
            From My Heart
          </h2>
          <p className="text-xl sm:text-2xl font-cormorant italic text-rose-700 max-w-3xl mx-auto px-4 leading-relaxed">
            These aren't excuses.<br />
            Just thoughts that keep floating back to you.
          </p>
        </div>

        {/* Reflection Cards */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8">
          {reflectionCards.map((item, index) => (
            <div
              key={index}
              className="glass-card w-full sm:w-[280px] md:w-[300px] p-6 sm:p-8 group"
            >
              <h3 className="text-xl sm:text-2xl font-playfair text-rose-900 mb-3 sm:mb-4">
                {item.title}
              </h3>

              <p className="text-base sm:text-lg font-cormorant text-rose-700 leading-relaxed">
                {item.text}
              </p>

              <div className="mt-5 sm:mt-6 h-[2px] w-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full group-hover:w-20 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* ================= IMAGE + THOUGHT ROW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-20 sm:mt-24">

          {/* Image 1 */}
          <div className="glass-card overflow-hidden rounded-3xl h-[240px]">
            <img
              src={art1}
              alt="creative desk aesthetic"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thought 1 */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-center">
            <h4 className="text-xl font-playfair text-rose-900 mb-3">
              Honesty
            </h4>
            <p className="text-base font-cormorant text-rose-700 leading-relaxed">
              I’ll be upfront about my mistakes.
            </p>
            <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full" />
          </div>

          {/* Image 2 – ART STUDIO */}
          <div className="glass-card overflow-hidden rounded-3xl h-[240px]">
            <img
              src={art2}
              alt="art studio workspace"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thought 2 */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-center">
            <h4 className="text-xl font-playfair text-rose-900 mb-3">
              Empathy
            </h4>
            <p className="text-base font-cormorant text-rose-700 leading-relaxed">
              I’ll try to understand your world — not overwrite it.
            </p>
            <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full" />
          </div>

          {/* Image 3 – COZY CREATIVE SPACE */}
          <div className="glass-card overflow-hidden rounded-3xl h-[240px]">
            <img
              src={art3}
              alt="cozy creative corner"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Closing Line */}
        <div className="text-center mt-20 sm:mt-24 md:mt-28">
          <p className="text-2xl sm:text-3xl md:text-4xl font-cormorant italic text-rose-900 max-w-4xl mx-auto leading-relaxed px-4">
            I'm not perfect.<br />
            But every feeling here is real.<br />
            And you are still my safest place.
          </p>
        </div>

      </div>
    </section>
  );
}
