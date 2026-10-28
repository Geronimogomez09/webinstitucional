
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/header.css";

const enlaces = [
  { nombre: "Novedades", ruta: "/novedades" },
  { nombre: "Estudiantes", ruta: "/estudiantes" },
  { nombre: "Talleres", ruta: "/talleres" },
  { nombre: "Secretaría", ruta: "/secretaria" },
  { nombre: "Asesoría", ruta: "/asesoria" },
  { nombre: "Biblioteca", ruta: "/biblioteca" },
];

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

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

      <NavLink
        to="/mas"
        className={({ isActive }) =>
          `header-link ${isActive ? "activo" : ""}`
        }
        onClick={() => setMenuAbierto(false)}
      >
        Más
      </NavLink>
    </>
  );

  return (
    <>
      <header className="header">
        <Link to="/" className="header-logo">
          <img src="../../public/imagenes/escudo-epet.png" alt="Escudo EPET N°20" />
          <span>EPET N°20</span>
        </Link>

        <nav className="header-nav">{navegacion}</nav>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          className="header-whatsapp"
        >
          <strong>CANAL WHATSAPP</strong>
          <small>Comunidad Educativa</small>
        </a>

        <button
          className="header-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
        >
          <i className={`bi ${menuAbierto ? "bi-x-lg" : "bi-list"}`} />
        </button>
      </header>

      <div
        className={`header-overlay ${menuAbierto ? "visible" : ""}`}
        onClick={() => setMenuAbierto(false)}
      />

      <aside className={`header-sidebar ${menuAbierto ? "abierto" : ""}`}>
        <div className="sidebar-nav">{navegacion}</div>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          className="sidebar-whatsapp"
        >
          <i className="bi bi-whatsapp" /> Canal WhatsApp
        </a>
      </aside>
    </>
  );
}
