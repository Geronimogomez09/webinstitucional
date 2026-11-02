import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NuestraHistoria.css";

const Historia = () => {
  return (
    <div className="historia-container">
      <main className="historia-main">
        
        <section className="intro-seccion card shadow-sm p-0 border-0 mb-4 overflow-hidden" style={{ backgroundColor: '#FCF8EC' }}>
          
          {/* Imagen arriba ocupando todo el ancho de la caja */}
          <div className="w-100">
            <img src="/img/epet-20-fachada.avif"
              alt="Fachada EPET N°20" 
              className="img-fluid w-100"
              style={{ maxHeight: '350px', objectFit: 'cover' }}
            />
          </div>

          {/* Contenido de texto debajo de la foto */}
          <div className="p-4">
            <h2 className="mb-3">Historia de la EPET N°20</h2>
            <p>
              La EPET Nº20 fue inaugurada en el año 2006. Anteriormente se ubicaba en la calle Carlos H. Rodrigues y Chrestia, en un edificio antiguo y en muy mal estado. La institución era tan solicitada que los cupos disponibles no alcanzaban. Como solución, se optó por utilizar trailers refaccionados con calefacción mediante calefactores y ventilación con ventiladores. Sin embargo, el estado de los trailers era deplorable: en invierno se congelaban y en verano las temperaturas eran aún más altas que afuera.
            </p>
            <p className="mb-0">
              Eso ya es parte del pasado. En 2018 se inauguró el nuevo edificio de la EPET Nº20, totalmente distinto al anterior. Cuenta con calefacción por suelo radiante, ventilación mediante ventiladores, 12 aulas para teoría, 12 para taller y una biblioteca de gran tamaño.
            </p>
          </div>

        </section>

        {/* Línea de tiempo / Hitos importantes */}
        <div className="timeline-grid mb-5">
          <div className="timeline-card">
            <span className="anio">2006 - Inicios</span>
            <h3>Los Cimientos y Trailers</h3>
            <p>
              Inauguración en Carlos H. Rodrigues y Chrestia. Funcionamiento inicial en trailers ante la alta demanda institucional.
            </p>
          </div>

          <div className="timeline-card">
            <span className="anio">Evolución</span>
            <h3>Crecimiento Técnico</h3>
            <p>
              Incorporación de laboratorios informáticos, modernización de talleres y consolidación de la comunidad educativa de Neuquén.
            </p>
          </div>

          <div className="timeline-card">
            <span className="anio">2018 - Actualidad</span>
            <h3>Nuevo Edificio</h3>
            <p>
              Inauguración de las modernas instalaciones con suelo radiante, 12 aulas de teoría, 12 de taller y gran biblioteca.
            </p>
          </div>
        </div>

        {/* Sección de Autoridades y Personal Institucional */}
        <section className="autoridades-seccion mt-5">
          <h2 className="text-center mb-4">Información sobre las Autoridades y Personal</h2>

          <div className="row g-4">
            
            {/* Directivos */}
            <div className="col-md-6">
              <div className="card shadow-sm p-4 h-100 border-0">
                <h4 className="text-primary mb-3">Directivos</h4>
                <ul className="list-unstyled">
                  <li><strong>Director:</strong> Perez, Jesus</li>
                  <li><strong>Vicedirector:</strong> Ortega, Enrique</li>
                  <li><strong>Regente turno mañana:</strong> Cabaña, Eugenia</li>
                  <li><strong>Regente turno tarde:</strong> Malaspina, Maximiliano</li>
                  <li><strong>Sub regente turno vespertino:</strong> Flores, Yamila</li>
                </ul>
              </div>
            </div>

            {/* Área Técnica y Taller */}
            <div className="col-md-6">
              <div className="card shadow-sm p-4 h-100 border-0">
                <h4 className="text-primary mb-3">Área Técnica y Taller</h4>
                <ul className="list-unstyled">
                  <li><strong>Jefe General de Taller:</strong> De Ferraris, Rodrigo</li>
                  <li><strong>Jefe de Sección Turno Mañana:</strong> Lamas, Laura</li>
                  <li><strong>Jefe de Sección Turno Tarde:</strong> Lamas, Laura</li>
                  <li><strong>Oficina Técnica – T.M.:</strong> Nicolas, Aguirre, Matias, Almeida</li>
                  <li><strong>Oficina Técnica – T.T.:</strong> Verónica, Arrueta</li>
                </ul>
              </div>
            </div>

            {/* Secretaría */}
            <div className="col-md-6">
              <div className="card shadow-sm p-4 h-100 border-0">
                <h4 className="text-primary mb-3">Secretaría</h4>
                <ul className="list-unstyled">
                  <li><strong>Secretaría:</strong> Vacas, Natalia</li>
                  <li><strong>Pro – Secretaría – T.T.:</strong> Sasso, Beatriz Alejandra</li>
                  <li><strong>Pro – Secretaría – T.M.:</strong> Ledesma, Raul</li>
                </ul>
              </div>
            </div>

            {/* Equipo de Apoyo y Asesoría */}
            <div className="col-md-6">
              <div className="card shadow-sm p-4 h-100 border-0">
                <h4 className="text-primary mb-3">Equipo de Apoyo y Asesoría</h4>
                <ul className="list-unstyled">
                  <li><strong>Asesoría Pedagógica:</strong> Vicente, Nestor</li>
                  <li><strong>Aux. Asesoría Pedagógica:</strong> Vilcaes, Laura</li>
                  <li><strong>Aux. Asesoría Pedagógica:</strong> Carina, Arano</li>
                  <li><strong>Aux. Asesoría Pedagógica:</strong> Jara, Velia</li>
                </ul>
              </div>
            </div>

            {/* Biblioteca y Redes */}
            <div className="col-md-6">
              <div className="card shadow-sm p-4 h-100 border-0">
                <h4 className="text-primary mb-3">Biblioteca y Redes</h4>
                <ul className="list-unstyled">
                  <li><strong>Jefe de Preceptores – T.M.:</strong> Carlos, Avendanio</li>
                  <li><strong>Subjefe de Preceptores – T.M.:</strong> Lucas Figueroa</li>
                  <li><strong>ATP Laboratorio – T.M.:</strong> Acuña, Gonzalo</li>
                  <li><strong>ATP Laboratorio – T.T.:</strong> Acuña, Gonzalo</li>
                </ul>
              </div>
            </div>

            {/* Preceptoría y Laboratorio */}
            <div className="col-md-6">
              <div className="card shadow-sm p-4 h-100 border-0">
                <h4 className="text-primary mb-3">Preceptoría y Laboratorio</h4>
                <ul className="list-unstyled">
                  <li><strong>Bibliotecaria – T.M.:</strong> Sandra, Bono</li>
                  <li><strong>Bibliotecaria – T.T.:</strong> Alarcón, Romina</li>
                  <li><strong>Administradores de Redes – T.M.:</strong> Pablo, De León</li>
                  <li><strong>Administradores de Redes – T.T.:</strong> Verónica, Arrueta</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Listado de Preceptores por Turno */}
          <div className="mt-5">
            <h3 className="text-center mb-4">Preceptores</h3>
            
            <div className="row g-4">
              {/* Turno Mañana */}
              <div className="col-md-6">
                <div className="card shadow-sm p-4 h-100 border-0 bg-light">
                  <h4 className="text-secondary mb-3">Turno Mañana</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><strong>1°1° / ED. Física:</strong> Bastian, Facundo</li>
                    <li className="mb-2"><strong>1°3° / 2°1°:</strong> Melisa, Criuello</li>
                    <li className="mb-2"><strong>2°3° / 3°3°:</strong> Romano, Facundo</li>
                    <li className="mb-2"><strong>1°5° / 3°4°:</strong> Rostango, Caro</li>
                    <li className="mb-2"><strong>2°5° / 3°6°:</strong> Sebastian, Price</li>
                    <li><strong>Taller:</strong> Barbeito, Berta</li>
                  </ul>
                </div>
              </div>

              {/* Turno Tarde */}
              <div className="col-md-6">
                <div className="card shadow-sm p-4 h-100 border-0 bg-light">
                  <h4 className="text-secondary mb-3">Turno Tarde</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><strong>1°2° / 3°1°:</strong> Dalceggio, Nati</li>
                    <li className="mb-2"><strong>1°4° / 2°4°:</strong> Arribere, Laura</li>
                    <li className="mb-2"><strong>1°6° / 3°5°:</strong> Avendaño, C</li>
                    <li className="mb-2"><strong>2°2° / 3°2°:</strong> Acosta, Rocio</li>
                    <li className="mb-2"><strong>2°6°:</strong> Contera, Ro</li>
                    <li><strong>Taller:</strong> Barbeito, Berta</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
};

export default Historia;