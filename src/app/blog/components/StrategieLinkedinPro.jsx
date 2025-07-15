// src/components/articles/StrategieLinkedinPro.jsx

export default function StrategieLinkedinPro() {
  return (
    <div className="space-y-10 text-[#1a1a1a] leading-relaxed text-base">
      {/* 🌐 Pourquoi LinkedIn est incontournable */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Pourquoi LinkedIn est incontournable ?</h2>
        <p>
          LinkedIn est aujourd’hui bien plus qu’un CV en ligne. C’est un réseau puissant pour développer sa notoriété, trouver des clients, et tisser des liens professionnels durables.
        </p>
        <p className="mt-2">
          Pour les entrepreneurs, indépendants ou cabinets, c’est une scène stratégique pour partager son expertise et créer de la confiance.
        </p>
      </section>

      {/* 🧱 Étapes d’une stratégie efficace */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">5 étapes pour une stratégie efficace</h2>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li><strong>Soigner son profil</strong> : une photo professionnelle, un titre impactant, une bio claire et des expériences valorisées.</li>
          <li><strong>Créer du contenu</strong> : publier régulièrement des posts utiles, inspirants ou pédagogiques.</li>
          <li><strong>Engager avec votre audience</strong> : commenter, répondre, réagir, montrer que vous êtes présent.</li>
          <li><strong>Choisir les bons hashtags</strong> : pour être découvert par de nouvelles audiences (3 à 5 hashtags pertinents).</li>
          <li><strong>Analyser les performances</strong> : surveiller les vues, interactions, et ajuster votre stratégie tous les mois.</li>
        </ol>
      </section>

      {/* 💡 Erreurs fréquentes */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Les erreurs à éviter</h2>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Ne pas avoir de ligne éditoriale claire</li>
          <li>Parler uniquement de soi sans apporter de valeur</li>
          <li>Copier des posts sans personnalité</li>
          <li>Ignorer les commentaires ou les messages privés</li>
        </ul>
      </section>

      {/* 🪶 La méthode La Plume */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">La méthode La Plume 🪶</h2>
        <p>
          Nous aidons nos clients à construire une présence LinkedIn cohérente, engageante et fidèle à leurs valeurs.
          Notre approche : authenticité, régularité, et clarté.
        </p>
        <p className="mt-2 font-medium">
          → Prêt(e) à faire de LinkedIn votre meilleur allié stratégique ? Discutons ensemble de votre visibilité !
        </p>
      </section>
    </div>
  );
}
