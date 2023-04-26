import {MapContainer} from 'react-leaflet'
import { MapImage} from "./components/MapImage"
import 'leaflet/dist/leaflet.css';


function App() {


  return (

    <>
    <MapContainer center={[50,50]} zoom={-100}>
     <MapImage/>
    </MapContainer>
    </>
    
  )
}

export default App
