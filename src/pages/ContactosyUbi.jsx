import React from 'react';
import '../styles/ContactosyUbi.css';

const ContactosyUbi = () => {
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
          <div className="col-12">
            <div className="card shadow-sm p-4 h-100 border-0 contacto-card">
              <h3 className="mb-4">Información de Contacto</h3>
              
              <div className="contacto-item mb-3">
                <i className="bi bi-geo-alt-fill icono-contacto"></i>
                <div>
                  <strong>Dirección:</strong>
                  <p className="mb-0">Lanín 2020, Neuquén Capital, Neuquén, Argentina</p>
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

          {/* Bloque de Mapa / Ubicación Google Maps */}
          <div className="col-12 mt-4">
            <div className="card shadow-sm p-4 border-0 contacto-card">
              <h3 className="mb-3">Nuestra Ubicación</h3>
              <p className="mb-3">Encontrá las instalaciones de la EPET N°20 en Lanín 2020:</p>
              
              <div className="mapa-responsive overflow-hidden rounded-3 border">
                <iframe 
                  title="Ubicacion EPET N20 Lanin 2020"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.55!2d-68.0855!3d-38.9625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a322c36666667%3A0x123456789abcdef!2sLan%C3%ADn%202020%2C%20Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar" 
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

export default ContactosyUbi;