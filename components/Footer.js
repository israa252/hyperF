import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDotCircle,
  faWhatsapp,
  faEnvelope,
  faClock
} from "@fortawesome/free-solid-svg-icons";

const FooterWrapper = styled.footer`
  background-color: #222;
  color: #8b0d0d;
  padding-top: .8rem;
  padding-bottom: 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}
`;


const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* gap: 1rem; */}
  @media (max-width: 768px) {
    align-items: center;
  }
`;

 
const ContactInfo = styled(Column)`
  align-items: flex-start;
  
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0.8rem 0;

  & svg {
    margin-right: 0.5rem;
    color: #8b0d0d;
  }

  & strong {
    font-weight: 500;
    margin-right: 0.5rem;
    color: white;
  }

  & a {
    color: white;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: red;
    }
  }
`;

const SocialIcon = styled.a`
  display: inline-block;
  width: 2.7rem;
  height: 2.7rem;
  line-height: 3rem;
  margin:4px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.86);
  border-radius: 50%;
  color: black;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(228, 63, 63, 0.5);
  }
`;

const BottomLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.63);
`;

const TextLink = styled.a`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s ease-in-out;

  &:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FlexContainer>
          {/* Left Menu */}
          <ContactInfo>
            <h3 className="widget-title">CONTACT INFO</h3>
            <ul className="contact-details">
              <ContactItem>
                <FontAwesomeIcon icon={faDotCircle} />
                <strong>ADDRESS:</strong>
                <span>Gaza, Al-Nasr, Tamous junction near Al-Aqsa TV</span>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faWhatsapp} />
                <strong>PHONE:</strong>
                <span>(970) 08 285 4409</span>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faEnvelope} />
                <strong>EMAIL:</strong>
                <span>
                  <a href="mailto:Mohsen_hamdona@yahoo.com">Mohsen_hamdona@yahoo.com</a>
                </span>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faClock} />
                <strong>WORKING DAYS/HOURS:</strong>
                <span>Sat - Thu / 9:00 AM - 9:00 PM</span>
              </ContactItem>
            </ul>
          </ContactInfo>

          {/* Right Social Icons */}
          <div>
            <SocialIcon href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://www.tiktok.com/@usertw22ybmnln?_t=8ewr1hywrvF&_r=1" target="_blank">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://youtube.com" target="_blank">
              <FaYoutube />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank">
              <FaInstagram />
            </SocialIcon>
          </div>
        </FlexContainer>

        {/* Bottom Links */}
        <BottomLinks>
          <Copyright>
            © {new Date().getFullYear()} Hyper Tech. All Rights Reserved
          </Copyright>
        
        </BottomLinks>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
