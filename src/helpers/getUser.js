import { consultation } from '../api/fetch';



export const getUser = async (url, method, body) => {
    
    const request = await consultation(url, method, body);
  
   
 
}