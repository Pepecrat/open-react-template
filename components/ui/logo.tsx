"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { useTranslation } from "@/hooks/useTranslation";
import { useState, useEffect, useCallback } from "react";

export default function Logo() {
  const { t, currentLanguage } = useTranslation();
  const [logoTexts, setLogoTexts] = useState({
    ariaLabel: "Kyra - Inicio",
    altText: "Logo de Kyra"
  });

  // Memoizar la función de traducción
  const translateLogoTexts = useCallback(async () => {
    if (currentLanguage === 'es') {
      setLogoTexts({
        ariaLabel: "Kyra - Inicio",
        altText: "Logo de Kyra"
      });
    } else {
      try {
        const [ariaLabel, altText] = await Promise.all([
          t("Kyra - Inicio"),
          t("Logo de Kyra")
        ]);
        
        setLogoTexts({
          ariaLabel,
          altText
        });
      } catch (error) {
        console.error('Error traduciendo logo:', error);
      }
    }
  }, [currentLanguage, t]);

  // Traducir textos cuando cambie el idioma
  useEffect(() => {
    translateLogoTexts();
  }, [translateLogoTexts]);

  return (
    <Link 
      href="/" 
      className="inline-flex shrink-0 items-center transition-transform hover:scale-105" 
      aria-label={logoTexts.ariaLabel}
    >
      <Image 
        src={logo} 
        alt={logoTexts.altText} 
        width={120} 
        height={120}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain"
        priority
        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, (max-width: 1280px) 112px, 128px"
      />
    </Link>
  );
}
