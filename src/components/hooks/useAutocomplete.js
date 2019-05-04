import { useState, useEffect } from 'react';

/* global google */

function useAutocomplete(initialState, inputRef) {
  const [place, setPlace] = useState(initialState);

  useEffect(() => {
    if (!inputRef) {
      return;
    }

    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
      types: ['(cities)']
    });

    const listener = autocomplete.addListener('place_changed', () => {
      const address = autocomplete.getPlace().formatted_address;

      if (address) {
        setPlace(address);
      }
    });

    return () => {
      google.maps.event.clearInstanceListeners(autocomplete);
      google.maps.event.removeListener(listener);
      document.querySelector('.pac-container').remove();
    };
  }, [inputRef]);

  return [place, setPlace];
}

export default useAutocomplete;
