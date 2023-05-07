import { useContext } from 'react';
import { setLocal, getUrl } from '../helpers'
import { consultation } from '../api/fetch'
import { UserContext } from '../context';

export const useLogout = () => {

    const { setUser} = useContext(UserContext);

    const handleLogout = async () => {

        const url = getUrl('auth', 'logout');
        console.log(url)
        const response = await consultation(url);

        if (response.ok) {

            setLocal(null);
            setUser(null);

        } else {

            console.error('Error al cerrar sesión:', response.error);
        }
    };


    return {
        handleLogout
    }
}
