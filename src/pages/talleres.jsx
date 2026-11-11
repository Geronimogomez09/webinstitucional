import React from 'react';
import '../styles/talleres.css';

export default function Talleres() {
  return (
    <div className="talleres-container">
      <div className="talleres-header">
        <h1 className="talleres-title">Información Talleres</h1>
        <p className="talleres-subtitle">
          Espacios de formación práctica, desarrollo técnico y seguridad en talleres de la institución.
        </p>
      </div>

      <div className="talleres-card">
        <h2 className="talleres-card-title">Cuadernillos 2026</h2>
        <p className="talleres-card-desc">Descargá el material bibliográfico y guías prácticas correspondientes al ciclo lectivo.</p>
        <a 
          href="https://drive.google.com/drive/folders/1SExRzm451Ej-UwJsg9csKDsVTbuB0NZP" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="talleres-btn"
        >
          Descargar cuadernillos
        </a>
      </div>

      <div className="talleres-card">
        <h2 className="talleres-card-title">Cronogramas de Taller</h2>
        <p className="talleres-card-desc">Consultá los horarios, rotaciones y distribución de comisiones para las actividades prácticas.</p>
        <a 
          href="https://drive.google.com/drive/folders/1lIX1NzVOmV10RY5rhCUoDFhcH1hpr0Kq" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="talleres-btn talleres-btn-secondary"
        >
          Ver Cronogramas
        </a>
      </div>
    </div>
  );
}