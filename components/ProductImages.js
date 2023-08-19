import styled from "styled-components";
import { useState } from "react";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 500px; /* Increased image height for better visibility */

  @media screen and (max-width: 768px) {
    max-height: 300px; /* Adjust the image height for smaller screens */
  }
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-grow: 0;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${props =>
    props.active
      ? `
      border-color: #ccc;
    `
      : `
      border-color: transparent;
    `}
  height: 80px;
  width: 80px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    height: 60px; /* Adjust the button height for smaller screens */
    width: 60px; /* Adjust the button width for smaller screens */
  }
`;

const BigImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map(image => (
          <ImageButton
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt="" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
