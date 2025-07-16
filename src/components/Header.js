"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LuMenu, LuX, LuChevronDown, LuChevronUp } from "react-icons/lu";
import DropdownServices from "./DropdownServices";


export default function Header({ variant = "dark", bgColor }) {
  const textColor = variant === "light" ? "text-white" : "text-[#193760]";
  const backgroundStyle = bgColor ? { backgroundColor: bgColor } : {};

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
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

      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className={`md:hidden ${textColor}`}
        aria-label="Ouvrir le menu"
      >
        <LuMenu className="w-6 h-6" />
      </button>
      </header>

      {/* Overlay mobile menu */}
      <div
        className={`fixed inset-0 bg-[#193760] text-white p-6 z-50 transition-transform duration-300 overflow-y-auto ${open ? 'translate-y-0' : '-translate-y-full'} md:hidden`}
        >
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img src="/images/Plume-LPJ.png" alt="Logo" className="w-8" />
            <span className="text-xl" style={{ fontFamily: 'Lobster, cursive' }}>
              La Plume du Juriste
            </span>
          </Link>
          <button onClick={closeMenu} aria-label="Fermer le menu">
            <LuX className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 text-lg">
          <Link href="/" onClick={closeMenu} className="hover:text-[#5A9eef]">
            Accueil
          </Link>
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full hover:text-[#5A9eef]"
            >
              <span>Services</span>
              {servicesOpen ? (
                <LuChevronUp className="w-4 h-4" />
              ) : (
                <LuChevronDown className="w-4 h-4" />
              )}
            </button>
            <div className={`${servicesOpen ? 'block' : 'hidden'} mt-2 space-y-2 pl-4 text-base`}>
              <Link href="#" className="block hover:text-[#5A9eef]" onClick={closeMenu}>
                Création d'entreprise
              </Link>
              <Link href="#" className="block hover:text-[#5A9eef]" onClick={closeMenu}>
                Changement de statuts
              </Link>
              <Link href="#" className="block hover:text-[#5A9eef]" onClick={closeMenu}>
                Fermeture de société
              </Link>
            </div>
          </div>
          <Link href="/blog" onClick={closeMenu} className="hover:text-[#5A9eef]">
            Blog
          </Link>
          <Link href="/#temoignages" onClick={closeMenu} className="hover:text-[#5A9eef]">
            Témoignages
          </Link>
          <Link href="/apropos" onClick={closeMenu} className="hover:text-[#5A9eef]">
            À propos
          </Link>
          <Link href="/contact" onClick={closeMenu} className="hover:text-[#5A9eef]">
            Contact
          </Link>
        </nav>
      </div>
    </>
    );
}
