import React from 'react';

export default function Consultations() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-3">
          {/* Section 1: Presupuesto */}
          <div className="glass-panel span-2" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
            <h2 className="mb-4 text-gradient">¿Necesitás cotizar un servicio mensual o realizar una inscripción?</h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Trabajamos con distintos tipos de contribuyentes y estructuras.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
              <li className="mb-2"><span style={{ color: 'var(--accent-cyan)' }}>✔</span> Monotributo</li>
              <li className="mb-2"><span style={{ color: 'var(--accent-cyan)' }}>✔</span> Responsables autónomos</li>
              <li className="mb-2"><span style={{ color: 'var(--accent-cyan)' }}>✔</span> Empresas y sociedades</li>
            </ul>
            <p className="mb-4" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Podés solicitar tu presupuesto de inscripción y/o abono mensual por WhatsApp. Dentro de las próximas 48 horas te estaremos enviando toda la información detallada, incluyendo las tareas que quedarían bajo nuestra gestión y el valor correspondiente de los honorarios.
            </p>
            <button className="btn btn-secondary">
              Solicitar por WhatsApp
            </button>
          </div>

          {/* Section 2: Problemas puntuales */}
          <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
            <h2 className="mb-4" style={{ color: 'var(--accent-pink)' }}>¿Tenés algún problema con tu situación impositiva/contable que quieras resolver?</h2>
            <p className="mb-4" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Por ejemplo, nunca te inscribiste en ingresos brutos y te enteraste tiempo después que es obligatorio, o tal vez tenés deuda por resolver. Pedir este presupuesto es para resolver un inconveniente puntual que te tiene preocupadx!
            </p>
            <p className="mb-4" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Pedime el presupuesto para resolver esto que te preocupa que te lo voy a estar enviando en el transcurso de la próximas 48 hs con lo que habría que hacer, los honorarios y la forma de pago.
            </p>
            <button className="btn btn-secondary" style={{ width: '100%' }}>
              Solicitar Presupuesto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
