import { useState, useEffect } from 'react';

/* global google */

function useGoogleMap(mapRef, mapOptions) {
  const [map, setMap] = useState(null);
  const [locations, setLocations] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!mapRef) {
      return;
    }

    const map = new google.maps.Map(mapRef.current, mapOptions);

    setMap(map);
  }, [mapRef, mapOptions]);

  useEffect(() => {
    markers.forEach(marker => marker.setMap(null));

    const newMarkers = locations.map((location, idx) => {
      return new google.maps.Marker({
        position: location,
        label: String(idx + 1),
        map,
      });
    });

    setMarkers(newMarkers);
  }, [locations]);



  return [map, setLocations];
}

export default useGoogleMap;
