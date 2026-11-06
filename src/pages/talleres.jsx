import React from 'react';

export default function Talleres() {
  const buttonStyle = {
    backgroundColor: '#456268',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.85rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#79A3B1'
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 24px', fontFamily: "'Inter', sans-serif" }}>
      
      {/* Título Principal */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 
          style={{ 
            fontFamily: "'Oswald', sans-serif", 
            color: '#456268', 
            fontSize: '2.8rem', 
            textTransform: 'uppercase', 
            margin: '0 0 12px 0', 
            letterSpacing: '0.04em' 
          }}
        >
          Información Talleres
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#4b5563', maxWidth: '600px', margin: '0 auto', lineHeight: '1.5' }}>
          Espacios de formación práctica, desarrollo técnico y seguridad en talleres de la institución.
        </p>
      </div>

      {/* Bloque de Cuadrillos 2026 */}
      <div 
        style={{ 
          backgroundColor: '#FCF8EC', 
          border: '1px solid rgba(121, 163, 177, 0.5)', 
          borderRadius: '16px', 
          padding: '36px 24px', 
          marginBottom: '36px', 
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
        }}
      >
        <h2 
          style={{ 
            fontFamily: "'Oswald', sans-serif", 
            color: '#456268', 
            fontSize: '2.2rem', 
            textTransform: 'uppercase', 
            margin: '0 0 16px 0', 
            letterSpacing: '0.04em' 
          }}
        >
          Cuadrillos 2026
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0 0 24px 0' }}>
          Descargá el material bibliográfico y guías prácticas correspondientes al ciclo lectivo.
        </p>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={buttonStyle}
        >
          Descargar a cuadrillos
        </a>
      </div>

      {/* Bloque de Cronogramas de Taller */}
      <div 
        style={{ 
          backgroundColor: '#FCF8EC', 
          border: '1px solid rgba(121, 163, 177, 0.5)', 
          borderRadius: '16px', 
          padding: '36px 24px', 
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
        }}
      >
        <h2 
          style={{ 
            fontFamily: "'Oswald', sans-serif", 
            color: '#456268', 
            fontSize: '2.2rem', 
            textTransform: 'uppercase', 
            margin: '0 0 16px 0', 
            letterSpacing: '0.04em' 
          }}
        >
          Cronogramas de Taller
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0 0 24px 0' }}>
          Consultá los horarios, rotaciones y distribución de comisiones para las actividades prácticas.
        </p>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={secondaryButtonStyle}
        >
          Ver Cronogramas
        </a>
      </div>

    </div>
  );
}