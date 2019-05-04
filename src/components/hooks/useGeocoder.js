import { useState, useEffect } from 'react';

/* global google */

function useGeocoder(map) {
  const [geocoder, setGeocoder] = useState(null);
  const statusCodes = { OK: 'OK' }

  useEffect(() => {
    if (!map) {
      return;
    }

    setGeocoder(new google.maps.Geocoder());
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

  return [getCoordsOfAddress];
}

export default useGeocoder;
