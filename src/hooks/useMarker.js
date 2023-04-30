import { useState } from "react";
import L from "leaflet";

export const useMarker = () => {
  
  const [markerData, setMarkerData] = useState([]);
 
  const addMarker = (coordinates) => {

    const marker = {

      position: coordinates,

      icon: L.icon({
        iconSize: [40, 61],
        iconAnchor: [20, 25],
        popupAnchor: [2, -40],
        iconUrl: "https://objmap.zeldamods.org/icons/mapicon_dungeon.svg",
      }),

    };
        console.log(coordinates)
    setMarkerData((prevMarkerData) => [...prevMarkerData, marker]);
    
  };

  return [markerData, addMarker];
};


