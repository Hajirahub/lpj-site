'use client';
//contact+call to action

import React, { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    grecaptcha: any;
  }
}
import Lottie from 'lottie-react';
import { LuPlus, LuX } from 'react-icons/lu';

// ✅ L'import se fait ici
const animationData = require('../lotties/animationCall.json');

const faqs = [
  {
    q: 'Quels types de formalités proposez-vous ?',
    a:
      "Nous vous accompagnons dans toutes les étapes clés de la vie d’une entreprise : création, modification des statuts, transfert de siège, fermeture, et publications d’annonces légales.",
  },
  {
    q: 'Est-ce que vous rédigez les statuts ?',
    a:
      'Oui, nous rédigeons des statuts personnalisés adaptés à votre activité, votre régime fiscal et vos objectifs. Nous pouvons aussi corriger ou relire des statuts existants.',
  },
  {
    q: 'En combien de temps ma société peut-elle être créée ?',
    a:
      'En général sous 48 à 72 heures après réception et validation de tous les documents nécessaires.',
  },
  {
    q: 'Travaillez-vous avec des micro-entrepreneurs ?',
    a:
      'Oui, nous accompagnons les micro-entrepreneurs dans leurs démarches : immatriculation, modification d’activité, passage en société, etc.',
  },
  {
    q: 'Vos services remplacent-ils un avocat ou un expert-comptable ?',
    a:
      'Non. Nous travaillons en complément : nous ne donnons pas de conseils juridiques ou fiscaux, mais nous facilitons toutes les démarches administratives.',
  },
  {
    q: 'Que proposez-vous en stratégie digitale ?',
    a:
      'Nous vous aidons à optimiser votre présence en ligne : fiche Google, SEO local, création de site, gestion des avis clients et image de marque.',
  },
  {
    q: 'Est-ce que vous créez des sites web ?',
    a:
      'Oui. Nous proposons des sites vitrines rapides, élégants et adaptés aux indépendants et petites entreprises.',
  },
  {
    q: 'Je ne suis pas à l’aise avec le digital, est-ce un problème ?',
    a:
      'Pas du tout. Notre mission est de rendre les choses simples, compréhensibles et accessibles pour tout le monde.',
  },
  {
    q: 'Le premier rendez-vous est-il gratuit ?',
    a:
      'Oui. Le premier échange est offert et sans engagement, pour comprendre vos besoins et vous proposer une solution sur mesure.',
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-md transition-colors"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <span className="font-semibold text-[#0f2c4f]">{item.q}</span>
            {open === index ? (
              <LuX className="w-5 h-5" />
            ) : (
              <LuPlus className="w-5 h-5" />
            )}
          </button>
          <div
            className={`px-4 pb-4 transition-all duration-300 ease-in-out overflow-hidden ${
              open === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-gray-700">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default function ContactSection() {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    objet: '',
    message: '',
    website: '', // honeypot
  });
  const [errors, setErrors] = useState({ nom: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const [captchaToken, setCaptchaToken] = useState('');
  const recaptchaRef = useRef<HTMLDivElement | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

  useEffect(() => {
    const scriptId = 'recaptcha-script';

    const renderCaptcha = () => {
      if (
        window.grecaptcha &&
        typeof window.grecaptcha.render === 'function' &&
        recaptchaRef.current
      ) {
        if (!siteKey) {
          console.warn('reCAPTCHA site key is missing');
          return;
        }
        window.grecaptcha.render(recaptchaRef.current, {
          siteKey,
            callback: (token: string) => setCaptchaToken(token),
          'expired-callback': () => setCaptchaToken(''),
        });
      }
    };
    if (document && !document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
          window.grecaptcha.ready(renderCaptcha);
        } else {
          renderCaptcha();
        }
      };
      document.body.appendChild(script);
    } else if (window.grecaptcha) {
      if (typeof window.grecaptcha.ready === 'function') {
        window.grecaptcha.ready(renderCaptcha);
      } else {
        renderCaptcha();
      }
    }
  }, []);

  const sanitizeInput = (value: string) =>
    value.replace(/</g, '').replace(/>/g, '');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = { nom: '', email: '', message: '' };
    const hasDangerous = (value: string) => /[<>]/.test(value);

    if (!form.nom.trim()) newErrors.nom = 'Champ obligatoire';
    if (hasDangerous(form.nom)) newErrors.nom = 'Caractères invalides';

    if (!form.email.trim()) newErrors.email = 'Champ obligatoire';
    if (form.email && !/^[^<>@\s]+@[^<>@\s]+\.[^<>@\s]+$/.test(form.email)) {
      newErrors.email = 'Adresse invalide';
    }
        if (hasDangerous(form.email)) newErrors.email = 'Caractères invalides';

    if (!form.message.trim()) newErrors.message = 'Champ obligatoire';
        if (hasDangerous(form.message)) newErrors.message = 'Caractères invalides';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return; // honeypot
    const newErrors = validate();
    if (newErrors.nom || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      setStatus('');
      return;
    }
    if (!captchaToken) {
      setStatus('Veuillez valider le captcha');
      return;
    }

    setErrors({ nom: '', email: '', message: '' });

    const payload = {
      nom: sanitizeInput(form.nom),
      prenom: sanitizeInput(form.prenom),
      email: sanitizeInput(form.email),
      objet: sanitizeInput(form.objet),
      message: sanitizeInput(form.message),
      'g-recaptcha-response': captchaToken,    };
    console.log(payload); // placeholder for server call
    setStatus('Message envoyé !');
    setForm({ nom: '', prenom: '', email: '', objet: '', message: '', website: '' });
    setCaptchaToken('');
    if (window.grecaptcha && recaptchaRef.current) {
      window.grecaptcha.reset();
    }    
  };
    return (
    <section className="bg-[url('/background.png')] py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 👉 Colonne gauche - Infos */}
        <div>
          <span className="uppercase text-sm text-[#F58700] font-semibold">
            Ne soyez pas timide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-dm-serif text-[#1a1a1a] mt-2 mb-4">
            Contactez-nous
          </h2>
          <p className="text-gray-700 mb-8">
            Besoin d’un accompagnement juridique, d’une aide administrative ou d’une stratégie digitale claire ?
            Écrivez-nous ou appelez-nous directement.
          </p>

          {/* 📞 Téléphone */}
          <div className="flex items-center gap-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F58700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l.6 2.3a1 1 0 00.9.7l2.4.4a1 1 0 01.7.5l1.4 2.5a1 1 0 010 .8l-1.4 2.5a1 1 0 01-.7.5l-2.4.4a1 1 0 00-.9.7L5 19H3v-2l.4-2.2a1 1 0 00-.3-.9L2 12.6a1 1 0 010-.8l1.1-1.3a1 1 0 00.3-.9L3 5z" />
            </svg>
            <a href="tel:+33769623724" className="text-[#1a1a1a] hover:text-[#F58700] font-medium">
              +33 7 69 62 37 24
            </a>
          </div>

          {/* 📧 Email */}
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F58700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:contact@laplumedujuriste.fr" className="text-[#1a1a1a] hover:text-[#F58700] font-medium">
              contact@laplumedujuriste.fr
            </a>
          </div>
        </div>

        {/* ✍️ Colonne droite - Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#F1F3F5] rounded-2xl p-6 shadow-md space-y-6"
        >
          {/* 🌿 Ligne : Nom + Prénom */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1" htmlFor="nom">
                Nom
              </label>
              <input
                id="nom"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
                minLength={2}
                pattern="^[^<>]*$"
                placeholder="Entrez votre nom"
                className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#F58700] transition-colors duration-200 text-sm py-2 placeholder-gray-400"
              />
              {errors.nom && (
                <p className="text-red-500 text-xs mt-1">{errors.nom}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1" htmlFor="prenom">
                Prénom
              </label>
              <input
                id="prenom"
                name="prenom"
                value={form.prenom}
                onChange={handleChange}
                minLength={2}
                pattern="^[^<>]*$"
                placeholder="Entrez votre prénom"
                className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#F58700] transition-colors duration-200 text-sm py-2 placeholder-gray-400"
              />
            </div>
          </div>

          {/* ✉️ Email */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1" htmlFor="email">
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              pattern="^[^<>]*$"
              placeholder="vous@example.com"
              className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#F58700] transition-colors duration-200 text-sm py-2 placeholder-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* 🧾 Objet */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1" htmlFor="objet">
              Objet
            </label>
            <input
              id="objet"
              name="objet"
              value={form.objet}
              onChange={handleChange}
              minLength={2}
              pattern="^[^<>]*$"
              placeholder="Ex. : demande de RDV"
              className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#F58700] transition-colors duration-200 text-sm py-2 placeholder-gray-400"
            />
          </div>

          {/* 📝 Message */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              minLength={10}
              placeholder="Tapez votre message ici..."
              rows={4}
              className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#F58700] transition-colors duration-200 text-sm py-2 placeholder-gray-400 resize-none"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Honeypot */}
          <div style={{ display: 'none' }}>
            <label htmlFor="website">Site web</label>
            <input
              id="website"
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* reCAPTCHA */}
          <div ref={recaptchaRef} className="g-recaptcha"></div>

          {/* 📩 Bouton */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-[#F58700] hover:bg-[#d67200] text-white font-medium text-sm font-worksans py-2 px-6 rounded-full transition duration-200"
            >
              Envoyer le message →
            </button>
            {status && (
              <p className="text-green-600 text-sm mt-2 text-center">{status}</p>
            )}
          </div>
        </form>



        </div>

        {/* FAQ Section */}
        <section className="w-full py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-center uppercase text-sm text-gray-500 font-semibold mb-2">
              DES QUESTIONS ?
            </p>
            <h2 className="text-center text-3xl md:text-4xl font-dm-serif text-[#1a1a1a] mb-8">
              Questions fréquemment posées
            </h2>
            <FAQ />
          </div>
        </section>
  <div className="w-full text-center mt-16">
    <p className="text-[#0f2c4f] text-sm md:text-base font-medium opacity-70 mb-1">
      Planifier votre appel découverte gratuit !
    </p>
    <div className="text-[#0f2c4f] text-2xl animate-bounce">↓</div>
  </div>

    {/* Call to action section */}

    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto bg-[#193760] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        {/* Animation */}
        <div className="w-40 h-40">
          <Lottie animationData={animationData} loop={true} />
        </div>
        {/* Texte + bouton */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold font-dm-serif mb-2">
            Planifiez un appel découverte
          </h2>
          <p className="text-sm md:text-base text-[#e2e8f0] mb-4">
            Un accompagnement personnalisé pour créer ou modifier votre société.
          </p>
          <button className="flex items-center gap-2 bg-white text-[#193760] px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
            Prendre rendez-vous →
          </button>
        </div>
      </div>
    </section>

    </section>
  );
}
