import "leaflet/dist/leaflet.css";
import { useContext, useEffect} from "react";
import { MapContainer } from "react-leaflet";
import { MapImage, Markers, MarkerForm } from "./map";
import { useMarker, useFetchMarkers, useFormModal } from "../hooks";
import { UserContext, MarkerContext } from '../context'
import { bounds, center, crs, maxZoom, zoom } from '../helpers'
import { UserPanel } from "./user/UserPanel";

export const MapContainerComp = () => {

  const { user } = useContext(UserContext);
  const { marker } = useContext(MarkerContext);
  const [addMarker] = useMarker(user?._id);
  const {markers, refreshMarkers} = useFetchMarkers('http://localhost:3000/api/v1/entries');
  const { showModal, handleChange, handleSubmit, openModal, closeModal } = useFormModal(refreshMarkers);

  const handleCoordinatesChange = (coordinates) => {
    //  if (!user?._id || showModal === true) return
    if (showModal === true) return
    addMarker(coordinates);
  };

 

  const openModalEffect = () => {
    if (marker && !showModal) {
      openModal(marker);
    }
  }
  useEffect(() => {
    openModalEffect()
  }, [showModal, openModal]);


  return (
    <>
    
    <MapContainer crs={crs} center={center} zoom={zoom} maxZoom={maxZoom} minZoom={0} doubleClickZoom={false} >
   


    <MapImage bounds={bounds} onCoordinatesChange={handleCoordinatesChange} />
      <Markers markerMongo={markers} markerData={marker} />
      <MarkerForm showModal={showModal} handleChange={handleChange} handleSubmit={handleSubmit} closeModal={closeModal} />
    
    </MapContainer>
   
    </>
  )
}

