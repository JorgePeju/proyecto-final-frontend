import { useEffect, useState } from "react";
import {getMarker} from '../helpers/getMarkers'

export const useFetchMarkers = (url) => {
   
    const [marker, setMarker] = useState([]);
   // const [isLoading, setIsLoading] = useState(true);
   
    const consultMarkers = async () => {

       // setIsLoading(true);
        const markerMongo = await getMarker(url);
        
        setMarker(markerMongo);
       
       // setIsLoading(false);
       
    };

    useEffect(() => {
        consultMarkers();
    }, []);
  

    return {
        marker,
       // isLoading
    };
};
