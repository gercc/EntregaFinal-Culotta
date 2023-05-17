import React from 'react'
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='item-list-container'>
        <h1>
            Bienvenido a Tiki Store
        </h1>
        <h2>
            {greeting}
        </h2>
    </div>
  )
}

export default ItemListContainer