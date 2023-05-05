import { useEffect, useState } from "react";
import { getUsers } from '../helpers'

export const useFetchUsers = (url) => {
   
    const [users, setUsers] = useState([]);
    const [refreshU, setRefreshUsers] = useState(false);
   // const [isLoading, setIsLoading] = useState(true);
   
    const consultUsers = async () => {

       // setIsLoading(true);
        const usersMongo = await getUsers(url);
        setUsers(usersMongo);
       // setIsLoading(false);
       
    };

    const refreshUsers = () => {
        setRefreshUsers(!refreshU);
      };

    useEffect(() => {
        consultUsers();
    }, [refreshU]);
  

    return {
        users,
       // isLoading,
       refreshUsers
    };
};