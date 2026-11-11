import React from 'react';
import '../styles/biblioteca.css';

export default function Biblioteca() {
  return (
    <div className="biblioteca-container">
      
      <div className="biblioteca-header">
        <h1 className="biblioteca-title">Biblioteca Digital EPET N° 20</h1>
        <p className="biblioteca-subtitle">
          Portal de acceso a nuestra biblioteca.
        </p>
      </div>

      <div className="biblioteca-card">
        <p className="biblioteca-card-desc">
          Aquí podrás consultar el catálogo, reservar ejemplares y acceder a recursos digitales.
        </p>
        <a 
          href="https://drive.google.com/drive/folders/1lzQLsPvMgdT3yQSLPM95qmGxWP1h0rKC" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="biblioteca-btn-primary"
        >
          Ingresar aquí
        </a>
      </div>

      <div className="biblioteca-contact-card">
        <h2 className="biblioteca-contact-title">Contacto</h2>

        <div className="biblioteca-contact-row">
          <span className="biblioteca-contact-label">Correo institucional</span>
          <a href="mailto:bibliotecaepet.2025@gmail.com" className="biblioteca-email-link">
            bibliotecaepet.2025@gmail.com
          </a>
        </div>

        <div className="biblioteca-contact-row">
          <span className="biblioteca-contact-label">Grupo de WhatsApp</span>
          <a 
            href="https://chat.whatsapp.com/DKGhUKleKja2BKJAcVfxhJ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="biblioteca-btn-whatsapp"
          >
            WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
}