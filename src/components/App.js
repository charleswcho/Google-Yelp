import React, { useRef, useState, useEffect } from 'react';

import useGoogleMap from './hooks/useGoogleMap';
import useGeocoder from './hooks/useGeocoder';
import usePlacesService from './hooks/usePlacesService';

import SearchBar from './search-bar/SearchBar';
import Listings from './listings/Listings';

import './App.sass';

function App() {
  const mapRef = useRef(null);
  const [map, setLocations, setHoveredIdx] = useGoogleMap(mapRef);
  const [geocoderReady, getCoordsOfAddress] = useGeocoder(map);
  const [placesServiceReady, getLocationData] = usePlacesService(map);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (geocoderReady && placesServiceReady) {
      // Default search params
      handleSearch('tacos', 'San Francisco, CA, USA');
    }
  }, [geocoderReady, placesServiceReady]);

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
  };

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
