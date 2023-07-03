import React, { createContext, useState, useEffect, } from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const getProductos = async () => {
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
    };
    getProductos();
  }, []);



  return (
    <CartContext.Provider value={{ productos, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;