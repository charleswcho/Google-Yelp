import { useState, useEffect } from 'react';

/* global google */

function useGoogleMap(mapRef) {
  const [map, setMap] = useState(null);
  const [locations, setLocations] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  /**
   * Initialize the map
   */
  useEffect(() => {
    if (!mapRef) {
      return;
    }

    const map = new google.maps.Map(mapRef.current, {
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
    });

    setMap(map);
  }, [mapRef]);

  /**
   * Create or update map markers
   */
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

  /**
   * Add or remove map marker animation
   */
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
