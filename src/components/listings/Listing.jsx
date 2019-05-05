import React from 'react';

import './Listing.sass';

import star from '../../assets/star.png';

function Listing({ idx, place, handleHover }) {
  let cost = '';
  let open;
  let addressArr = [];
  let street;
  let photoUrl;

  let {
    price_level,
    opening_hours,
    formatted_address,
    photos,
    name,
    rating,
    user_ratings_total
  } = place;

  for (let i = 0; i < price_level; i++) {
    cost += '$';
  }

  if (opening_hours) open = opening_hours.open_now ? 'Open now' : 'Closed';

  if (formatted_address) {
    addressArr = formatted_address.split(',');
    street = addressArr[0];
  }

  if (photos) {
    photoUrl = photos[0].getUrl({ maxWidth: 250, maxHeight: 250 });
  }

  const onMouseEnter = () => {
    handleHover(idx);
  };

  const onMouseLeave = () => {
    handleHover(null);
  };

  return (
    <div
      className="listing"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="main-attr">
        <img className="thumbnail" src={photoUrl} alt="place" />

        <div className="name-price-rating">
          <h3 className="desc">{`${idx + 1}. ` + name}</h3>

          <div className="desc">
            <span className="rating">{rating}</span>
            <img className="star-icon" src={star} alt="star" />
            <span className="reviews">{user_ratings_total} reviews</span>
          </div>

          <div className="desc">{cost}</div>
        </div>
      </div>

      <div className="sub-attr">
        <div className="address">
          <div className="street">{street}</div>
        </div>

        <div className={`open ${opening_hours.open_now ? '' : 'closed'}`}>
          {open}
        </div>
      </div>
    </div>
  );
}

export default Listing;
