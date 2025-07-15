import Header from "../components/Header";
import WhyUsSection from "../components/WhyUsSection";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ArticlesSection from "../components/ArticlesSection";
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* ✅ FOND IMAGE : header + bloc slogan */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-header.png')" }}
      >
        <Header />

        <main className="text-white min-h-screen flex flex-col items-center justify-center px-6 pt-0 text-center bg-opacity-90">
          
          {/* Petit slogan */}
          <p className="text-[#5A9eef] text-sm uppercase tracking-wide mb-3 font-work">
            Entreprenez en toute sérénité
          </p>

          {/* Grand slogan */}
          <h1 className="text-3xl md:text-5xl mb-4 max-w-3xl leading-snug font-dm-serif">
            Votre partenaire de confiance pour les formalités juridiques et la stratégie digitale.
          </h1>

          {/* Texte d’intro */}
          <p className="text-md md:text-lg text-[#fefefe] max-w-xl mb-8 font-work">
            Gagnez du temps et de la clarté : nous gérons vos formalités et votre présence en ligne.
          </p>

          {/* Boutons */}
          <div className="flex flex-wrap justify-center gap-4 font-work">
            <button className="bg-[#5A9eef] text-[#0f2c4f] px-5 py-2 rounded-full font-semibold hover:bg-[#7ab5ff] transition">
              Prendre rendez-vous
            </button>
            <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-[#0f2c4f] transition">
              Créer ma société
            </button>
            <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-[#0f2c4f] transition">
              Modifier mes statuts
            </button>
            <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-[#0f2c4f] transition">
              Fermer ma société
            </button>
          </div>
        </main>

        {/* ↓ Indicateur vers la suite */}
        <div className="w-full text-center mt-4 pb-6">
          <p className="text-[#fefefe] text-sm md:text-base font-medium opacity-70 mb-1">
            En savoir plus sur nos services
          </p>
          <div className="text-[#fefefe] text-2xl animate-bounce">↓</div>
        </div>
      </div>

      {/* 🔥 Autres sections du site */}
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
