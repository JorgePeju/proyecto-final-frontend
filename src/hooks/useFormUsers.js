import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { consultation } from '../api/fetch';
import { UserContext } from '../context/UserContext'
import { getUrl } from "../helpers/getUrl";

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
            const url = getUrl('auth', 'login')
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
            const url = getUrl('auth', 'register')
            console.log(url)
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