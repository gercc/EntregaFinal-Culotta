import React, { useContext } from 'react';
import { CartContext } from '../../components/CartContext/CartContext'

const CartElements = () => {
  const { cart, setCart } = useContext(CartContext)

  console.log('Carrito:', cart); // Ver si funciona el carrito

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(producto => producto.id !== productId));
  };

  return cart.map((producto, index) => {
    return (
      <div className='col-md-4 my-4 card text-center' key={index}>
        <img className='card-img-top img-fluid' src={producto.img} alt={producto.alt} />
        <div className='card-body'>
          <h3 className='card-title'>{producto && producto.product}</h3>
          <p className='card-text text-secondary'>
            {producto && producto.description}
          </p>
          <h5>Cantidad: {producto.cantidad}</h5>
          <h5 className="rounded-0 mt-2">${producto.price}</h5>
          <button onClick={() => handleRemoveFromCart(producto.id)} className="btn btn-danger">Eliminar producto</button>
          <div className="text-center mt-4">
          </div>
        </div>
      </div>
    )
  })
}

export default CartElements