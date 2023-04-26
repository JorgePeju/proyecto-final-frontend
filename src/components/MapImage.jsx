import { useEffect, useState } from 'react';
import { storage } from '../helpers/firebaseStore'
import { ref, getDownloadURL } from "firebase/storage";

export const MapImage = () => {

    const [imageUrl, setImageUrl] = useState('');
    
    const imageRef = ref(storage, 'mapa/BigMap.png');

    const loadImage = async () => {

        const url = await getDownloadURL(imageRef);
        setImageUrl(url);

    };

    useEffect(() => {
        loadImage();
    }, []);

    return (
        <>
            <div>
                <img src={imageUrl} alt="Big Map" />
            </div>
        </>
    );
}
