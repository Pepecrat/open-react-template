"use client";

import Link from "next/link";
import Logo from "./logo";
import LanguageSelector from "./language-selector";
import { useTranslation } from "@/hooks/useTranslation";
import { useState, useEffect, useCallback } from "react";

// Traducciones estáticas como fallback
const STATIC_TRANSLATIONS = {
  es: {
    inicio: "Inicio",
    workflows: "Flujos",
    features: "Características",
    testimonios: "Testimonios",
    contacto: "Contacto",
    tooltipInicio: "Ir al inicio de la página",
    tooltipWorkflows: "Ver nuestros flujos de trabajo",
    tooltipFeatures: "Explorar características",
    tooltipTestimonios: "Leer testimonios de clientes",
    tooltipContacto: "Contactar con nosotros"
  },
  en: {
    inicio: "Home",
    workflows: "Workflows",
    features: "Features",
    testimonios: "Testimonials",
    contacto: "Contact",
    tooltipInicio: "Go to top of page",
    tooltipWorkflows: "View our workflows",
    tooltipFeatures: "Explore features",
    tooltipTestimonios: "Read customer testimonials",
    tooltipContacto: "Contact us"
  },
  de: {
    inicio: "Start",
    workflows: "Arbeitsabläufe",
    features: "Funktionen",
    testimonios: "Bewertungen",
    contacto: "Kontakt",
    tooltipInicio: "Zum Seitenanfang gehen",
    tooltipWorkflows: "Unsere Arbeitsabläufe ansehen",
    tooltipFeatures: "Funktionen erkunden",
    tooltipTestimonios: "Kundenbewertungen lesen",
    tooltipContacto: "Kontaktieren Sie uns"
  },
  fr: {
    inicio: "Accueil",
    workflows: "Flux de travail",
    features: "Fonctionnalités",
    testimonios: "Témoignages",
    contacto: "Contact",
    tooltipInicio: "Aller en haut de la page",
    tooltipWorkflows: "Voir nos flux de travail",
    tooltipFeatures: "Explorer les fonctionnalités",
    tooltipTestimonios: "Lire les témoignages clients",
    tooltipContacto: "Nous contacter"
  },
  pt: {
    inicio: "Início",
    workflows: "Fluxos de trabalho",
    features: "Recursos",
    testimonios: "Depoimentos",
    contacto: "Contato",
    tooltipInicio: "Ir para o topo da página",
    tooltipWorkflows: "Ver nossos fluxos de trabalho",
    tooltipFeatures: "Explorar recursos",
    tooltipTestimonios: "Ler depoimentos de clientes",
    tooltipContacto: "Entre em contato"
  }
};

export default function Header() {
  const { t, currentLanguage } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuTexts, setMenuTexts] = useState({
    inicio: "Inicio",
    workflows: "Flujos", 
    features: "Características",
    testimonios: "Testimonios",
    contacto: "Contacto"
  });

  const [tooltips, setTooltips] = useState({
    inicio: "Ir al inicio de la página",
    workflows: "Ver nuestros flujos de trabajo",
    features: "Explorar características",
    testimonios: "Leer testimonios de clientes",
    contacto: "Contactar con nosotros"
  });

  // Memoizar la función de traducción para evitar bucles infinitos
  const translateMenuTexts = useCallback(async () => {
    console.log('Traduciendo menú para idioma:', currentLanguage);
    
    // Usar traducciones estáticas primero
    const staticTranslations = STATIC_TRANSLATIONS[currentLanguage as keyof typeof STATIC_TRANSLATIONS];
    
    if (staticTranslations) {
      console.log('Usando traducciones estáticas para:', currentLanguage);
      setMenuTexts({
        inicio: staticTranslations.inicio,
        workflows: staticTranslations.workflows,
        features: staticTranslations.features,
        testimonios: staticTranslations.testimonios,
        contacto: staticTranslations.contacto
      });
      
      setTooltips({
        inicio: staticTranslations.tooltipInicio,
        workflows: staticTranslations.tooltipWorkflows,
        features: staticTranslations.tooltipFeatures,
        testimonios: staticTranslations.tooltipTestimonios,
        contacto: staticTranslations.tooltipContacto
      });
    } else {
      // Fallback a traducciones dinámicas para idiomas no incluidos
      console.log('Usando traducciones dinámicas para:', currentLanguage);
      try {
        const [inicio, workflows, features, testimonios, contacto, 
               tooltipInicio, tooltipWorkflows, tooltipFeatures, tooltipTestimonios, tooltipContacto] = await Promise.all([
          t("Inicio"),
          t("Workflows"),
          t("Features"),
          t("Testimonios"),
          t("Contacto"),
          t("Ir al inicio de la página"),
          t("Ver nuestros flujos de trabajo"),
          t("Explorar características"),
          t("Leer testimonios de clientes"),
          t("Contactar con nosotros")
        ]);
        
        setMenuTexts({
          inicio,
          workflows,
          features,
          testimonios,
          contacto
        });
        
        setTooltips({
          inicio: tooltipInicio,
          workflows: tooltipWorkflows,
          features: tooltipFeatures,
          testimonios: tooltipTestimonios,
          contacto: tooltipContacto
        });
      } catch (error) {
        console.error('Error traduciendo menú:', error);
      }
    }
  }, [currentLanguage, t]);

  // Traducir textos del menú cuando cambie el idioma
  useEffect(() => {
    translateMenuTexts();
  }, [translateMenuTexts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Cerrar menú móvil después de hacer scroll
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 md:h-24 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 md:px-6 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-end">
            <ul className="flex items-center gap-6">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 transition-colors hover:text-white text-sm xl:text-base"
                  title={tooltips.inicio}
                  aria-label={tooltips.inicio}
                >
                  {menuTexts.inicio}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('workflows')}
                  className="text-gray-300 transition-colors hover:text-white text-sm xl:text-base"
                  title={tooltips.workflows}
                  aria-label={tooltips.workflows}
                >
                  {menuTexts.workflows}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-300 transition-colors hover:text-white text-sm xl:text-base"
                  title={tooltips.features}
                  aria-label={tooltips.features}
                >
                  {menuTexts.features}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 transition-colors hover:text-white text-sm xl:text-base"
                  title={tooltips.testimonios}
                  aria-label={tooltips.testimonios}
                >
                  {menuTexts.testimonios}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-sm bg-linear-to-t from-[#3aa181] to-[#EF5EA5] bg-[length:100%_100%] bg-[bottom] py-[5px] px-4 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] text-sm xl:text-base"
                  title={tooltips.contacto}
                  aria-label={tooltips.contacto}
                >
                  {menuTexts.contacto}
                </button>
              </li>
              <li>
                <LanguageSelector />
              </li>
            </ul>
          </nav>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSelector />
            
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 rounded-2xl bg-gray-900/95 border border-gray-700 shadow-xl backdrop-blur-sm overflow-hidden">
            <nav className="py-4">
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="w-full text-left px-6 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                    title={tooltips.inicio}
                  >
                    {menuTexts.inicio}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('workflows')}
                    className="w-full text-left px-6 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                    title={tooltips.workflows}
                  >
                    {menuTexts.workflows}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="w-full text-left px-6 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                    title={tooltips.features}
                  >
                    {menuTexts.features}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className="w-full text-left px-6 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                    title={tooltips.testimonios}
                  >
                    {menuTexts.testimonios}
                  </button>
                </li>
                <li className="px-6 py-2">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-linear-to-t from-[#3aa181] to-[#EF5EA5] bg-[length:100%_100%] bg-[bottom] py-3 px-4 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] rounded-lg transition-all"
                    title={tooltips.contacto}
                  >
                    {menuTexts.contacto}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
