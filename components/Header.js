import React, { useContext, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useRouter } from "next/router"; // Import useRouter

const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  margin-left: 10px;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const LogoImage = styled.img`
  width: 100px;
  padding: 0;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  color: #f8f5f5;
  text-decoration: none;
  padding: 20px 0;
  margin: 8px;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    padding: 0;
    &:hover {
      color: rgba(228, 63, 63, 0.5);
    }
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const CartIconWrapper = styled.div`
  position: relative;
`;

const CartIcon = styled(FaShoppingCart)`
  font-size: 24px;
  @media screen and (min-width: 768px) {
    padding: 0;
    &:hover {
      color: rgba(228, 63, 63, 0.5);
    }
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 50%;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 24px;
  color: white;
  margin-top: 11px;
  margin-left: 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 0;
    &:hover {
      color: rgba(228, 63, 63, 0.5);
    }
  }
`;

const SearchInput = styled.input`
  width: ${(props) => (props.expanded ? "150px" : "0")};
  padding: 5px;
  background-color: #222;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: width 0.3s ease-in-out;
  font-size: 16px;
  outline: none;
  color: white;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter(); // Initialize useRouter

  const toggleSearchInput = () => {
    setSearchExpanded(!searchExpanded);
  };

  const handleSearch = () => {
    // Simulate searching from a database or API
    const results = []; // Your search logic here
    setSearchResults(results);

    // Navigate to search results page with the search query
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <LogoImage src="/HyperTech.jpg" alt="Logo" />
          </Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/About"}>About Us</NavLink>
            <NavLink href={"/products"}>All products</NavLink>
            <CartIconWrapper>
              <NavLink href={"/cart"}>
                <CartIcon />
                {cartProducts.length > 0 && (
                  <CartBadge>{cartProducts.length}</CartBadge>
                )}
              </NavLink>
            </CartIconWrapper>
            <SearchIcon onClick={toggleSearchInput} />
            <SearchInput
              type="text"
              placeholder="Search..."
              expanded={searchExpanded}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
      {/* Display search results here */}
      <div>
        {searchResults.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </StyledHeader>
  );
}
