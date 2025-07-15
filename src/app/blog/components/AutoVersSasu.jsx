// src/app/blog/components/AutoVersSasu.jsx

export default function AutoVersSasu() {
  return (
    <div className="space-y-8 text-[#3a3a3a] leading-relaxed">
      <p>
        De nombreux entrepreneurs débutent en auto-entreprise, mais arrivent vite à ses limites :
        plafond de chiffre d'affaires, manque de crédibilité, fiscalité moins optimisée…
      </p>

      <div>
        <h2 className="text-xl font-semibold mb-2 text-[#1a1a1a]">
          Pourquoi passer en SASU ?
        </h2>
        <p>
          La SASU offre une structure plus sérieuse, une meilleure protection du patrimoine
          personnel et permet de s'associer ou d’embaucher facilement. De plus, elle ouvre droit à une imposition à l'IS.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 text-[#1a1a1a]">
          Quelles démarches effectuer ?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Rédiger les statuts de la SASU</li>
          <li>Faire un dépôt de capital</li>
          <li>Publier une annonce légale</li>
          <li>Remplir un formulaire M0</li>
          <li>Déposer un dossier complet au greffe</li>
        </ul>
      </div>

      <div className="bg-[#f0f8ff] border-l-4 border-[#193760] p-4 rounded">
        <p className="font-semibold text-[#193760]">💡 Astuce : </p>
        <p>
          Une transition bien préparée permet d’éviter une double imposition ou une période sans statut juridique.
        </p>
      </div>
    </div>
  );
}
