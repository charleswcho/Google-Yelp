import { useState, useEffect } from 'react';

/* global google */

function useGoogleMap(mapRef, mapOptions) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!mapRef) {
      return;
    }

    const map = new google.maps.Map(mapRef.current, mapOptions);
    const marker = new google.maps.Marker({
      position: mapOptions.center,
      map
    });

    setMap(map);

  }, [mapRef, mapOptions]);

  return [map];
}

export default useGoogleMap;
