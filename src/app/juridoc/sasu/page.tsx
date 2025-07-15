// 📄 Fichier : src/app/juridoc/sasu/page.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PDFDownloadLink } from '@react-pdf/renderer';
import SasuPdfDocument from '../../../components/SasuPdfDocument';
import { useJuridocStore } from '../../../store/juridocStore';


export default function SasuForm() {
  const router = useRouter();

const setSasuData = useJuridocStore((state) => state.setSasuData); // 👈 à ajouter  

  const [step, setStep] = useState(0);

  // 🧠 Données collectées à chaque étape du formulaire
  const [formData, setFormData] = useState({
    associeUnique: '',
    nomComplet: '',
    adresse: '',
    nomEntreprise: '',
    siege: '',
    capital: '',
    capitalLibere: '',
    duree: '',
    objet: '',
    dateDemarrage: '',
  });

  // ❓ Liste des questions du formulaire SASU
  const questions = [
    {
      label: 'Êtes-vous seul ou plusieurs associés ?',
      name: 'associeUnique',
      type: 'buttons',
      options: ['Je suis seul·e', 'Nous sommes plusieurs'],
    },
    {
      label: 'Quel est votre nom complet ?',
      name: 'nomComplet',
      type: 'text',
    },
    {
      label: 'Quelle est votre adresse complète ?',
      name: 'adresse',
      type: 'text',
    },
    {
      label: 'Quel est le nom de votre entreprise ?',
      name: 'nomEntreprise',
      type: 'text',
    },
    {
      label: 'Quelle est l’adresse du siège social ?',
      name: 'siege',
      type: 'text',
    },
    {
      label: 'Quel est le montant du capital social (en euros) ?',
      name: 'capital',
      type: 'text',
    },
    {
      label: 'Souhaitez-vous libérer intégralement le capital ?',
      name: 'capitalLibere',
      type: 'buttons',
      options: ['Oui', 'Non'],
    },
    {
      label: 'Durée de vie de la société (en années) ?',
      name: 'duree',
      type: 'text',
    },
    {
      label: 'Quel est l’objet social (activité principale) ?',
      name: 'objet',
      type: 'text',
    },
    {
      label: 'Date de démarrage de l’activité ?',
      name: 'dateDemarrage',
      type: 'date',
    },
  ];

  const totalSteps = questions.length;
  const currentQuestion = questions[step];

  // 👉 Aller à la question suivante
  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
  setSasuData(formData); // ✅ on sauvegarde les vraies données
  router.push('/juridoc/sasu/confirmation');
}
  };

  // 👈 Revenir à la question précédente
  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // 📝 Mise à jour des réponses
  const handleChange = (value: string) => {
    setFormData({ ...formData, [currentQuestion.name]: value });
  };

  return (
    <main className="min-h-screen bg-[#fffdf8] flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white p-10 rounded-xl shadow-lg border border-gray-100 text-center">

        {/* 📊 Barre de progression */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-[#F58700] transition-all duration-300"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>

        {/* 💬 Si on est encore dans les étapes */}
        {step < totalSteps ? (
          <>
            <h2 className="text-xl font-semibold mb-6 text-[#0f2c4f]">
              {currentQuestion.label}
            </h2>

            {/* 🎯 Boutons pour réponses rapides */}
            {currentQuestion.type === 'buttons' && (
              <div className="space-y-4">
                {currentQuestion.options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      handleChange(option);
                      handleNext();
                    }}
                    className="w-full py-3 bg-[#F58700] text-white font-semibold rounded-full hover:bg-[#d67400] transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* ✍️ Champ texte */}
            {currentQuestion.type === 'text' && (
              <div>
                <input
                  type="text"
                  className="w-full border px-4 py-3 rounded-md shadow-sm"
                  value={formData[currentQuestion.name]}
                  onChange={(e) => handleChange(e.target.value)}
                  placeholder="Votre réponse"
                />
                <button
                  onClick={handleNext}
                  className="mt-6 px-6 py-3 bg-[#F58700] text-white rounded-full hover:bg-[#d67400] font-medium"
                >
                  Suivant
                </button>
              </div>
            )}

            {/* 📅 Champ date */}
            {currentQuestion.type === 'date' && (
              <div>
                <input
                  type="date"
                  className="w-full border px-4 py-3 rounded-md shadow-sm"
                  value={formData[currentQuestion.name]}
                  onChange={(e) => handleChange(e.target.value)}
                />
                <button
                  onClick={handleNext}
                  className="mt-6 px-6 py-3 bg-[#F58700] text-white rounded-full hover:bg-[#d67400] font-medium"
                >
                  Suivant
                </button>
              </div>
            )}

            {/* ⬅️ Retour */}
            {step > 0 && (
              <button
                onClick={handleBack}
                className="mt-8 text-sm text-gray-600 hover:text-gray-900 underline"
              >
                ⬅ Retour à la question précédente
              </button>
            )}
          </>
        ) : (
          <>
            {/* ✅ Résumé final */}
            <h2 className="text-2xl font-bold mb-6 text-[#0f2c4f]">
              Résumé de vos réponses
            </h2>

            <ul className="space-y-4 text-left">
              {questions.map((q) => (
                <li key={q.name}>
                  <span className="font-semibold">{q.label} :</span>{' '}
                  <span className="text-gray-700">{formData[q.name] || '—'}</span>
                </li>
              ))}
            </ul>

            {/* 📥 Lien de téléchargement du PDF */}
            <div className="mt-8 flex justify-center">
              <PDFDownloadLink
                document={<SasuPdfDocument data={formData} />}
                fileName="statuts_sasu.pdf"
              >
                {({ loading }) => (
                  <button className="px-6 py-3 rounded-full bg-[#F58700] text-white hover:bg-[#d67400] shadow-md">
                    {loading ? 'Génération en cours...' : '📄 Télécharger le PDF'}
                  </button>
                )}
              </PDFDownloadLink>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
