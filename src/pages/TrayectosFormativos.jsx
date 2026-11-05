
import React from "react";
import "../styles/TrayectosFormativos.css";

function TrayectosFormativos() {
  return (
    <div className="trayectos-page">

      {/* ENCABEZADO DE LA PÁGINA */}
      <section className="trayectos-hero">
        <p className="trayectos-etiqueta">EPET N.º 20</p>

        <h1>Trayectos formativos</h1>

        <p>
          Conocé las distintas áreas de formación que forman parte
          de nuestro recorrido educativo.
        </p>
      </section>

      {/* SECCIONES PRINCIPALES */}
      <section className="trayectos-contenido">

        <div className="trayectos-introduccion">
          <h2>Nuestra formación</h2>
          <p>
            Explorá las diferentes instancias que componen la
            formación técnica a lo largo de los años.
          </p>
        </div>

        <div className="trayectos-grid">

          <article className="trayecto-card">
            <span className="trayecto-numero">01</span>
            <h3>Talleres y rotaciones</h3>
            <p>
              Conocé los espacios de formación práctica y las
              rotaciones correspondientes a cada año.
            </p>
          </article>

          <article className="trayecto-card">
            <span className="trayecto-numero">02</span>
            <h3>Materias teóricas</h3>
            <p>
              Descubrí los espacios curriculares que acompañan
              nuestra formación académica.
            </p>
          </article>

          <article className="trayecto-card">
            <span className="trayecto-numero">03</span>
            <h3>Período de pasantías</h3>
            <p>
              Información sobre las experiencias de formación
              profesional correspondientes al último año.
            </p>
          </article>

          <article className="trayecto-card">
            <span className="trayecto-numero">04</span>
            <h3>Mesas de examen y POEC</h3>
            <p>
              Consultá información sobre instancias de evaluación
              y períodos de recuperación.
            </p>
          </article>

        </div>
      </section>

    </div>
  );
}

export default TrayectosFormativos;
