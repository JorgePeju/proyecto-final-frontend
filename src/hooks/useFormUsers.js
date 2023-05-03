import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { consultation } from '../api/fetch';
import { UserContext } from '../context/UserContext'

export const useForm = (estadoInicial) => {

    const [formulario, setFormulario] = useState(estadoInicial);
    const navigateTo = useNavigate()

    const { setUser } = useContext(UserContext);

    const handleSubmit = async (ev) => {

        ev.preventDefault()

        if (!ev.target.username) {

            const body = {
                email: ev.target.email.value,
                password: ev.target.password.value
            }

            const method = 'POST'
            const url = 'http://localhost:3000/api/v1/auth/login'
            const request = await consultation(url, method, body)
            
            const userMongo = request.user
            const token = request.token

            if (request.ok === true) {
                setUser(userMongo)
                navigateTo('/')
            }

        } else {

            const body = {
                username: ev.target.username.value,
                email: ev.target.email.value,
                password: ev.target.password.value,
                date: new Date()
            }

            const method = 'POST'
            const url = 'http://localhost:3000/api/v1/auth/register'

            const request = await consultation(url, method, body)
            const userMongo = request.user
            const token = request.token

            if (request.ok === true) {
                setUser(userMongo)
                navigateTo('/')
            }
        }

    }

    const handleChange = ({ target }) => {

        const { name, value } = target

        if (formulario == '') return

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return {
        handleChange,
        handleSubmit,
    }

}