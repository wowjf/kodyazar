import { ArrowRight } from '@phosphor-icons/react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-badge">Türkiye'nin Yeni Nesil Geliştirici Ekosistemi</div>
        <h1 className="hero-title">
          Birlikte Öğrenen, Adil,<br />
          <span className="text-gradient">Profesyonel ve Gelişen</span><br />
          Bir Ekosistem
        </h1>
        <p className="hero-subtitle">
          Kodyazar, yazılım dünyasına ilgi duyan, bilgi paylaşımını ve yardımlaşmayı temel alan bir geliştirici topluluğudur.
        </p>
        <div className="hero-actions">
          <a href="https://discord.gg/kodyazar" target="_blank" rel="noopener noreferrer" className="btn btn-large btn-primary">
            Discord Sunucumuza Katıl
            <ArrowRight weight="bold" />
          </a>
          <a href="#biz-kimiz" className="btn btn-large btn-secondary">
            Daha Fazla Bilgi
          </a>
        </div>
      </div>
    </section>
  );
}
