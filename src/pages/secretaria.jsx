import React from 'react';

export default function Secretaria() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Título de la Sección */}
      <div className="text-center space-y-2 border-b-2 border-[#79A3B1]/30 pb-6">
        <h1 
          style={{ fontFamily: "'Oswald', sans-serif" }} 
          className="text-3xl md:text-4xl font-bold uppercase text-[#456268] tracking-wide"
        >
          Secretaría Escolar
        </h1>
        <p 
          style={{ fontFamily: "'Inter', sans-serif" }} 
          className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto"
        >
          Gestión de trámites, constancias, legalizaciones y atención a la comunidad educativa de la EPET N° 20.
        </p>
      </div>

      {/* Horarios y Atención */}
      <div 
        style={{ backgroundColor: '#456268' }} 
        className="rounded-2xl p-6 md:p-8 text-white shadow-md border-t-4 border-[#79A3B1]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h2 
              style={{ fontFamily: "'Oswald', sans-serif" }} 
              className="text-xl md:text-2xl font-semibold uppercase tracking-wide"
            >
              Horarios de Atención Presencial
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm text-slate-200">
              Turno Mañana: 08:00 a 12:00 hs. | Turno Tarde: 13:30 a 17:30 hs.
            </p>
          </div>
          <a
            href="mailto:secretaria@epet20.edu.ar"
            style={{ backgroundColor: '#79A3B1', fontFamily: "'Inter', sans-serif" }}
            className="px-5 py-2.5 rounded-xl font-medium text-white hover:bg-[#5e8896] transition-colors text-sm shadow-sm whitespace-nowrap"
          >
            Enviar Consulta
          </a>
        </div>
      </div>

      {/* Trámites Frecuentes */}
      <div className="space-y-4">
        <h2 
          style={{ fontFamily: "'Oswald', sans-serif" }} 
          className="text-2xl font-bold text-[#456268] uppercase tracking-wide"
        >
          Trámites y Solicitudes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-[#79A3B1]/30 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#D0E8F2] text-[#456268] flex items-center justify-center font-bold text-lg">
                📄
              </div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-lg font-semibold text-[#456268]">
                Constancia de Alumno Regular
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs text-slate-600 leading-relaxed">
                Solicitud digital o presencial para trámites de asignaciones, boleto estudiantil y obra social.
              </p>
            </div>
            <button 
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="w-full mt-4 py-2 px-3 text-xs font-semibold text-[#456268] bg-[#D0E8F2]/60 hover:bg-[#D0E8F2] rounded-lg transition-colors border border-[#79A3B1]/20"
            >
              Solicitar Constancia
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-[#79A3B1]/30 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#D0E8F2] text-[#456268] flex items-center justify-center font-bold text-lg">
                🎓
              </div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-lg font-semibold text-[#456268]">
                Analíticos y Analíticos Parciales
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs text-slate-600 leading-relaxed">
                Gestión de certificados de estudios en trámite, pases de establecimiento y duplicados.
              </p>
            </div>
            <button 
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="w-full mt-4 py-2 px-3 text-xs font-semibold text-[#456268] bg-[#D0E8F2]/60 hover:bg-[#D0E8F2] rounded-lg transition-colors border border-[#79A3B1]/20"
            >
              Consultar Requisitos
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-[#79A3B1]/30 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#D0E8F2] text-[#456268] flex items-center justify-center font-bold text-lg">
                📝
              </div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-lg font-semibold text-[#456268]">
                Inscripciones y Mesas de Examen
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs text-slate-600 leading-relaxed">
                Fechas de mesas previas, equivalencias y formularios de matriculación para el ciclo lectivo.
              </p>
            </div>
            <button 
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="w-full mt-4 py-2 px-3 text-xs font-semibold text-[#456268] bg-[#D0E8F2]/60 hover:bg-[#D0E8F2] rounded-lg transition-colors border border-[#79A3B1]/20"
            >
              Ver Fechas
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}