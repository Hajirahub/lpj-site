"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

// 💾 Données temporaires des articles
const articles = [
  {
    slug: "auto-vers-sasu",
    title: "Passer de l’auto-entreprise à la SASU : ce qu’il faut savoir",
    date: "3 juillet 2025",
    readingTime: "5 min",
    category: "droit",
    image: "/images/article1.jpg", // à créer dans public/images/articles
  },
  {
    slug: "optimiser-gmb-2025",
    title: "Optimiser sa fiche Google My Business en 2025",
    date: "28 juin 2025",
    readingTime: "4 min",
    category: "stratégie digitale",
    image: "/images/article3.jpg",
  },
  {
    slug: "mentions-legales-rgpd",
    title: "Mentions légales et RGPD : êtes-vous vraiment en règle ?",
    date: "20 juin 2025",
    readingTime: "6 min",
    category: "droit",
    image: "/images/article2.jpg",
  },
];

export default function ArticlesSection() {
  return (
    <section className="w-full py-20 px-4 md:px-12 bg-[#E6F0FA]">
      <div className="max-w-6xl mx-auto">
        {/* Header de section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="uppercase text-sm tracking-wider text-[#5A9EEF] font-medium mb-1">
              Ressources
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              Derniers articles
            </h2>
          </div>
<Link
  href="/blog"
  className="text-[#5A9EEF] font-semibold hover:underline"
>
  Voir plus →
</Link>

        </div>

        {/* Cartes d’articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

<div className="w-full text-center mt-16">
  <p className="text-[#0f2c4f] text-sm md:text-base font-medium opacity-70 mb-1">
    Prenez contact avec nous !
  </p>
  <div className="text-[#0f2c4f] text-2xl animate-bounce">↓</div>
</div>

      </div>
    </section>
  );
}

function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
      <Image
        src={article.image}
        alt={article.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">
          {article.category}
        </p>
<Link
  href={`/blog/${article.slug}`}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <h3 className="text-lg font-semibold text-[#1a1a1a] hover:text-[#5A9EEF] transition">
    {article.title}
  </h3>
</Link>
        <p className="text-sm text-gray-500 mt-2">
          {article.date} • {article.readingTime}
        </p>
      </div>

      
    </div>

    
  );
}
