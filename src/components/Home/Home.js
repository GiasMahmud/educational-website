import React from 'react';
import About from '../About/About';
import CarouselContainer from '../Carousel/CarouselContainer';
import SearchBar from '../SearchBar/SearchBar';
import Services from '../Services/Services';
import Subjects from '../Subjects/Subjects';


const Home = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <CarouselContainer></CarouselContainer>
      <Services></Services>
      <About></About>
      <Subjects></Subjects>

    </div>
  );
};

export default Home;