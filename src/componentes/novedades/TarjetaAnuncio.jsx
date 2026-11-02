
import { Link } from "react-router-dom";
import "../../styles/novedades/TarjetaAnuncio.css";

export default function TarjetaAnuncio({
  id,
  categoria,
  titulo,
  imagen,
  descripcion,
  autor,
  fecha,
}) {
  return (
    <Link
      to={`/novedades/${id}`}
      className="tarjeta-anuncio-link"
      aria-label={`Leer novedad: ${titulo}`}
    >
      <article className="tarjeta-anuncio">

        <span className="anuncio-categoria">
          {categoria}
        </span>

        <h2 className="anuncio-titulo">
          {titulo}
        </h2>

        <div className="anuncio-imagen-contenedor">
          <img
            src={imagen}
            alt={titulo}
            className="anuncio-imagen"
            loading="lazy"
          />
        </div>

        <p className="anuncio-descripcion">
          {descripcion}
        </p>

        <div className="anuncio-footer">
          <span className="anuncio-autor">
            {autor}
          </span>

          <span className="anuncio-separador">/</span>

          <time className="anuncio-fecha">
            {fecha}
          </time>
        </div>

      </article>
    </Link>
  );
}
