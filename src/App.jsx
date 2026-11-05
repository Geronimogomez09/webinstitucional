import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/index';
import NuestraHistoria from './pages/NuestraHistoria';
import Novedades from "./pages/Novedades";
import NovedadDetalle from "./pages/NovedadDetalle";
import Header from './componentes/header';
import Footer from './componentes/footer';
import ContactosyUbi from './pages/ContactosyUbi'; 

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#D0E8F2' }} className="min-h-screen flex flex-col items-center p-0 md:p-6 font-sans">
        <div 
          style={{ backgroundColor: '#FCF8EC' }} 
          className="w-full max-w-7xl min-h-[92vh] flex flex-col justify-between rounded-3xl shadow-2xl overflow-hidden border border-[#79A3B1]/30"
        >
          <div>
            <Header />
            <main className="py-6">
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/NuestraHistoria" element={<NuestraHistoria />} />
                <Route path="/novedades" element={<Novedades />} />
                <Route path="/novedades/:id" element={<NovedadDetalle />} />
                <Route path="/contacto" element={<ContactosyUbi />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;