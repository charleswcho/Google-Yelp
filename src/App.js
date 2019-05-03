import React from 'react';

import SearchBar from './components/SearchBar';

import './App.sass';

/* global google */

function App() {
  search('restaurant', 'San Francisco');

  function search(query, place) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: place }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const center = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };

        getLocationData(query, center);
      }
    });
  }

  function getLocationData(query, center) {
    if (query === undefined || query === '') {
      query = 'restaurant';
    }

    const mapOptions = {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 14,
      scrollwheel: false,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      scaleControl: false,
      streetViewControl: false
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const request = {
      location: center,
      radius: '500',
      query: query
    };

    const service = new google.maps.places.PlacesService(map);

    service.textSearch(request, (res) => {
      console.log(res);
    });
  }

  return (
    <div className="App">
      <SearchBar />

      <div id="map" class="google-map" />
    </div>
  );
}

export default App;
