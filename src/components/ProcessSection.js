"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ProcessSection() {

  // ✅ Données des étapes (juste avant le return)
  const steps = [
    {
      number: '01',
      icon: '📞',
      title: 'Vous nous exposez votre projet',
      description: 'Lors d’un appel découverte, vous partagez vos besoins juridiques et vos objectifs. Nous vous aidons à clarifier les prochaines étapes.',
    },
    {
      number: '02',
      icon: '📑',
      title: 'Nous analysons et vous envoyons un devis',
      description: 'Nous étudions votre demande, vous proposons une solution adaptée, et vous transmettons un devis transparent et sans engagement.',
    },
    {
      number: '03',
      icon: '🖋️',
      title: 'Nous réalisons vos formalités',
      description: 'Nous rédigeons et déposons les documents nécessaires, en toute conformité. Vous êtes accompagnée à chaque étape.',
    },
    {
      number: '04',
      icon: '📬',
      title: 'Vous recevez vos documents finalisés',
      description: 'Une fois la procédure complétée, nous vous envoyons tous les justificatifs et documents officiels. Mission accomplie !',
    },
  ];

  // ✅ Retour JSX
  return (
    <section className="bg-[#0f2c4f] py-20 px-4 text-center flex flex-col items-center">
      {/* Titres de section */}
      <p className="text-[#FFC885] font-semibold mb-2 text-sm md:text-base">Notre accompagnement</p>
      <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">Réaliser vos démarches en 4 étapes</h2>
      <p className="text-[#ffffffb3] max-w-2xl mb-10">
        Réalisez vos formalités juridiques et mettez en place une stratégie digitale sans effort.
        Nous nous occupons de tout en seulement 4 étapes.
      </p>

      {/* ✅ Cartes dynamiques */}
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          className="bg-white text-[#0f2c4f] rounded-xl shadow-lg p-6 md:p-8 w-full max-w-xl mb-8 relative z-10"
        >
          <div className={`flex justify-between items-start mb-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
            <div className="text-sm font-bold bg-[#FFC885] text-[#0f2c4f] rounded-full px-3 py-1">
              {step.number}
            </div>
            <div className="text-2xl">
              {step.icon}
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-semibold mb-2 text-left">{step.title}</h3>
          <p className="text-[#0f2c4f] text-opacity-70 text-sm text-left">{step.description}</p>
        </motion.div>
      ))}

<div className="w-full text-center mt-16">
  <p className="text-[#fefefe] text-sm md:text-base font-medium opacity-70 mb-1">
    Découvrez ce que nos clients disent de nous
  </p>
    <div className="text-[#fefefe] text-2xl animate-bounce">
    ↓
  </div>
</div>

    </section>
  );
}
