import { Code } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Code weight="fill" className="brand-icon" />
          <span className="brand-text">Kodyazar</span>
        </div>
        <div className="footer-links">
          <a href="#biz-kimiz">Biz Kimiz?</a>
          <a href="#amacimiz">Amacımız</a>
          <a href="#neler-yapiyoruz">Neler Yapıyoruz?</a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Kodyazar Topluluğu. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
