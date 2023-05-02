import { useState } from 'react';
import { consultation } from '../api/fetch';
import { useNavigate } from 'react-router-dom'

export const useFormModal = () => {

    const [showModal, setShowModal] = useState(false);
    const [formulario, setFormulario] = useState('');
    const navigateTo = useNavigate()

    const handleChange = ({ target }) => {

        const { name, value } = target

        if (formulario == '') return

        setFormulario({

            ...formulario,
            [name]: value
        })
    };

    const handleSubmit = async (e, selectedMarker) => {
        e.preventDefault();

        const updatedMarker = {
            ...selectedMarker,
            title: e.target.title.value,
            description: e.target.description.value,
            iconType: e.target.iconType.value,
        };

        const body = updatedMarker
        const method = 'POST'
        const url = 'http://localhost:3000/api/v1/entries'
        const request = await consultation(url, method, body)

        if (request.ok === true) {
            setShowModal(false);
            setFormulario({ title: '', description: '', iconType: '' });
            navigateTo('/')
        }


    };

    const openModal = (marker) => {
        setShowModal(true);
        setFormulario({
            title: marker.title,
            description: marker.description,
            iconType: marker.iconType,
        });
    };

    return {
        showModal,
        handleChange,
        handleSubmit,
        openModal
    };
};
