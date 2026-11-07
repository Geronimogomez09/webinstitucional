
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
  },
  {
    anio: "2.º",
    talleres: ["Ajuste", "Construcciones", "Electricidad", "Soldadura"],
  },
  {
    anio: "3.º",
    talleres: ["Computación", "Electricidad", "Electrónica", "Tornería"],
  },
  {
    anio: "4.º",
    talleres: [
      "Programación",
      "Base de datos",
      "Internet de las Cosas y Robótica",
    ],
  },
  {
    anio: "5.º",
    talleres: [
      "Programación Intermedia",
      "Programación Web Estática",
      "Sistemas Operativos",
    ],
  },
  {
    anio: "6.º",
    talleres: [
      "Construcción de Software",
      "Programación Web Dinámica",
      "Redes",
    ],
  },
];

const materiasPorAnio = [
  {
    anio: "1.º",
    materias: [
      "Historia",
      "Geografía",
      "Economía",
      "Construcción de Ciudadanía",
      "Filosofía",
      "Lengua",
      "Literatura",
      "Lenguas otras",
      "Teatro",
      "Música",
      "Biología",
      "Físico-química",
      "Matemática",
      "Informática",
      "Dibujo técnico",
    ],
    extracurriculares: [
      "Educación Física Integral",
      "Educación Sexual Integral",
      "Taller",
    ],
  },
  {
    anio: "2.º",
    materias: [
      "Historia",
      "Geografía",
      "Economía",
      "Construcción de Ciudadanía",
      "Filosofía",
      "Lengua",
      "Literatura",
      "Lenguas otras",
      "Teatro",
      "Música",
      "Biología",
      "Físico-química",
      "Matemática",
      "Informática",
      "Dibujo técnico",
    ],
    extracurriculares: [
      "Educación Física Integral",
      "Educación Sexual Integral",
      "Taller",
    ],
  },
  {
    anio: "3.º",
    materias: [
      "Historia",
      "Geografía",
      "Economía",
      "Construcción de Ciudadanía",
      "Filosofía",
      "Lengua",
      "Literatura",
      "Lenguas otras",
      "Teatro",
      "Biología",
      "Físico-química",
      "Matemática",
      "Informática",
      "Dibujo técnico",
    ],
    extracurriculares: [
      "Educación Física",
      "Taller",
    ],
  },
  {
    anio: "4.º",
    materias: [
      "Estructura de datos",
      "Análisis matemático",
      "Lógica computacional",
      "Física",
      "Lenguaje y comunicación",
      "Lenguaje de modelado de software",
      "Epistemologías y metodologías de la ciencia",
      "Diseño de interfaces",
      "Organización y administración de los procesos productivos e industriales",
      "Lenguas otras I",
      "Base de datos",
      "Sociología de los trabajos",
    ],
    extracurriculares: [
      "Taller",
      "Educación Física",
    ],
  },
  {
    anio: "5.º",
    materias: [
      "Sistemas Operativos I",
      "Organización y Arquitectura I",
      "Estadística y probabilidad",
      "Técnicas avanzadas en la programación",
      "Programación estática y laboratorio web",
      "Inglés técnico II",
      "Ciencia, tecnología e información",
      "Principios de testing",
      "Tecnologías de redes I",
    ],
    extracurriculares: [
      "Taller",
      "Educación Física",
      "Prácticas Profesionalizantes",
    ],
  },
  {
    anio: "6.º",
    materias: [
      "Ética y deontología",
      "Computación gráfica",
      "Tecnología de redes II",
      "Seguridad informática",
      "Sistemas Operativos II",
      "Sistemas de gestión de calidad de software",
      "Programación web dinámica",
      "Introducción a la automatización y control",
      "Inglés técnico III",
    ],
    extracurriculares: [
      "Taller",
      "Educación Física",
      "Pasantías",
    ],
  },
];

const docentesPasantias = [
  "Enrique Zoppi",
  "Silvio Estenta",
  "Agustina Avilez",
  "Juan Canavidez",
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
          <span className="seccion-etiqueta">01 / FORMACIÓN PRÁCTICA</span>

          <h2>Talleres y rotaciones</h2>

          <p>
            Los talleres forman parte del recorrido de formación
            técnica de los estudiantes. A continuación, se presentan
            los espacios correspondientes a cada año.
          </p>
        </div>

        <div className="talleres-organizacion">
          <div className="organizacion-item">
            <span className="organizacion-numero">01 — 03</span>
            <div>
              <h3>De 1.º a 3.º año</h3>
              <p>
                Los estudiantes realizan rotaciones por los distintos
                talleres cada dos meses. Al finalizar cada período,
                continúan su recorrido en otro espacio de formación práctica.
              </p>
            </div>
          </div>

          <div className="organizacion-item">
            <span className="organizacion-numero">04 — 06</span>
            <div>
              <h3>De 4.º a 6.º año</h3>
              <p>
                Los talleres se intercalan durante los distintos días
                de la semana. Los estudiantes participan en diferentes
                espacios de formación técnica según la distribución
                correspondiente a cada año.
              </p>
            </div>
          </div>
        </div>

        {/* HORARIOS GENERALES DE TALLER */}

        <div className="materias-horarios talleres-horarios">
          <div className="materias-horarios-encabezado">
            <i className="bi bi-clock"></i>
            <div>
              <h3>Horarios de taller</h3>
              <p>
                Los horarios pueden corresponder al turno mañana o tarde,
                según el grupo asignado.
              </p>
            </div>
          </div>

          <div className="materias-turnos-grid talleres-turnos-grid">
            <article className="materias-turno-card">
              <span className="materias-turno-etiqueta">
                TODOS LOS AÑOS
              </span>
              <h4>Turno mañana</h4>
              <p>
                <i className="bi bi-sun"></i>
                8:00 a 11:20 hs.
              </p>
            </article>

            <article className="materias-turno-card">
              <span className="materias-turno-etiqueta">
                TODOS LOS AÑOS
              </span>
              <h4>Turno tarde</h4>
              <p>
                <i className="bi bi-sunset"></i>
                13:30 a 16:50 hs.
              </p>
            </article>
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
        className="trayectos-seccion seccion-materias"
      >
        <div className="seccion-encabezado">
          <span className="seccion-etiqueta">02 / FORMACIÓN ACADÉMICA</span>

          <h2>Materias teóricas</h2>

          <p>
            Conocé los espacios curriculares que acompañan la formación
            de los estudiantes durante los seis años de la trayectoria
            educativa.
          </p>
        </div>

        {/* HORARIOS GENERALES */}

        <div className="materias-horarios">
          <div className="materias-horarios-encabezado">
            <i className="bi bi-clock"></i>
            <div>
              <h3>Organización de los turnos</h3>
              <p>Horarios correspondientes a las materias teóricas.</p>
            </div>
          </div>

          <div className="materias-turnos-grid">
            <article className="materias-turno-card">
              <span className="materias-turno-etiqueta">1.º A 3.º AÑO</span>
              <h4>Turno mañana</h4>
              <p>
                <i className="bi bi-sun"></i>
                8:00 a 12:20 hs.
              </p>
            </article>

            <article className="materias-turno-card">
              <span className="materias-turno-etiqueta">1.º A 3.º AÑO</span>
              <h4>Turno tarde</h4>
              <p>
                <i className="bi bi-sunset"></i>
                13:30 a 17:50 hs.
              </p>
            </article>

            <article className="materias-turno-card">
              <span className="materias-turno-etiqueta">4.º A 6.º AÑO</span>
              <h4>Turno vespertino</h4>
              <p>
                <i className="bi bi-moon-stars"></i>
                18:00 a 22:20 o 23:00 hs.
              </p>
            </article>
          </div>
        </div>

        {/* MATERIAS POR AÑO */}

        <div className="talleres-grid materias-grid">
          {materiasPorAnio.map((anio) => (
            <article
              className="taller-anio-card materia-anio-card"
              key={anio.anio}
            >
              <div className="taller-card-encabezado">
                <span className="taller-anio-numero">
                  {anio.anio}
                </span>

                <div>
                  <span className="taller-ciclo">FORMACIÓN ACADÉMICA</span>
                  <h3>{anio.anio} año</h3>
                </div>
              </div>

              <div className="taller-listado materias-listado">
                <h4>
                  <i className="bi bi-book"></i>
                  Materias teóricas
                </h4>

                <ul>
                  {anio.materias.map((materia) => (
                    <li key={materia}>
                      <i className="bi bi-check2"></i>
                      {materia}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="taller-listado materias-extracurriculares">
                <h4>
                  <i className="bi bi-stars"></i>
                  Actividades extracurriculares
                </h4>

                <ul>
                  {anio.extracurriculares.map((actividad) => (
                    <li key={actividad}>
                      <i className="bi bi-plus-circle"></i>
                      {actividad}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==========================================
          SECCIÓN 3 - PASANTÍAS
      ========================================== */}

      <section
        id="pasantias"
        className="trayectos-seccion seccion-pasantias"
      >
        <div className="seccion-encabezado">
          <span className="seccion-etiqueta">03 / EXPERIENCIA FORMATIVA</span>

          <h2>Período de pasantías</h2>

          <p>
            Las pasantías constituyen una instancia de formación
            profesional en la que los estudiantes pueden poner en
            práctica los conocimientos adquiridos durante su trayectoria
            educativa y acercarse a distintos ámbitos de trabajo.
          </p>
        </div>

        <div className="pasantias-introduccion">
          <div className="pasantias-intro-icono">
            <i className="bi bi-briefcase"></i>
          </div>

          <div>
            <h3>Una experiencia de formación profesional</h3>
            <p>
              Esta instancia comienza a introducirse en 5.º año y se
              asigna en 6.º año. Su objetivo es brindar a los estudiantes
              la oportunidad de adquirir experiencia en situaciones
              reales de trabajo, tanto dentro de la institución como
              en empresas.
            </p>
          </div>
        </div>

        <div className="pasantias-grid">

          <article className="pasantia-card">
            <span className="pasantia-icono">
              <i className="bi bi-people"></i>
            </span>

            <h3>Docentes responsables</h3>

            <p>
              Las Prácticas Profesionalizantes están a cargo de:
            </p>

            <ul>
              {docentesPasantias.map((docente) => (
                <li key={docente}>{docente}</li>
              ))}
            </ul>
          </article>

          <article className="pasantia-card">
            <span className="pasantia-icono">
              <i className="bi bi-building"></i>
            </span>

            <h3>Ámbitos de realización</h3>

            <p>
              Las actividades pueden desarrollarse en diferentes
              espacios, según las oportunidades disponibles:
            </p>

            <ul>
              <li>Dentro de la escuela.</li>
              <li>En empresas u organizaciones externas.</li>
            </ul>
          </article>

          <article className="pasantia-card">
            <span className="pasantia-icono">
              <i className="bi bi-person-check"></i>
            </span>

            <h3>Selección de estudiantes</h3>

            <p>
              La selección se realiza libremente y no responde a una
              división específica por curso ni a la conformación de
              grupos completos. Por eso, cada estudiante puede tener
              una experiencia y organización diferente.
            </p>
          </article>

          <article className="pasantia-card">
            <span className="pasantia-icono">
              <i className="bi bi-calendar-week"></i>
            </span>

            <h3>Turnos y períodos</h3>

            <p>
              Las pasantías pueden desarrollarse en distintos turnos
              y horarios, durante el primer o segundo cuatrimestre.
              La organización depende de cada estudiante y del lugar
              donde realiza sus prácticas.
            </p>
          </article>

        </div>

        <div className="pasantias-duracion">
          <div className="pasantias-duracion-icono">
            <i className="bi bi-clock-history"></i>
          </div>

          <div>
            <span className="pasantias-duracion-etiqueta">
              DURACIÓN DE LAS PRÁCTICAS
            </span>

            <h3>Mínimo de 200 horas</h3>

            <p>
              Se requiere cumplir un mínimo de 200 horas de trabajo
              efectivamente realizado. Esta cantidad puede ser mayor,
              dependiendo de las características y necesidades del
              establecimiento o empresa donde se desarrollen las prácticas.
            </p>
          </div>
        </div>

        <div className="pasantias-aclaracion">
          <i className="bi bi-info-circle"></i>

          <div>
            <h3>Continuidad de las actividades escolares</h3>

            <p>
              Debido a que las pasantías pueden coincidir con los
              horarios habituales de taller y Educación Física, los
              estudiantes deben mantenerse al día con las tareas,
              actividades y trabajos escolares que se les asignen,
              aun cuando su participación en las prácticas interfiera
              con esos espacios.
            </p>
          </div>
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
          <span className="seccion-etiqueta">04 / EVALUACIONES</span>
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
