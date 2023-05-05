export const getUrl = (entry, id) => {

    let url = '';

    switch (entry) {

        case 'marker':

            url = 'http://localhost:3000/api/v1/entries';
            break;

        case 'user':

            url = 'http://localhost:3000/api/v1/users';
            break;

        case 'auth':

            url = 'http://localhost:3000/api/v1/auth/';
            break;

        default:

            throw new Error('URL no definida');
    }

    if (!id) {
        return url;

    } else {

        return `${url}/${id}`
    }

}