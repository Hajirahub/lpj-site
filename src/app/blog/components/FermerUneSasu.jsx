// src/components/articles/FermerUneSasu.jsx

export default function FermerUneSasu() {
  return (
    <div className="space-y-10 text-[#1a1a1a] leading-relaxed text-base">
      {/* 📉 Pourquoi fermer une SASU ? */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Pourquoi fermer une SASU ?</h2>
        <p>
          Une SASU (Société par Actions Simplifiée Unipersonnelle) est une structure souple, mais il peut arriver que l’entrepreneur souhaite y mettre fin.
        </p>
        <p className="mt-3">
          Les raisons sont multiples : changement d’activité, difficultés économiques, départ à l’étranger, ou volonté de passer à une autre forme juridique plus adaptée.
        </p>
      </section>

      {/* 🧾 Quelles démarches ? */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Les étapes pour fermer votre SASU</h2>
        <p>
          Fermer une SASU demande de suivre une procédure en deux temps : la dissolution, puis la liquidation. Voici les étapes détaillées.
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li><strong>Dissolution anticipée</strong> : l’associé unique décide de dissoudre la société via un procès-verbal.</li>
          <li><strong>Nomination d’un liquidateur</strong> : souvent l’associé lui-même. Il aura la charge de solder les dettes et récupérer les créances.</li>
          <li><strong>Publication de la dissolution</strong> dans un journal d’annonces légales (JAL).</li>
          <li><strong>Clôture de liquidation</strong> : après apurement du passif et remboursement des apports éventuels.</li>
          <li><strong>Publication de la clôture</strong> dans un JAL.</li>
          <li><strong>Dépôt du dossier de radiation</strong> au greffe : formulaire M4, comptes de liquidation, PV de clôture.</li>
        </ol>
      </section>

      {/* 📌 Délais et coûts */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Quels sont les délais et les coûts ?</h2>
        <p>
          Comptez en moyenne 2 à 3 mois pour une fermeture complète. Les coûts varient entre 200 et 400 €, selon que vous le faites seul ou accompagné.
        </p>
      </section>

      {/* 💡 Astuces & erreurs à éviter */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Nos conseils pour une fermeture sans stress</h2>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Anticipez la fin d’activité : pensez à solder vos charges et informer vos clients/fournisseurs.</li>
          <li>Vérifiez que votre comptabilité est à jour avant de lancer la liquidation.</li>
          <li>Conservez tous les justificatifs pendant au moins 6 ans (obligation légale).</li>
        </ul>
      </section>

      {/* 🧑‍⚖️ Besoin d’aide ? */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">La Plume du Juriste vous accompagne ✨</h2>
        <p>
          Vous souhaitez déléguer la fermeture de votre SASU en toute sécurité ? Notre équipe s’occupe de tout : dissolution, annonces légales, greffe, et plus encore.
        </p>
        <p className="mt-2 font-medium">→ Prenez rendez-vous dès maintenant pour un accompagnement personnalisé.</p>
      </section>
    </div>
  );
}
