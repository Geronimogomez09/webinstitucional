import { useState, useEffect, useRef } from 'react';
import '../styles/index.css';

export default function Inicio() {
  const [anios, setAnios] = useState(0);
  const [estudiantes, setEstudiantes] = useState(0);
  const [talleres, setTalleres] = useState(0);
  const [animado, setAnimado] = useState(false);
  const seccionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!seccionRef.current || animado) return;
      const rect = seccionRef.current.getBoundingClientRect();
      const height = window.innerHeight;

      if (rect.top < height - 100) {
        setAnimado(true);

        // Animación de Años (+10)
        let c1 = 0;
        const i1 = setInterval(() => {
          c1 += 1;
          if (c1 >= 10) {
            setAnios(10);
            clearInterval(i1);
          } else {
            setAnios(c1);
          }
        }, 100);

        // Animación de Estudiantes (+1000)
        let c2 = 0;
        const i2 = setInterval(() => {
          c2 += 40;
          if (c2 >= 1000) {
            setEstudiantes(1000);
            clearInterval(i2);
          } else {
            setEstudiantes(c2);
          }
        }, 40);

        // Animación de Talleres (14)
        let c3 = 0;
        const i3 = setInterval(() => {
          c3 += 1;
          if (c3 >= 14) {
            setTalleres(14);
            clearInterval(i3);
          } else {
            setTalleres(c3);
          }
        }, 80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animado]);

  return (
    <>
      {/* HERO / BANNER PRINCIPAL */}
      <section className="banner-escuela" id="inicio">
        <div className="contenedor-hero-foto">
          <img
            src="/imagenes/fotoepet1.jpeg"
            alt="Frente de la EPET N° 20 Neuquén"
            className="foto-frente-escuela"
          />
          <div className="overlay-hero centrado-vertical">
            <h1>EPET N° 20 - NQN</h1>
            <p>“Formando técnicos profesionales en Programación para el futuro.”</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN ÚLTIMAS NOVEDADES */}
      <section className="seccion-novedades" id="novedades">
        <div className="contenedor-ancho">
          <h2 className="titulo-seccion-boceto">Últimas Novedades de la EPET N° 20</h2>

          <div className="grilla-5-novedades">
            <article className="tarjeta-novedad">
              <span className="etiqueta-tarjeta">EXÁMENES</span>
              <h3>Mesas de Octubre</h3>
              <p>Inscripción y fechas confirmadas para estudiantes egresados.</p>
              <a href="#secretaria">Ver fechas →</a>
            </article>
            <article className="tarjeta-novedad">
              <span className="etiqueta-tarjeta">INGRESO</span>
              <h3>Preinscripción 2027</h3>
              <p>Requisitos y documentación para los nuevos aspirantes.</p>
              <a href="#secretaria">Ver requisitos →</a>
            </article>
            <article className="tarjeta-novedad">
              <span className="etiqueta-tarjeta">TALLER</span>
              <h3>Fortalecimiento 3° Año</h3>
              <p>Clases de consulta y trabajos prácticos obligatorios.</p>
              <a href="#talleres">Más info →</a>
            </article>
            <article className="tarjeta-novedad">
              <span className="etiqueta-tarjeta">RECURSOS</span>
              <h3>Cuadernillos Técnicos</h3>
              <p>Descarga de material de apoyo para el ciclo lectivo.</p>
              <a href="#talleres">Descargar →</a>
            </article>
            <article className="tarjeta-novedad">
              <span className="etiqueta-tarjeta">ACTOS</span>
              <h3>Actividades Escolares</h3>
              <p>Información sobre jornadas y actos institucionales.</p>
              <a href="#novedades">Ver detalles →</a>
            </article>
          </div>
        </div>
      </section>

      {/* SECCIÓN ESTADÍSTICAS CON CONTADOR ANIMADO */}
      <section className="seccion-estadisticas" ref={seccionRef}>
        <div className="contenedor-estadisticas">
          <div className="bloque-dato">
            <span className="cifra">+{anios}</span>
            <span className="label-dato">Años de Trayectoria</span>
          </div>
          <div className="bloque-dato">
            <span className="cifra">+{estudiantes}</span>
            <span className="label-dato">Estudiantes</span>
          </div>
          <div className="bloque-dato">
            <span className="cifra">{talleres}</span>
            <span className="label-dato">Talleres y Laboratorios</span>
          </div>
        </div>
      </section>

      {/* TRAYECTOS FORMATIVOS */}
      <section className="seccion-trayectos" id="trayectos">
        <div className="contenedor-ancho">
          <h2 className="titulo-seccion-boceto">Formación Técnica Profesional</h2>
          <div className="grilla-ciclos">
            <article className="tarjeta-ciclo">
              <div className="contenedor-foto-ciclo">
                <img
                  src="/imagenes/fotoepet4.jpeg"
                  alt="Estudiantes en taller de carpintería y ajuste"
                />
              </div>
              <div className="info-ciclo">
                <h3>Ciclo Básico</h3>
                <p>
                  El primer contacto con el mundo técnico. Formamos las bases del pensamiento lógico
                  y el manejo de herramientas en talleres iniciales.
                </p>
              </div>
            </article>

            <article className="tarjeta-ciclo">
              <div className="contenedor-foto-ciclo">
                <img
                  src="/imagenes/fotoepet2.jpeg"
                  alt="Taller con tornos mecánicos de la EPET N° 20"
                />
              </div>
              <div className="info-ciclo">
                <h3>Interciclo</h3>
                <p>
                  La etapa de transición y profundización. Reforzamos las capacidades técnicas y
                  científicas preparando al estudiante para la especialización.
                </p>
              </div>
            </article>

            <article className="tarjeta-ciclo">
              <div className="contenedor-foto-ciclo">
                <img
                  src="/imagenes/fotoepet3.jpeg"
                  alt="Alumnos trabajando en robótica y programación"
                />
              </div>
              <div className="info-ciclo">
                <h3>Ciclo Orientado</h3>
                <p>
                  Especialización técnica profesional. Foco en el desarrollo de software, sistemas
                  y prácticas profesionalizantes para la inserción laboral.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}