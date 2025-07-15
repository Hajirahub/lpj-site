"use client";
import Link from "next/link";
import DropdownServices from './DropdownServices';

export default function Header({ variant = "dark", bgColor }) {
  const textColor = variant === "light" ? "text-white" : "text-[#193760]";
  const backgroundStyle = bgColor ? { backgroundColor: bgColor } : {};

  return (
    <header
      className="w-full flex items-center justify-between px-6 py-4 absolute top-0 left-0 z-50"
      style={backgroundStyle}
    >
      {/* Logo à gauche */}
      <Link href="/" className="flex items-center space-x-2">
        <img
          src="/images/Plume-LPJ.png"
          alt="Icône La Plume du Juriste"
          className="w-8 md:w-10"
        />
        <span
          className="text-white text-xl md:text-2xl"
          style={{ fontFamily: "Lobster, cursive" }}
        >
          La Plume du Juriste
        </span>
      </Link>

      {/* Menu centré */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 text-[#fefefe] font-medium">
        <DropdownServices />
        <Link href="/juridoc" className="hover:text-[#5A9eef] transition">
          <button className="border border-white px-5 py-2 text-xs rounded-full hover:bg-white hover:text-[#0f2c4f] transition">
            Générer des documents
          </button>
        </Link>
        <Link href="/blog" className="hover:text-[#5A9eef] transition">
          Blog
        </Link>
        <a href="/#temoignages" className="hover:text-[#5A9eef] transition">
          Témoignages
        </a>
        <Link href="/apropos" className="hover:text-[#5A9eef] transition">
          À propos
        </Link>
        <Link href="/contact" className="hover:text-[#5A9eef] transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}
