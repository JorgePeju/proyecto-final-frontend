import { consultation } from '../api/fetch';

export const getUsers = async (url) => {
    
    const request = await consultation(url);

    const users = request.data.map((item) => ({

        id: item._id,
        username: item.username,
        email: item.email,
        role: item.role,
        date: item.date
        
    }));
   
    return users;
 
}