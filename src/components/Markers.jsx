import {Marker} from 'react-leaflet'

export const Markers = ({markerData}) => {
  return (
    <>
         {markerData.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={marker.icon} />
      ))}
    </>
  )
}
