import React from 'react';
// import Link from 'next/link';
import styled from 'styled-components';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';


const Section = styled.section`
  background-color: white;
  padding: 20px 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 50px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin:10px;
  ${'' /* flex-wrap: wrap; */}
`;

const Box = styled.div`
  background-color: #8b0d0d;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.6);
  color:white;
  border-radius: 5px;
  width: calc(50% - 5px);
  margin: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    width: calc(25% - 40px);
    margin: 10px; /* Decrease the margin between the boxes */

    
  }
  
`;
const ArrowIcon = styled(FaArrowRight)`
  font-size: 1.2rem;
  margin-left: 6px;
  margin-bottom: -4px;
`;
const ShopNowLink = styled.a`
  display: flex-end;
  align-items: center;
  color: white;
  padding:7px;
  margin:15px;
  font-weight:bold;
  text-decoration: none !important;
  transition: color 0.2s;
  ${'' /* box-shadow: 0px 6px 10px rgba(250, 248, 248, 0.2); */}
  &:hover {
    color: #341c1c;
    transition: color 0.2s;
    /* Add colorful border on hover */
  
  }
`;

const ShopByCategory = () => {
  return (
    <Section>
      <Title>Shop by Category</Title>
      <FlexContainer>
    
      <Box>
          <h3>Laptops</h3>
          <p>Explore our wide range of laptops for every need.</p>
          <Link href="/products">
            <ShopNowLink>
              Shop Now <ArrowIcon />
              </ShopNowLink>
            
          </Link>
        </Box>
        <Box> 
          <h3>Scanners & Printers</h3>
          <p>Find high-quality scanners and printers for your office.</p>
          <Link href="/products">
       
          <ShopNowLink>
              Shop Now <ArrowIcon />
              </ShopNowLink>
          </Link>
        </Box>
        <Box>
          <h3>Networks</h3>
          <p>Discover networking solutions to keep you connected.</p>
          <Link href="/products">
        
          <ShopNowLink>
              Shop Now <ArrowIcon />
              </ShopNowLink>
            
          </Link>
        </Box>
        <Box>
          <h3>Accessories</h3>
          <p>Enhance your setup with our selection of computer accessories.</p>
          <Link href="/products">
         
          <ShopNowLink>
              Shop Now <ArrowIcon />
              </ShopNowLink>
            
          </Link>
        </Box>
      </FlexContainer>
    </Section>
  );
};

export default ShopByCategory;
