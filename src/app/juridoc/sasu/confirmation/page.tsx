// 📄 src/app/juridoc/sasu/confirmation.tsx

'use client';

import React from 'react';
import Link from 'next/link';

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-center items-center text-center text-[#0f2c4f] px-4">
      <h1 className="text-3xl font-bold mb-4">🎉 Document généré avec succès !</h1>

      <p className="text-lg mb-6">Vous pouvez maintenant télécharger vos statuts personnalisés.</p>

      <div className="space-x-4">
        <Link href="/juridoc">
          <button className="px-6 py-2 bg-[#F58700] text-white font-semibold rounded shadow hover:bg-[#d67400]">
            Revenir à l’accueil
          </button>
        </Link>
        <Link href="/juridoc/sasu/pdf">
          <button className="px-6 py-2 bg-gray-200 text-[#0f2c4f] font-semibold rounded shadow hover:bg-gray-300">
            Voir le PDF
          </button>
        </Link>
      </div>
    </main>
  );
}
