import { Target, CheckCircle, GlobeHemisphereWest, RocketLaunch, PuzzlePiece, ShareNetwork } from '@phosphor-icons/react';

export default function Goals() {
  return (
    <section id="amacimiz" className="section alt-section">
      <div className="container">
        <div className="section-grid reverse-grid">
          <div className="section-content">
            <div className="section-icon">
              <Target weight="duotone" />
            </div>
            <h2 className="section-title">Amacımız</h2>
            <p className="section-text">
              Diğer ülkelerin kendi yazılımcı topluluklarında olduğu gibi biz de güzel ülkemiz Türkiye'yi uluslarası standartlarda temsil etmek istiyoruz.
            </p>
            <ul className="feature-list">
              <li>
                <CheckCircle weight="bold" />
                <span>Sektördeki güncel teknolojileri takip etmek</span>
              </li>
              <li>
                <CheckCircle weight="bold" />
                <span>Karşılaşılan teknik problemlere ortak çözümler üretmek</span>
              </li>
              <li>
                <CheckCircle weight="bold" />
                <span>Üyelerimizin mesleki gelişimlerine katkıda bulunmak</span>
              </li>
              <li>
                <CheckCircle weight="bold" />
                <span>Bilgiyi saklamak yerine paylaşarak çoğaltmak</span>
              </li>
            </ul>
          </div>
          <div className="section-visual">
            <div className="stats-grid">
              <div className="stat-card glass-panel">
                <GlobeHemisphereWest weight="duotone" />
                <h3>Uluslararası</h3>
                <p>Standartlarda Temsil</p>
              </div>
              <div className="stat-card glass-panel">
                <RocketLaunch weight="duotone" />
                <h3>Güncel</h3>
                <p>Teknoloji Takibi</p>
              </div>
              <div className="stat-card glass-panel">
                <PuzzlePiece weight="duotone" />
                <h3>Ortak</h3>
                <p>Çözüm Üretimi</p>
              </div>
              <div className="stat-card glass-panel">
                <ShareNetwork weight="duotone" />
                <h3>Paylaşım</h3>
                <p>Bilgiyi Çoğaltma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
