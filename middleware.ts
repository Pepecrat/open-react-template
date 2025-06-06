import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Obtener el pathname de la URL
  const pathname = request.nextUrl.pathname;
  
  // Lista de idiomas soportados
  const locales = ['es', 'en', 'fr', 'de', 'pt'];
  
  // Verificar si el pathname ya incluye un locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Si no tiene locale, redirigir a español por defecto
  if (!pathnameHasLocale) {
    // Para la ruta raíz, redirigir a /es
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/es', request.url));
    }
    
    // Para otras rutas, agregar /es al inicio
    return NextResponse.redirect(new URL(`/es${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Excluir archivos internos de Next.js y archivos estáticos
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}; 