import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/index';
import Header from './componentes/header';
import Footer from "./componentes/footer";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#D0E8F2' }} className="min-h-screen flex flex-col items-center p-0 md:p-6 font-sans">
        <div style={{ backgroundColor: '#D0E8F2' }} className="w-full max-w-7xl min-h-screen flex flex-col rounded-3xl shadow-2xl overflow-hidden border border-[#79A3B1]/30">  
          <Header />          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Inicio />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;