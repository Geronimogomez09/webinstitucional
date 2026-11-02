import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NuestraHistoria.css";
const Historia = () => {
  return (
    <div className="historia-container">
      {/* Barra de navegación superior o cabecera */}
      <header className="historia-header">
        <div className="header-content">
          <h1>Web Epet 20</h1>
          <p>Nuestra trayectoria, evolución y compromiso institucional.</p>
        </div>
        <Link to="/" className="btn-volver">Volver al Inicio</Link>
      </header>

      {/* Sección principal de la historia */}
      <main className="historia-main">
        <section className="intro-seccion">
          <h2>Historia de la EPET N°20</h2>
          <p>
            Desde nuestros inicios, la Escuela Provincial de Educación Técnica N°20 ha sido un 
            pilar fundamental en la formación técnica de la región, fomentando la innovación, 
            el trabajo en equipo y el desarrollo tecnológico de los estudiantes.
          </p>
        </section>

        {/* Línea de tiempo o hitos importantes */}
        <div className="timeline-grid">
          <div className="timeline-card">
            <span className="anio">Fundación</span>
            <h3>Los Cimientos</h3>
            <p>
              Creación de los espacios educativos orientados a brindar una sólida base técnica 
              y profesional a la comunidad de Neuquén.
            </p>
          </div>

          <div className="timeline-card">
            <span className="anio">Evolución</span>
            <h3>Crecimiento Tecnológico</h3>
            <p>
              Incorporación de laboratorios informáticos, modernización de talleres y adopción 
              de nuevas herramientas de desarrollo de software y hardware.
            </p>
          </div>

          <div className="timeline-card">
            <span className="anio">Actualidad</span>
            <h3>Innovación y Futuro</h3>
            <p>
              Desarrollo de proyectos colaborativos institucionales, plataformas digitales y 
              prácticas profesionalizantes que conectan a los alumnos con el mundo laboral.
            </p>
          </div>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="historia-footer">
        <p>EPET N°20 - Educación Técnica con proyección al futuro.</p>
      </footer>
    </div>
  );
};

export default Historia;