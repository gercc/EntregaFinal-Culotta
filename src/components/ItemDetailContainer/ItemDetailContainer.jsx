import * as React from 'react';
import './ItemDetailContainer.css'

const ItemDetailContainer = ({ data }) => {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="col-md-6">
        <div className='card text-center'>
          <img className='card-img-top img-fluid' src={data.image} alt={data.alt} />
          <div className='card-body'>
            <h3 className='card-title'>{data && data.name}</h3>
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
            <button className="btn btn-outline-secondary rounded-0 btn-lg mt-2">{data.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDetailContainer