import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the icons horizontally */
  margin-top: 10px;

  @media (min-width: 768px) {
    justify-content: flex-end; /* Move the icons to the right on larger screens */
    margin-top: 0; /* Remove top margin on larger screens */
  }
`;

const SocialIconLink = styled.a`
  display: inline-block;
  width: 2.7rem;
  height: 2.7rem;
  line-height: 2.9rem;
  margin: 4px;
  text-align: center;
  background-color: rgba(255, 252, 252, 0.9);
  border-radius: 50%;
  color: black;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(228, 63, 63, 0.5);
  }

  @media (min-width: 768px) {
    margin: 8px; /* Increase margin for larger spacing */
  }
`;

const SocialIcons = () => {
  return (
    <SocialIconsContainer>
      <SocialIconLink href="https://facebook.com" target="_blank">
        <FaFacebookF />
      </SocialIconLink>
      <SocialIconLink href="https://twitter.com" target="_blank">
        <FaTwitter />
      </SocialIconLink>
      <SocialIconLink href="https://youtube.com" target="_blank">
        <FaYoutube />
      </SocialIconLink>
      <SocialIconLink href="https://instagram.com" target="_blank">
        <FaInstagram />
      </SocialIconLink>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
