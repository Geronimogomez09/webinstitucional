
import React from "react";
import { Link } from "react-router-dom";
import "../styles/TrayectosFormativos.css";

// ==========================================================
// DATOS DE LA PÁGINA
// Los siguientes arreglos contienen la información que se
// muestra en las distintas secciones del componente.
// Para actualizar textos, nombres o elementos, modificar aquí.
// ==========================================================

// ----------------------------------------------------------
// 1. Accesos rápidos a las secciones
// ----------------------------------------------------------

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
    titulo: "Mesas de examen y POEC/IFCA",
    descripcion: "Encontrá información sobre las instancias de evaluación.",
    destino: "#mesas-poec",
    boton: "Mesas de examen y POEC/IFCA",
  },
];

// ----------------------------------------------------------
// 2. Talleres correspondientes a cada año
// ----------------------------------------------------------

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

// ----------------------------------------------------------
// 3. Materias teóricas y actividades extracurriculares
// ----------------------------------------------------------

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
    extracurriculares: ["Educación Física", "Taller"],
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
    extracurriculares: ["Taller", "Educación Física"],
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
    extracurriculares: ["Taller", "Educación Física", "Pasantías"],
  },
];

// ----------------------------------------------------------
// 4. Docentes responsables de las pasantías
// ----------------------------------------------------------

const docentesPasantias = [
  "Enrique Zoppi",
  "Silvio Estenta",
];

// ----------------------------------------------------------
// 5. Situaciones contempladas en las mesas de examen
// ----------------------------------------------------------

const situacionesExamen = [
  {
    numero: "01",
    icono: "bi-mortarboard",
    titulo: "Finalización de estudios",
    descripcion:
      "Está destinada a estudiantes que ya finalizaron el cursado y egresaron, pero todavía tienen materias pendientes de aprobación para completar sus estudios.",
  },
  {
    numero: "02",
    icono: "bi-journal-bookmark",
    titulo: "Materias previas",
    descripcion:
      "Corresponde a estudiantes que adeudan materias de años anteriores y deben rendirlas en la misma institución para regularizar su trayectoria escolar.",
  },
  {
    numero: "03",
    icono: "bi-person-plus",
    titulo: "Exámenes libres",
    descripcion:
      "Es la instancia para quienes provienen de otra institución y necesitan rendir una materia que no cursaron en la EPET N.º 20, de acuerdo con su situación académica. También se consideran en esta modalidad las materias que continúan pendientes de aprobación cuando el estudiante ya egresó y han transcurrido más de dos años desde su egreso.",
  },
  {
    numero: "04",
    icono: "bi-arrow-left-right",
    titulo: "Equivalencias",
    descripcion:
      "Se utiliza cuando una materia aprobada o pendiente en otra escuela tiene correspondencia con un espacio curricular de la EPET N.º 20. La institución evalúa si corresponde reconocerla o si debe rendirse aquí.",
  },
];

// ==========================================================
// COMPONENTE PRINCIPAL
// Organiza y presenta todas las secciones de Trayectos
// Formativos de la institución.
// ==========================================================

function TrayectosFormativos() {
  return (
    <main className="trayectos-page">

      {/* ==================================================
          SECCIÓN 0 - PRESENTACIÓN
          Portada principal con título, descripción e imagen.
      ================================================== */}

      <section className="trayectos-portada">
        <div className="portada-texto">
          <span className="portada-etiqueta">
            TRAYECTOS FORMATIVOS
          </span>

          <h1>
            Tu formación,
            <br />
            paso a paso
          </h1>

          <p>
            Conocé el recorrido educativo de nuestra escuela:
            los talleres, las materias y las distintas experiencias
            que acompañan tu formación técnica.
          </p>
        </div>

        {/* Elementos gráficos decorativos de la portada */}

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

      {/* ==================================================
          ACCESOS RÁPIDOS
          Tarjetas que permiten desplazarse a cada sección.
      ================================================== */}

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

      {/* ==================================================
          BLOQUE INFORMATIVO
          Resumen general de la formación institucional.
      ================================================== */}

      <section className="trayectos-resumen">
        <div className="resumen-texto">
          <span className="seccion-etiqueta">
            NUESTRA ESCUELA
          </span>

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

      {/* ==================================================
          SECCIÓN 1 - TALLERES Y ROTACIONES
          Información de los espacios de formación práctica.
      ================================================== */}

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
            técnica de los estudiantes. A continuación, se presentan
            los espacios correspondientes a cada año.
          </p>
        </div>

        {/* Organización de las rotaciones según el ciclo */}

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

        {/* Horarios generales de los talleres */}

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

        {/* Listado de talleres organizado por año */}

        <div className="talleres-grid">
          {talleresPorAnio.map((anio) => (
            <article
              className="taller-anio-card"
              key={anio.anio}
            >
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

        {/* Acceso al cronograma detallado de rotaciones */}

        <div className="talleres-cronograma">
          <p>
            ¿Buscás la distribución detallada de las rotaciones?
          </p>

          <Link
            to="/talleres"
            className="btn-cronograma"
          >
            Ver cronograma por grupo
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* ==================================================
          SECCIÓN 2 - MATERIAS TEÓRICAS
          Listado de espacios curriculares por año.
      ================================================== */}

      <section
        id="materias"
        className="trayectos-seccion seccion-materias"
      >
        <div className="seccion-encabezado">
          <span className="seccion-etiqueta">
            02 / FORMACIÓN ACADÉMICA
          </span>

          <h2>Materias teóricas</h2>

          <p>
            Conocé los espacios curriculares que acompañan la formación
            de los estudiantes durante los seis años de la trayectoria
            educativa.
          </p>
        </div>

        {/* Horarios generales de las materias */}

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
              <span className="materias-turno-etiqueta">
                1.º A 3.º AÑO
              </span>

              <h4>Turno mañana</h4>

              <p>
                <i className="bi bi-sun"></i>
                8:00 a 12:20 hs.
              </p>
            </article>

            <article className="materias-turno-card">
              <span className="materias-turno-etiqueta">
                1.º A 3.º AÑO
              </span>

              <h4>Turno tarde</h4>

              <p>
                <i className="bi bi-sunset"></i>
                13:30 a 17:50 hs.
              </p>
            </article>

            <article className="materias-turno-card">
              <span className="materias-turno-etiqueta">
                4.º A 6.º AÑO
              </span>

              <h4>Turno vespertino</h4>

              <p>
                <i className="bi bi-moon-stars"></i>
                18:00 a 22:20 o 23:00 hs.
              </p>
            </article>
          </div>
        </div>

        {/* Materias y actividades extracurriculares por año */}

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
                  <span className="taller-ciclo">
                    FORMACIÓN ACADÉMICA
                  </span>

                  <h3>{anio.anio} año</h3>
                </div>
              </div>

              {/* Materias teóricas */}

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

              {/* Actividades extracurriculares */}

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

      {/* ==================================================
          SECCIÓN 3 - PERÍODO DE PASANTÍAS
          Información sobre las prácticas profesionalizantes.
      ================================================== */}

      <section
        id="pasantias"
        className="trayectos-seccion seccion-pasantias"
      >
        <div className="seccion-encabezado">
          <span className="seccion-etiqueta">
            03 / EXPERIENCIA FORMATIVA
          </span>

          <h2>Período de pasantías</h2>

          <p>
            Las pasantías constituyen una instancia de formación
            profesional en la que los estudiantes pueden poner en
            práctica los conocimientos adquiridos durante su trayectoria
            educativa y acercarse a distintos ámbitos de trabajo.
          </p>
        </div>

        {/* Presentación general de las pasantías */}

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

        {/* Características principales de las pasantías */}

        <div className="pasantias-grid">

          {/* Docentes responsables */}

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

          {/* Lugares donde pueden realizarse */}

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

          {/* Criterios de selección */}

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

          {/* Organización de turnos y períodos */}

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

        {/* Duración mínima de las prácticas */}

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

        {/* Aclaración sobre las actividades escolares */}

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

      {/* ==================================================
          SECCIÓN 4 - MESAS DE EXAMEN Y POEC/IFCA
          Información sobre las instancias de evaluación,
          acreditación y recuperación de materias.
      ================================================== */}

      <section
        id="mesas-poec"
        className="trayectos-seccion seccion-mesas-poec"
      >
        <div className="seccion-encabezado">
          <span className="seccion-etiqueta">
            04 / INSTANCIAS DE EVALUACIÓN
          </span>

          <h2>Mesas de examen y POEC/IFCA</h2>

          <p>
            Durante el ciclo lectivo existen diferentes instancias
            destinadas a la acreditación de materias, la regularización
            de espacios curriculares pendientes y la recuperación de
            contenidos. Conocé cuál corresponde a cada situación.
          </p>
        </div>

        {/* --------------------------------------------------
            4.1 - Situaciones contempladas en las mesas
        -------------------------------------------------- */}

        <div className="mesas-subtitulo">
          <span className="mesas-subtitulo-icono">
            <i className="bi bi-person-lines-fill"></i>
          </span>

          <div>
            <h3>¿Cuál es tu situación en una mesa de examen?</h3>

            <p>
              Las mesas contemplan distintas trayectorias académicas.
              Identificá la opción que se relaciona con tu situación.
            </p>
          </div>
        </div>

        {/* Tarjetas informativas: una por cada situación */}

        <div className="situaciones-examen-grid">
          {situacionesExamen.map((situacion) => (
            <article
              className="situacion-examen-card"
              key={situacion.numero}
            >
              <div className="situacion-examen-superior">
                <span className="situacion-examen-icono">
                  <i className={`bi ${situacion.icono}`}></i>
                </span>

                <span className="situacion-examen-numero">
                  {situacion.numero}
                </span>
              </div>

              <h4>{situacion.titulo}</h4>

              <p>{situacion.descripcion}</p>
            </article>
          ))}
        </div>

        {/* --------------------------------------------------
            4.2 - Períodos de examen
        -------------------------------------------------- */}

        <div className="mesas-periodos">
          <div className="mesas-subtitulo">
            <span className="mesas-subtitulo-icono">
              <i className="bi bi-calendar3"></i>
            </span>

            <div>
              <h3>Períodos de examen</h3>

              <p>
                Las mesas se organizan en diferentes períodos a lo largo
                del año, de acuerdo con el calendario académico vigente.
              </p>
            </div>
          </div>

          <div className="periodos-contenido">
            <div className="periodos-texto">
              <p>
                A lo largo del ciclo lectivo se habilitan distintas
                fechas para que los estudiantes puedan presentarse a
                rendir materias pendientes. La distribución de las mesas
                puede variar según el tipo de examen y el período
                establecido por la institución.
              </p>

              <p>
                El cronograma anual indica tanto los plazos de pedido
                o inscripción como las fechas en las que se realizan
                los exámenes. Es importante distinguir ambas instancias:
                la fecha de inscripción no es necesariamente la fecha
                en la que se rinde.
              </p>
            </div>

            {/* Recuadro destacado con información importante */}

            <div className="periodos-destacado">
              <i className="bi bi-calendar2-check"></i>

              <div>
                <h4>Consultá siempre el cronograma vigente</h4>

                <p>
                  Las fechas, los plazos y la organización pueden
                  modificarse de un ciclo lectivo a otro. Revisá la
                  información publicada por la escuela antes de
                  organizar tu presentación.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------
            4.3 - POEC/IFCA
            Información sobre las instancias de recuperación.
        -------------------------------------------------- */}

        <div className="poec-bloque">
          <div className="poec-encabezado">
            <span className="poec-icono">
              <i className="bi bi-arrow-repeat"></i>
            </span>

            <div>
              <span className="poec-etiqueta">
                INSTANCIA DE RECUPERACIÓN
              </span>

              <h3>POEC/IFCA</h3>

              <p>
                Una oportunidad para recuperar aprendizajes pendientes
                del mismo ciclo lectivo.
              </p>
            </div>
          </div>

          <div className="poec-contenido">
            {/* Explicación general */}

            <div className="poec-explicacion">
              <h4>¿Qué es y para quién está destinado?</h4>

              <p>
                El POEC se desarrolla en diciembre y está destinado a
                estudiantes que necesitan recuperar materias o unidades
                desaprobadas durante el año en curso, siempre que esos
                contenidos todavía se encuentren dentro de las
                posibilidades de recuperación para acreditar la materia
                en ese mismo ciclo lectivo.
              </p>
            </div>

            {/* Características principales del POEC */}

            <div className="poec-condiciones">
              <div className="poec-condicion">
                <i className="bi bi-calendar-event"></i>

                <div>
                  <strong>¿Cuándo?</strong>
                  <span>En el período de diciembre.</span>
                </div>
              </div>

              <div className="poec-condicion">
                <i className="bi bi-journal-check"></i>

                <div>
                  <strong>¿Qué se recupera?</strong>

                  <span>
                    Materias o unidades desaprobadas del año en curso
                    que aún puedan recuperarse.
                  </span>
                </div>
              </div>

              <div className="poec-condicion">
                <i className="bi bi-flag"></i>

                <div>
                  <strong>¿Cuál es el objetivo?</strong>

                  <span>
                    Alcanzar la aprobación de la materia durante el
                    mismo ciclo lectivo.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------
            4.4 - Recomendaciones generales
            Indicaciones para los estudiantes antes de rendir.
        -------------------------------------------------- */}

        <div className="mesas-recomendaciones">
          <div className="mesas-recomendaciones-icono">
            <i className="bi bi-clipboard2-check"></i>
          </div>

          <div className="mesas-recomendaciones-contenido">
            <h3>Antes de presentarte a una mesa</h3>

            <p>
              Para evitar inconvenientes, tené en cuenta las siguientes
              recomendaciones:
            </p>

            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>
                Verificá cuál es tu situación académica y qué tipo de
                instancia de examen te corresponde.
              </li>

              <li>
                <i className="bi bi-check2-circle"></i>
                Consultá el cronograma actualizado y comprobá tanto
                la fecha de inscripción como la fecha de examen.
              </li>

              <li>
                <i className="bi bi-check2-circle"></i>
                Revisá la materia, el año y la fecha de la mesa en la
                que debés presentarte.
              </li>

              <li>
                <i className="bi bi-check2-circle"></i>
                Consultá con la institución o con el docente
                correspondiente si necesitás confirmar algún requisito
                o aspecto de la evaluación.
              </li>
            </ul>
          </div>
        </div>

        {/* --------------------------------------------------
            BOTÓN DE INSCRIPCIÓN
            Se ubica después de las recomendaciones para que
            el estudiante pueda revisar la información antes
            de acceder al formulario.
        -------------------------------------------------- */}

        <div className="mesas-formulario-contenedor">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc0_W9Rw-xdm2LZaPW7QOHMrVwS9zqe0mLu1rjnN5Zzl5PWCw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cronograma btn-formulario-mesas"
          >
            Inscribirse a una mesa de examen
            <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>

        {/* --------------------------------------------------
            4.5 - Aclaración final sobre el calendario
        -------------------------------------------------- */}

        <div className="mesas-nota-final">
          <i className="bi bi-info-circle"></i>

          <p>
            La organización de las mesas de examen y los períodos de
            recuperación se establece según el calendario académico
            de cada ciclo lectivo. Por eso, esta sección presenta
            información general: las fechas concretas deben consultarse
            siempre en el cronograma oficial vigente de la EPET N.º 20.
          </p>
        </div>
      </section>
    </main>
  );
}

// Exportación del componente para utilizarlo en las rutas
// de la aplicación.

export default TrayectosFormativos;
