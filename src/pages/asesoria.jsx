import React from 'react';
import '../styles/Asesoria.css';

export default function Asesoria() {
  const documentosEstudiantes = [
    { id: 1, titulo: 'Constancia De Alumno Regular', tipo: 'Descargar', link: 'https://drive.google.com/file/d/1w-PzCZN1LfmimsTvEuxdM1ZPdNHEKuCP/preview' },
    { id: 2, titulo: 'Autorización De Retiro', tipo: 'Descargar', link: 'https://drive.google.com/file/d/1GRUX_7T9arpCDP5PZrUvjgPJj3j-6Odx/preview' },
    { id: 3, titulo: 'Escudo de la Escuela', tipo: 'Descargar', link: 'https://drive.google.com/file/d/1_6vy35uwS0Bq6CdV-_n4YEK7fMkT4XIc/preview' },
    { id: 4, titulo: 'Horarios Vespertino', tipo: 'Haz clic aquí', link: '#' },
    { id: 5, titulo: 'Cuaderno de Comunicaciones 2025', tipo: 'Haz clic aquí', link: '#' },
    { id: 6, titulo: 'Link de mesa de finalización de estudios', tipo: 'Haz clic aquí', link: '#' },
    { id: 7, titulo: 'Acuerdos Escolares de Convivencia 2025-2026', tipo: 'Descargar', link: 'https://drive.google.com/file/d/1P5hkS_W2EZ9reyiX2qNpJc0lrYjdmuOl/preview' },
    { id: 8, titulo: 'Fortalecimientos de Octubre de 2026', tipo: 'Haz clic aquí', link: '#' },
  ];

  return (
    <div className="asesoria-container">
      <div className="asesoria-header">
        <h1 className="asesoria-title">Asesoría Escolar</h1>
      </div>

      <div className="asesoria-schedule-card">
        <div className="asesoria-schedule-icon">🕒</div>
        <h2 className="asesoria-schedule-title">Horarios de Atención</h2>
        <div className="asesoria-schedule-time">08:00hs a 17:30hs</div>
        <p className="asesoria-schedule-location">1° Piso - Institución Educativa</p>
        <div>
          <a href="mailto:epe20asesoria@gmail.com" className="asesoria-schedule-email">
            epe20asesoria@gmail.com
          </a>
        </div>
      </div>

      <div className="asesoria-section-header">
        <h3 className="asesoria-section-title">Documentacion para Estudinates</h3>
      </div>

      <div className="asesoria-list">
        {documentosEstudiantes.map((item) => (
          <div key={item.id} className="asesoria-item-card">
            <span className="asesoria-item-text">{item.titulo}</span>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="asesoria-btn"
              style={{
                opacity: item.link === '#' ? 0.6 : 1,
                pointerEvents: item.link === '#' ? 'none' : 'auto'
              }}
            >
              {item.tipo}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}