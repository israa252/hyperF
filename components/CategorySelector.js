import React from "react";
import styled from "styled-components";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryItem = styled.div`
  padding: 8px 16px;
  margin: 0 8px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight:bold;
  color: black;

  &:hover {
    color: ${(props) => (props.isSelected ? "black" : "rgb(228, 63, 63)")};
    background-color: ${(props) => (props.isSelected ? "rgb(228, 63, 63)" : "#f0f0f0")};
  }
`;

export default function CategorySelector({
  categories,
  selectedCategory,
  onSelectCategory
}) {
  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryItem
          key={category._id}
          onClick={() => onSelectCategory(category._id)}
          isSelected={selectedCategory === category._id}
        >
          {category.name}
        </CategoryItem>
      ))}
    </CategoryContainer>
  );
}
