import React from "react"
import FormCheckout from "./FormCheckout.jsx"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import db from "../../db/db.js"
import validateForm from "../../utils/validateForm.js"
import "./checkout.css"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  })
  const [idOrder, setIdOrder] = useState(null)
  const { cart, totalPrice, deleteCart } = useContext(CartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault()

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    }

    try {
      const response = await validateForm(dataForm)
      if (response.status === "error") throw new Error(response.message)
      console.log("Validacion exitosa")
      uploadOrder(order)
    } catch (error) {
      alert(error.message)
    }
  }

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
      .then((response) => setIdOrder(response.id))
      .catch((error) => console.log(error))
      .finally(() => {
        deleteCart()
      })
  }

  return (
    <div>
      {idOrder === null ? (
        <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
      ) : (
        <div className="order-container">
          <h2>Su orden se subio correctamente!😁</h2>
          <p>Porfavor guarde su nro de seguimiento: {idOrder}</p>
          <Link className="order-btn" to="/">
            Volver al inicio
          </Link>
        </div>
      )}
    </div>
  )
}

export default Checkout
