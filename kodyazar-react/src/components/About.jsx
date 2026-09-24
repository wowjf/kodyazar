import { UsersThree } from '@phosphor-icons/react';

export default function About() {
  return (
    <section id="biz-kimiz" className="section">
      <div className="container">
        <div className="section-grid">
          <div className="section-content">
            <div className="section-icon">
              <UsersThree weight="duotone" />
            </div>
            <h2 className="section-title">Biz Kimiz?</h2>
            <p className="section-text">
              Yazılıma yeni başlayanlardan profesyonellere kadar her seviyeden geliştiriciyi bir araya getirerek sağlıklı bir iletişim ve öğrenme ortamı sunuyoruz.
            </p>
          </div>
          <div className="section-visual glass-panel">
            <div className="code-window">
              <div className="code-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <pre className="code-body"><code><span className="keyword">const</span> <span className="variable">kodyazar</span> = {'{\n'}
    <span className="property">kurulus</span>: <span className="number">2023</span>,
    <span className="property">vizyon</span>: <span className="string">"Bilgi paylaşımını temel almak"</span>,
    <span className="property">uyeler</span>: [<span className="string">"Yeni Başlayanlar"</span>, <span className="string">"Profesyoneller"</span>],
    <span className="property">iletisim</span>: <span className="string">"Sağlıklı ve adil öğrenme ortamı"</span>
{'}'};</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
