// 📄 Fichier : src/app/juridoc/page.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function JuridocLanding() {
  return (
    <main className="min-h-screen bg-white text-[#0f2c4f] flex flex-col">

      {/* 🔹 Header avec logo */}
      <header className="flex items-center justify-between px-6 py-4 shadow-sm">
        <div className="flex items-center space-x-3">
          {/* 🪶 Logo icône */}
          <Image
            src="/images/Plume-LPJ.png" // à adapter selon ton projet
            alt="Logo La Plume du Juriste"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold tracking-wide text-[#0f2c4f]">
            La Plume du Juriste
          </span>
        </div>
      </header>

      {/* 💬 Contenu principal */}
      <section className="flex-grow flex flex-col justify-center items-center px-6 text-center">

        {/* 📝 Accroche principale */}
        <h1 className="text-3xl md:text-5xl font-extrabold max-w-2xl leading-tight">
          Générez vos statuts de <span className="text-[#F58700]">SASU</span> en quelques clics
        </h1>

        {/* 🔖 Tagline */}
        <p className="mt-4 text-lg md:text-xl font-medium text-[#0f2c4f] opacity-90">
          Gratuit – sans engagement – 100% en ligne
        </p>

        {/* 🚀 Bouton Commencer */}
        <Link href="/juridoc/sasu">
          <button className="mt-8 px-8 py-3 text-lg rounded-full font-semibold bg-[#F58700] hover:bg-[#d67400] text-white shadow-lg transition-all">
            Commencer
          </button>
        </Link>

        {/* 🎨 Illustration provisoire */}
        <div className="mt-12">
          <Image
            src="/illustration-doc.png" // à remplacer par une illustration stylée (dossier, plume...)
            alt="Illustration SASU"
            width={320}
            height={220}
          />
        </div>

      </section>
    </main>
  );
}
