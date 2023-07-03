import * as React from 'react';



const ItemDetail = ({ data, url, alt }) => {
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
      </div>
    </div>
  );
}

export default ItemDetail