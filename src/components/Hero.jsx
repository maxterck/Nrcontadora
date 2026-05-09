import React from 'react';

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="NF Contadora Pública" style={{ height: '220px', marginBottom: '2rem' }} className="animate-pulse-glow" />
          <h1 className="text-gradient" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
            ¿Querés tener un asesoramiento personalizado?
          </h1>
          <p className="glass-panel" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Tenemos tres modalidades distintas para que elijas la que mejor se adapte a vos. En todos los casos, el costo del asesoramiento en caso de seguir trabajando juntos se deduce de los trabajos siguientes.
            <br /><br />
            <strong>Las modalidades son las siguientes:</strong>
            <ul style={{ listStyle: 'none', margin: '1rem 0' }}>
              <li><span style={{ color: 'var(--accent-cyan)' }}>•</span> Chat por WhatsApp (audios y mensajes)</li>
              <li><span style={{ color: 'var(--accent-yellow)' }}>•</span> Llamada</li>
              <li><span style={{ color: 'var(--accent-pink)' }}>•</span> Videollamada</li>
            </ul>
            <span style={{ color: 'var(--text-primary)' }}>La duración en todos los casos es de media hora.</span>
            <br /><br />
            <em style={{ fontSize: '0.9rem', opacity: 0.8 }}>
              Quiero aclararte que este espacio de asesoramiento no está orientado a otros profesionales del rubro ni tampoco pensado para que aprendas a resolver por tu cuenta todos los procesos. La idea es ayudarte a despejar dudas específicas y también que podamos conocernos antes de comenzar a trabajar juntos. Tené en cuenta que siempre es recomendable que la gestión de tus impuestos y tu contabilidad quede en manos de un profesional especializado en el tema. ¡Gracias por confiar en mí para asesorarte!
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}
