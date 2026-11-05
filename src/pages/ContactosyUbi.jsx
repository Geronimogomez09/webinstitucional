import React, { useState } from 'react';
import '../styles/ContactosyUbi.css';

const ContactosYUbicacion = () => {
  // Estados para capturar los valores de los inputs
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  // Estado para mostrar un mensaje de éxito cuando se envía
  const [enviado, setEnviado] = useState(false);

  // Función que actualiza el estado cada vez que el usuario escribe algo
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    
    setEnviado(true);

    // Limpiamos el formulario después de 4 segundos
    setTimeout(() => {
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      setEnviado(false);
    }, 4000);
  };

  return (
    <div className="contactos-ubicacion-container">
      <main className="contactos-ubicacion-main">
        
        {/* Encabezado Principal */}
        <section className="intro-seccion card shadow-sm p-4 border-0 mb-4 text-center">
          <h2>Contactos y Ubicación</h2>
          <p className="mb-0">
            Ponete en contacto con la EPET N°20 o visítanos en nuestro establecimiento institucional en Neuquén.
          </p>
        </section>

        <div className="row g-4">
          
          {/* Bloque de Información de Contacto */}
          <div className="col-lg-6">
            <div className="card shadow-sm p-4 h-100 border-0 contacto-card">
              <h3 className="mb-4">Información de Contacto</h3>
              
              <div className="contacto-item mb-3">
                <i className="bi bi-geo-alt-fill icono-contacto"></i>
                <div>
                  <strong>Dirección:</strong>
                  <p className="mb-0">Neuquén Capital, Neuquén, Argentina</p>
                </div>
              </div>

              <div className="contacto-item mb-3">
                <i className="bi bi-telephone-fill icono-contacto"></i>
                <div>
                  <strong>Teléfono de Secretaría:</strong>
                  <p className="mb-0">(299) 400-0000</p>
                </div>
              </div>

              <div className="contacto-item mb-3">
                <i className="bi bi-envelope-fill icono-contacto"></i>
                <div>
                  <strong>Correo Electrónico Institucional:</strong>
                  <p className="mb-0">epet20neuquen@educacion.gob.ar</p>
                </div>
              </div>

              <div className="contacto-item mb-3">
                <i className="bi bi-clock-fill icono-contacto"></i>
                <div>
                  <strong>Horarios de Atención:</strong>
                  <p className="mb-0">Turno Mañana: 07:45 - 12:15 hs</p>
                  <p className="mb-0">Turno Tarde: 13:15 - 17:45 hs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bloque de Formulario de Consulta Dinámico */}
          <div className="col-lg-6">
            <div className="card shadow-sm p-4 h-100 border-0 contacto-card">
              <h3 className="mb-4">Envianos tu Consulta</h3>
              
              {enviado && (
                <div className="alert alert-success text-center py-2 mb-3 fw-semibold" role="alert">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label fw-semibold">Nombre y Apellido</label>
                  <input 
                    type="text" 
                    className="form-control input-custom" 
                    id="nombre" 
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre completo" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Correo Electrónico</label>
                  <input 
                    type="email" 
                    className="form-control input-custom" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nombre@ejemplo.com" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="asunto" className="form-label fw-semibold">Asunto</label>
                  <input 
                    type="text" 
                    className="form-control input-custom" 
                    id="asunto" 
                    value={formData.asunto}
                    onChange={handleChange}
                    placeholder="Ej: Consulta por inscripciones" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label fw-semibold">Mensaje</label>
                  <textarea 
                    className="form-control input-custom" 
                    id="mensaje" 
                    rows="4" 
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribí tu mensaje acá..." 
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-enviar w-100 fw-bold">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          {/* Bloque de Mapa / Ubicación Google Maps */}
          <div className="col-12 mt-4">
            <div className="card shadow-sm p-4 border-0 contacto-card">
              <h3 className="mb-3">Nuestra Ubicación</h3>
              <p className="mb-3">Encontrá las instalaciones de la EPET N°20 en el mapa:</p>
              
              <div className="mapa-responsive overflow-hidden rounded-3 border">
                <iframe 
                  title="Ubicacion EPET N20"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.632128710884!2d-68.0770000234001!3d-38.95500007171206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a3215286e0001%3A0x88981d3345823190!2sEPET%20N%C2%B0%2020!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar" 
                  width="100%" 
                  height="380" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default ContactosYUbicacion;