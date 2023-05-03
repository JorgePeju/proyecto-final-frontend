import "leaflet/dist/leaflet.css";
import { useContext, useEffect } from "react";
import { MapContainer } from "react-leaflet";
import { MapImage, Markers, MarkerForm } from "../components";
import { useMarker,useFetchMarkers, useFormModal } from "../hooks";
import { UserContext, MarkerContext } from '../context'
import { bounds, center, crs, maxZoom, zoom } from '../helpers'

export const MapContainerComp = () => {

  const { user } = useContext(UserContext);
  const { marker } = useContext(MarkerContext);
  const { showModal, handleChange, handleSubmit,openModal, closeModal } = useFormModal();
  const [ addMarker ] = useMarker();
  const request = useFetchMarkers('http://localhost:3000/api/v1/entries');
  const markerMongo = request.marker

  const handleCoordinatesChange = (coordinates) => {
    if (!user?._id || showModal === true) return
    addMarker(coordinates);
  };
  
  const openModalEffect = ()=> {
    if (Array.isArray(marker) && !showModal) {
      openModal(marker);
    }
  }
   useEffect(() => {
    openModalEffect()
}, [showModal, openModal]);

  return (
    <MapContainer crs={crs} center={center} zoom={zoom} maxZoom={maxZoom} minZoom={0} doubleClickZoom={false} >
      <MapImage bounds={bounds} onCoordinatesChange={handleCoordinatesChange} />
      <Markers markerMongo={markerMongo} markerData={marker} />
      <MarkerForm markerData={marker} showModal={showModal} handleChange={handleChange} handleSubmit={handleSubmit} closeModal={closeModal} />
    </MapContainer>
  )
}

