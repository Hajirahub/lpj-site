"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import classNames from "classnames";

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}


const services = [
  {
    title: "Création d’entreprise",
    subSections: [
      {
        category: "Créer une société",
        links: [
          "Créer une SASU",
          "Créer une SAS",
          "Créer une EURL",
          "Créer une SARL",
          "Créer une SCI",
          "Création d'une entreprise individuelle",
          "Création d'un statut auto-entrepreneur",
        ],
      },
    ],
  },
  {
    title: "Modification de statuts",
    subSections: [
      {
        category: "Modifier votre entreprise",
        links: [
          "Transfert de siège",
          "Changement de dirigeant",
          "Changement d'activité",
          "Transformation de société",
          "Changement de dénomination",
          "Levée de radiation d'office",
          "Transformation d'une SARL en SAS",
          "Transformation d'une SAS en SARL",
          "Changement d'objet social",
          "Changement de gérant",
          "Changement de président",
        ],
      },
      {
        category: "Opérations sur le capital",
        links: [
          "Cession de parts sociales",
          "Cession d'actions",
          "Augmentation de capital",
          "Réduction de capital",
        ],
      },
    ],
  },
  {
    title: "Dissolution / Liquidation",
    subSections: [
      {
        category: "Fermer votre société",
        links: [
          "Dissolution Liquidation",
          "Mise en sommeil",
        ],
      },
      {
        category: "Autres opérations",
        links: [
          "Bénéficiaires effectifs",
          "Dépôt des comptes",
        ],
      },
    ],
  },
];

export default function DropdownServices() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
    setActiveMenu(null);
  };

  const handleMenuClick = (title) => {
    setActiveMenu((prev) => (prev === title ? null : title));
  };

return (
  <div className="relative text-white font-work">
    <button
      onClick={toggleDropdown}
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      Nos services
      {open ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
    </button>

    <div
      className={classNames(
        "absolute left-0 mt-3 bg-white text-[#0f2c4f] rounded-xl shadow-xl overflow-hidden z-50 transition-all duration-700 ease-in-out",
        {
          "max-h-0": !open,
          "max-h-[1000px]": open,
          "w-[560px]": activeMenu === "Modification de statuts",
          "w-[260px]": activeMenu !== "Modification de statuts",
        }
      )}
    >
      {services.map((service) => (
        <div key={service.title} className="border-b last:border-b-0">
          <button
            onClick={() => handleMenuClick(service.title)}
            className={classNames(
              "w-full text-left px-4 py-3 font-semibold hover:bg-[#F5F9FF] transition-colors",
              {
                "bg-[#F0F8FF]": activeMenu === service.title,
              }
            )}
          >
            {service.title}
          </button>

          <div
            className={classNames(
              "transition-[max-height] duration-700 ease-in-out overflow-hidden",
              {
                "max-h-0": activeMenu !== service.title,
                "max-h-[1000px]": activeMenu === service.title,
              }
            )}
          >
            <div
              className={classNames(
                "bg-[#fefefe] text-sm text-[#0f2c4f] px-4 py-2",
                {
                  "flex gap-8": service.title === "Modification de statuts",
                  "flex-col": service.title !== "Modification de statuts",
                }
              )}
            >
              {service.title === "Modification de statuts" ? (
                <>
                  {/* Bloc Modifier votre entreprise (2 colonnes) */}
                  <div className="grid grid-cols-2 gap-x-4 px-2 pt-2 pb-4 w-[65%]">
                    {service.subSections
                      .filter((sub) => sub.category === "Modifier votre entreprise")
                      .map((sub, i) => (
                        <div key={i} className="col-span-2">
                          <div className="text-xs font-bold text-gray-600 mb-1">
                            {sub.category}
                          </div>
                          <ul className="grid grid-cols-2 gap-2">
                            {sub.links.map((link) => (
                              <li key={link}>
                                <Link
                                  href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                                  className="block px-2 py-1 rounded hover:bg-[#E5F0FF] transition"
                                >
                                  {link}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>

                  {/* Bloc Opérations sur le capital */}
                  <div className="px-2 pt-2 pb-4 w-[35%]">
                    {service.subSections
                      .filter((sub) => sub.category === "Opérations sur le capital")
                      .map((sub, i) => (
                        <div key={i}>
                          <div className="text-xs font-bold text-gray-600 mb-1">
                            {sub.category}
                          </div>
                          <ul className="space-y-1">
                            {sub.links.map((link) => (
                              <li key={link}>
                                <Link
                                  href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                                  className="block px-2 py-1 rounded hover:bg-[#E5F0FF] transition"
                                >
                                  {link}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                </>
              ) : (
                // Autres menus classiques
                <div className="px-4 pt-2 pb-4">
                  {service.subSections.map((sub, i) => (
                    <div key={i}>
                      <div className="text-xs font-bold text-gray-600 mb-1">
                        {sub.category}
                      </div>
                      <ul className="space-y-1">
                        {sub.links.map((link) => (
                          <li key={link}>
                            <Link
                              href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                              className="block px-2 py-1 rounded hover:bg-[#E5F0FF] transition"
                            >
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);





}