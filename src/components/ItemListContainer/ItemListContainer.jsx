import React, { useEffect, useState } from 'react';
import '../ItemListContainer/ItemListContainer.css';
import axios from 'axios';
import PokeUser from '../PokeUser/PokeUser'

const ItemListContainer = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users/").then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h1>Lista de Pokemons</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <PokeUser data={user} />
          </div>
        )
      })}
    </div>
  );
}

export default ItemListContainer;