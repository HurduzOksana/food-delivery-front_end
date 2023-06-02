import React from "react";
import { Link } from "react-router-dom";
import { Card, RecipePicture, RecipeTitle } from "./Card.styled";

export const RestCard = ({ id, image, text, altText }) => {
  return (
    <Link to={`/recipe/${id}`}>
      <Card>
        <RecipePicture src={image} alt={altText} />
        <RecipeTitle>{text}</RecipeTitle>
      </Card>
    </Link>
  );
};
