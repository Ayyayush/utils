import { useState } from "react";
import apology from "../assets/apology.jpeg";
import feelings from "../assets/feelings.jpeg";
import mistakes from "../assets/mistakes.jpeg";
import future from "../assets/future.jpeg";
import promise from "../assets/promise.jpeg";

const STORY_TABS = [
  {
    key: "mistake",
    label: "Where I Went Wrong",
    title: "Where I Went Wrong",
    text: "I messed up. I see that now. I'm sorry for the pain I caused you.",
    img: mistakes,
    position: "center 20%",
  },
  {
    key: "feelings",
    label: "How You Felt",
    title: "How You Felt",
    text: "You're hurt. And I know that's because of me. Your feelings matter.",
    img: feelings,
    position: "center 40%",
  },
  {
    key: "promise",
    label: "What I Promise You",
    title: "What I Promise You",
    text: "I'll try to listen more. To be present. I won't promise perfection — just honest effort.",
    img: promise,
    position: "center 20%",
  },
  {
    key: "future",
    label: "If We Try Again",
    title: "If We Try Again",
    text: "Maybe we can heal. Learn. Choose each other with honesty — one day at a time.",
    img: future,
    position: "center 60%",
  },
];

export default function ApologySection() {
  const [activeStory, setActiveStory] = useState(STORY_TABS[0]);

  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-amber-50/40 via-rose-50/80 to-pink-50/60">

      {/* Ambient Glows */}
      <div className="section-glow-rose top-20 left-10" />
      <div className="section-glow-pink bottom-0 right-0" />

      {/* Floating Elements - Subtle and minimal */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => {
          const elements = ['🌻','💕', '🌸', '🌺', '💗','🌻'];
          const element = elements[i % elements.length];
          return (
            <span
              key={i}
              className="absolute floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${16 + Math.random() * 12}px`,
                animationDelay: `${Math.random() * 12}s`,
                opacity: 0.3,
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
          <p className="text-sm sm:text-base text-rose-500 mb-3 font-cormorant italic">
            this part was hard to write…
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-rose-900 mb-4 sm:mb-5 px-4 text-shadow-soft">
            I'm Sorry
          </h2>
          <p className="text-base sm:text-lg text-rose-700 max-w-2xl mx-auto px-4 leading-relaxed">
            I don't know if these words fix anything.<br />
            I just didn't want to stay silent anymore.
          </p>
        </div>

        {/* Main Apology Card */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">

       
          {/* Text */}
          <div className="glass-card-strong p-8 sm:p-10 order-1 md:order-2">
            <p className="text-sm text-rose-400 mb-3 font-cormorant italic">
              from my heart
            </p>

         <h3 className="text-3xl sm:text-4xl font-playfair text-rose-900 mb-6">
  My Sweetheart…
</h3>

<p className="text-base sm:text-lg text-rose-750 mb-4 leading-relaxed">
  Wo ladka jo uss din baarish mein akele khada tha,  
  aaj phir se thoda sa akela ho gaya hai.
</p>

<p className="text-base sm:text-lg text-rose-750 mb-4 leading-relaxed">
  Bas iss baar…  
  wo chahta hai tum uska haath pakad lo,  
  wo tumhe shikayat ka koi mauka nhi dega
</p>

<p className="text-base sm:text-lg text-rose-750 leading-relaxed">
  Maine galti ki hai — aur main usse maanta hoon. <br/> 
  Jo tum chahti thi mujhse,  
  main wo sahi tareeke se nibha nahi paaya........... 
  Par aane wala har dinn 
  main wo banna chahta hoon jo tumne mujhse chaha hai
</p>


          </div>

          {/* Image */}
          <div className="glass-card overflow-hidden order-2 md:order-1">
            <img
              src={apology}
              alt="apology"
              className="w-full h-[600px] sm:h-[600px] md:h-[500px] object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>

        </div>

        {/* Story Tabs Section */}
        <div className="pt-8 sm:pt-12">

          {/* Tabs - Soft, letter-like chapters */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 flex-wrap px-4">
            {STORY_TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveStory(tab)}
                className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium tab-glow ${
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
                style={{ objectPosition: activeStory.position }}
              />
            </div>

          </div>
        </div>

        {/* Final Note */}
        <div className="text-center pt-12 sm:pt-1 md:pt-20">
          <h2 className="text-3xl sm:text-4xl font-playfair text-rose-900 mb-5 sm:mb-6 px-4">
            Sweetu…
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-rose-700 max-w-2xl mx-auto px-4 leading-relaxed italic font-cormorant">
            I am not perfect, and I don’t expect perfection from you.<br />
            I just want us — choosing each other,<br />
            with honesty, patience, and love.<br />
            Learning, healing, and growing… together.
          </p>
        </div>

      </div>
    </section>
  );
}
