import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'


const CartTotal = () => {
    const { cart } = useContext(CartContext)

    const total = cart.reduce((acumulativo, elemento) => acumulativo + elemento.price, 0)
  return (
    <div>
        <h3>
            Total a pagar: ${total}
        </h3>
    </div>
  )
}

export default CartTotal