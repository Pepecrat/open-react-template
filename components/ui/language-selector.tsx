"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage, SUPPORTED_LANGUAGES } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export default function LanguageSelector() {
  const { currentLanguage, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [ariaLabel, setAriaLabel] = useState("Seleccionar idioma");

  // Traducir aria-label
  const translateAriaLabel = useCallback(async () => {
    if (currentLanguage === 'es') {
      setAriaLabel("Seleccionar idioma");
    } else {
      try {
        const translated = await t("Seleccionar idioma");
        setAriaLabel(translated);
      } catch (error) {
        console.error('Error traduciendo aria-label:', error);
      }
    }
  }, [currentLanguage, t]);

  useEffect(() => {
    translateAriaLabel();
  }, [translateAriaLabel]);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLangData = SUPPORTED_LANGUAGES[currentLanguage as keyof typeof SUPPORTED_LANGUAGES];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón selector */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2 text-sm text-gray-300 transition-all hover:bg-gray-700/50 hover:text-white"
        aria-label={ariaLabel}
      >
        <span className="text-lg">{currentLangData?.flag}</span>
        <span className="hidden sm:inline">{currentLangData?.name}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[160px] rounded-lg bg-gray-900/95 border border-gray-700 shadow-xl backdrop-blur-sm">
          <div className="py-2">
            {Object.entries(SUPPORTED_LANGUAGES).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code)}
                className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors hover:bg-gray-800/50 ${
                  currentLanguage === code 
                    ? 'bg-gray-800/30 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
                {currentLanguage === code && (
                  <svg
                    className="ml-auto h-4 w-4 text-[#3aa181]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 