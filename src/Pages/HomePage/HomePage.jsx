import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import PokeUser from '../../components/PokeUser/PokeUser';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    <ItemListContainer />
    <PokeUser />
    </div>
  )
}

export default HomePage