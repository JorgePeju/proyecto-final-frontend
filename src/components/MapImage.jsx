import { useEffect, useState } from 'react';
import { storage } from '../helpers/firebaseStore'
import { ref, getDownloadURL  } from "firebase/storage";
import { ImageOverlay } from 'react-leaflet';

export const MapImage = ({bounds}) => {

    const [imageUrl, setImageUrl] = useState('');
   const imageRef = ref(storage, 'Mapitshjpeg.jpg');
 
    const loadImage = async () => {

        const url = await getDownloadURL(imageRef);
        setImageUrl(url);

    };

    useEffect(() => {
        loadImage();
    }, []);

    return (
        <>
            <ImageOverlay url={imageUrl} bounds={bounds} />

        </>
    );
}
