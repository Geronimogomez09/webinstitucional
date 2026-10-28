
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <section className="footer-institucion">
          <h3>EPET N° 20</h3>
          <p>
            Escuela Provincial de Educación Técnica N° 20.
            Formando técnicos profesionales con excelencia
            académica y compromiso social en la ciudad de
            Neuquén.
          </p>
        </section>

        <section className="footer-contacto">
          <h3>Contacto</h3>
          <p>
            <a href="tel:02994478052">Tel. 4478052</a>
          </p>

          <h3 className="footer-email-titulo">
            Email Oficial de la Institución
          </h3>
          <p>
            <a href="mailto:epet020@neuquen.edu.ar">
              epet020@neuquen.edu.ar
            </a>
          </p>
        </section>

        <section className="footer-ubicacion">
          <h3>Ubicación</h3>
          <p>
            Lanín 2020, Q8300 Neuquén, Argentina
          </p>
        </section>
      </div>

      <div className="footer-copyright">
        Copyright © {new Date().getFullYear()} EPET N° 20 - Neuquén.
        Todos los derechos reservados.
      </div>
    </footer>
  );
}
