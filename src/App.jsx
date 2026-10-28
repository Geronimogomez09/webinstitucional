import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/index'
import NuestraHistoria from './pages/NuestraHistoria'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
}

export default App
