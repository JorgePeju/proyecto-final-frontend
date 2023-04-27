import { useEffect, useState } from 'react';
import { storage } from '../helpers/firebaseStore'
import { ref, getDownloadURL } from "firebase/storage";
import { ImageOverlay } from 'react-leaflet';

export const MapImage = () => {

    const [imageUrl, setImageUrl] = useState('');
    const imageRef = ref(storage, 'Mapitshjpeg.jpg');

    // let map = L.map(imageRef, {
    //     crs: L.CRS.Simple
    // });
 
    const loadImage = async () => {

        const url = await getDownloadURL(imageRef);
        setImageUrl(url);

    };

    useEffect(() => {
        loadImage();
    }, []);

    const height = 6542;
    const width = 7852;
    const bounds = [ [0, 0],[height * 0.1, width * 0.1]];

    return (
        <>
            <ImageOverlay url={imageUrl} bounds={bounds} />

        </>
    );
}
