
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import anuncios from "../data/anuncios";
import TarjetaAnuncio from "../componentes/novedades/TarjetaAnuncio";

import "../styles/novedadDetalle.css";

export default function NovedadDetalle() {
  const { id } = useParams();

  // Buscar la publicación actual
  const indiceActual = anuncios.findIndex(
    (item) => item.id === Number(id)
  );

  const anuncio = anuncios[indiceActual];

  // Publicación anterior y siguiente
  const anterior =
    indiceActual > 0
      ? anuncios[indiceActual - 1]
      : null;

  const siguiente =
    indiceActual !== -1 && indiceActual < anuncios.length - 1
      ? anuncios[indiceActual + 1]
      : null;

  // Novedades relacionadas
  const relacionadas = anuncio
    ? anuncios
        .filter(
          (item) =>
            item.id !== anuncio.id &&
            item.categoria === anuncio.categoria
        )
        .slice(0, 3)
    : [];

  // Volver arriba cuando cambia la publicación
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  // Publicación inexistente
  if (!anuncio) {
    return (
      <main className="novedad-no-encontrada">
        <div>
          <h1>Novedad no encontrada</h1>

          <p>
            El comunicado que estás buscando no existe
            o ya no se encuentra disponible.
          </p>

          <Link to="/novedades">
            Volver a novedades
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pagina-novedad-detalle">

      <article className="novedad-detalle-contenedor">

        {/* VOLVER */}
        <Link
          to="/novedades"
          className="novedad-volver"
        >
          <i className="bi bi-arrow-left" />
          Volver a novedades
        </Link>

        {/* ENCABEZADO */}
        <header className="novedad-detalle-header">

          <span className="novedad-detalle-categoria">
            {anuncio.categoria}
          </span>

          <h1>{anuncio.titulo}</h1>

          <div className="novedad-detalle-metadata">

            <span>
              <i className="bi bi-person" />
              {anuncio.autor}
            </span>

            <span>
              <i className="bi bi-calendar3" />
              {anuncio.fecha}
            </span>

          </div>

        </header>

        {/* IMAGEN PRINCIPAL */}
        <div className="novedad-detalle-imagen">
          <img
            src={anuncio.imagen}
            alt={anuncio.titulo}
          />
        </div>

        {/* CONTENIDO */}
        <div className="novedad-detalle-contenido">

          <p className="novedad-detalle-descripcion">
            {anuncio.descripcion}
          </p>

          <div className="novedad-detalle-texto">
            {anuncio.contenido}
          </div>

        </div>

        {/* NAVEGACIÓN ENTRE PUBLICACIONES */}
        <nav
          className="novedad-navegacion"
          aria-label="Navegación entre novedades"
        >

          {anterior ? (
            <Link
              to={`/novedades/${anterior.id}`}
              className="novedad-nav-item novedad-nav-anterior"
            >
              <span className="novedad-nav-etiqueta">
                <i className="bi bi-arrow-left" />
                Publicación anterior
              </span>

              <strong>{anterior.titulo}</strong>
            </Link>
          ) : (
            <div className="novedad-nav-item novedad-nav-deshabilitado">
              <span className="novedad-nav-etiqueta">
                <i className="bi bi-arrow-left" />
                Publicación anterior
              </span>

              <strong>No hay publicaciones anteriores</strong>
            </div>
          )}

          {siguiente ? (
            <Link
              to={`/novedades/${siguiente.id}`}
              className="novedad-nav-item novedad-nav-siguiente"
            >
              <span className="novedad-nav-etiqueta">
                Publicación siguiente
                <i className="bi bi-arrow-right" />
              </span>

              <strong>{siguiente.titulo}</strong>
            </Link>
          ) : (
            <div className="novedad-nav-item novedad-nav-deshabilitado">
              <span className="novedad-nav-etiqueta">
                Publicación siguiente
                <i className="bi bi-arrow-right" />
              </span>

              <strong>No hay publicaciones siguientes</strong>
            </div>
          )}

        </nav>

      </article>

      {/* NOVEDADES RELACIONADAS */}
      {relacionadas.length > 0 && (
        <section className="novedades-relacionadas">

          <div className="relacionadas-encabezado">
            <div>
              <span className="relacionadas-subtitulo">
                SEGUÍ INFORMÁNDOTE
              </span>

              <h2>
                Novedades relacionadas
              </h2>

              <p>
                También te puede interesar.
              </p>
            </div>

            <Link
              to="/novedades"
              className="relacionadas-ver-todas"
            >
              Ver todas
              <i className="bi bi-arrow-right" />
            </Link>
          </div>

          <div className="relacionadas-grid">

            {relacionadas.map((item) => (
              <TarjetaAnuncio
                key={item.id}
                {...item}
              />
            ))}

          </div>

        </section>
      )}

      {/* VOLVER AL LISTADO */}
      <div className="novedad-volver-final">
        <Link to="/novedades">
          <i className="bi bi-arrow-left" />
          Volver a todas las novedades
        </Link>
      </div>

    </main>
  );
}
