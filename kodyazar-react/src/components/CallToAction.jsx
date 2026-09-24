import { DiscordLogo } from '@phosphor-icons/react';

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box glass-panel">
          <h2 className="cta-title">Aramıza Katılmaya Hazır Mısın?</h2>
          <p className="cta-text">Bilgiyi saklamak yerine paylaşarak çoğaltan bu ekosistemin bir parçası ol.</p>
          <a href="https://discord.gg/kodyazar" target="_blank" rel="noopener noreferrer" className="btn btn-large btn-primary">
            <DiscordLogo weight="fill" />
            Discord'a Katıl
          </a>
        </div>
      </div>
    </section>
  );
}
