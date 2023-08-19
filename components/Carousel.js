import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const CustomCarousel = ({ items }) => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={`Slide ${index}`} />
          <p className="legend">{item.caption}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
