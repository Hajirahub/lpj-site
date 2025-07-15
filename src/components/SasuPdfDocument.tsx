// 📄 src/components/SasuPdfDocument.tsx
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

// Tu peux ajouter une belle font plus tard ici si tu veux

type SasuData = {
  associeUnique: string;
  nomComplet: string;
  adresse: string;
  nomEntreprise: string;
  siege: string;
  capital: string;
  capitalLibere: string;
  duree: string;
  objet: string;
  dateDemarrage: string;
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
    lineHeight: 1.6,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 6,
    textDecoration: 'underline',
  },
  paragraph: {
    marginBottom: 8,
  },
});

export default function SasuPdfDocument({ data }: { data: SasuData }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
          Statuts simplifiés de la SASU {data.nomEntreprise}
        </Text>

        {/* Identité de l’associé unique */}
        <Text style={styles.sectionTitle}>Article 1 – Associé unique</Text>
        <Text style={styles.paragraph}>
          L’associé unique est {data.nomComplet}, domicilié(e) à {data.adresse}. Il/Elle détient la totalité des actions de la société.
        </Text>

        {/* Dénomination sociale */}
        <Text style={styles.sectionTitle}>Article 2 – Dénomination</Text>
        <Text style={styles.paragraph}>
          La société prend la dénomination : {data.nomEntreprise}.
        </Text>

        {/* Siège social */}
        <Text style={styles.sectionTitle}>Article 3 – Siège social</Text>
        <Text style={styles.paragraph}>
          Le siège social est fixé au {data.siege}. Il pourra être transféré par décision de l’associé unique.
        </Text>

        {/* Objet social */}
        <Text style={styles.sectionTitle}>Article 4 – Objet social</Text>
        <Text style={styles.paragraph}>
          La société a pour objet : {data.objet}.
        </Text>

        {/* Durée */}
        <Text style={styles.sectionTitle}>Article 5 – Durée</Text>
        <Text style={styles.paragraph}>
          La durée de la société est fixée à {data.duree} ans à compter de son immatriculation au registre du commerce et des sociétés.
        </Text>

        {/* Capital social */}
        <Text style={styles.sectionTitle}>Article 6 – Capital social</Text>
        <Text style={styles.paragraph}>
          Le capital social est fixé à la somme de {data.capital} euros. Il est intégralement {data.capitalLibere === 'Oui' ? 'libéré' : 'non libéré'} à la constitution.
        </Text>

        {/* Date de début d’activité */}
        <Text style={styles.sectionTitle}>Article 7 – Démarrage de l’activité</Text>
        <Text style={styles.paragraph}>
          L’activité de la société débutera à compter du {data.dateDemarrage}.
        </Text>

        {/* Clôture de la page */}
        <Text style={{ marginTop: 32, fontSize: 10, color: 'gray' }}>
          Document généré automatiquement avec La Plume du Juriste.
        </Text>
      </Page>
    </Document>
  );
}
