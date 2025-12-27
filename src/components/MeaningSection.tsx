import { Heart, Home, Users, Smile, Sparkles } from "lucide-react";

const meanings = [
  {
    icon: Heart,
    title: "My Peace",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Home,
    title: "My Home",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Users,
    title: "My Oldest Friend",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Smile,
    title: "My Smile",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Sparkles,
    title: "My Strength",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function MeaningSection() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-pink-50/60 via-rose-50/40 to-amber-50/50">

      {/* Ambient Glows */}
      <div className="section-glow-pink top-10 right-10" />
      <div className="section-glow-rose bottom-20 left-0" />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => {
          const elements = ['💕', '💗', '✨', '🌟', '💫'];
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

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-rose-500 mb-3">
            You Are Everything
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-rose-900 px-4 text-shadow-soft">
            What You Mean To Me
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {meanings.map((item, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden group"
            >
              {/* Image */}
              <div className="h-48 sm:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex items-center gap-4 bg-white/70 backdrop-blur-lg">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                <p className="text-lg sm:text-xl font-playfair text-rose-900">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="mt-20 sm:mt-24 text-center font-cormorant text-2xl sm:text-3xl md:text-4xl text-rose-900 italic px-4 leading-relaxed max-w-3xl mx-auto">
          You are not just a part of my life…<br className="sm:hidden" />
          you are my habit.
        </p>
      </div>
    </section>
  );
}
