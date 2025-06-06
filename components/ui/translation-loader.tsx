"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { useState, useEffect, useCallback } from "react";

export default function TranslationLoader() {
  const { isLoading, currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const [loadingText, setLoadingText] = useState("Traduciendo...");

  // Traducir el texto de carga
  const translateLoadingText = useCallback(async () => {
    if (currentLanguage === 'es') {
      setLoadingText("Traduciendo...");
    } else {
      try {
        const translated = await t("Traduciendo...");
        setLoadingText(translated);
      } catch (error) {
        console.error('Error traduciendo loading text:', error);
        setLoadingText("Translating..."); // Fallback en inglés
      }
    }
  }, [currentLanguage, t]);

  useEffect(() => {
    translateLoadingText();
  }, [translateLoadingText]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-gray-900/90 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm border border-gray-700">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-600 border-t-[#3aa181]"></div>
      <span>{loadingText}</span>
    </div>
  );
} 