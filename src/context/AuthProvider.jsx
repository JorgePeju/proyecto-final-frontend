import { useState } from 'react';
import { AuthContetx } from './';

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState();
    
    return (

        <AuthContetx.Provider value={{auth, setAuth}}>

            { children }
            
        </AuthContetx.Provider>

    );
}
