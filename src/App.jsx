import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/index';
import Historia from './pages/Historia';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/NuestraHistoria" element={<Historia />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;