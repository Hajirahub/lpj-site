'use client';
//contact+call to action

import React from 'react';
import Lottie from 'lottie-react';

// ✅ L'import se fait ici
const animationData = require('../lotties/animationCall.json');

export default function ContactSection() {
  return (
    <section className="bg-[url('/background.png')] py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 👉 Colonne gauche - Infos */}
        <div>
          <span className="uppercase text-sm text-[#F58700] font-semibold">
            Ne soyez pas timide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-dm-serif text-[#1a1a1a] mt-2 mb-4">
            Contactez-nous
          </h2>
          <p className="text-gray-700 mb-8">
            Besoin d’un accompagnement juridique, d’une aide administrative ou d’une stratégie digitale claire ?
            Écrivez-nous ou appelez-nous directement.
          </p>

          {/* 📞 Téléphone */}
          <div className="flex items-center gap-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F58700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l.6 2.3a1 1 0 00.9.7l2.4.4a1 1 0 01.7.5l1.4 2.5a1 1 0 010 .8l-1.4 2.5a1 1 0 01-.7.5l-2.4.4a1 1 0 00-.9.7L5 19H3v-2l.4-2.2a1 1 0 00-.3-.9L2 12.6a1 1 0 010-.8l1.1-1.3a1 1 0 00.3-.9L3 5z" />
            </svg>
            <a href="tel:+33769623724" className="text-[#1a1a1a] hover:text-[#F58700] font-medium">
              +33 7 69 62 37 24
            </a>
          </div>

          {/* 📧 Email */}
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F58700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:contact@laplumedujuriste.fr" className="text-[#1a1a1a] hover:text-[#F58700] font-medium">
              contact@laplumedujuriste.fr
            </a>
          </div>
        </div>

        {/* ✍️ Colonne droite - Formulaire */}
<form className="bg-[#F1F3F5] rounded-2xl p-6 shadow-md space-y-6">
  {/* 🌿 Ligne : Nom + Prénom */}
  <div className="grid md:grid-cols-2 gap-6">
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">Nom</label>
      <input
        type="text"
        placeholder="Entrez votre nom"
        className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#F58700] transition-colors duration-200 text-sm py-2 placeholder-gray-400"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">Prénom</label>
      <input
        type="text"
        placeholder="Entrez votre prénom"
        className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#F58700] transition-colors duration-200 text-sm py-2 placeholder-gray-400"
      />
    </div>
  </div>

  {/* 🧾 Objet */}
  <div className="flex flex-col">
    <label className="text-sm text-gray-600 mb-1">Objet</label>
    <input
      type="text"
      placeholder="Ex. : demande de RDV"
      className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#F58700] transition-colors duration-200 text-sm py-2 placeholder-gray-400"
    />
  </div>

  {/* 📝 Message */}
  <div className="flex flex-col">
    <label className="text-sm text-gray-600 mb-1">Message</label>
    <textarea
      placeholder="Tapez votre message ici..."
      rows={4}
      className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#F58700] transition-colors duration-200 text-sm py-2 placeholder-gray-400 resize-none"
    ></textarea>
  </div>

  {/* 📩 Bouton */}
  <div className="pt-4">
    <button
      type="submit"
      className="bg-[#F58700] hover:bg-[#d67200] text-white font-medium text-sm font-worksans py-2 px-6 rounded-full transition duration-200"
    >
      Envoyer le message →
    </button>
  </div>
</form>

      </div>

<div className="w-full text-center mt-16">
  <p className="text-[#0f2c4f] text-sm md:text-base font-medium opacity-70 mb-1">
    Planifier votre appel découverte gratuit !
  </p>
  <div className="text-[#0f2c4f] text-2xl animate-bounce">↓</div>
</div>

    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto bg-[#193760] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        {/* Animation */}
        <div className="w-40 h-40">
          <Lottie animationData={animationData} loop={true} />
        </div>

        {/* Texte + bouton */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold font-dm-serif mb-2">
            Planifiez un appel découverte
          </h2>
          <p className="text-sm md:text-base text-[#e2e8f0] mb-4">
            Un accompagnement personnalisé pour créer ou modifier votre société.
          </p>
          <button className="flex items-center gap-2 bg-white text-[#193760] px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
            Prendre rendez-vous →
          </button>
        </div>
      </div>
    </section>

    </section>
  );
}
