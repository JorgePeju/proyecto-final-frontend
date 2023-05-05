import { consultation } from '../api/fetch';

/**
 * Obtiene la información del marcador a través de la API.
 *
 * @param {string} url - La URL de la API para obtener los datos del marcador.
 * @returns {Promise<Array<Object>>} - Un array de objetos que contienen información sobre los marcadores.
 */
export const getMarker = async (url) => {

    const request = await consultation(url);
    const marker = request.data.map((item) => ({

        id: item._id,
        title: item.title,
        description: item.description,
        position: item.position,
        icon: item.icon,
        iconType: item.iconType,
        status: item.status,
        userId: item.user._id,
        userRole: item.user.role,
        userEmail: item.user.email,
        userUsername: item.user.email,
        userDate: item.user.date
        
    }));

    return marker;

}