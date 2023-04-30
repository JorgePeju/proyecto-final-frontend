import { useEffect, useState } from "react";
import { getUser} from '../helpers/getUser'



export const useFetchUsers = (url, method, body) => {
   
    const [user, setUser] = useState([]);
    
    const consultUsers = async () => {
        
        console.log(url, method, body)
        const oneUser = await getUser(url, method, body);
        
        setUser(oneUser);
    
    };

    useEffect(() => {
       
        consultUsers();

    }, []);

    return {

        user,
        isLoading

    };
};