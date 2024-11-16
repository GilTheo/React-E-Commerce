import React from "react"
import { object, string } from "yup"

const userSchema = object({
    fullname: string()
        .required("El campo nombre completo es requerido"),
    phone: string()
        .required("El campo teléfono es requerido")
        .min(8, "El número de teléfono debe tener al menos 8 dígitos."),
    email: string()
        .email("Asegúrate de que el correo electrónico tenga un formato válido con @.")
        .required("El campo email es requerido")
});

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return {status: "success"}
    } catch (error) {
        return {status: "error", message: error.message}
    }
}

export default validateForm