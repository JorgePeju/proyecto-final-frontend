import { MapContainer} from "react-leaflet";
import { MapImage } from "../components/MapImage";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useMarker, useFetchMarkers} from "../hooks";
import { Markers } from "./Markers";
import { UserContext } from '../auth/context/UserContext'
import { useContext } from "react";

export const MapContainerComp = () => {

  const { user } = useContext(UserContext);

  const [markerData, addMarker]= useMarker(user?._id); 

  const request = useFetchMarkers('http://localhost:3000/api/v1/entries');
  const marker = request.marker

  const handleCoordinatesChange = (coordinates) => {
    // if (!user?._id) return
    addMarker(coordinates); 
  };

  const bounds = [[0, 0], [6542 * 0.1, 7852 * 0.1]];
  const crs = L.CRS.Simple;
  const center = [325, 350];
  const zoom = 0;
  const maxZoom = 4;

  return (
    <MapContainer crs={crs} center={center} zoom={zoom} maxZoom={maxZoom} minZoom={0} doubleClickZoom={false} >
      <MapImage bounds={bounds} onCoordinatesChange={handleCoordinatesChange} />
  
        <Markers marker={marker} markerData={markerData}/>
      
    </MapContainer>
 
  )}
