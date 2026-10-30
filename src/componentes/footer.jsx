import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div 
        style={{ 
          backgroundColor: '#456268',
          borderTop: '4px solid #79A3B1',
          paddingTop: '50px',
          paddingBottom: '30px'
        }} 
        className="w-full px-6"
      >
        <div 
          className="mx-auto flex flex-col items-center text-center" 
          style={{ maxWidth: '620px' }}
        >
          <h2 
            style={{ 
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: '0.04em',
              marginBottom: '12px'
            }} 
            className="text-2xl md:text-3xl font-bold uppercase text-white"
          >
            EPET N° 20
          </h2>
          <p 
            style={{ 
              fontFamily: "'Inter', sans-serif",
              lineHeight: '1.5'
            }} 
            className="text-xs md:text-sm text-white font-normal m-0"
          >
            Escuela Provincial de Educación Técnica N° 20. Formando técnicos profesionales con excelencia académica y compromiso social en la ciudad de Neuquén.
          </p>
          <div 
            style={{ 
              width: '100%', 
              borderTop: '1px solid #79A3B1', 
              opacity: 0.5, 
              margin: '18px 0' 
            }}
          ></div>
          <p 
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: '#D0E8F2'
            }} 
            className="text-[11px] md:text-xs font-normal m-0"
          >
            Copyright © 2026 EPET N° 20 - Neuquén. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}