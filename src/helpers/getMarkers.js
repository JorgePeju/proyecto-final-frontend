import { consultation } from '../api/fetch';

export const getMarker = async (url) => {

    const request = await consultation(url);
    const marker = request.data.map((item) => ({

        id: item._id,
        title: item.title,
        description: item.description,
        position: item.position,
        icon: item.icon,
        iconType: item.iconType,
        status: item.status,
        userId: item.user._id,
        userRole: item.user.role,
        userEmail: item.user.email,
        userUsername: item.user.email,
        userDate: item.user.date
        
    }));

    return marker;

}