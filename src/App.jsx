import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './styles.css';


export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Gracias por visitar nuestra tienda." />
    </>
  );
}
