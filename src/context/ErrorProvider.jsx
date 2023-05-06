import { useState } from 'react';
import { ErrorContetx } from './';

export const ErrorProvider = ({ children }) => {

    const [error, setError] = useState();
    
    return (

        <ErrorContetx.Provider value={{error, setError}}>

            { children }
            
        </ErrorContetx.Provider>

    );
}