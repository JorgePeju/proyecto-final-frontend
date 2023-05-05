import { useEffect, useState } from "react";
import { getUrl, getUsers } from '../helpers'

export const useFetchUsers = (entry) => {
   
    const [users, setUsers] = useState([]);
    const [refreshU, setRefreshUsers] = useState(false);
   // const [isLoading, setIsLoading] = useState(true);
    const url = getUrl(entry)

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