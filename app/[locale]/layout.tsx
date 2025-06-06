import { ReactNode } from 'react';
import Header from "@/components/ui/header";
import { LanguageProvider } from "@/contexts/LanguageContext";
import TranslationLoader from "@/components/ui/translation-loader";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header />
        {children}
      </div>
      <TranslationLoader />
    </LanguageProvider>
  );
} 