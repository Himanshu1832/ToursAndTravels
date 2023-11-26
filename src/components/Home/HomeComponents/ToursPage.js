// ToursPage.js

import React from 'react';
import ToursList from './ToursList';
import "./ToursPage.css"
import th from "../../../images/th.jpg"
import ma from "../../../images/ma.jpg"

import bp from "../../../images/bp.jpg"


const ToursPage = () => {
  const toursData = [
    {
      id: 1,
      name: 'City Exploration',
      description: 'Explore the beauty of cities around the world.',
      price: 199,
      image: th,
    },
    {
      id: 2,
      name: 'Beach Paradise',
      description: 'Relax on the world\'s most beautiful beaches.',
      price: 299,
      image: bp,
    },
    {
      id: 3,
      name: 'Mountain Adventure',
      description: 'Embark on an exciting mountain expedition.',
      price: 249,
      image: ma,
    },
    // Add more tour data as needed
  ];

  return (
    <div className="tours-page">
      <ToursList tours={toursData} />
    </div>
  );
};

export default ToursPage;
