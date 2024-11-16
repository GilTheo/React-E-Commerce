import React from "react"

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div>
      <h2 className="form-title">Checkout</h2>
      <form onSubmit={handleSubmitForm}>
        <input placeholder="Nombre Completo" type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />

        <input placeholder="Telefono" type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

        <input placeholder="Email" type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />

        <button className="form-btn" type="submit">
          Enviar mi orden
        </button>
      </form>
    </div>
  )
}

export default FormCheckout
