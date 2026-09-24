import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        
        {/* Sol Menü: flex-1 ile sol alanı doldurur ve sola yaslar */}
        <nav className="flex flex-1 items-center gap-6 text-sm font-medium">
          <a href="/" className="transition-colors hover:text-primary text-foreground">Ana Sayfa</a>
          <a href="/about" className="transition-colors hover:text-primary text-muted-foreground">Hakkımızda</a>
          <a href="/contact" className="transition-colors hover:text-primary text-muted-foreground">İletişim</a>
        </nav>

        {/* Ortadaki Logo: Merkeze tam oturur çünkü sağ ve sol flex-1 */}
        <div className="flex justify-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tighter uppercase text-primary">
              KODYAZAR
            </span>
          </a>
        </div>

        {/* Sağ Menü: flex-1 ile sağ alanı doldurur ve sağa yaslar (justify-end) */}
        <nav className="flex flex-1 items-center justify-end gap-6 text-sm font-medium">
          <a href="/discord" className="transition-colors hover:text-primary text-muted-foreground">Discord</a>
          <a href="/forum" className="transition-colors hover:text-primary text-muted-foreground">Forum</a>
          <a href="/level" className="transition-colors hover:text-primary text-muted-foreground">Level</a>
        </nav>

      </div>
    </header>
  );
}
