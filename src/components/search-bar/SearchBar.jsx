import React, { useState, useRef } from 'react';

import useAutoComplete from '../hooks/useAutocomplete';

import './SearchBar.sass';

import search_filled from '../../assets/search_filled.png';

function SearchBar({ handleSearch }) {
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [place, setPlace] = useAutoComplete('', inputRef);
  const [placeHolder, setPlaceHolder] = useState('location');

  const search = event => {
    event.preventDefault();

    if (place === '') {
      setPlaceHolder('Please enter a location');
      return;
    }

    handleSearch(query, place);
  };

  const handleQueryInput = event => {
    if (event.charCode === 13) {
      search();
    }
  };

  const handleQueryChange = event => {
    setQuery(event.target.value);
  };

  const handlePlaceChange = event => {
    setPlace(event.target.value);
  };

  return (
    <form className="search" onSubmit={search}>
      <a className="header" href="/#">
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
        className="search-field"
        type="text"
        ref={inputRef}
        value={place}
        placeholder={placeHolder}
        onChange={handlePlaceChange}
      />

      <button className="search-button" type="submit">
        <img className="search-icon" src={search_filled} alt="search"/>
      </button>
    </form>
  );
}

export default SearchBar;
