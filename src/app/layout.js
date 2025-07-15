import { Geist, Geist_Mono, Work_Sans, DM_Serif_Display, Lobster } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
});


export const metadata = {
  title: "La Plume du Juriste",
  description: "Accompagnement juridique moderne et humain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
<body
  className={`
    ${geistSans.variable}
    ${geistMono.variable}
    ${workSans.variable}
    ${dmSerif.variable}
    ${lobster.variable}
    antialiased
    bg-[#FFFDF7] text-[#1a1a1a]  // ✅ Ajout du fond clair et texte sombre
  `}
>
        {children}
      </body>
    </html>
  );
}
