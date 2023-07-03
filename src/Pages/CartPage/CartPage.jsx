import React, { useState, useContext } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig'
import TextField from '@mui/material/TextField';
import PurchaseAlert from '../../components/PurchaseAlert/PurchaseAlert'
import CartElements from './CartElements'
import CartTotal from '../../components/CartTotal/CartTotal'
import { CartContext } from '../../components/CartContext/CartContext'
import './CartPage.css';


const initialState = {
  nombre: "",
  apellido: "",
  dni: "",
  direccion: "",
  provincia: "",
  codigoPostal: "",
}

const CartPage = () => {
  const [values, setValues] = useState(initialState);

  const [idCompra, setIdCompra] = useState("")

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "compras"), {
      values,
    });

    setIdCompra(docRef.id);
    setValues(initialState);

  }

  const { cart } = useContext(CartContext)

  return cart.length > 0 ? (
    <div className='container h-100'>
      <h1 className='text-center my-5'>Carrito de compras</h1>
      <div>
        <CartElements name="producto" />
        <CartTotal />
      </div>
      <div className="container w-50">
        <form className="formShadow" onSubmit={onSubmit}>
          <div className="">
            <TextField fullWidth label="Nombre" id="fullWidth" margin="normal" name="nombre" value={values.nombre} onChange={handleOnChange} required />
          </div>
          <div className="">
            <TextField fullWidth label="Apellido" id="fullWidth" margin="normal" name="apellido" value={values.apellido} onChange={handleOnChange} required />
          </div>
          <div className="">
            <TextField fullWidth label="DNI" id="fullWidth" margin="normal" name="dni" value={values.dni} onChange={handleOnChange} required />
          </div>
          <div className="">
            <TextField fullWidth label="Direccion" id="fullWidth" margin="normal" name="direccion" value={values.direccion} onChange={handleOnChange} required />
          </div>
          <div className="">
            <TextField fullWidth label="Provincia" id="fullWidth" margin="normal" name="provincia" value={values.provincia} onChange={handleOnChange} required />
          </div>
          <div className="">
            <TextField fullWidth label="Codigo Postal" id="fullWidth" margin="normal" name="codigoPostal" value={values.codigoPostal} onChange={handleOnChange} required />
          </div>
          <div className="container text-center pt-2 my-4">
            <input className="btn btn-primary btnContacto" type="submit" value="ENVIAR"></input>
          </div>
        </form>
        {idCompra && <PurchaseAlert idCompra={idCompra} />}
      </div>
    </div>
  ): (
    <h2 className='text-center my-5'>Su carrito esta vacio</h2>
  )
}

export default CartPage