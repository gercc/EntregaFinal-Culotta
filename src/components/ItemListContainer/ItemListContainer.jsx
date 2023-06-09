import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import productosData from '../productosData/productos.json';
import './ItemListContainer.css'


const ItemListContainer = ({ }) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(productosData);
  }, []);

  return (
    <div>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
          {productos.map((producto) => (
            <div className='col-md-4 my-4' key={producto.name}>
              <ItemDetail data={producto} image={producto.image} url={`/item/${producto.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;