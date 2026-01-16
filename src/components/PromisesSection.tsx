import scn1 from "../assets/scn1.png";
import scn2 from "../assets/scn2.png";
import scn3 from "../assets/scn3.png";

const promises = [
  "I'll try to listen — really listen, not just hear.",
  "I'll work on my anger. More patience. More calm.",
  "I won't let you feel alone, even in silence.",
  "I'll choose peace over ego. Even when it's hard.",
  "I'll protect your heart the way you've protected mine.",
  "I'll grow, even when it's uncomfortable.",
];

export default function PromisesSection() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-rose-50/50 via-pink-50/60 to-amber-50/40">

      {/* Ambient Glows */}
      <div className="section-glow-rose top-10 left-10" />
      <div className="section-glow-pink bottom-10 right-10" />

      {/* Floating Hearts and Flowers - Minimal and calm */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => {
          const elements = ['🌸', '🌺', '💕', '💗', '🌷', '🌻', '🌼'];
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
            what I'll try to do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-rose-900 mb-5 sm:mb-6 px-4 text-shadow-soft">
            I Promise…
          </h2>
          <p className="text-xl sm:text-2xl font-cormorant italic text-rose-700 max-w-3xl mx-auto px-4 leading-relaxed">
            Not perfection.<br />
            Just effort. Honesty.<br />
            And choosing you — every day.
          </p>
        </div>

           {/* Raw, Vulnerable Text Block - Breaking the Grid */}
        <div className="text-center max-w-xl mx-auto mb-20 sm:mb-24 px-6">
          <p className="text-base sm:text-lg font-cormorant text-rose-700 leading-relaxed" style={{ lineHeight: '1.8' }}>
            I'll mess up sometimes.<br />
            I'll forget. I'll fall short.<br />
            But I won't stop trying.<br />
            <br />
            I don't want to keep apologizing for the same things.<br />
            I want to actually change them.
          </p>
        </div>

        {/* Promise Cards */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8">
          {promises.map((text, index) => (
            <div
              key={index}
              className="glass-card w-full sm:w-[280px] md:w-[300px] p-6 sm:p-8 group"
            >
              <p className="text-base sm:text-lg md:text-xl font-cormorant text-rose-700 leading-relaxed">
                {text}
              </p>

              <div className="mt-5 sm:mt-6 h-[2px] w-10 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full group-hover:w-20 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* ================= FLOWER + THOUGHT ROW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-20 sm:mt-24">

          {/* Image 1 */}
          <div className="glass-card overflow-hidden rounded-3xl h-[240px]">
            <img
              src={scn1}
              alt="flowers"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>

          {/* Thought 1 */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-center">
            <h4 className="text-xl font-playfair text-rose-900 mb-3">
              Patience
            </h4>
            <p className="text-base font-cormorant text-rose-700 leading-relaxed">
              I’ll give you space if you need it.
            </p>
            <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full" />
          </div>

          {/* Image 2 */}
          <div className="glass-card overflow-hidden rounded-3xl h-[240px]">
            <img
              src={scn2}
              alt="flowers"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 75%" }}
            />
          </div>

          {/* Thought 2 */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-center">
            <h4 className="text-xl font-playfair text-rose-900 mb-3">
              Effort
            </h4>
            <p className="text-base font-cormorant text-rose-700 leading-relaxed">
              I’ll work hard to earn back your trust.
            </p>
            <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full" />
          </div>

          {/* Image 3 */}
          <div className="glass-card overflow-hidden rounded-3xl h-[240px]">
            <img
              src={scn3}
              alt="romantic flowers"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>

        </div>

        {/* Closing Line */}
        <div className="text-center mt-20 sm:mt-24 md:mt-28">
          <p className="text-2xl sm:text-3xl md:text-4xl font-cormorant italic text-rose-900 max-w-4xl mx-auto leading-relaxed px-4">
            I'll stumble.<br />
            But I won't stop choosing you with honesty.
          </p>
        </div>

      </div>
    </section>
  );
}
