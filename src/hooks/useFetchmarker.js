import { useEffect, useState } from "react";
import {getMarker} from '../helpers/getMarkers';

export const useFetchMarkers = (url) => {
   
    const [markers, setMarker] = useState([]);
    const [refresh, setRefresh] = useState(false);
   // const [isLoading, setIsLoading] = useState(true);
  
    const consultMarkers = async () => {

       // setIsLoading(true);
        const markerMongo = await getMarker(url);
        setMarker(markerMongo);
       // setIsLoading(false);
       
    };

    
    const refreshMarkers = () => {
      setRefresh(!refresh);
    };
 
    useEffect(() => {
        consultMarkers();
    }, [refresh]);
  
    return {
        markers,
       // isLoading,
       refreshMarkers
    };
};
