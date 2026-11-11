import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/header.css";

const enlaces = [
  { nombre: "Novedades", ruta: "/novedades" },
  { nombre: "Trayecto formativo", ruta: "/trayectos-formativos" },
  { nombre: "Talleres", ruta: "/talleres" },
  { nombre: "Secretaría", ruta: "/secretaria" },
  { nombre: "Asesoría", ruta: "/asesoria" },
  { nombre: "Biblioteca", ruta: "/biblioteca"},
  { nombre: "Historia", ruta: "/NuestraHistoria" },
  { nombre: "Contacto", ruta: "/contacto" },
];

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);

  useEffect(() => {
    const controlarScroll = () => {
      setHeaderScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", controlarScroll, {
      passive: true,
    });

    controlarScroll();

    return () => {
      window.removeEventListener("scroll", controlarScroll);
    };
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMenuAbierto(false);
  }, []);

  const navegacion = (
    <>
      {enlaces.map((enlace) => (
        <NavLink
          key={enlace.ruta}
          to={enlace.ruta}
          className={({ isActive }) =>
            `header-link ${isActive ? "activo" : ""}`
          }
          onClick={() => setMenuAbierto(false)}
        >
          {enlace.nombre}
        </NavLink>
      ))}
    </>
  );

  return (
    <>
      <div className="header-container">
        <header
          className={`header ${
            headerScroll ? "header-scrolled" : ""
          }`}
        >
          <Link to="/" className="header-logo">
            <img
              src="/imagenes/escudo-epet.png"
              alt="Escudo EPET N°20"
            />
            <span>EPET N°20</span>
          </Link>

          <nav className="header-nav">
            {navegacion}
          </nav>

          {/* Botón de escritorio con el icono de Bootstrap integrado */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="header-whatsapp"
          >
            <i className="bi bi-whatsapp" style={{ fontSize: "1.2rem" }} />
          </a>

          <button
            type="button"
            className="header-toggle"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
          >
            <i
              className={`bi ${
                menuAbierto ? "bi-x-lg" : "bi-list"
              }`}
            />
          </button>
        </header>
      </div>

      {/* Fondo oscuro */}
      <div
        className={`header-overlay ${
          menuAbierto ? "visible" : ""
        }`}
        onClick={() => setMenuAbierto(false)}
      />

      {/* Menú lateral */}
      <aside
        className={`header-sidebar ${
          menuAbierto ? "abierto" : ""
        }`}
      >
        <nav className="sidebar-nav">
          {navegacion}
        </nav>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          className="sidebar-whatsapp"
        >
          <i className="bi bi-whatsapp" />
          Canal WhatsApp
        </a>
      </aside>
    </>
  );
}
