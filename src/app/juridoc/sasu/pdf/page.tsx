// 📄 src/app/juridoc/sasu/pdf/page.tsx

'use client';

import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import SasuPdfDocument from '../../../../components/SasuPdfDocument';
import { useJuridocStore } from '../../../../store/juridocStore';

export default function PdfPage() {
  const { sasuData } = useJuridocStore(); // ✅ on récupère les vraies réponses

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-[#f9f9f9]">
      <h1 className="text-xl font-bold text-[#0f2c4f] mb-4">
        📄 Aperçu de vos statuts personnalisés
      </h1>

      {/* ✅ Vérifie si les données sont bien remplies */}
      {Object.keys(sasuData).some((key) => sasuData[key as keyof typeof sasuData]) ? (
        <div className="w-[90%] h-[90%] border shadow-lg">
          <PDFViewer width="100%" height="100%">
            <SasuPdfDocument data={sasuData} />
          </PDFViewer>
        </div>
      ) : (
        <p className="text-gray-500">
          Aucune donnée à afficher. Veuillez remplir le questionnaire.
        </p>
      )}
    </main>
  );
}
