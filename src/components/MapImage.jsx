import { useEffect, useState } from 'react';
import { storage} from '../helpers';
import { ref, getDownloadURL } from 'firebase/storage';
import { ImageOverlay } from 'react-leaflet';
import { MapClickHandler } from './MapClickHandler';

export const MapImage = ({ bounds, onCoordinatesChange }) => {
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
      <MapClickHandler onCoordinatesChange={onCoordinatesChange} />
      <ImageOverlay url={imageUrl} bounds={bounds} />
    </>
  );
};