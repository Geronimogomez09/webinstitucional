
import TarjetaAnuncio from "../componentes/novedades/TarjetaAnuncio";
import anuncios from "../data/anuncios";
import "../styles/novedades.css";

export default function Novedades() {
  return (
    <main className="pagina-novedades">

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
