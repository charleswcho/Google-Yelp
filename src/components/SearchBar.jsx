import React, { useState, useEffect } from 'react';

import useAutoComplete from './useAutocomplete';

import './search-bar.sass';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [place, setPlace] = useAutoComplete('', 'searchTextField');
  const [placeHolder, setPlaceHolder] = useState('location');

  function search() {
    console.log('Boom!');

    if (place === '') {
      setPlaceHolder('Please enter a location');
      return;
    }
  }

  const handleSearch = event => {
    event.preventDefault();
    search();
  };

  const handleQueryInput = event => {
    if (event.charCode === 13) {
      search();
    }
  }

  const handleQueryChange = event => {
    setQuery(event.target.value);
  };

  const handlePlaceChange = event => {
    setPlace(event.target.value);
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <a className="header" href="/">
        <h1>Google Yelp</h1>
      </a>

      <input
        className="search-field"
        type="text"
        value={query}
        placeholder="tacos, salons, bars"
        onKeyPress={handleQueryInput}
        onChange={handleQueryChange}
      />

      <input
        id="searchTextField"
        className="search-field"
        type="text"
        value={place}
        placeholder={placeHolder}
        onChange={handlePlaceChange}
      />

      <button className="search-button" type="submit" />
    </form>
  );
}

export default SearchBar;
