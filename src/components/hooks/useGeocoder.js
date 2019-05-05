import { useState, useEffect } from 'react';

/* global google */

function useGeocoder(map) {
  const [geocoderReady, setGeocoderReady] = useState(false);
  const [geocoder, setGeocoder] = useState(null);
  const statusCodes = { OK: 'OK' };

  useEffect(() => {
    setGeocoderReady(false);

    if (!map) {
      return;
    }

    setGeocoder(new google.maps.Geocoder());
    setGeocoderReady(true);
  }, [map]);

  function getCoordsOfAddress(place) {
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address: place }, (res, status) => {
        if (status === statusCodes.OK) {
          const { lat, lng } = res[0].geometry.location;

          resolve({ lat: lat(), lng: lng() });
        } else {
          reject(status);
        }
      });
    });
  }

  return [geocoderReady, getCoordsOfAddress];
}

export default useGeocoder;
