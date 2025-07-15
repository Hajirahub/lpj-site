// components/WhyUsSection.js

"use client";


export default function WhyUsSection() {
  const features = [
    {
      icon: "🤝",
      title: "Accompagnement personnalisé",
      text: "Des interlocuteurs réels, accessibles et experts. On vous guide avec empathie et précision à chaque étape.",
    },
    {
      icon: "🧠",
      title: "Double expertise",
      text: "Un seul point d’entrée pour vos formalités juridiques et votre visibilité en ligne. Plus simple, plus clair.",
    },
    {
      icon: "📑",
      title: "Formalités simplifiées",
      text: "Des démarches administratives fluides, claires et rapides. Sans jargon, sans stress.",
    },
    {
      icon: "💰",
      title: "Tarifs transparents",
      text: "Des prix clairs et sans frais cachés. Vous savez exactement ce que vous payez, dès le départ.",
    },
  ];

  return (
    <section className="bg-[url('/background.png')] w-full py-20 px-6 md:px-12" id="whyus">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Colonne gauche */}
        <div className="space-y-4">
          <p className="text-[#ff9e29] uppercase tracking-wider text-sm font-semibold">
            Nos services
          </p>
          <h2 className="text-3xl md:text-4xl font-dm-serif text-[#0f2c4f]">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-[#585D56] text-lg font-work max-w-lg">
            Chez La Plume du Juriste, nous accompagnons les entrepreneurs, freelances et dirigeants à sécuriser leur structure et à faire rayonner leur image en ligne. Un seul interlocuteur, deux expertises.
          </p>
        </div>

        {/* Colonne droite - Cartes Features */}
        <div className="space-y-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-md border border-gray-100 transition duration-300 hover:bg-[#fffcf5] hover:shadow-lg group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2c4f] group-hover:text-[#ff9e29]">
                    {feature.title}
                  </h3>
                  <p className="text-[#585D56] font-work text-sm mt-1">
                    {feature.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

<div className="w-full text-center mt-16">
  <p className="text-[#0f2c4f] text-sm md:text-base font-medium opacity-70 mb-1">
    Découvrez notre méthode d’accompagnement
  </p>
    <div className="text-[#0f2c4f] text-2xl animate-bounce">
    ↓
  </div>
</div>

    </section>
  );
}
