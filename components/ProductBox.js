import styled from "styled-components";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

const ProductWrapper = styled.div`
  margin: 30px;
`;

const WhiteBox = styled(Link)`
  position: relative;
  background-color: #ffffff;
  padding: 40px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  transition: background-color 0.3s ease, transform 0.2s ease-in-out;
  img {
    max-width: 100%;
    max-height: 60%;
    object-fit: cover;
  }
  &:hover {
    ${'' /* background-color: #a14b4b; */}
    transform: translateY(-5px);
  }
`;

const AddToCartButton = styled.button`
  position: absolute;
   cursor:pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color:#fdfdfd;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${WhiteBox}:hover & {
    opacity: .7;
  }
`;

const CartButtonIcon = styled(CartIcon)`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  margin-bottom: -5px;
`;

const Title = styled(Link)`
  font-weight: 700;
  font-size: 1.3rem;
  color: inherit;
  text-decoration: none;
  
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 6px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" +_id;

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          {images?.length > 0 && <img src={images[0]} alt="no" />}
        </div>
        <AddToCartButton onClick={() => addProduct(_id)}>
          <CartButtonIcon />
       Shop Now
        </AddToCartButton>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>{price}</Price>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
