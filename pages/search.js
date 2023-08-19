import React, { useEffect, useState, useContext } from 'react';
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { CartContext } from '@/components/CartContext';

const SearchResultsContainer = styled.div`
  margin: 30px;
`;

const SearchResultItem = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  max-width: 150px;
  max-height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const ProductDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

const SearchResults = () => {
  const router = useRouter();
  const { query } = router.query;
  const { addProduct } = useContext(CartContext);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        const searchData = await response.json();
        setSearchResults(searchData);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    // Fetch search results when the component mounts
    fetchSearchResults();
  }, [query]);

  return (
    <SearchResultsContainer>
      <h1>Search Results for: {query}</h1>
      {searchResults.map((product) => (
        <SearchResultItem key={product._id}>
          <ProductImage src={product.imageUrl} alt={product.title} />
          <ProductInfo>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>Price: ${product.price}</ProductPrice>
            <Button onClick={() => addProduct(product._id)} primary outline>
              <CartIcon />
              Add To Cart
            </Button>
          </ProductInfo>
        </SearchResultItem>
      ))}
    </SearchResultsContainer>
  );
};

export default SearchResults;
