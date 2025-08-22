import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <div className="section-header animate-fade-in">
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary)' }}>
            Contacto
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            ¿Tienes alguna pregunta o quieres trabajar con nosotros?
            ¡No dudes en contactarnos!
          </p>
        </div>
        <div className="animate-slide-up">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Tu nombre completo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="tu@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="form-input form-textarea"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>
            <button type="submit" className="btn btn-large" style={{ width: '100%' }}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;