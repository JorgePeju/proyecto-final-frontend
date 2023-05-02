import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useContext, useState, useEffect } from "react";
import { MapContainer } from "react-leaflet";
import { MapImage, Markers, MarkerForm } from "../components";
import { useMarker, useFetchMarkers, useFormModal } from "../hooks";
import { UserContext } from '../auth/context/UserContext'

export const MapContainerComp = () => {

  const { user } = useContext(UserContext);
  const {showModal,handleChange, handleSubmit,openModal, closeModal } = useFormModal();
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markerData, addMarker] = useMarker(user?._id );
 
  const request = useFetchMarkers('http://localhost:3000/api/v1/entries');
  const markerMongo = request.marker

  const bounds = [[0, 0], [6542 * 0.1, 7852 * 0.1]];
  const crs = L.CRS.Simple;
  const center = [325, 350];
  const zoom = 0;
  const maxZoom = 4;

  const handleCoordinatesChange = (coordinates) => {
    // if (!user?._id || showModal === true) return
    if (showModal === true) return
    addMarker(coordinates);
  };
  

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    
  };
  useEffect(() => {
    if (selectedMarker) {
      openModal(selectedMarker)
    }
  }, [selectedMarker]);

  return (
    <MapContainer crs={crs} center={center} zoom={zoom} maxZoom={maxZoom} minZoom={0} doubleClickZoom={false} >
      <MapImage bounds={bounds} onCoordinatesChange={handleCoordinatesChange} />
      <Markers markerMongo={markerMongo} markerData={markerData} onMarkerClick={handleMarkerClick} />
      <MarkerForm selectedMarker={selectedMarker} showModal={showModal} handleChange={handleChange} handleSubmit={handleSubmit} closeModal={closeModal} />
    </MapContainer>
  )
}

