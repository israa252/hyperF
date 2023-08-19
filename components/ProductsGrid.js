import React from "react";
import styled from "styled-components";
import ProductBox from "@/components/ProductBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledProductsGrid = styled.div`
  /* Styles for the slider container can be added here if needed */
  margin:30px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin: 20px 0;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px; /* Adjust the max height as needed */
`;

export default function ProductsGrid({ products }) {
  // Settings for the react-slick slider
  const sliderSettings = {
    dots: true,
    // infinite: true,
    speed: 500,
    // autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set autoplay interval in milliseconds (e.g., 3 seconds)
    slidesToShow: 4, // Number of products to show per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledProductsGrid>
      <Slider {...sliderSettings}>
        {products?.length > 0 &&
          products.map((product) => (
            <ProductBox key={product._id} {...product} />
          ))}
      </Slider>
    </StyledProductsGrid>
  );
}
