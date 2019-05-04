import { useState, useEffect } from 'react';

/* global google */

function useGoogleMap(mapRef, mapOptions) {
  const [map, setMap] = useState(null);
  const [locations, setLocations] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [hoveredIdx, setHoveredIdx] = useState(null);

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
        map
      });
    });

    setMarkers(newMarkers);
  }, [locations]);

  useEffect(() => {
    markers.forEach((marker, idx) => {
      hoveredIdx === idx
        ? marker.setAnimation(google.maps.Animation.BOUNCE)
        : marker.setAnimation(null);
    });
  }, [hoveredIdx]);

  return [map, setLocations, setHoveredIdx];
}

export default useGoogleMap;
