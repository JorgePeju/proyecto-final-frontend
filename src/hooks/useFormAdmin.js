import { useState } from "react";
import { getUrl } from '../helpers'

export const useFormAdmin = () => {
 
    const [formulario, setFormulario] = useState('');


    const handleChange = ({ target }) => {

        const { name, value } = target

        if (formulario == '') return

        setFormulario({
            ...formulario,
            [name]: value
        })
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const body = formEdit;
        const method = 'POST'
        const url = getUrl(`${form}`)
        const request = await consultation(url, method, body)

        if (request.ok === true) {


        }
    }

    return {

        handleChange,
        handleSubmit
    }
}
