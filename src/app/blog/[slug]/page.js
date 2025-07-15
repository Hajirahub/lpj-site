// app/blog/[slug]/page.js

import { articles } from "../articlesData";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <div className="min-h-screen bg-[#193760] py-20 px-4">
      
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl px-6 py-10">
        {/* 🧾 Titre */}
        
        <h1 className="text-3xl md:text-5xl font-dm-serif text-center mb-6 text-[#1a1a1a]">
          {article.title}
        </h1>
<img
  src={article.image}
  alt={article.title}
  className="w-full h-64 object-cover rounded-xl mb-6"
/>
        {/* 🗓️ Date + Partage */}
        <div className="flex justify-between items-center text-sm text-gray-500 mb-8">
          <p>{article.date} • {article.readingTime}</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#5A9EEF]">📘</a>
            <a href="#" className="hover:text-[#5A9EEF]">🐦</a>
            <a href="#" className="hover:text-[#5A9EEF]">🔗</a>
            <a href="#" className="hover:text-[#5A9EEF]">📱</a>
            <a href="#" className="hover:text-[#5A9EEF]">✉️</a>
          </div>
        </div>

        {/* 📚 Contenu */}
        <div className="space-y-8 text-[#3a3a3a] leading-relaxed">
{article.component ? <article.component /> : null}
        </div>

        {/* 🔁 Navigation */}
        <div className="mt-12 flex justify-between text-sm text-[#5A9EEF] font-medium">
          {article.previous ? (
            <Link href={`/blog/${article.previous}`} className="hover:underline">
              ← Article précédent
            </Link>
          ) : <span></span>}
          {article.next ? (
            <Link href={`/blog/${article.next}`} className="hover:underline ml-auto">
              Article suivant →
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
