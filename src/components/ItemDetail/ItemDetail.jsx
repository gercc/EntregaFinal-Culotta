import * as React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ data, url, alt, onAdd, added }) => {


  return (
    <div className='card text-center'>
      <img className='card-img-top img-fluid' src={data.img} alt={alt} />
      <div className='card-body'>
        <h3 className='card-title'>{data && data.product}</h3>
        <p className='card-text text-secondary'>
          {data && data.description}
        </p>
        <a href={url}>
          <button className="btn btn-outline-secondary rounded-0">Ver Más</button>
        </a>
        <div>
          {added ? <Link to="/cart">Ir al carrito</Link> : <ItemCount inicial={1} onAdd={onAdd} />}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail