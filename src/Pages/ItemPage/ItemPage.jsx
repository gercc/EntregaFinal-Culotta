import React from 'react'
import { useParams } from 'react-router-dom'
import productosData from './../../components/productosData/productos.json'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'

const ItemPage = () => {
  let { id } = useParams();
  
  const productoEncontrado = productosData.find((producto) => producto.id === parseInt(id));

  return (
    <div>
      <h1 style={{textAlign: "center", paddingTop: "55px", paddingBottom: "30px"}}>
        Detalles del producto
      </h1>
      {productoEncontrado && <ItemDetailContainer data={productoEncontrado} />}
    </div>
  )
}

export default ItemPage