import React from 'react';
import PropTypes from 'prop-types';
import RecipeInfo from './RecipeInfo';  // Імпортуємо компонент RecipeInfo

// Объявление компонента Recipe
const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <h2>{recipe.name}</h2>
      <RecipeInfo text={recipe.number} icon="phone" />  {/* Використовуємо компонент RecipeInfo для номера */}
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired
};

export default Recipe;
