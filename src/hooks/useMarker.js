import L from "leaflet";
import { useContext} from "react";
import {MarkerContext} from '../context/MarkerContext'

export const useMarker = (userId) => { 

  const { setMarker } = useContext(MarkerContext);

  const addMarker = async (coordinates) => {
    
    const newMarker = {
      title: '',
      description: '',
      position: coordinates,
      user: userId,
      status: false, 
      iconType: '',
      icon: L.icon({
        iconSize: [40, 61],
        iconAnchor: [20, 25],
        popupAnchor: [2, -40],
        iconUrl: 'https://objmap.zeldamods.org/icons/mapicon_dungeon.svg', 
      }),
      
    };
  
    setMarker(newMarker);

  };

  return [addMarker]
  
};




