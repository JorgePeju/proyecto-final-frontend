import { consultation } from '../api/fetch';



export const getMarker = async (url) => {
    
    const request = await consultation(url);

 
}
