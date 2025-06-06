"use client";

import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function useTranslation() {
  const { currentLanguage, translate, isLoading } = useLanguage();
  const [translatedTexts, setTranslatedTexts] = useState<{ [key: string]: string }>({});

  // Memoizar la función t para evitar que cambie en cada render
  const t = useCallback(async (text: string): Promise<string> => {
    // Si ya está traducido, devolverlo inmediatamente
    if (translatedTexts[text]) {
      return translatedTexts[text];
    }

    // Si es español, devolver el texto original
    if (currentLanguage === 'es') {
      return text;
    }

    try {
      const translated = await translate(text);
      setTranslatedTexts(prev => ({
        ...prev,
        [text]: translated
      }));
      return translated;
    } catch (error) {
      console.error('Error traduciendo:', error);
      return text;
    }
  }, [currentLanguage, translate, translatedTexts]);

  // Función síncrona para textos ya traducidos o español
  const tSync = useCallback((text: string): string => {
    if (currentLanguage === 'es') {
      return text;
    }
    return translatedTexts[text] || text;
  }, [currentLanguage, translatedTexts]);

  // Limpiar traducciones cuando cambie el idioma
  useEffect(() => {
    setTranslatedTexts({});
  }, [currentLanguage]);

  return {
    t,
    tSync,
    isLoading,
    currentLanguage
  };
} 