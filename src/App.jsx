import {MapContainer} from 'react-leaflet'
import { MapImage} from "./components/MapImage"
import 'leaflet/dist/leaflet.css';
import { CRS } from 'leaflet';

function App() {


  return (

    <>
    <MapContainer crs={CRS.Simple} maxZoom={1} minZoom={-4}>
     <MapImage/>
    </MapContainer>
    </>
    
  )
}

export default App
