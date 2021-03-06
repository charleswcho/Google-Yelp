import { useState, useEffect } from 'react';

/* global google */

function usePlacesService(map) {
  const [placesServiceReady, setPlacesServiceReady] = useState(false);
  const [placesService, setPlacesService] = useState(null);
  const statusCodes = { OK: 'OK' };

  useEffect(() => {
    setPlacesServiceReady(false);

    if (!map) {
      return;
    }

    setPlacesService(new google.maps.places.PlacesService(map));
    setPlacesServiceReady(true);
  }, [map]);

  function getLocationData(query, coords) {
    return new Promise((resolve, reject) => {
      const request = {
        location: coords,
        radius: '500',
        query
      };

      placesService.textSearch(request, (res, status) => {
        if (status === statusCodes.OK) {
          resolve(res);
        } else {
          reject(status);
        }
      });
    });
  }

  return [placesServiceReady, getLocationData];
}

export default usePlacesService;
