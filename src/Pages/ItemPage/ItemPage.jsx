import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig'

const ItemPage = () => {
  const [producto, setProducto] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const getProducto = async () => {
      const q = query(collection(db, "products"), where(documentId(), "==", id));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id })
      });
      setProducto(docs);
    }
    getProducto()
  }, [id]);


  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "55px", paddingBottom: "30px" }}>
        Detalles del producto
      </h1>
      {producto.map((producto) => (
        <div className='container d-flex justify-content-center align-items-center'>
          <div className='col-md-8 my-5' key={producto.id}>
            <ItemDetailContainer data={producto} key={producto.id} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemPage