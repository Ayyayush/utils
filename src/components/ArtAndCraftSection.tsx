const reflectionCards = [
  { title: "My Blunder", text: "I admit I hurt you. I should have been more careful with your heart." },
  { title: "Your Pain", text: "I see the pain I caused — and I truly regret it." },
  { title: "Reflection", text: "I've thought deeply about my actions and their impact on you." },
  { title: "Learning", text: "This taught me that love needs patience and presence." },
  { title: "Your Worth", text: "You deserve effort, softness, and consistency — always." },
  { title: "Commitment", text: "I'm committed to being better, not just saying sorry." },
  { title: "Forgiveness", text: "I ask for a chance to show my love through actions." },
  { title: "Us", text: "I still believe in us — healing, growing, choosing each other again." },
];

export default function ArtAndCraftSection() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-pink-50/50 via-rose-50/60 to-amber-50/40">

      {/* Ambient Glows */}
      <div className="section-glow-pink top-10 left-10" />
      <div className="section-glow-rose bottom-10 right-10" />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => {
          const elements = ['💕', '🌸', '💗', '🌺'];
          const element = elements[i % elements.length];
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
              {element}
            </span>
          );
        })}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-rose-500 mb-3">
            Honest Reflections
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-rose-900 mb-5 sm:mb-6 px-4 text-shadow-soft">
            From My Heart
          </h2>
          <p className="text-xl sm:text-2xl font-cormorant italic text-rose-700 max-w-3xl mx-auto px-4 leading-relaxed">
            These aren't excuses…<br className="sm:hidden" />
            they're the thoughts that keep floating back to you.
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 sm:mt-24">

          <img
            src="https://images.unsplash.com/photo-1628583338497-0cca0af5bd3e?auto=format&fit=crop&w=1200&q=80"
            className="rounded-3xl h-[240px] w-full object-cover glass-image"
            alt="flowers"
          />

          <div className="glass-card rounded-3xl p-6 flex flex-col justify-center">
            <h4 className="font-semibold text-rose-900 mb-2">Honesty</h4>
            <p className="text-rose-700 text-sm">
              I’ll be upfront about my mistakes.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1651745889672-576f6ac829db?auto=format&fit=crop&w=1200&q=80"
            className="rounded-3xl h-[240px] w-full object-cover glass-image"
            alt="flowers"
          />

          <div className="glass-card rounded-3xl p-6 flex flex-col justify-center">
            <h4 className="font-semibold text-rose-900 mb-2">Empathy</h4>
            <p className="text-rose-700 text-sm">
              I’ll try to understand your perspective.
            </p>
          </div>
        </div>

        {/* Closing Line */}
        <div className="text-center mt-20 sm:mt-24 md:mt-28">
          <p className="text-2xl sm:text-3xl md:text-4xl font-cormorant italic text-rose-900 max-w-4xl mx-auto leading-relaxed px-4">
            I may not be perfect…<br className="sm:hidden" />
            but every feeling here is real.<br />
            And you — you are still my safest place.
          </p>
        </div>

      </div>
    </section>
  );
}
