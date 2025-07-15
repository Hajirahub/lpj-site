// src/components/Footer.tsx

import Link from 'next/link';
import { FaLinkedin, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#193760] text-white text-sm py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Liens à gauche */}
        <div className="flex flex-wrap gap-4">
          <Link href="/mentions-legales" className="hover:underline">
            Mentions légales
          </Link>
          <Link href="/cgu" className="hover:underline">
            CGU
          </Link>
          <Link href="/confidentialite" className="hover:underline">
            Confidentialité
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Icônes réseaux sociaux */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5A9EEF] transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5A9EEF] transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5A9EEF] transition-colors"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
