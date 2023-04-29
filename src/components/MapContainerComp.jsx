import {MapContainer} from 'react-leaflet'
import { MapImage } from "../components/MapImage"
import 'leaflet/dist/leaflet.css';

export const MapContainerComp = () => {

    const bounds = [ [0, 0],[6542 *0.1 , 7852 * 0.1]];
    const crs = L.CRS.Simple;
    const center = [325, 350];
    const zoom = 0;
    const maxZoom = 4;
 
  return (


    <>
    <MapContainer crs={crs} center={center} zoom={zoom}  maxZoom={maxZoom} minZoom={0}>
      <MapImage bounds={bounds}/>
    </MapContainer>
    </>
  )
}
