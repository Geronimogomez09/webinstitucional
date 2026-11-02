import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/index';
import Header from './componentes/header';
import Footer from "./componentes/footer";
import Secretaria from './pages/secretaria';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/secretaria" element={<Secretaria />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;