"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// Configuración de idiomas soportados
export const SUPPORTED_LANGUAGES = {
  es: { name: 'Español', flag: '🇪🇸', code: 'es' },
  en: { name: 'English', flag: '🇺🇸', code: 'en' },
  fr: { name: 'Français', flag: '🇫🇷', code: 'fr' },
  de: { name: 'Deutsch', flag: '🇩🇪', code: 'de' },
  pt: { name: 'Português', flag: '🇧🇷', code: 'pt' }
};

// Mapeo de países a idiomas
const COUNTRY_TO_LANGUAGE: { [key: string]: string } = {
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es', 'CL': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es', 'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es', 'CR': 'es', 'PA': 'es', 'UY': 'es',
  'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en', 'ZA': 'en', 'IN': 'en',
  'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'LU': 'fr', 'MC': 'fr',
  'DE': 'de', 'AT': 'de', 'LI': 'de',
  'BR': 'pt', 'PT': 'pt', 'AO': 'pt', 'MZ': 'pt'
};

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  translate: (text: string) => Promise<string>;
  isLoading: boolean;
  translations: { [key: string]: string };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Cache para traducciones
const translationCache: { [key: string]: { [key: string]: string } } = {};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<string>('es');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [translations, setTranslations] = useState<{ [key: string]: string }>({});
  const pathname = usePathname();
  const router = useRouter();

  // Detectar idioma de la URL al cargar
  useEffect(() => {
    const pathSegments = pathname.split('/');
    const localeFromPath = pathSegments[1];
    
    if (SUPPORTED_LANGUAGES[localeFromPath as keyof typeof SUPPORTED_LANGUAGES]) {
      setCurrentLanguage(localeFromPath);
    } else {
      // Si no hay locale en la URL, detectar por IP
      detectLanguageByIP();
    }
  }, [pathname]);

  const detectLanguageByIP = async () => {
    try {
      // Verificar si hay idioma guardado en localStorage
      const savedLanguage = localStorage.getItem('preferred-language');
      if (savedLanguage && SUPPORTED_LANGUAGES[savedLanguage as keyof typeof SUPPORTED_LANGUAGES]) {
        setCurrentLanguage(savedLanguage);
        return;
      }

      // Usar ipapi.co para detectar el país
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      if (data.country_code) {
        const detectedLanguage = COUNTRY_TO_LANGUAGE[data.country_code] || 'es';
        setCurrentLanguage(detectedLanguage);
        console.log(`Idioma detectado: ${detectedLanguage} (País: ${data.country_code})`);
      }
    } catch (error) {
      console.log('No se pudo detectar el idioma por IP, usando español por defecto');
      setCurrentLanguage('es');
    }
  };

  const setLanguage = (lang: string) => {
    if (SUPPORTED_LANGUAGES[lang as keyof typeof SUPPORTED_LANGUAGES]) {
      setCurrentLanguage(lang);
      localStorage.setItem('preferred-language', lang);
      
      // Cambiar la URL para reflejar el nuevo idioma
      const pathSegments = pathname.split('/');
      pathSegments[1] = lang; // Reemplazar el locale en la URL
      const newPath = pathSegments.join('/');
      router.push(newPath);
    }
  };

  const translate = async (text: string): Promise<string> => {
    // Si el idioma es español, devolver el texto original
    if (currentLanguage === 'es') {
      return text;
    }

    // Verificar cache
    const cacheKey = `${text}_${currentLanguage}`;
    if (translationCache[currentLanguage] && translationCache[currentLanguage][text]) {
      return translationCache[currentLanguage][text];
    }

    try {
      setIsLoading(true);
      
      // Usar MyMemory Translation API (gratuita)
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=es|${currentLanguage}`
      );
      
      const data = await response.json();
      
      if (data.responseStatus === 200 && data.responseData) {
        const translatedText = data.responseData.translatedText;
        
        // Guardar en cache
        if (!translationCache[currentLanguage]) {
          translationCache[currentLanguage] = {};
        }
        translationCache[currentLanguage][text] = translatedText;
        
        return translatedText;
      }
      
      return text; // Fallback al texto original
    } catch (error) {
      console.error('Error en traducción:', error);
      return text; // Fallback al texto original
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      translate,
      isLoading,
      translations
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  }
  return context;
} 