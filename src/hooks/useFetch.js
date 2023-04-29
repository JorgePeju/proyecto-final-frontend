import { useEffect, useState } from "react";
import { getMarker } from '../helpers/getMarker'



export const useFetch = (url) => {

    const [marker, setMarker] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    const getMaker = async () => {
        
        const markerItem = await getMarker(url);

        setMarker(markerItem);
        setIsLoading(false)
    };

    useEffect(() => {
       
        getMaker();

    }, []);

    return {

        marker,
        isLoading

    };
};