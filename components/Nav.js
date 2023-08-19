// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useRouter } from 'next/router';
// import SocialIcons from './SocialIcons';

// const Navbar = styled.div`
//   height: 3rem;
//   background-color: rgb(228, 63, 63);
//   color: #ffffff;
//   padding: 0.4rem 3rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-size: 1rem;
//   cursor: pointer;

//   @media (min-width: 768px) {
//     font-size: 1.2rem;
//     flex-direction: row;
//     justify-content: space-between;
//   }
// `;

// const TopSection = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center; /* Center the contents horizontally */
// `;

// const PhoneNumber = styled.div`
//   display: none;
//   @media (min-width: 768px) {
//     display: block;
//     font-weight: 500;
//     margin-right: 1rem;
//   }
// `;

// const SearchBox = styled.input`
//   background-color: white;
//   border: 2px solid #ccc;
//   padding: 0.3rem 0.5rem;
//   border-radius: 5px;
//   font-size: 1rem;
// `;

// const Nav = () => {
//   const router = useRouter();
//   const [searchValue, setSearchValue] = useState('');

//   const handleSearch = (event) => {
//     if (event.key === 'Enter') {
//       router.push(`/search?query=${encodeURIComponent(searchValue)}`);
//     }
//   };

//   return (
//     <Navbar>
//       <TopSection>
//         <PhoneNumber>Call Us Now : (970) 08 285 4409</PhoneNumber>
//         <SearchBox
//           type="text"
//           placeholder="Search..."
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//           onKeyDown={handleSearch}
//         />
//       </TopSection>
//       <SocialIcons />
//     </Navbar>
//   );
// };

// export default Nav;
