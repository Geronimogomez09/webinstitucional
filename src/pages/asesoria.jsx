import React from 'react';

export default function Asesoria() {
  const documentosEstudiantes = [
    { id: 1, titulo: 'Constancia De Alumno Regular', tipo: 'Descargar', link: '#' },
    { id: 2, titulo: 'Autorización De Retiro', tipo: 'Descargar', link: '#' },
    { id: 3, titulo: 'Escudo de la Escuela', tipo: 'Descargar', link: '#' },
    { id: 4, titulo: 'Horarios Vespertino', tipo: 'Haz clic aquí', link: '#' },
    { id: 5, titulo: 'Cuaderno de Comunicaciones 2025', tipo: 'Haz clic aquí', link: '#' },
    { id: 6, titulo: 'Link de mesa de finalización de estudios', tipo: 'Haz clic aquí', link: '#' },
    { id: 7, titulo: 'Acuerdos Escolares de Convivencia 2025-2026', tipo: 'Descargar', link: '#' },
    { id: 8, titulo: 'Fortalecimientos de Octubre de 2026', tipo: 'Haz clic aquí', link: '#' },
  ];

  const buttonStyle = {
    backgroundColor: '#456268',
    color: '#ffffff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '0.8rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    minWidth: '110px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block'
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 24px', fontFamily: "'Inter', sans-serif" }}>
      
      {/* Título Principal */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h1 
          style={{ 
            fontFamily: "'Oswald', sans-serif", 
            color: '#456268', 
            fontSize: '2.8rem', 
            textTransform: 'uppercase', 
            margin: '0 0 16px 0', 
            letterSpacing: '0.04em' 
          }}
        >
          Asesoría Escolar
        </h1>
      </div>

      {/* Tarjeta de Días y Horarios de Atención */}
      <div 
        style={{ 
          backgroundColor: '#456268', 
          color: '#ffffff', 
          borderRadius: '16px', 
          padding: '32px 36px', 
          marginBottom: '40px', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          textAlign: 'center'
        }}
      >
        <h2 
          style={{ 
            fontFamily: "'Oswald', sans-serif", 
            fontSize: '1.8rem', 
            textTransform: 'uppercase', 
            margin: '0 0 16px 0', 
            letterSpacing: '0.05em' 
          }}
        >
          Horarios de Atención
        </h2>
        
        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', letterSpacing: '0.03em', color: '#D0E8F2', marginBottom: '12px' }}>
          08:00hs a 17:30hs
        </div>
        
        <p style={{ margin: '0 0 16px 0', fontSize: '0.95rem', fontWeight: '500', color: '#ffffff' }}>
          1° Piso - Institución Educativa
        </p>

        <div>
          <a 
            href="mailto:epe20asesoria@gmail.com"
            style={{ 
              color: '#D0E8F2', 
              fontSize: '0.9rem', 
              textDecoration: 'underline', 
              fontWeight: '500' 
            }}
          >
            epe20asesoria@gmail.com
          </a>
        </div>
      </div>

      {/* Encabezado de Sección: Documentación para Estudiantes */}
      <div 
        style={{ 
          backgroundColor: '#456268', 
          color: '#ffffff', 
          padding: '12px 16px', 
          borderRadius: '12px', 
          marginBottom: '16px',
          textAlign: 'center'
        }}
      >
        <h3 style={{ fontFamily: "'Oswald', sans-serif", margin: 0, fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Documentacion para Estudinates
        </h3>
      </div>

      {/* Listado de Documentos */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {documentosEstudiantes.map((item) => (
          <div 
            key={item.id} 
            style={{ 
              backgroundColor: '#FCF8EC', 
              border: '1px solid rgba(121, 163, 177, 0.5)', 
              borderRadius: '10px', 
              padding: '14px 20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              gap: '20px'
            }}
          >
            <span style={{ color: '#456268', fontWeight: '600', fontSize: '0.88rem', lineHeight: '1.4' }}>
              {item.titulo}
            </span>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={buttonStyle}
            >
              {item.tipo}
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}