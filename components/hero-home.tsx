"use client";

import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import PageIllustration from "./page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { useState, useEffect, useCallback } from "react";

export default function HeroHome() {
  const { t, currentLanguage } = useTranslation();
  const [heroTexts, setHeroTexts] = useState({
    title: "Desarrolla tu próxima idea y crea el sitio de tus sueños",
    description: "Cero código, máxima velocidad. Crea sitios profesionales de forma fácil, rápida y divertida mientras ofreces el mejor SEO y rendimiento de su clase.",
    startBuilding: "Comienza a construir gratis",
    learnMore: "Saber más"
  });

  // Memoizar la función de traducción
  const translateHeroTexts = useCallback(async () => {
    if (currentLanguage === 'es') {
      setHeroTexts({
        title: "Desarrolla tu próxima idea y crea el sitio de tus sueños",
        description: "Cero código, máxima velocidad. Crea sitios profesionales de forma fácil, rápida y divertida mientras ofreces el mejor SEO y rendimiento de su clase.",
        startBuilding: "Comienza a construir gratis",
        learnMore: "Saber más"
      });
    } else {
      try {
        const [title, description, startBuilding, learnMore] = await Promise.all([
          t("Desarrolla tu próxima idea y crea el sitio de tus sueños"),
          t("Cero código, máxima velocidad. Crea sitios profesionales de forma fácil, rápida y divertida mientras ofreces el mejor SEO y rendimiento de su clase."),
          t("Comienza a construir gratis"),
          t("Saber más")
        ]);
        
        setHeroTexts({
          title,
          description,
          startBuilding,
          learnMore
        });
      } catch (error) {
        console.error('Error traduciendo hero:', error);
      }
    }
  }, [currentLanguage, t]);

  // Traducir textos cuando cambie el idioma
  useEffect(() => {
    translateHeroTexts();
  }, [translateHeroTexts]);

  return (
    <section id="hero" className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),#EF5EA5,var(--color-gray-50),#3aa181,var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              {heroTexts.title}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-300"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {heroTexts.description}
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-[#3aa181] to-[#EF5EA5] bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      {heroTexts.startBuilding}
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-gradient-to-t from-gray-800 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-gray-300 hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    {heroTexts.learnMore}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
