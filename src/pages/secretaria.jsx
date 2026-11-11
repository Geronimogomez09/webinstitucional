import React from 'react';
import '../styles/Secretaria.css';

export default function Secretaria() {
  const formularios = [
    { id: 1, titulo: 'A tener en cuenta Docentes-No docentes', tipo: 'Descargar', link: 'https://drive.google.com/file/d/1AZGSXOMbDLEXEFQwy9A1XiEVaa8oMw0X/preview' },
    { id: 2, titulo: 'DDJJ de cargos y actividades', tipo: 'Descargar', link: 'https://drive.google.com/file/d/1A5DWXg6fDEPMD7E_0JunklxbI9UmNjoL/preview' },
    { 
      id: 3, 
      titulo: 'DDJJ de carga de familia (con copia de DNI y CUIL de cada integrante que se declare)', 
      links: [
        { label: 'Vertical', url: 'https://drive.google.com/file/d/1SjgrHRFYoPY-PsV8gsLwwNzu_OrncO38/preview' },
        { label: 'Apaisado', url: 'https://drive.google.com/file/d/1NyQg4dnX8KKphRpHVeNaj98MKikxm6pW/preview' }
      ]
    },
    { id: 4, titulo: 'DDJJ de datos personales', tipo: 'Descargar', link: 'https://drive.google.com/file/d/1u4BWPy77HWDPE7ZYl32tJackz3nb62xG/preview' },
    { id: 5, titulo: 'PL2 (se adjunta nota del docente, DDJJ de cargos y actividades que va a licenciar)', tipo: 'Descargar', link: 'https://drive.google.com/file/d/1szkpp0AKsUcT9JroPj1Sy2xA9TAakvRI/preview' },
    { id: 6, titulo: 'Renuncia', tipo: 'Descargar', link: 'https://drive.google.com/file/d/1BQEz_Z2c7nlSuSsWyGsAdYDSDsaG6rO4/preview' },
    { id: 7, titulo: 'Formulario interno de días por estudio (adjuntar por primera vez cada año la constancia de alumno regular y la constancia de examen)', tipo: 'Descargar', link: 'https://drive.google.com/file/d/197OmS5sKZb2g31dZSgvW16viBNJC1CUA/preview' },
    { id: 8, titulo: 'Constancia de alumno regular de hijo/a', tipo: 'Haz clic aquí', link: 'https://certificado-regularidad.neuquen.edu.ar/' },
    { id: 9, titulo: 'Formulario de Historia Clínica (subir conjuntamente a SISO con certificado de Alta)', tipo: 'Descargar', link: 'https://drive.google.com/file/d/1VEp69rSakocmvWnGJTxS-m43bq8mS7_M/preview' },
    { id: 10, titulo: 'Portal Único', tipo: 'Haz clic aquí', link: 'https://portalunico.neuquen.edu.ar/auth/iniciar-sesion?nocache=1775979955856' },
    { id: 11, titulo: 'SISO', tipo: 'Haz clic aquí', link: 'https://play.google.com/store/apps/details?id=com.cpe.sisoapp&hl=es_AR&gl=US&pli=1' },
    { id: 12, titulo: 'Solicitud y Justificación de Inasistencia', tipo: 'Haz clic aquí', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeEGitYwn_C8gYJQcNOQXsGsYv64AgZTa77LoFtwc1us5XPaA/viewform' },
    { id: 13, titulo: 'COBROS POR NACIM - HIJO - MATRI - PRENATAL - CIRCULAR 003_2022', tipo: 'Haz clic aquí', link: 'https://drive.google.com/file/d/1MF3FkXJPugSQThNJkAUQQ8waD0Vzq0my/preview' },
    { id: 14, titulo: 'Circular - 19 Apertura de CAJA de ahorro', tipo: 'Descargar', link: 'https://drive.google.com/file/d/1KZt3HLxdWAQwDtHPJamaDVOQqnLFXJiV/preview' },
    { id: 15, titulo: 'Generar NÚMERO DE EMPLEADO', tipo: 'Descargar', link: 'https://docs.google.com/document/d/1K23kSg-dpD2Gm4YOqgKThYo0JFh7yuA7NxmJ5z-bs1Y/edit?tab=t.0' },
    { id: 17, titulo: 'Nota de descargo - demora de entrega de DDJJ', tipo: 'Descargar', link: 'https://docs.google.com/document/d/1fzPFVe4THGQo8gLGQeR0lblnvAl49lh1Uy-rLlvqMNM/edit?tab=t.0' },
  ];

  const normativas = [
    { id: 1, titulo: 'Manual de procedimiento', tipo: 'Descargar', link: 'https://drive.google.com/file/d/12HJD1Q8hWhUf4wAijb3xXKqBt5R_S3J7/preview' },
    { id: 2, titulo: '1278/24 Diseño Curricular', tipo: 'Descargar', link: 'https://drive.google.com/file/d/1JkIIcyO6GMq2KGtCj4-U-rA_kelhN0Gd/preview' },
  ];

  return (
    <div className="secretaria-container">
      <div className="secretaria-header">
        <h1 className="secretaria-title">Secretaría Escolar</h1>
        <div className="secretaria-banner">
          <p className="secretaria-banner-text">EL INGRESO A LA INSTITUCIÓN SERÁ EXCLUSIVO DEL ESTUDIANTADO Y PERSONAL</p>
        </div>
      </div>

      <div className="secretaria-schedule-card">
        <h2 className="secretaria-schedule-title">🕒 Días y Horarios de Atención</h2>
        <p className="secretaria-schedule-subtitle">Lunes a Viernes (excepto Jueves)</p>
        <div className="secretaria-shifts-grid">
          <div className="secretaria-shift-box">
            <span className="secretaria-shift-label">Turno Mañana</span>
            <span className="secretaria-shift-time">08:30 a 12:30 HS</span>
          </div>
          <div className="secretaria-shift-box">
            <span className="secretaria-shift-label">Turno Tarde</span>
            <span className="secretaria-shift-time">14:00 a 18:00 HS</span>
          </div>
        </div>
      </div>

      <h3 className="secretaria-section-title">Formularios de inscripción anual y registros de asistencia</h3>

      <div className="secretaria-list">
        {formularios.map((item) => (
          <div key={item.id} className="secretaria-item-card">
            <span className="secretaria-item-text">{item.titulo}</span>
            {item.links ? (
              <div style={{ display: 'flex', gap: '8px' }}>
                {item.links.map((l, idx) => (
                  <a key={idx} href={l.url} target="_blank" rel="noopener noreferrer" className="secretaria-btn">
                    {l.label}
                  </a>
                ))}
              </div>
            ) : (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="secretaria-btn">
                {item.tipo}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="secretaria-normativas-header">
        <h3 className="secretaria-normativas-title">Normativas</h3>
      </div>

      <div className="secretaria-list">
        {normativas.map((item) => (
          <div key={item.id} className="secretaria-item-card">
            <span className="secretaria-item-text">{item.titulo}</span>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="secretaria-btn secretaria-btn-normativa">
              {item.tipo}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}