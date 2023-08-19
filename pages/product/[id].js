import React, { useContext } from "react";
import styled from "styled-components";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
// import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap:30px;
  margin: 50px 0;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.5rem;
`;

const DescriptionWrapper = styled.div`
  font-size: 1rem;
  color: #555; /* Adjust the color as needed */
  line-height: 1.4;
`;

const DescriptionBlock = styled.p`
  margin-bottom: 20px;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);

  const paragraphs = product.description.split("\n"); // Split description into paragraphs

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <DescriptionWrapper>
              {paragraphs.map((paragraph, index) => (
                <DescriptionBlock key={index}>{paragraph}</DescriptionBlock>
              ))}
            </DescriptionWrapper>
            <PriceRow>
              <div>
                <Price>{product.price}</Price>
              </div>
            </PriceRow>
            <div style={{ padding: "2px" }}>
              <Button primary onClick={() => addProduct(product._id)}>
                <CartIcon />Add to cart
              </Button>
            </div>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
