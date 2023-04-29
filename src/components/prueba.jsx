import React, { Component } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

function MyComponent({ saveMarkers }) {
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      L.marker([lat, lng], { icon }).addTo(map);
      saveMarkers([lat, lng]);
    }
  });
  return null;
}

export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [[40.7, -74]],
      data: []
    };
  }

  saveMarkers = (newMarkerCoords) => {
    const data = [...this.state.data, newMarkerCoords];
    this.setState((prevState) => ({ ...prevState, data }));
  };

  render() {
    return (
      <div>
        <MapContainer
          className="Map"
          center={{ lat: 40.7, lng: -74 }}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "100vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyComponent saveMarkers={this.saveMarkers} />
        </MapContainer>
      </div>
    );
  }
}