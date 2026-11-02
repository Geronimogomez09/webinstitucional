import React from 'react';

export default function Secretaria() {
  const formularios = [
    { 
      id: 1, 
      titulo: 'A tener en cuenta Docentes-No docentes', 
      tipo: 'Descargar',
      link: 'https://drive.google.com/file/d/1AZGSXOMbDLEXEFQwy9A1XiEVaa8oMw0X/preview' 
    },
    { 
      id: 2, 
      titulo: 'DDJJ de cargos y actividades', 
      tipo: 'Descargar',
      link: 'https://drive.google.com/file/d/1A5DWXg6fDEPMD7E_0JunklxbI9UmNjoL/preview' 
    },
    { 
      id: 3, 
      titulo: 'DDJJ de carga de familia (con copia de DNI y CUIL de cada integrante que se declare)', 
      links: [
        { label: 'Vertical', url: 'https://drive.google.com/file/d/1SjgrHRFYoPY-PsV8gsLwwNzu_OrncO38/preview' },
        { label: 'Apaisado', url: 'https://drive.google.com/file/d/1NyQg4dnX8KKphRpHVeNaj98MKikxm6pW/preview' }
      ]
    },
    { 
      id: 4, 
      titulo: 'DDJJ de datos personales', 
      tipo: 'Descargar',
      link: 'https://drive.google.com/file/d/1u4BWPy77HWDPE7ZYl32tJackz3nb62xG/preview' 
    },
    { 
      id: 5, 
      titulo: 'PL2 (se adjunta nota del docente, DDJJ de cargos y actividades que va a licenciar)', 
      tipo: 'Descargar',
      link: 'https://drive.google.com/file/d/1szkpp0AKsUcT9JroPj1Sy2xA9TAakvRI/preview' 
    },
    { 
      id: 6, 
      titulo: 'Renuncia', 
      tipo: 'Descargar',
      link: 'https://drive.google.com/file/d/1BQEz_Z2c7nlSuSsWyGsAdYDSDsaG6rO4/preview' 
    },
    { 
      id: 7, 
      titulo: 'Formulario interno de días por estudio (adjuntar por primera vez cada año la constancia de alumno regular y la constancia de examen)', 
      tipo: 'Descargar',
      link: 'https://drive.google.com/file/d/197OmS5sKZb2g31dZSgvW16viBNJC1CUA/preview' 
    },
    { 
      id: 8, 
      titulo: 'Constancia de alumno regular de hijo/a', 
      tipo: 'Haz clic aquí',
      link: 'https://certificado-regularidad.neuquen.edu.ar/' 
    },
    { 
      id: 9, 
      titulo: 'Formulario de Historia Clínica (subir conjuntamente a SISO con certificado de Alta)', 
      tipo: 'Descargar',
      link: 'https://drive.google.com/file/d/1VEp69rSakocmvWnGJTxS-m43bq8mS7_M/preview' 
    },
    { 
      id: 10, 
      titulo: 'Portal Único', 
      tipo: 'Haz clic aquí',
      link: 'https://portalunico.neuquen.edu.ar/auth/iniciar-sesion?nocache=1775979955856' 
    },
    { 
      id: 11, 
      titulo: 'SISO', 
      tipo: 'Haz clic aquí',
      link: 'https://play.google.com/store/apps/details?id=com.cpe.sisoapp&hl=es_AR&gl=US&pli=1' 
    },
    { 
      id: 12, 
      titulo: 'Solicitud y Justificación de Inasistencia', 
      tipo: 'Haz clic aquí',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSeEGitYwn_C8gYJQcNOQXsGsYv64AgZTa77LoFtwc1us5XPaA/viewform' 
    },
    { 
      id: 13, 
      titulo: 'COBROS POR NACIM - HIJO - MATRI - PRENATAL - CIRCULAR 003_2022', 
      tipo: 'Haz clic aquí',
      link: 'https://drive.google.com/file/d/1MF3FkXJPugSQThNJkAUQQ8waD0Vzq0my/preview' 
    },
    { 
      id: 14, 
      titulo: 'Circular - 19 Apertura de CAJA de ahorro', 
      tipo: 'Descargar',
      link: 'https://drive.google.com/file/d/1KZt3HLxdWAQwDtHPJamaDVOQqnLFXJiV/preview' 
    },
    { 
      id: 15, 
      titulo: 'Generar NÚMERO DE EMPLEADO', 
      tipo: 'Descargar',
      link: 'https://docs.google.com/document/d/1K23kSg-dpD2Gm4YOqgKThYo0JFh7yuA7NxmJ5z-bs1Y/edit?tab=t.0' 
    },
    { 
      id: 17, 
      titulo: 'Nota de descargo - demora de entrega de DDJJ', 
      tipo: 'Descargar',
      link: 'https://docs.google.com/document/d/1fzPFVe4THGQo8gLGQeR0lblnvAl49lh1Uy-rLlvqMNM/edit?tab=t.0' 
    },
  ];

  const normativas = [
    { 
      id: 1, 
      titulo: 'Manual de procedimiento', 
      tipo: 'Descargar', 
      link: 'https://drive.google.com/file/d/12HJD1Q8hWhUf4wAijb3xXKqBt5R_S3J7/preview' 
    },
    { 
      id: 2, 
      titulo: '1278/24 Diseño Curricular', 
      tipo: 'Descargar', 
      link: 'https://drive.google.com/file/d/1JkIIcyO6GMq2KGtCj4-U-rA_kelhN0Gd/preview' 
    },
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

  const normativasButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#79A3B1'
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
          Secretaría Escolar
        </h1>
        
        {/* Banner de Aviso Institucional */}
        <div 
          style={{ 
            backgroundColor: '#D0E8F2', 
            borderLeft: '4px solid #79A3B1', 
            padding: '12px 24px', 
            borderRadius: '8px', 
            display: 'inline-block',
            maxWidth: '780px'
          }}
        >
          <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '700', color: '#456268', letterSpacing: '0.03em' }}>
            EL INGRESO A LA INSTITUCIÓN SERÁ EXCLUSIVO DEL ESTUDIANTADO Y PERSONAL
          </p>
        </div>
      </div>

      {/* Tarjeta de Días y Horarios */}
      <div 
        style={{ 
          backgroundColor: '#456268', 
          color: '#ffffff', 
          borderRadius: '16px', 
          padding: '28px 36px', 
          marginBottom: '36px', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)' 
        }}
      >
        <h2 
          style={{ 
            fontFamily: "'Oswald', sans-serif", 
            fontSize: '1.8rem', 
            textTransform: 'uppercase', 
            margin: '0 0 6px 0', 
            letterSpacing: '0.05em',
            textAlign: 'center'
          }}
        >
          Días y Horarios de Atención
        </h2>
        <p style={{ textAlign: 'center', color: '#D0E8F2', fontSize: '0.85rem', margin: '0 0 20px 0', fontWeight: '500' }}>
          Lunes a Viernes (excepto Jueves)
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
          <div 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.08)', 
              border: '1px solid rgba(121, 163, 177, 0.4)', 
              borderRadius: '12px', 
              padding: '14px', 
              textAlign: 'center' 
            }}
          >
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#D0E8F2', fontWeight: '600', display: 'block', marginBottom: '4px' }}>
              Turno Mañana
            </span>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.25rem', letterSpacing: '0.03em' }}>
              08:30 a 12:30 HS
            </span>
          </div>

          <div 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.08)', 
              border: '1px solid rgba(121, 163, 177, 0.4)', 
              borderRadius: '12px', 
              padding: '14px', 
              textAlign: 'center' 
            }}
          >
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#D0E8F2', fontWeight: '600', display: 'block', marginBottom: '4px' }}>
              Turno Tarde
            </span>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.25rem', letterSpacing: '0.03em' }}>
              14:00 a 18:00 HS
            </span>
          </div>
        </div>
      </div>

      {/* Subtítulo de Sección */}
      <h3 
        style={{ 
          fontFamily: "'Oswald', sans-serif", 
          color: '#456268', 
          fontSize: '1.4rem', 
          textAlign: 'center', 
          marginBottom: '24px', 
          textTransform: 'uppercase', 
          letterSpacing: '0.03em' 
        }}
      >
        Formularios de inscripción anual y registros de asistencia
      </h3>

      {/* Listado de Formularios */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
        {formularios.map((item) => (
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

            {item.links ? (
              <div style={{ display: 'flex', gap: '8px' }}>
                {item.links.map((l, idx) => (
                  <a 
                    key={idx}
                    href={l.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={buttonStyle}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={buttonStyle}
              >
                {item.tipo}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Normativas */}
      <div 
        style={{ 
          backgroundColor: '#456268', 
          color: '#ffffff', 
          padding: '10px 16px', 
          borderRadius: '8px', 
          marginBottom: '12px' 
        }}
      >
        <h3 style={{ fontFamily: "'Oswald', sans-serif", margin: 0, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Normativas
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {normativas.map((item) => (
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
            <span style={{ color: '#456268', fontWeight: '600', fontSize: '0.88rem' }}>
              {item.titulo}
            </span>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={normativasButtonStyle}
            >
              {item.tipo}
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}