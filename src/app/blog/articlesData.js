// app/blog/articlesData.js

import ChangerDirigeantSARL from "./components/ChangerDirigeantSARL";
import AutoVersSasu from "./components/AutoVersSasu";
import FicheGMB2025 from "./components/FicheGMB2025";
import MentionsLegalesRGPD from "./components/MentionsLegalesRGPD";
import FermerUneSasu from "./components/FermerUneSasu";
import StrategieLinkedinPro from "./components/StrategieLinkedinPro";


export const articles = [
  {
    slug: "changer-de-dirigeant-sarl",
    title: "Changer de dirigeant de SARL : les formalités",
    date: "08 juillet 2025",
    readingTime: "5 min",
    category: "Droit",
    image: "/images/article1.jpg",
    component: ChangerDirigeantSARL,
    previous: null,
    next: "fermer-une-sasu",
  },
  {
  slug: 'fermer-une-sasu',
  title: 'Comment fermer une SASU étape par étape',
  date: '30 juin 2025',
  readingTime: '4 min',
  category: 'Droit',
  image: '/images/articlesasufermer.jpg',
  component: FermerUneSasu,
  previous: 'changer-de-dirigeant-sarl',
  next: 'strategie-linkedin-pro'
  },
{
  slug: 'strategie-linkedin-pro',
  title: 'Construire une stratégie LinkedIn efficace',
  date: '22 juin 2025',
  readingTime: '6 min',
  category: "Stratégie digitale",
  image: '/images/articleLinkedin.jpg',
  component: StrategieLinkedinPro,
  previous: 'fermer-une-sasu',
  next: 'auto-vers-sasu',
},
{
  slug: 'auto-vers-sasu',
  title: 'Passer de l’auto-entreprise à la SASU : ce qu’il faut savoir',
  date: '10 juillet 2025',
  readingTime: '5 min',
  category: 'Droit',
  image: '/images/article1.jpg',
  component: AutoVersSasu,
  previous: "strategie-linkedin-pro",
  next: 'optimiser-gmb-2025',
},
{
  slug: 'optimiser-gmb-2025',
  title: 'Optimiser sa fiche Google My Business en 2025',
  date: '10 juillet 2025',
  readingTime: '4 min',
  category: "Stratégie digitale",
  image: '/images/article2.jpg',
  component: FicheGMB2025,
  previous: "auto-vers-sasu",
  next: 'mentions-legales-rgpd',
},
{
  slug: 'mentions-legales-rgpd',
  title: 'Mentions légales et RGPD : êtes-vous vraiment en règle ?',
  date: '10 juillet 2025',
  readingTime: '6 min',
  category: 'Droit',
  image: '/images/article3.jpg',
  component: MentionsLegalesRGPD,
  previous: "optimiser-gmb-2025",
  next: null,
}
];

export default articles;
