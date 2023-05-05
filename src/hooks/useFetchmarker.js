import { useEffect, useState } from "react";
import {getMarker} from '../helpers/getMarkers';
import { getUrl } from "../helpers";

export const useFetchMarkers = (entry) => {
   
    const [markers, setMarker] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const url = getUrl(entry)

    const consultMarkers = async () => {

        setIsLoading(true);
        const markerMongo = await getMarker(url);
        setMarker(markerMongo);
        setIsLoading(false);
       
    };

    const refreshMarkers = () => {
      setRefresh(!refresh);
    };
 
    useEffect(() => {
        consultMarkers();
    }, [refresh]);

    //* Este valor viene desde el useFormModal y hace una llamada a la api cuando el formulario se envía
  
    return {
        markers,
       isLoading,
       refreshMarkers
    };
};
