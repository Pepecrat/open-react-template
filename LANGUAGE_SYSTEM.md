# Sistema de Idiomas Dinámico

## Características Implementadas

### 🌍 Detección Automática por IP
- **API utilizada**: `ipapi.co` (gratuita, sin API key requerida)
- **Detección automática** del país del usuario al cargar la página
- **Mapeo inteligente** de países a idiomas preferidos
- **Fallback** a español si la detección falla

### 🔄 Traducción Automática
- **API utilizada**: MyMemory Translation API (gratuita)
- **Cache inteligente** para evitar traducciones repetidas
- **Traducción asíncrona** sin bloquear la UI
- **Fallback** al texto original si la traducción falla

### 🎯 5 Idiomas Soportados
1. **Español** 🇪🇸 (idioma base)
2. **Inglés** 🇺🇸 
3. **Francés** 🇫🇷
4. **Alemán** 🇩🇪
5. **Portugués** 🇧🇷

## Arquitectura Técnica

### Contexto Global (`LanguageContext`)
```typescript
// Funcionalidades principales:
- currentLanguage: string          // Idioma actual
- setLanguage: (lang) => void      // Cambiar idioma
- translate: (text) => Promise     // Traducir texto
- isLoading: boolean               // Estado de carga
```

### Hook Personalizado (`useTranslation`)
```typescript
// Funciones disponibles:
- t(text): Promise<string>         // Traducción asíncrona
- tSync(text): string             // Traducción síncrona (cache)
- isLoading: boolean              // Estado de carga
- currentLanguage: string         // Idioma actual
```

## Cómo Usar en Componentes

### Ejemplo Básico
```tsx
"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { useState, useEffect } from "react";

export default function MiComponente() {
  const { t, currentLanguage } = useTranslation();
  const [textos, setTextos] = useState({
    titulo: "Mi título original",
    descripcion: "Mi descripción original"
  });

  useEffect(() => {
    const traducirTextos = async () => {
      if (currentLanguage === 'es') {
        // Textos en español (idioma base)
        setTextos({
          titulo: "Mi título original",
          descripcion: "Mi descripción original"
        });
      } else {
        // Traducir a otros idiomas
        const [titulo, descripcion] = await Promise.all([
          t("Mi título original"),
          t("Mi descripción original")
        ]);
        
        setTextos({ titulo, descripcion });
      }
    };

    traducirTextos();
  }, [currentLanguage, t]);

  return (
    <div>
      <h1>{textos.titulo}</h1>
      <p>{textos.descripcion}</p>
    </div>
  );
}
```

## Componentes Implementados

### 1. LanguageSelector
- **Ubicación**: `components/ui/language-selector.tsx`
- **Funcionalidad**: Dropdown con banderas y nombres de idiomas
- **Integrado en**: Header de la aplicación

### 2. TranslationLoader
- **Ubicación**: `components/ui/translation-loader.tsx`
- **Funcionalidad**: Indicador de carga durante traducciones
- **Posición**: Esquina superior derecha (fixed)

### 3. Header Actualizado
- **Navegación traducida**: Inicio, Workflows, Features, Testimonios, Contacto
- **Selector de idioma** integrado en el menú

### 4. Hero Actualizado
- **Ejemplo completo** de implementación de traducciones
- **Textos dinámicos** según el idioma seleccionado

## Mapeo de Países a Idiomas

```typescript
const COUNTRY_TO_LANGUAGE = {
  // Español
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 
  'VE': 'es', 'CL': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es',
  
  // Inglés  
  'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'NZ': 'en',
  'IE': 'en', 'ZA': 'en', 'IN': 'en',
  
  // Francés
  'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'LU': 'fr', 'MC': 'fr',
  
  // Alemán
  'DE': 'de', 'AT': 'de', 'LI': 'de',
  
  // Portugués
  'BR': 'pt', 'PT': 'pt', 'AO': 'pt', 'MZ': 'pt'
};
```

## Optimizaciones Implementadas

### 🚀 Performance
- **Cache de traducciones** para evitar llamadas repetidas a la API
- **Traducción asíncrona** sin bloquear la UI
- **Batch translation** usando `Promise.all()`

### 🔒 Robustez
- **Fallbacks** en caso de errores de API
- **Validación** de idiomas soportados
- **Manejo de errores** graceful

### 💾 Persistencia
- **LocalStorage** para recordar idioma preferido del usuario
- **Detección automática** solo en primera visita

## APIs Utilizadas

### 1. Detección de IP/País
- **Servicio**: ipapi.co
- **Endpoint**: `https://ipapi.co/json/`
- **Límites**: 1000 requests/día (gratuito)
- **Datos**: País, ciudad, IP, etc.

### 2. Traducción
- **Servicio**: MyMemory Translation API
- **Endpoint**: `https://api.mymemory.translated.net/get`
- **Límites**: 10000 caracteres/día (gratuito)
- **Calidad**: Traducción automática + memoria de traducción

## Próximas Mejoras Sugeridas

1. **Más idiomas**: Italiano, Japonés, Chino
2. **Traducción offline**: Diccionarios locales para textos comunes
3. **Detección de idioma del navegador**: Como fallback adicional
4. **Métricas**: Tracking de idiomas más utilizados
5. **SEO multiidioma**: URLs específicas por idioma 