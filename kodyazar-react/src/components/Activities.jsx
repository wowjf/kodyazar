import { TerminalWindow, ChatsCircle, PresentationChart, Lifebuoy, Coffee } from '@phosphor-icons/react';

export default function Activities() {
  return (
    <section id="neler-yapiyoruz" className="section">
      <div className="container">
        <div className="text-center section-header">
          <div className="section-icon center-icon">
            <TerminalWindow weight="duotone" />
          </div>
          <h2 className="section-title">Neler Yapıyoruz?</h2>
          <p className="section-subtitle">Topluluğumuzda sürekli aktif ve üretken bir ekosistem var.</p>
        </div>
        
        <div className="cards-grid">
          <div className="card glass-panel">
            <div className="card-icon">
              <ChatsCircle weight="duotone" />
            </div>
            <h3 className="card-title">Tartışmalar</h3>
            <p className="card-text">Yazılım, donanım ve bilişim ekosistemi üzerine derinlemesine tartışmalar yürütüyoruz.</p>
          </div>
          <div className="card glass-panel">
            <div className="card-icon">
              <PresentationChart weight="duotone" />
            </div>
            <h3 className="card-title">Proje Sergileri</h3>
            <p className="card-text">Geliştirdiğimiz projeleri toplulukla paylaşıyor ve birbirimizin deneyimlerinden faydalanıyoruz.</p>
          </div>
          <div className="card glass-panel">
            <div className="card-icon">
              <Lifebuoy weight="duotone" />
            </div>
            <h3 className="card-title">Teknik Destek</h3>
            <p className="card-text">Forum kanallarımızda karşılaşılan hatalar ve mimari kararlar için yardımlaşıyoruz.</p>
          </div>
          <div className="card glass-panel">
            <div className="card-icon">
              <Coffee weight="duotone" />
            </div>
            <h3 className="card-title">Sosyalleşme</h3>
            <p className="card-text">Genel sohbetlerle topluluk bağlarımızı güçlendiriyor, sıcak bir ortam oluşturuyoruz.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
