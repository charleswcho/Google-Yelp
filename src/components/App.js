import React, { useState, useRef } from 'react';

import useGoogleMap from './hooks/useGoogleMap';
import useGeocoder from './hooks/useGeocoder';
import usePlacesService from './hooks/usePlacesService';

import SearchBar from './search-bar/SearchBar';
import Listings from './listings/Listings';

import './App.sass';

/* global google */

const mapOptions = {
  center: { lat: 37.7749, lng: -122.4194 },
  zoom: 12.5,
  scrollwheel: false,
  mapTypeControl: false,
  zoomControl: true,
  zoomControlOptions: {
    position: google.maps.ControlPosition.LEFT_TOP
  },
  scaleControl: false,
  streetViewControl: false
};

function App() {
  const mapRef = useRef(null);
  const [map, setLocations, setHoveredIdx] = useGoogleMap(mapRef, mapOptions);
  const [getCoordsOfAddress] = useGeocoder(map);
  const [getLocationData] = usePlacesService(map);
  const [listings, setListings] = useState([]);

  const handleSearch = async (query, place) => {
    console.log('1. Params', query, place);

    try {
      const coords = await getCoordsOfAddress(place);
      const data = await getLocationData(query, coords);

      console.log('2. Data', data);

      map.panTo(coords);

      const locations = data.map(listing => listing.geometry.location);

      setListings(data);
      setLocations(locations);
    } catch (err) {
      console.log(err);
    }
  };

  const handleHover = idx => {
    setHoveredIdx(idx);
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />

      <div className="results">
        <Listings listings={listings} handleHover={handleHover} />
        <div className="google-map" ref={mapRef} />
      </div>
    </div>
  );
}

export default App;
