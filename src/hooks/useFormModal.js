import { useContext, useState } from 'react';
import { consultation } from '../api/fetch';
import { MarkerContext } from '../context'
import {getIcon} from '../helpers'

export const useFormModal = (refreshMarkers) => {

    const [showModal, setShowModal] = useState(false);
    const [formulario, setFormulario] = useState('');
    const { marker, setMarker } = useContext(MarkerContext);

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

        const body = updatedMarker;
        const method = 'POST'
        const url = 'http://localhost:3000/api/v1/entries'
        const request = await consultation(url, method, body)
       
        if (request.ok === true) {
            setMarker('');
            resetForm();
            refreshMarkers();
            closeModal();  
        }
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        resetForm()
    };

    const resetForm = () => {
        setFormulario({
          title: '',
          description: '',
          iconType: '',
        });
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