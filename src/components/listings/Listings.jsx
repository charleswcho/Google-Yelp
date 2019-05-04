import React from 'react';

import Listing from './Listing';

import './Listings.sass';

function Listings({ listings, handleHover }) {
  return (
    <div className="index">
      <ul className="listings">
        {listings.map((place, idx) => (
          <Listing
            key={idx}
            idx={idx}
            place={place}
            handleHover={handleHover}
          />
        ))}
      </ul>
    </div>
  );
}

export default Listings;
