export const getUrl = (entry, id) => {

    //* Función que se encarga de retornar la URL de la api para usarla en el fecth
    //* Consta de dos argumentos, el primero es obligato y es un string de lo que se quiere reclamar
    //* entries para los marcadores
    //* users para usuarios
    //* userEntries para borrar todas las entradas de un usuario
    //* auth para gestión de login

    //* el id será opcional y en caso de usarlos conectará con el id de la BBDD
    //* el ID para AUTH será obligatorio y será un string ya que existe login, register, logout y token que llevará a cada función necesaria
    
    let url = '';

    switch (entry) {

        case 'entries':

            url = `${import.meta.env.VITE_URL_BASE_API}/entries/`;
            break;

        case 'users':

            url = `${import.meta.env.VITE_URL_BASE_API}/users/`;
            break;

        case 'userEntries':

            url = `${import.meta.env.VITE_URL_BASE_API}/entries/users/`;
            break;

        case 'auth':

            url = `${import.meta.env.VITE_URL_BASE_API}/auth/`;
            break;

        default:

            throw new Error('URL no definida');
    }

    if (!id) {

        return url;

    } else {

        return `${url}${id}`
    }

}