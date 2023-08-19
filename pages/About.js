import React from "react";
import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MainContainer = styled.div`
  padding: 20px;
`;

const ContainerFluid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EntryTitle = styled.h2`
  display: none;
`;

const PageContent = styled.div`
  width: 100%;
  padding: 20px;
  border: 5px solid #820a0a;
  border-radius: 10px;
  margin-top: 20px;
`;

const Section = styled.div`
  margin: 20px 0;
  font-size: 18px;
`;

const ImageSlider = styled(Carousel)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
`;

const About = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <ContainerFluid>
          <MainContentWrap>
            <EntryTitle>About Us</EntryTitle>
            <PageContent>
              <Section>
                <p>
                  <strong>Specialization:</strong> A private joint stock company engaged in the sale and maintenance of all types of desktop and laptop computers and related accessories.
                </p>
                <p>
                  <strong>Year of Establishment:</strong> 2002
                </p>
                <p>
                  <strong>Target groups:</strong> Institutions and companies, through multiple departments serving different fields.
                </p>
                <p>
                  <strong>Our vision:</strong> Providing the best service, marketing the best product at the most appropriate prices and meeting the local market requirements of modern technology to enrich the information technology sector.
                </p>
                <p>
                  <strong>Our Mission:</strong> To put a distinct imprint in the world of technology and related devices.
                </p>
                <p>
                  <strong>Our identity:</strong> Palestinian Arab, and we try to prove it through our services and distinction.
                </p>
                <p>
                  <strong>Our Policies:</strong> We sell and market products according to ethical principles and values in order to excel in providing the best services.
                </p>
                <p>
                  <strong>Our goals:</strong>
                </p>
                <p>
                  <strong>Sale, marketing and maintenance of computers and their accessories:</strong><br />
                  The company works in the sale of desktop and laptop computers and all their related accessories and accessories such as printers, monitors, software…etc. We also work to find the best maintenance solutions for devices in the fastest time, least cost and the latest method.
                </p>
                <p>
                  <strong>We provide technological solutions to ensure integrated service:</strong><br />
                  We are working on providing all the equipment that our products need in order to be fully functional, such as computers, and retail devices (billing printer, barcode reader, cash box…etc) in order to facilitate our customers and save effort and time.
                </p>
                <p>
                  <strong>Maintaining the harmony of our products and global technological development:</strong><br />
                  The world of information technology is advancing on a daily basis, and we are keeping pace with this rapid change so that our products are compatible with the latest devices and global operating systems.
                </p>
                {/* Add more content sections here */}
                  <ImageSlider
              showThumbs={false}
              showStatus={false}
              autoPlay
              interval={2000} // Change images every 3 seconds
            >
              <div>
                <img src="img/w1.jpg" alt="Image 1" />
              </div>
              <div>
                <img src="img/w2.jpg" alt="Image 2" />
              </div>
              <div>
                <img src="img/w3.jpg" alt="Image 3" />
              </div>
              <div>
                <img src="img/w4.jpg" alt="Image 4" />
              </div>
               
              <div>
                <img src="img/w5.jpg" alt="Image 5" />
              </div>
              <div>
                <img src="img/w6.jpg" alt="Image 5" />
              </div>
              <div>
                <img src="img/w8.jpg" alt="Image 5" />
              </div>
            </ImageSlider>
              </Section>
            </PageContent>
          
          </MainContentWrap>
        </ContainerFluid>
      </MainContainer>
      <Footer />
    </>
  );
};

export default About;
