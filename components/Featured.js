import React, { useContext } from "react";
import styled from "styled-components";
import Center from "@/components/Center";
import ButtonLink from "@/components/ButtonLink";
import { CartContext } from "@/components/CartContext";

const Bg = styled.div`
  position: relative;
  color: #030303;
  padding: 100px 0; /* Adjust padding as needed */
  text-align: center;
 
  background-image: url("img/jj.jpg"); /* Replace with your background image path */
  background-size: cover;
  background-position: center;
  opacity: 0.8; /* Adjust opacity as needed */
`;

const Title = styled.h1`
  margin-top: -50px;
  padding:70px;
 color:white;
  font-weight:700;
  font-size: 1rem;
  transition: font-size 0.3s ease-in-out; /* Add transition property */
  @media   (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Desc = styled.p`
  color: #030303;
  font-size: 1.1rem;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const CenteredButton = styled(ButtonLink)`
  display: block;
  margin: 20px auto;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <Bg>
      <Center>
        <ContentWrapper>
          <Title>
          <h1>HyperTech company for Information Technology</h1>
          </Title>
          {/* <Desc>A private joint stock company engaged in the sale and maintenance of all types of cctv and networks and laptop computer and related accessories</Desc> */}
          {/* <CenteredButton href={'/about'} white primary >Read more</CenteredButton> */}
        </ContentWrapper>
      </Center>
    </Bg>
  );
}
