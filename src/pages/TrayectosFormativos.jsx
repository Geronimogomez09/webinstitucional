
import React from "react";
import { Link } from "react-router-dom";
import "../styles/TrayectosFormativos.css";

const accesos = [
  {
    numero: "01",
    icono: "bi-tools",
    titulo: "Talleres y rotaciones",
    descripcion: "Conocé los espacios de formación práctica de cada año.",
    destino: "#talleres",
    boton: "Ver talleres",
  },
  {
    numero: "02",
    icono: "bi-book",
    titulo: "Materias teóricas",
    descripcion: "Consultá las materias que forman parte de cada año.",
    destino: "#materias",
    boton: "Ver materias",
  },
  {
    numero: "03",
    icono: "bi-briefcase",
    titulo: "Período de pasantías",
    descripcion: "Conocé esta instancia de formación profesional.",
    destino: "#pasantias",
    boton: "Ver pasantías",
  },
  {
    numero: "04",
    icono: "bi-calendar-check",
    titulo: "Mesas de examen y POEC",
    descripcion: "Encontrá información sobre las instancias de evaluación.",
    destino: "#mesas-poec",
    boton: "Ver información",
  },
];

const talleresPorAnio = [
  {
    anio: "1.º",
    talleres: ["Ajuste", "Carpintería", "Electricidad", "Hojalatería"],
    horarios: [
      "Turno mañana: 8:00 a 11:20 hs.",
      "Turno tarde: 13:30 a 16:50 hs.",
    ],
  },
  {
    anio: "2.º",
    talleres: ["Ajuste", "Construcciones", "Electricidad", "Soldadura"],
    horarios: [
      "Turno mañana: 8:00 a 11:20 hs.",
      "Turno tarde: 13:30 a 16:50 hs.",
    ],
  },
  {
    anio: "3.º",
    talleres: ["Computación", "Electricidad", "Electrónica", "Tornería"],
    horarios: [
      "Turno mañana: 8:00 a 11:20 hs.",
      "Turno tarde: 13:30 a 16:50 hs.",
    ],
  },
  {
    anio: "4.º",
    talleres: [
      "Programación",
      "Base de datos",
      "Internet de las Cosas y Robótica",
    ],
    horarios: ["Turno tarde: 13:30 a 16:50 hs."],
  },
  {
    anio: "5.º",
    talleres: [
      "Programación Intermedia",
      "Programación Web Estática",
      "Sistemas Operativos",
    ],
    horarios: ["Turno mañana: 8:00 a 11:20 hs."],
  },
  {
    anio: "6.º",
    talleres: [
      "Construcción de Software",
      "Programación Web Dinámica",
      "Redes",
    ],
    horarios: ["Turno tarde: 13:30 a 16:50 hs."],
  },
];

function TrayectosFormativos() {
  return (
    <main className="trayectos-page">

      {/* ==========================================
          SECCIÓN 0 - PRESENTACIÓN
      ========================================== */}

      <section className="trayectos-portada">
        <div className="portada-texto">
          <span className="portada-etiqueta">
            TRAYECTOS FORMATIVOS
          </span>

          <h1>Tu formación,<br />paso a paso</h1>

          <p>
            Conocé el recorrido educativo de nuestra escuela:
            los talleres, las materias y las distintas experiencias
            que acompañan tu formación técnica.
          </p>
        </div>

        <div className="portada-imagenes" aria-hidden="true">
          <div className="paisaje paisaje-principal">
            <span className="paisaje-sol"></span>
            <span className="paisaje-montana"></span>
            <span className="paisaje-colina"></span>
          </div>

          <div className="paisaje paisaje-secundario">
            <span className="paisaje-sol"></span>
            <span className="paisaje-montana"></span>
            <span className="paisaje-colina"></span>
          </div>
        </div>
      </section>

      {/* ==========================================
          ACCESOS A LAS SECCIONES
      ========================================== */}

      <section className="trayectos-accesos">
        <div className="accesos-grid">
          {accesos.map((acceso) => (
            <a
              key={acceso.numero}
              href={acceso.destino}
              className="acceso-card"
            >
              <div className="acceso-superior">
                <span className="acceso-icono">
                  <i className={`bi ${acceso.icono}`}></i>
                </span>

                <span className="acceso-numero">
                  {acceso.numero}
                </span>
              </div>

              <h2>{acceso.titulo}</h2>

              <p>{acceso.descripcion}</p>

              <span className="acceso-enlace">
                {acceso.boton}
                <i className="bi bi-arrow-right"></i>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ==========================================
          BLOQUE INFORMATIVO INFERIOR
      ========================================== */}

      <section className="trayectos-resumen">
        <div className="resumen-texto">
          <span className="seccion-etiqueta">NUESTRA ESCUELA</span>

          <h2>Una formación para cada etapa</h2>

          <p>
            A lo largo de seis años, los estudiantes recorren
            diferentes espacios de aprendizaje que forman parte
            de su trayectoria en la educación técnica.
          </p>
        </div>

        <div className="resumen-datos">
          <div className="resumen-dato">
            <i className="bi bi-mortarboard"></i>
            <span>6 años de formación</span>
          </div>

          <div className="resumen-dato">
            <i className="bi bi-tools"></i>
            <span>Talleres y rotaciones</span>
          </div>

          <div className="resumen-dato">
            <i className="bi bi-book"></i>
            <span>Materias teóricas</span>
          </div>

          <div className="resumen-dato">
            <i className="bi bi-briefcase"></i>
            <span>Experiencias de formación</span>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECCIÓN 1 - TALLERES Y ROTACIONES
      ========================================== */}

      <section
        id="talleres"
        className="trayectos-seccion seccion-talleres"
      >
        <div className="seccion-encabezado">
          <span className="seccion-etiqueta">
            01 / FORMACIÓN PRÁCTICA
          </span>

          <h2>Talleres y rotaciones</h2>

          <p>
            Los talleres forman parte del recorrido de formación
            técnica de los estudiantes. Su organización varía
            según el año de cursado y contempla diferentes
            modalidades de trabajo y distribución.
          </p>
        </div>

        {/* ORGANIZACIÓN GENERAL DE LAS ROTACIONES */}

        <div className="talleres-organizacion">
          <div className="organizacion-item">
            <span className="organizacion-numero">01 — 03</span>

            <div>
              <h3>De 1.º a 3.º año</h3>

              <p>
                Los estudiantes realizan rotaciones por los
                distintos talleres cada dos meses. Al finalizar
                cada período, continúan su recorrido en otro
                espacio de formación práctica.
              </p>
            </div>
          </div>

          <div className="organizacion-item">
            <span className="organizacion-numero">04 — 06</span>

            <div>
              <h3>De 4.º a 6.º año</h3>

              <p>
                Los talleres se intercalan durante los distintos
                días de la semana. Los estudiantes participan
                en diferentes espacios de formación técnica
                según la distribución correspondiente a cada año.
              </p>
            </div>
          </div>
        </div>

        {/* TALLERES POR AÑO */}

        <div className="talleres-grid">
          {talleresPorAnio.map((anio) => (
            <article className="taller-anio-card" key={anio.anio}>
              <div className="taller-card-encabezado">
                <span className="taller-anio-numero">
                  {anio.anio}
                </span>

                <div>
                  <span className="taller-ciclo">
                    ESPACIOS DE FORMACIÓN
                  </span>

                  <h3>{anio.anio} año</h3>
                </div>
              </div>

              <div className="taller-listado">
                <h4>Espacios de taller</h4>

                <ul>
                  {anio.talleres.map((taller) => (
                    <li key={taller}>
                      <i className="bi bi-check2"></i>
                      {taller}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="taller-horarios">
                <h4>
                  <i className="bi bi-clock"></i>
                  Horarios disponibles
                </h4>

                {anio.horarios.map((horario) => (
                  <p key={horario}>{horario}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="talleres-cronograma">
          <p>
            ¿Buscás la distribución detallada de las rotaciones?
          </p>

          <Link to="/talleres" className="btn-cronograma">
            Ver cronograma por grupo
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* ==========================================
          SECCIÓN 2 - MATERIAS TEÓRICAS
      ========================================== */}

      <section
        id="materias"
        className="trayectos-seccion seccion-pendiente"
      >
        <div className="seccion-encabezado">
          <span className="seccion-etiqueta">
            02 / FORMACIÓN ACADÉMICA
          </span>

          <h2>Materias teóricas</h2>

          <p>
            Espacios curriculares que forman parte de la trayectoria
            académica de los estudiantes.
          </p>
        </div>

        <div className="contenido-pendiente">
          <i className="bi bi-book"></i>
          <p>Contenido pendiente de incorporar.</p>
        </div>
      </section>

      {/* ==========================================
          SECCIÓN 3 - PASANTÍAS
      ========================================== */}

      <section
        id="pasantias"
        className="trayectos-seccion seccion-pendiente"
      >
        <div className="seccion-encabezado">
          <span className="seccion-etiqueta">
            03 / EXPERIENCIA FORMATIVA
          </span>

          <h2>Período de pasantías</h2>

          <p>
            Información correspondiente a esta instancia de
            formación de los estudiantes.
          </p>
        </div>

        <div className="contenido-pendiente">
          <i className="bi bi-briefcase"></i>
          <p>Contenido pendiente de incorporar.</p>
        </div>
      </section>

      {/* ==========================================
          SECCIÓN 4 - MESAS Y POEC
      ========================================== */}

      <section
        id="mesas-poec"
        className="trayectos-seccion seccion-pendiente"
      >
        <div className="seccion-encabezado">
          <span className="seccion-etiqueta">
            04 / EVALUACIONES
          </span>

          <h2>Mesas de examen y POEC</h2>

          <p>
            Información sobre las instancias de evaluación
            y los períodos correspondientes.
          </p>
        </div>

        <div className="contenido-pendiente">
          <i className="bi bi-calendar-check"></i>
          <p>Contenido pendiente de incorporar.</p>
        </div>
      </section>

    </main>
  );
}

export default TrayectosFormativos;
