import React from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShipping, faMoney } from '@foztawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  background-color: #222;
  color: #fff;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex-basis: calc(33.333% - 20px);
  max-width: calc(33.333% - 20px);
  margin: 10px;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

const IconWrapper = styled.div`
  color: #ffffff;
  font-size: 35px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
`;

const Description = styled.p`
  font-size: 13px;
  line-height: 17px;
`;

const HomeBar = () => {
  return (
    <Wrapper>
      <Column>
        <div className="porto-sicon-box style_1 default-icon">
          <IconWrapper>
            {/* <FontAwesomeIcon icon={faShipping} /> */}
          </IconWrapper>
          <div className="porto-sicon-header">
            <Title>FREE SHIPPING &amp; RETURN</Title>
            <Description>Free shipping on all orders over $99.</Description>
          </div>
        </div>
      </Column>
      <Column>
        <div className="porto-sicon-box style_1 default-icon">
          <IconWrapper>
            {/* <FontAwesomeIcon icon={faMoney} /> */}
          </IconWrapper>
          <div className="porto-sicon-header">
            <Title>MONEY BACK GUARANTEE</Title>
            <Description>100% money back guarantee</Description>
          </div>
        </div>
      </Column>
      {/* Add more columns for other sections */}
    </Wrapper>
  );
};

export default HomeBar;
