// src/app/blog/layout.js

import "../globals.css"; // si nécessaire (optionnel si déjà global ailleurs)
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Blog – La Plume du Juriste",
};

export default function BlogLayout({ children }) {
  return (
    <>
      <Header variant="dark" />
      <main className="bg-white text-black">{children}</main>
            <Footer />
    </>
  );
}
