import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

const ItemCount = ({ inicial, onAdd }) => {
    const [contador, setContador] = useState(inicial);
  
    const incrementar = () => {
      setContador(contador + 1);
    };
  
    const decrementar = () => {
      if (contador > inicial) {
        setContador(contador - 1);
      }
    };
  
    return (
      <div>
        <div>Cantidad: {contador}</div>
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
        <div>
        <button onClick={() => onAdd(contador)} className="btn btn-primary btnContacto1" type="button">Agregar al Carrito</button>
        {/*<button onClick={agregarAlCarrito} >Agregar al Carrito</button>*/ }
        </div>
      </div>
    );
  };
  
  export default ItemCount;