// Home.js

import React from 'react';
import Header from './HomeComponents/Header';
import Banner from './HomeComponents/Banner';
import ToursPage from './HomeComponents/ToursPage';
import Testimonials from './HomeComponents/Testimonials';
import ContactForm from './HomeComponents/ContactForm';
import Footer from './HomeComponents/Footer';
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ToursPage />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
