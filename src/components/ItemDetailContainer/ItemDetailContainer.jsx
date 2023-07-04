import React, { useContext, useState } from 'react';
import { CartContext } from '../../components/CartContext/CartContext'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
//import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContainer = ({ data }) => {
  const { cart, setCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  const [added, setAdded] = useState(false)


  const { agregarAlCarrito } = useContext(CartContext)
  //const buyProducts = () => {
  //console.log('Cantidad seleccionada:', cantidad); 
  //const productoConCantidad = { ...data, cantidad };

  //setCart([...cart, productoConCantidad]);
  //console.log('Producto agregado al carrito:', productoConCantidad);
  //};
  const onAdd = (count) => {
    agregarAlCarrito(product, count)
    setAdded(true)
  }

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="col-md-6">
        <div className='card text-center'>
          <img className='card-img-top img-fluid' src={data.img} alt={data.alt} />
          <div className='card-body'>
            <h3 className='card-title'>{data && data.product}</h3>
            <p className='card-text text-secondary py-3'>
              {data && data.description}
            </p>
            <div className='py-2'>
              <ul>
                <li className='py-2'>{data.feature1}</li>
                <li className='py-2'>{data.feature2}</li>
                <li className='py-2'>{data.feature3}</li>
                <li className='py-2'>{data.feature4}</li>
              </ul>
            </div>
            <button className="btn btn-outline-secondary rounded-0 btn-lg mt-2">${data.price}</button>
            <div className="d-flex justify-content-center align-items-center my-5 ">
              <h5 className=''>Cantidad:</h5>
              <select className="text-center px-2" aria-label="options" onChange={(e) => setCantidad(parseInt(e.target.value))}>
                <option selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="container text-center">
              {/*<button onClick={() => buyProducts()} className="btn btn-primary btnContacto1" type="button">Agregar al Carrito</button>*/}
              <ItemDetail onAdd={onAdd} added={added} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDetailContainer