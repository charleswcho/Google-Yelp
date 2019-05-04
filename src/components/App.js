import React, { useState, useRef, useEffect } from 'react';

import useGoogleMap from './hooks/useGoogleMap';
import useGeocoder from './hooks/useGeocoder';
import usePlacesService from './hooks/usePlacesService';

import SearchBar from './search-bar/SearchBar';

import './App.sass';

/* global google */

// SF { lat: 37.7749, lng: -122.4194 }

const mapOptions = {
  center: { lat: 37.7749, lng: -122.4194 },
  zoom: 14,
  scrollwheel: false,
  mapTypeControl: false,
  zoomControl: true,
  zoomControlOptions: {
    position: 'LEFT_TOP'
  },
  scaleControl: false,
  streetViewControl: false
};

function App() {
  const mapRef = useRef(null);
  const [map] = useGoogleMap(mapRef, mapOptions);
  const [getCoordsOfAddress] = useGeocoder(map);
  const [getLocationData] = usePlacesService(map);

  async function handleSearch(query, place) {
    console.log(query, place);

    try {
      const coords = await getCoordsOfAddress(place);
      const data = await getLocationData(query, coords);

      map.panTo(coords);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />

      <div className="google-map" ref={mapRef} />
    </div>
  );
}

export default App;
