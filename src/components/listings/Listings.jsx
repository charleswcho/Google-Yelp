import React from 'react';

import './Listings.sass';

function Listings({ listings }) {
  return (
    <div className="index">
      <ul className="listings">
        {listings.map((place, idx) => (
          <Listing key={idx} idx={idx + 1} place={place} />
        ))}
      </ul>
    </div>
  );
}

function Listing({ idx, place }) {
  let cost = '';
  let open;
  let addressArr = [];
  let street;
  let cityState;
  let photoUrl;

  let {
    price_level,
    opening_hours,
    formatted_address,
    photos,
    name,
    rating
  } = place;

  for (let i = 0; i < price_level; i++) {
    cost += '$';
  }

  if (opening_hours) open = opening_hours.open_now ? 'Open now' : 'Closed';

  if (formatted_address) {
    addressArr = formatted_address.split(',');
    street = addressArr[0];
    cityState = addressArr[1].trim() + ',' + addressArr[2];
  }

  if (photos) {
    photoUrl = photos[0].getUrl({ maxWidth: 250, maxHeight: 250 });
  }

  return (
    <div className="listing">
      <div className="main-attr">
        <img src={photoUrl} alt="place" />

        <div className="name-price-rating">
          <div className="desc">{`${idx}. ` + name}</div>
          <div className="desc">{rating} Star</div>
          <div className="desc">{cost}</div>
        </div>
      </div>

      <div className="sub-attr">
        <div className="address">
          <div className="street">{street}</div>
          <div className="city-state">{cityState}</div>
        </div>

        <div className="open">{open}</div>
      </div>
    </div>
  );
}

export default Listings;
