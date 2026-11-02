import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './pages/index'
import NuestraHistoria from './pages/NuestraHistoria'
import './App.css'

import Inicio from './pages/index';
import Header from './componentes/header';
import Footer from "./componentes/footer";
<<<<<<< HEAD
import Secretaria from './pages/secretaria';

=======
>>>>>>> 66817dce04ffc8d1cbc93b40aac0b5ae73f10822
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (

    <>
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/NuestraHistoria" element={<NuestraHistoria />} />
          </Routes>
     </BrowserRouter>
    </>
  )

    <BrowserRouter>
<<<<<<< HEAD
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/secretaria" element={<Secretaria />} />
      </Routes>
      <Footer />
=======
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
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </div>
>>>>>>> 66817dce04ffc8d1cbc93b40aac0b5ae73f10822
    </BrowserRouter>
  );

}

export default App;