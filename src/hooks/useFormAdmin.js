import { useContext, useState } from "react";
import { getUrl } from '../helpers'
import { useNavigate } from 'react-router-dom'
import { ErrorContetx } from '../context'
import { consultation } from "../api/fetch";

export const useFormAdmin = (id, refreshMarkers) => {
  
    const [formulario, setFormulario] = useState('');
    const { setError } = useContext(ErrorContetx)
    const navigateTo = useNavigate()

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
       
        const formEdit= {
            title: e.target.title.value,
            description: e.target.description.value,
            status: e.target.status.value,
            iconType: e.target.iconType.value,
        
        }

        

        const body = formEdit;
        const method = 'PUT'
        const url = getUrl('entries', id)
     
        const request = await consultation(url, method, body)
      
        if (request.ok === true) {
            refreshMarkers()
            navigateTo('/admin/entries')

        } else {
            
            setError(request.errors)
        }
    }

    return {

        handleChange,
        handleSubmit
    }
}
