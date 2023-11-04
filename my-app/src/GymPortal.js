import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GymPortal = () => {
  // Set your map center and zoom level
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  // Placeholder for actual gym data
  const gyms = [
    // This should come from a data fetch
    { lat: 10.99835602, lng: 77.01502627, name: 'Gym A' },
    // ...other gyms
  ];

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'process.env.REACT_APP_GOOGLE_MAPS_API_KEY' }} // Replace with your Google Maps API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {gyms.map((gym, index) => (
          <AnyReactComponent
            key={index}
            lat={gym.lat}
            lng={gym.lng}
            text={gym.name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default GymPortal;
