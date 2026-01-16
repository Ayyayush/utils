import { Heart } from "lucide-react";

export default function FinalMessageSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1707321580530-d4f7d303206c?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover opacity-40"
          alt="love-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-rose-50/70 to-pink-100/80" />
      </div>

      {/* Ambient Glows */}
      <div className="section-glow-pink top-20 left-20" />
      <div className="section-glow-rose bottom-20 right-20" />

      {/* Floating Elements - Gentle and sparse */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => {
          const elements = ["💕", "💗", "🌸", "🌺", "✨"];
          const element = elements[i % elements.length];
          return (
            <span
              key={i}
              className="absolute floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${14 + Math.random() * 12}px`,
                animationDelay: `${Math.random() * 12}s`,
                opacity: 0.25,
              }}
            >
              {element}
            </span>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 sm:py-32 text-center">

        {/* Main Message Card */}
        <div className="glass-card-strong p-8 sm:p-12 md:p-16 mb-10">

          <p className="text-sm sm:text-base text-rose-500 mb-4 font-cormorant italic">
            from my heart to yours
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair text-rose-900 mb-6 sm:mb-8 text-shadow-soft">
            Miss Akshita…
          </h1>

        
         <p className="text-lg sm:text-xl md:text-2xl text-rose-800 leading-relaxed mb-8 sm:mb-10 font-cormorant">
       Tum saath ho toh zindagi thodi aur khoobsurat lagti hai.<br />
Main khud mein poora nahi hoon…<br />
par jo bhi yahan hai, wo sirf tumhare liye hai.
          </p>

          {/* Buttons - No Pressure */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-8">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-card text-rose-700 font-semibold hover:scale-105 transition-all">
              Whenever you’re ready. Truly🌻
            </button>

            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 fill-white" />
              Always Yours
            </button>
          </div>

          {/* Divider */}
          <div className="w-20 h-[2px] bg-gradient-to-r from-rose-300 to-pink-300 rounded-full mx-auto mb-6" />

          {/* Footer Quote */}
          <p className="text-xl sm:text-2xl text-rose-700 italic font-cormorant leading-relaxed">
             
            "Tum ho toh gaata hai dil…<br className="sm:hidden" />
            Tum nhi toh geet kahan"

            
          </p>
        </div>
   {/* Final Closing Line */}
        <p className="text-base sm:text-lg text-rose-600 italic font-cormorant mb-12">
          This isn't just an apology.<br />
          It's my truth, my heart, and my hope.<br />
          I just want you to smile 🌻
        </p>

      {/* 🌙 POEM STANZA (BOTTOM) */}
<p
  className="text-center font-cormorant italic leading-relaxed"
  style={{
    color: "#d49a2a",
    fontSize: "clamp(15px, 4vw, 21px)",
    textShadow: "0 2px 8px rgba(212,154,42,0.45)",
  }}
>
  Ek dinn aap yunn humko mil jayenge <br />
  Phool hi Phool raahon mein khil jayenge 💗
</p>

      

      </div>
    </section>
  );
}
