import { Marker } from 'react-leaflet';
import L from 'leaflet';

export const Markers = ({ marker }) => {
  
  const filteredMarkers = marker.filter((marker) => marker.status === true);

  return (
    <>
      {filteredMarkers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={L.icon(marker.icon.options)} />
      ))}
    </>
  );
};


