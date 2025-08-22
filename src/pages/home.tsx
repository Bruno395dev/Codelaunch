import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="inicio" className="section hero">
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-3xl)' }}>
          <div className="animate-fade-in">
            <h1 className="hero-title">
              Bienvenido a <span className="highlight">Mi Landing</span>
            </h1>
            <p className="hero-description">
              Una landing page moderna y interactiva creada con React y TypeScript.
              Explora las diferentes secciones y descubre todas las funcionalidades.
            </p>
          </div>
          <div className="animate-slide-up">
            <div className="card animate-float" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
              <h3 style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-md)' }}>¡Interactúa!</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Haz scroll para explorar más contenido</p>
            </div>
          </div>
        </div>
        <div className="features animate-slide-up">
          <div className="feature">
            <div className="feature-icon">🚀</div>
            <h3>Rápido</h3>
            <p>Optimizado para máxima velocidad</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>Se adapta a todos los dispositivos</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h3>Moderno</h3>
            <p>Usando las últimas tecnologías</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
