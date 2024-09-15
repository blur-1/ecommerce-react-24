// MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY; 

  const containerStyle = {
    position: 'absolute',
    top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  /*   width: '100vw',
    height: '100vh' */
  };

  const center = {
    lat: -12.046373,
    lng: -77.042754
  };

  const locations = [
    { lat: -12.046373, lng: -77.042754, label: '1' }, // Ubicación de la primera tienda
    { lat: -12.045847, lng: -77.030122, label: '2' }  // Ubicación de la segunda tienda
  ];

  return (
    <div className="relative w-full h-screen">
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {locations.map((location, index) => (
          <Marker key={index} 
          position={{ lat: location.lat, lng: location.lng }} 
          label={location.label} />
        ))}
      </GoogleMap>
    </LoadScript>
    </div>
  );
}

export default MapComponent;
