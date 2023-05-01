import { consultation } from '../api/fetch';

export const getMarker = async (url) => {
    
    const request = await consultation(url);
   
    const marker = request.data.map((item) => ({

        id: item._id,
        user: item.user,
        title: item.title,
        description: item.description,
        position: item.position,
        icon: item.icon,
        iconType: item.iconType,
        status: item.status,
        
    }));
 
    return marker;
 
}