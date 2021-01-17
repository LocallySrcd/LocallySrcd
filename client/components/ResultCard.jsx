import React, { Component } from 'react';

const metersToMiles = (meters) => {
  return Math.round((meters / 1609.344) * 10) / 10;
};

const fullStars = (rating) => {
  const total = [];
  let count = Math.floor(rating);
  while (count > 0) {
    total.push(<img src="../assets/fullstar.png"></img>);
    count--;
  }
  return total;
};

const ResultCard = ({ info, isFav }) => {
  console.log('result card: ', info);
  console.log('I AM A FAV: ', isFav);

  const {
    display_phone,
    image_url,
    name,
    rating,
    review_count,
    url,
    categories,
    location,
    distance,
  } = info;

  // concatenating the address to display
  let restAddress = location.display_address.join(', ');

  const displayCategories = categories
    .map((obj) => {
      delete obj.alias;
      return obj.title;
    })
    .join(' ');

  //convert meters into miles -> this is the distance from place to user
  const distFromUser = metersToMiles(distance);

  // render the correct full rating stars
  const displayStars = fullStars(rating);
  // if half star rating:
  if (rating % 1 !== 0) {
    displayStars.push(<img src="../assets/halfstar.png"></img>);
  }

  // favIcon
  let FavIcon;
  if (isFav) {
    FavIcon = <img src="../assets/fullheart.png"></img>;
  } else {
    FavIcon = <img src="../assets/emptyheart.png"></img>;
  }

  return (
    <div className="resultCardContainer">
      <div>
        <img className="placePic" src={image_url}></img>
      </div>
      <div className="placeCard">
        <div id="cardHeader">
          <a href={url} target="_blank">
            {' '}
            {name}
          </a>
          <div id="innerflex">
            <img src="../assets/thickpin.png"></img>
            <span>{distFromUser} miles</span>
          </div>
        </div>
        <article>
          <span id="categories">{displayCategories}</span>
          <span id="address">{restAddress}</span>
          <span id="phone">{display_phone}</span>
          <div id="totalrating">
            <div className="stars">{displayStars}</div>
            <span id="reviews"> {review_count}</span>
          </div>
          <div id="favIcon">{FavIcon}</div>
        </article>
      </div>
    </div>
  );
};

export default ResultCard;
