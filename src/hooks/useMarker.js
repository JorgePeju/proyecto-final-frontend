import L from "leaflet";
import { consultation } from '../api/fetch';

export const useMarker = (userId) => { 

  const addMarker = async (coordinates) => {
    
    const marker = {
      title: '',
      description: '',
      position: coordinates,
      user: userId,
      status: false, 
      iconType: 'Dungeon',
      icon: L.icon({
        iconSize: [40, 61],
        iconAnchor: [20, 25],
        popupAnchor: [2, -40],
        iconUrl: 'https://objmap.zeldamods.org/icons/mapicon_dungeon.svg', 
      }),
      
    };
    
    const body = marker
    const method = 'POST'
    const url = 'http://localhost:3000/api/v1/entries'
    const response = await consultation(url, method, body)
    
    console.log(response)
  };

  return [addMarker];
};




