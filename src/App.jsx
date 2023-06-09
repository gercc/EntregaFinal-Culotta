import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import CelularesPage from './Pages/CelularesPage/CeluraresPage';
import ElectrodomesticosPage from './Pages/ElectrodomesticosPage/ElectrodomesticosPage';
import MonitoresPage from './Pages/MonitoresPage/MonitoresPage';
import TvPage from './Pages/TvPage/TvPage';
import ItemPage from './Pages/ItemPage/ItemPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/NavBar/NavBar';


export default function App() {
  return (
    <Router>
      <div className='App'>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/celulares" element={<CelularesPage />} />
        <Route path="/electrodomesticos" element={<ElectrodomesticosPage />} />
        <Route path="/monitores" element={<MonitoresPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
      </Routes>
      </div>
    </Router>
  );
}
