import { useState, useEffect } from 'react';

/* global google */

let autocomplete = null;

function useAutocomplete(initialState, elementId) {
  const [place, setPlace] = useState(initialState);

  useEffect(() => {
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById(elementId),
      {
        types: ['(cities)']
      }
    );

    const listener = autocomplete.addListener('place_changed', () => {
      const address = autocomplete.getPlace().formatted_address;

      if (address) {
        setPlace(address);
      }
    });

    function cleanup() {
      google.maps.event.clearInstanceListeners(autocomplete);
      google.maps.event.removeListener(listener);
      document.querySelector('.pac-container').remove();
    }

    return cleanup;
  }, []);

  return [place, setPlace];
}

export default useAutocomplete;
