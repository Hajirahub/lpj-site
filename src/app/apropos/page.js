// app/apropos/page.tsx (ou components/APropos.tsx si tu préfères en composant)
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function APropos() {
  return (
    <>
          {/* 🔷 Navbar & logo avec couleur personnalisée */}
          <Header bgColor="#0f2c4f" />
<div className="bg-[url('/background.png')] bg-cover bg-center bg-no-repeat py-20 px-4">
  <div className="max-w-7xl mx-auto mt-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

    {/* Colonne gauche */}
    <div>
<div className="flex flex-col items-center text-center relative group mr-25">
  {/* Image avec effet hover */}
  <div className="relative w-60">
    <img
      src="/Samir.png"
      alt="Samir"
      className="w-full drop-shadow-xl rounded-md"
    />
    
    {/* Bulle de citation au survol */}
<div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <div className="bg-white shadow-lg border border-gray-200 px-5 py-3 rounded-xl w-[300px] text-[#0f2c4f] text-sm italic text-center relative ">
    <span className="block">
      « La visibilité ne doit jamais être un luxe, mais un levier accessible à tous. »
    </span>
    
    {/* Petite flèche vers l'image */}
    <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-b border-gray-200"></div>
  </div>
</div>

  </div>

  {/* Texte de présentation */}
<div className='backdrop-blur-sm rounded-xl p-4 shadow-lg bg-white/10'> 
  <p className="mt-4 text-gray-700 text-justify text-sm max-w-xs leading-relaxed font-work text-xs">
    Juriste de formation et entrepreneur par expérience, j’ai lancé plusieurs projets dans des secteurs variés, en mettant à l’épreuve ma compréhension du droit, mais aussi mon appétit pour le digital.
    <br /><br />
    Ce parcours m’a permis de réaliser une chose : sans visibilité, même les meilleures idées peuvent rester dans l’ombre.
    <br /><br />
    Aujourd’hui, j’accompagne les entreprises dans leur stratégie digitale globale : création de site, SEO, identité visuelle, réseaux sociaux... avec une obsession : que chaque action serve un objectif concret, et durable.
  </p>
</div>
</div> 
    </div>

    {/* Colonne centrale */}
    <div className='backdrop-blur-sm rounded-xl p-4 shadow-lg bg-white/10'> 
        <h1 className="text-3xl text-[#0f2c4f] font-dm-serif mb-12 text-center ">Qui sommes-nous ?</h1>
      <p className="text-gray-700 leading-relaxed text-justify space-y-4 font-work text-sm">
        <span className="block mb-4">
          Fondée en 2023 à Paris, La Plume du Juriste est née d’un constat simple : trop de créateurs et créatrices d’entreprise se retrouvent seuls face à des démarches juridiques complexes et une visibilité numérique incertaine.
        </span>
        <span className="block mb-4">
          Nous avons voulu créer une structure humaine, claire et engagée, qui démystifie les formalités juridiques tout en proposant une stratégie digitale concrète et sur-mesure.
        </span>
        <span className="block mb-4">
          Notre mission ? Vous offrir un accompagnement complet, de la rédaction de vos statuts à la création de votre identité en ligne.
        </span>
        <span className="block mb-4">
          Que vous soyez indépendant·e, association, start-up ou entreprise en croissance, nous vous aidons à structurer, sécuriser et développer votre activité, en vous apportant à la fois l’expertise du droit et les leviers de la communication digitale.
        </span>
        <span className="block">
          Chez La Plume du Juriste, chaque projet est une collaboration, chaque parcours une fierté. ✨
        </span>
      </p>
    </div>

    {/* Colonne droite */}
    <div>
      <div className="group relative flex flex-col items-center text-center ml-25">
  {/* Image polaroid de Mabrouka */}
<img
  src="/Mabrouka.png"
  alt="Mabrouka - Juriste"
  className="w-60 drop-shadow-xl rounded-md"
/>


  {/* Citation au survol */}
  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="bg-white shadow-lg border border-gray-200 px-5 py-3 rounded-xl w-[300px] text-[#0f2c4f] text-sm italic text-center relative ">
      <span className="block">
        « Un bon accompagnement juridique, c’est celui qui vous laisse l’esprit libre pour créer. »
      </span>
      {/* Flèche vers l’image */}
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-b border-gray-200"></div>
    </div>
  </div>


  {/* Description longue */}
<div className='backdrop-blur-sm rounded-xl p-4 shadow-lg bg-white/10'> 
  <p className="mt-4 text-gray-700 text-justify text-sm max-w-xs leading-relaxed font-work text-xs">
    Juriste en droit des affaires, j’ai accompagné de nombreuses structures — entreprises individuelles, associations, SARL, SAS… — dans leurs formalités de création, de modification et de cessation d’activité. <br /><br />
    Passionnée par le droit et son impact concret sur la vie des entrepreneur·e·s, je m’efforce toujours d’apporter de la clarté, de la rigueur et une écoute attentive à chaque dossier. <br /><br />
    Mon objectif : faire en sorte que le juridique ne soit plus un frein, mais un tremplin pour tous les porteurs de projets.
  </p>
</div>
</div>
    </div>
  </div>

</div>
</div>
      <Footer />
    </>
  );
}
