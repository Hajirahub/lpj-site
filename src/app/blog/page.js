// app/blog/page2.js (ou remplace page.js temporairement)

'use client';

import { useState } from 'react';
import Link from 'next/link';
import articles from './articlesData';

export default function BlogPage2() {
  const [filter, setFilter] = useState('Tous');
  const filters = ['Tous', 'Droit', 'Stratégie digitale'];

  const filteredArticles =
    filter === 'Tous'
      ? articles.slice(1) // le plus récent est en premier
      : articles.slice(1).filter(
          (a) => a.category.toLowerCase() === filter.toLowerCase()
        );

  const latestArticle = articles[0];

  return (
    <div className="min-h-screen bg-[#193760] text-white pt-24 pb-12 px-4">

{/* 📰 SECTION 1 - Dernier article */}
<div className="max-w-6xl mx-auto rounded-2xl shadow-lg overflow-hidden relative h-80 mb-12 group">
  {/* Image de fond */}
  <img
    src={latestArticle.image}
    alt={latestArticle.title}
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Voile sombre */}
  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all z-10"></div>

  {/* Contenu en surimpression */}
  <div className="relative z-20 p-8 h-full flex flex-col justify-between text-white">

    {/* Pastille catégorie */}
    <span className="bg-white/20 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full backdrop-blur-sm self-start w-fit">
      {latestArticle.category}
    </span>

    <div className="flex justify-between items-end">
      <div>
        {/* Titre */}
        <h2 className="text-3xl font-dm-serif font-semibold leading-snug mb-2">
          {latestArticle.title}
        </h2>

        {/* Date + durée */}
        <p className="text-sm text-white/80">
          {latestArticle.date} • {latestArticle.readingTime}
        </p>
      </div>

      {/* Bouton flèche */}
      <Link href={`/blog/${latestArticle.slug}`}>
        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-[#193760] hover:translate-x-1 hover:shadow-lg transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </div>
  </div>
</div>



      {/* 📂 SECTION 2 - Autres articles */}
      <div className="max-w-6xl mx-auto">
        {/* Boutons de filtre */}
{/* 📂 Boutons de filtre */}
<div className="flex flex-wrap gap-3 justify-center mb-10">
  {filters.map((cat) => (
    <button
      key={cat}
      onClick={() => setFilter(cat)}
      className={`px-5 py-2 rounded-full font-medium border transition-all duration-200 shadow-sm 
        ${
          filter === cat
            ? 'bg-white text-[#193760] border-white scale-105'
            : 'bg-[#193760] text-white border-white hover:bg-white hover:text-[#193760]'
        }`}
    >
      {cat}
    </button>
  ))}
</div>



{/* 📰 Grille d'articles avec fond image */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {filteredArticles.map((article) => (
    <Link
      href={`/blog/${article.slug}`}
      key={article.slug}
      className="relative h-64 rounded-xl overflow-hidden shadow-md group transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image de fond */}
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Voile sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all z-10"></div>

      {/* Contenu en surimpression */}
      <div className="relative z-20 p-4 h-full flex flex-col justify-between text-white">

        {/* Catégorie */}
        <span className="bg-white/20 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full self-start backdrop-blur-sm">
          {article.category}
        </span>

        <div>
          {/* Titre */}
          <h3 className="text-xl font-dm-serif leading-snug mb-2">
            {article.title}
          </h3>

          {/* Date & durée */}
          <p className="text-xs text-white/80">
            {article.date} • {article.readingTime}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>


      </div>
    </div>
  );
}
