import { useEffect, useState } from 'react';
import { Code, DiscordLogo } from '@phosphor-icons/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    if(targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="brand">
          <Code weight="fill" className="brand-icon" />
          <span className="brand-text">Kodyazar</span>
        </div>
        <nav className="nav-links">
          <a href="#biz-kimiz" className="nav-link" onClick={(e) => scrollToSection(e, '#biz-kimiz')}>Biz Kimiz?</a>
          <a href="#amacimiz" className="nav-link" onClick={(e) => scrollToSection(e, '#amacimiz')}>Amacımız</a>
          <a href="#neler-yapiyoruz" className="nav-link" onClick={(e) => scrollToSection(e, '#neler-yapiyoruz')}>Neler Yapıyoruz?</a>
        </nav>
        <a href="https://discord.gg/kodyazar" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <DiscordLogo weight="fill" />
          Topluluğa Katıl
        </a>
      </div>
    </header>
  );
}
