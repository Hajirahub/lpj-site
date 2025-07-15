// src/components/articles/MentionsLegalesRGPD.jsx

export default function MentionsLegalesRGPD() {
  return (
    <div className="space-y-10 text-[#1a1a1a] leading-relaxed text-base">
      {/* ⚖️ Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Mentions légales : une obligation pour tous</h2>
        <p>
          Que vous soyez auto-entrepreneur, société ou même association, la publication de mentions légales est obligatoire dès lors que vous éditez un site web professionnel.
        </p>
        <p className="mt-2">
          Elles doivent contenir : nom ou dénomination, coordonnées, SIRET, responsable de la publication, hébergeur du site, etc.
        </p>
      </section>

      {/* 🔒 RGPD : la conformité en pratique */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">RGPD : comment être vraiment conforme ?</h2>
        <p>
          Depuis 2018, le Règlement Général sur la Protection des Données impose aux entreprises une gestion responsable des données personnelles.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Politique de confidentialité claire</strong> : expliquant qui collecte, pourquoi et combien de temps les données sont conservées.</li>
          <li><strong>Consentement explicite</strong> : bannières de cookies, formulaires avec cases à cocher non pré-cochées.</li>
          <li><strong>Droit d’accès et de suppression</strong> : tout utilisateur peut demander la modification ou la suppression de ses données.</li>
        </ul>
      </section>

      {/* 🚨 Risques en cas de manquement */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Quels risques en cas de non-conformité ?</h2>
        <p>
          Ne pas publier de mentions légales ou ignorer le RGPD peut entraîner :
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>des amendes jusqu’à 75 000 € pour les mentions légales,</li>
          <li>jusqu’à 4 % du chiffre d’affaires mondial pour le RGPD,</li>
          <li>et une perte de confiance de vos utilisateurs.</li>
        </ul>
      </section>

      {/* 💡 Astuce finale */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Le conseil de La Plume 🪶</h2>
        <p>
          Utilisez des générateurs juridiques personnalisés pour vos mentions et votre politique RGPD, puis faites-les valider par un juriste.
        </p>
      </section>
    </div>
  );
}
