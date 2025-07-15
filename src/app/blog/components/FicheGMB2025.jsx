// src/components/articles/FicheGMB2025.jsx

export default function FicheGMB2025() {
  return (
    <div className="space-y-10 text-[#1a1a1a] leading-relaxed text-base">
      {/* 🧭 Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Pourquoi Google My Business est incontournable ?</h2>
        <p>
          En 2025, votre fiche GMB (désormais appelée *Google Business Profile*) est souvent la première impression que vous laissez en ligne.
          Elle conditionne votre visibilité locale, la confiance de vos clients, et peut même influencer vos appels ou réservations.
        </p>
      </section>

      {/* 🧪 Optimisations clés */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Les optimisations à ne pas négliger</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Photos récentes :</strong> ajoutez des visuels professionnels de vos locaux, prestations, et équipe.</li>
          <li><strong>Avis clients :</strong> répondez à tous les avis et incitez vos clients à témoigner de leur expérience.</li>
          <li><strong>Horaires à jour :</strong> surtout en période de vacances ou de jours fériés.</li>
          <li><strong>Posts hebdomadaires :</strong> utilisez la section "actualités" pour publier vos offres ou conseils.</li>
          <li><strong>FAQ personnalisée :</strong> répondez aux questions fréquentes pour rassurer les visiteurs.</li>
        </ul>
      </section>

      {/* 📊 Suivi et analyse */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Analyser les performances de votre fiche</h2>
        <p>
          Depuis votre tableau de bord Google, vous pouvez consulter :
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>le nombre d’appels,</li>
          <li>de clics vers votre site,</li>
          <li>et même la zone géographique de vos visiteurs.</li>
        </ul>
        <p className="mt-2">
          Servez-vous de ces données pour ajuster vos horaires, vos services ou vos publications.
        </p>
      </section>

      {/* 🧠 Conseil stratégique */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Conseil d’expert</h2>
        <p>
          Ajoutez un lien direct vers votre agenda de rendez-vous (Calendly, Simplybook...) pour capter un maximum de contacts dès la recherche Google.
        </p>
      </section>
    </div>
  );
}
