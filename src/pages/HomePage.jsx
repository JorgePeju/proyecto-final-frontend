import {MapContainer} from 'react-leaflet'
import { MapImage } from "../components/MapImage"
import 'leaflet/dist/leaflet.css';


export const HomePage = () => {

    const crs = L.CRS.Simple;
    const center = [325, 350];
    const zoom = 0;
    const maxZoom = 4;

  return (

    <>

    <MapContainer crs={crs} center={center} zoom={zoom}  maxZoom={maxZoom}>
      <MapImage/>
    </MapContainer>
    
    </>

  )
}
