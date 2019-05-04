import React, { useState, useRef, useEffect } from 'react';

import useGoogleMap from './hooks/useGoogleMap';
import useGeocoder from './hooks/useGeocoder';
import usePlacesService from './hooks/usePlacesService';

import SearchBar from './search-bar/SearchBar';
import Listings from './listings/Listings';

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
  const [map, setLocations] = useGoogleMap(mapRef, mapOptions);
  const [getCoordsOfAddress] = useGeocoder(map);
  const [getLocationData] = usePlacesService(map);
  const [listings, setListings] = useState([]);

  async function handleSearch(query, place) {
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

  useEffect(() => {
    handleSearch('sushi', 'San Francisco, CA, USA');
  }, [getCoordsOfAddress, getLocationData, map]);


  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />

      <div className="results">
        <Listings listings={listings}/>
        <div className="google-map" ref={mapRef} />
      </div>
    </div>
  );
}

export default App;
