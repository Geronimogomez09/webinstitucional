
import TarjetaAnuncio from "../componentes/novedades/TarjetaAnuncio";
import anuncios from "../data/anuncios";
import "../styles/Novedades.css";

export default function Novedades() {
  return (
    <main className="pagina-novedades">
        <section className="trayectos-portada">
        <div className="portada-texto">
          <span className="portada-etiqueta">
            Novedades
          </span>

          <h1>Tabla de Novedades</h1>

          <p>
            En esta sección encontrarás todas las novedades relacionadas con los trayectos formativos, incluyendo actualizaciones, eventos y anuncios importantes para mantenerte informado sobre las últimas noticias y cambios en nuestros programas educativos.
          </p>
        </div>
      </section>
      <section className="novedades-contenedor">

        <div className="novedades-grid">

          {anuncios.map((anuncio) => (
            <TarjetaAnuncio
              key={anuncio.id}
              {...anuncio}
            />
          ))}

        </div>

      </section>

    </main>
  );
}
