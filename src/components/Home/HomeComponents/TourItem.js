// TourItem.js

import React from 'react';

const TourItem = ({ tour }) => {
  return (
    <div className="tour-item">
      <img src={tour.image} alt={tour.name} />
      <div className="tour-details">
        <h3>{tour.name}</h3>
        <p>{tour.description}</p>
        <p>Price: ${tour.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default TourItem;
