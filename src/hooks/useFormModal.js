import { useContext, useState } from 'react';
import { consultation } from '../api/fetch';
import { useNavigate } from 'react-router-dom'
import { MarkerContext } from '../context'
import {getIcon} from '../helpers'

export const useFormModal = () => {

    const [showModal, setShowModal] = useState(false);
    const [formulario, setFormulario] = useState('');
    const navigateTo = useNavigate()
    const { marker } = useContext(MarkerContext);

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
    
        const formMarker = {
            ...marker,
            title: e.target.title.value,
            description: e.target.description.value,
            iconType: e.target.iconType.value,
        };
        const newUrlIcon= getIcon(e.target.iconType.value, formMarker);
        
        const updatedMarker = {
            ...formMarker,
            icon: L.icon({
                iconSize: [40, 61],
                iconAnchor: [20, 25],
                popupAnchor: [2, -40],
                iconUrl: `${newUrlIcon}`, 
              }),
        }

        console.log(updatedMarker)
      //  const body = updatedMarker
        const method = 'POST'
        const url = 'http://localhost:3000/api/v1/entries'
        const request = await consultation(url, method, body)
        console.log(request)
        
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

    const closeModal = () => {
        setShowModal(false);
    };

    return {
        showModal,
        handleChange,
        handleSubmit,
        openModal,
        closeModal,
        setShowModal
    };
};