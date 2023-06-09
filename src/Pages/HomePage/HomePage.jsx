import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const HomePage = () => {
  return (
    <div>
      <h1 style={{textAlign: "center", paddingTop: "50px", paddingBottom: "15px"}}>Bienvenido a Tiki Store</h1>
    <ItemListContainer />
    </div>
  )
}

export default HomePage