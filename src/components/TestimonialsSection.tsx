"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Iman",
    title: "Fondatrice de Aqua Be Health",
    text: "Passer du statut d'autro-entrepreneure à celui d'une SASU, me semblait plut compliqué avant de profiter de leur expertise. Ils ont l'art de simplifier les choses et de faciliter les démarches administratives",
    avatar: "👩🏽",
  },
  {
    id: 2,
    name: "Rhizlaine",
    title: "Fondatrice de Rhizlaine Photographie",
    text: "La Plume du Juriste a été présente tout au long de la création de mon statut d'auto-entrepreneur ainsi que pour la rédaction de mes documents juridiques : devis, contrats, les CGV, le RGPD, les mentions légales de mon site. L'équipe est toujours disponible. Je recommande fortement",
    avatar: "👩🏻",
  },
  {
    id: 3,
    name: "Yanis",
    title: "Co-gérant de Studio MYA",
    text: "On a confié la création de notre société et notre présence en ligne à l’équipe. Résultat : rapide, pro, et vraiment à l’écoute. Un vrai gain de temps et d’énergie.",
    avatar: "🧔🏼",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="temoignages" className="bg-[url('/background.png')] py-16 px-4">
      <div className="text-center mb-12">
        <p className="text-[#585D56] uppercase text-sm font-semibold tracking-widest">
          Témoignages
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f2c4f] mb-4">
          Ce que nos clients disent de nous
        </h2>
        <p className="text-[#585D56] max-w-xl mx-auto">
          Notre plus belle vitrine, ce sont nos clients. Découvrez ce que nos clients disent de leur expérience.
        </p>
      </div>

      {/* Carrousel de témoignages */}
      <div className="flex justify-center gap-6 overflow-x-auto px-4 pb-4">
        {testimonials.map((t, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={t.id}
              animate={{
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.5,
                filter: isActive ? "blur(0px)" : "blur(2px)",
              }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveIndex(index)}
              className="min-w-[300px] max-w-[300px] bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition"
            >
              <div className="text-4xl mb-4">{t.avatar}</div>
              <p className="text-sm text-[#333] mb-4">{t.text}</p>
              <div className="font-bold text-[#0f2c4f]">{t.name}</div>
              <div className="text-xs text-[#888]">{t.title}</div>
            </motion.div>
          );
        })}
      </div>

<div className="w-full text-center mt-16">
  <p className="text-[#0f2c4f] text-sm md:text-base font-medium opacity-70 mb-1">
    Lisez nos derniers articles
  </p>
    <div className="text-[#0f2c4f] text-2xl animate-bounce">
    ↓
  </div>
</div>

    </section>
  );
}
