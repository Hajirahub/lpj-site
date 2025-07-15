'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <>
      {/* 🔷 Navbar & logo avec couleur personnalisée */}
      <Header bgColor="#0f2c4f" />

      {/* ✉️ Section de contact empilée */}
<section
  className="bg-cover bg-center bg-no-repeat py-56 px-6"
  style={{
    backgroundImage: "url('/background.png')",
  }}
>
  <div className=" backdrop-blur-sm max-w-3xl mx-auto text-center space-y-6 rounded-xl p-8 shadow-lg bg-white/10">
    {/* 📝 Titre principal */}
    <h1 className="text-4xl md:text-5xl font-bold text-[#193760]">
      Contact
    </h1>

    {/* 🕘 Disponibilités */}
    <p className="text-[#0f2c4f] text-lg md:text-xl font-medium opacity-90">
      Notre équipe à votre écoute de <strong>9h à 18h30</strong><br />
      ou <strong>24h/24h par email</strong>
    </p>

    {/* 📞 Infos de contact */}
    <div className="space-y-2 mt-4">
      <h2 className="text-2xl font-semibold text-[#193760]">Informations</h2>
      <p className="text-[#0f2c4f] text-base">📞 +33 7 69 62 37 24</p>
      <p className="text-[#0f2c4f] text-base">📧 contact@laplumedujuriste.fr</p>
    </div>

    {/* 🌐 Réseaux sociaux */}
    <div className="flex justify-center items-center gap-4 mt-6">
      <Link
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#193760] hover:text-[#F58700] text-2xl"
      >
        <FaFacebook />
      </Link>
      <Link
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#193760] hover:text-[#F58700] text-2xl"
      >
        <FaLinkedin />
      </Link>
    </div>
  </div>
</section>


      {/* ⬛ Footer */}
      <Footer />
    </>
  );
}
