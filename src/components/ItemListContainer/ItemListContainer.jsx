import React, { useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { CartContext } from '../CartContext/CartContext'
import './ItemListContainer.css'


const ItemListContainer = () => {

  const { productos } = useContext(CartContext)


  //const [productos, setProductos] = useState([]);

  //useEffect(() => {
  //setProductos(productosData);
  //}, []);

  //useEffect(() => {
  //const getProductos = async () => {
  //const q = query(collection(db, "products"));
  //const querySnapshot = await getDocs(q);
  //const docs = [];
  //querySnapshot.forEach((doc) => {
  //docs.push({...doc.data(), id: doc.id })
  //});
  //setProductos(docs);
  //}
  //getProductos()
  //}, []);


  return (
    <div>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
          {productos.map((producto) => (
            <div className='col-md-4 my-4' key={producto.id}>
              <ItemDetail data={producto} url={`/item/${producto.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;