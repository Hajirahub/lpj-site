// src/app/blog/components/ChangerDirigeantSARL.jsx

export default function ChangerDirigeantSARL() {
  return (
    <div className="space-y-8 text-[#3a3a3a] leading-relaxed">

      {/* 🧭 Introduction */}
      <p>
        Vous êtes gérant d’une SARL ou accompagnez un client dans cette position ?
        Changer de dirigeant est une étape sensible qui nécessite rigueur et formalités précises.
        Voici un guide pas-à-pas pour ne rien oublier.
      </p>

      {/* 🧩 Bloc 1 */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-[#1a1a1a]">
          Pourquoi changer de dirigeant ?
        </h2>
        <p>
          Plusieurs raisons peuvent pousser une SARL à changer de gérant :
          départ volontaire, révocation, fin de mandat, ou nouvelle orientation stratégique.
          Le changement peut être interne (co-gérant, associé) ou externe (nouvelle personne).
        </p>
      </div>

      {/* 🛠️ Bloc 2 */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-[#1a1a1a]">
          Les étapes à suivre
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>📅 Convocation d’une assemblée générale extraordinaire</li>
          <li>📝 Rédaction du procès-verbal de nomination</li>
          <li>📄 Mise à jour des statuts si le nom du gérant y figure</li>
          <li>📬 Dépôt du dossier complet au greffe + publication d’une annonce légale</li>
        </ul>
      </div>

      {/* 📌 Bloc 3 */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-[#1a1a1a]">
          Quels documents fournir ?
        </h2>
        <p>
          Le dossier à déposer au greffe comprend :
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Un exemplaire du PV signé</li>
          <li>Un formulaire M3 rempli et signé</li>
          <li>Une attestation de non-condamnation du nouveau dirigeant</li>
          <li>L’attestation de parution dans un journal d’annonces légales</li>
        </ul>
      </div>

      {/* ✅ Bloc 4 */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-[#1a1a1a]">
          À retenir
        </h2>
        <p>
          Changer de dirigeant dans une SARL est une procédure classique mais à ne pas sous-estimer.
          Une mauvaise formalité ou un oubli peut entraîner un rejet de dossier ou des frais supplémentaires.
        </p>
      </div>

      {/* 💡 Astuce */}
      <div className="bg-[#f0f8ff] border-l-4 border-[#193760] p-4 rounded">
        <p className="font-semibold text-[#193760]">💡 Conseil de juriste :</p>
        <p>
          Préparez tous les documents **en amont** de l’AG, et prévoyez la rédaction du PV **le jour même**.
          Utilisez un modèle juridique validé pour gagner du temps.
        </p>
      </div>

    </div>
  );
}
