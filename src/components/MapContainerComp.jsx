import { MapContainer, Marker } from 'react-leaflet';
import { MapImage } from '../components/MapImage';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';

export const MapContainerComp = () => {
  const [markerCoordinates, setMarkerCoordinates] = useState([]);

  const handleCoordinatesChange = (coordinates) => {
    console.log(coordinates)
    setMarkerCoordinates([...markerCoordinates, coordinates]);
  };
   


  const bounds = [[0, 0], [6542 * 0.1, 7852 * 0.1]];
  const crs = L.CRS.Simple;
  const center = [325, 350];
  const zoom = 0;
  const maxZoom = 4;

  return (

    <MapContainer crs={crs} center={center} zoom={zoom} maxZoom={maxZoom} minZoom={0} doubleClickZoom={false}>

      <MapImage bounds={bounds} onCoordinatesChange={handleCoordinatesChange} />
      {markerCoordinates.map((coordinates, index) => (
        <Marker key={index} position={coordinates} />
      ))}
    </MapContainer>
  );
};
