// ToursList.js

import React from 'react';
import TourItem from './TourItem';

const ToursList = ({ tours }) => {
  return (
    <div className="tours-list">
      <h2>Discover Our Tours</h2>
      <div className="tour-items">
        {tours.map((tour) => (
          <TourItem key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default ToursList;
