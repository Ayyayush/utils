import { useState } from "react";

const STORY_TABS = [
  {
    key: "mistake",
    label: "My Mistake",
    title: "My Mistake",
    text: "I messed up, and I'm truly sorry for the pain I've caused you.",
    img: "https://proxy.electricblaze.com/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1613758812084-4e2be896fd04%3Fixid%3DM3w0Mzc5fDB8MXxzZWFyY2h8MTl8fGZsb3dlcnMlMkMlMjBoZWFydCUyQyUyMGxldHRlcnxlbnwwfDB8fHwxNzY1MzcyNTE3fDA%26ixlib%3Drb-4.1.0%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D50&e=1770336000&s=OYn_yfISj_cp5yw61Sj2DqnOMFnGsuH3McflI5cYPTc",
  },
  {
    key: "feelings",
    label: "Your Feelings",
    title: "Your Feelings",
    text: "I understand that you're hurt, and your feelings are completely valid.",
    img: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "promise",
    label: "My Promise",
    title: "My Promise",
    text: "I promise to listen better, grow, and never take you for granted again.",
    img: "https://proxy.electricblaze.com/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1660918262717-b08af8df4d82%3Fixid%3DM3w0Mzc5fDB8MXxzZWFyY2h8MjN8fGZsb3dlcnMlMkMlMjBoZWFydCUyQyUyMGxldHRlcnxlbnwwfDB8fHwxNzY1MzcyNTE3fDA%26ixlib%3Drb-4.1.0%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D50&e=1770336000&s=8HTNXqliF4lyvPhlSp9qOj3YeDrdyRnxkqSh3cX7iOE",
  },
  {
    key: "future",
    label: "Our Future",
    title: "Our Future",
    text: "I hope we can heal, rebuild, and choose each other again — every day.",
    img: "https://proxy.electricblaze.com/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1536953784228-c8aeb3efb458%3Fixid%3DM3w0Mzc5fDB8MXxzZWFyY2h8MTV8fGZsb3dlcnMlMkMlMjBoZWFydCUyQyUyMGxldHRlcnxlbnwwfDB8fHwxNzY1MzcyNTE3fDA%26ixlib%3Drb-4.1.0%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D50&e=1770336000&s=gFU6xBrxyGjX92_QYP_Kj9p9fSS08fQSsQjQyhoF07o",
  },
];

export default function ApologySection() {
  const [activeStory, setActiveStory] = useState(STORY_TABS[0]);

  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-amber-50/40 via-rose-50/80 to-pink-50/60">

      {/* Ambient Glows */}
      <div className="section-glow-rose top-20 left-10" />
      <div className="section-glow-pink bottom-0 right-0" />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => {
          const elements = ['💕', '🌸', '🌺', '💗'];
          const element = elements[i % elements.length];
          return (
            <span
              key={i}
              className="absolute floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${18 + Math.random() * 14}px`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            >
              {element}
            </span>
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-rose-500 mb-3">
            This part was hard to write…
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-rose-900 mb-4 sm:mb-5 px-4 text-shadow-soft">
            A Sincere Sorry
          </h2>
          <p className="text-base sm:text-lg text-rose-700 max-w-2xl mx-auto px-4 leading-relaxed">
            I'm not proud of what happened, but I am committed to making amends.
          </p>
        </div>

        {/* Main Apology Card */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">

          {/* Image */}
          <div className="glass-card overflow-hidden order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1625480886337-3d5d5a395577"
              className="w-full h-[300px] sm:h-[380px] md:h-[420px] object-cover"
              alt="apology"
            />
          </div>

          {/* Text */}
          <div className="glass-card-strong p-8 sm:p-10 order-1 md:order-2">
            <p className="text-xs uppercase tracking-widest text-rose-400 mb-3">
              From My Heart
            </p>

            <h3 className="text-3xl sm:text-4xl font-playfair text-rose-900 mb-6">
              My Sweetu…
            </h3>

            <p className="text-base sm:text-lg text-rose-800 mb-4 leading-relaxed">
              Wo ladka jo uss din baarish mein akele khada tha,
              aaj phir se thoda akela hai.
            </p>

            <p className="text-base sm:text-lg text-rose-800 mb-4 leading-relaxed">
              Bas iss baar… wo chahta hai tum uska haath pakad lo.
            </p>

            <p className="text-base sm:text-lg text-rose-700 leading-relaxed">
              Maine galti ki hai. Par tumhari value kabhi kam nahi hui.
            </p>
          </div>
        </div>

        {/* Story Tabs Section */}
        <div className="pt-8 sm:pt-12">

          {/* Tabs */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 flex-wrap px-4">
            {STORY_TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveStory(tab)}
                className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeStory.key === tab.key
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg scale-105"
                    : "glass-card text-rose-700 hover:scale-105"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">

            {/* Text */}
            <div className="px-4 order-2 md:order-1">
              <h3 className="text-3xl sm:text-4xl font-playfair text-rose-900 mb-5 sm:mb-6">
                {activeStory.title}
              </h3>

              <p className="text-lg sm:text-xl text-rose-700 leading-relaxed">
                {activeStory.text}
              </p>
            </div>

            {/* Image */}
            <div className="glass-card overflow-hidden order-1 md:order-2">
              <img
                src={activeStory.img}
                alt={activeStory.title}
                className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover transition-all duration-500"
              />
            </div>

          </div>
        </div>

        {/* Final Note */}
        <div className="text-center pt-16 sm:pt-20 md:pt-24">
          <h2 className="text-3xl sm:text-4xl font-playfair text-rose-900 mb-5 sm:mb-6 px-4">
            Sweetu…
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-rose-700 max-w-2xl mx-auto px-4 leading-relaxed italic font-cormorant">
            I don't want perfection.<br className="sm:hidden" />
            I just want us — honest, healing, and together.
          </p>
        </div>

      </div>
    </section>
  );
}
