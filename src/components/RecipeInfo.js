import React from 'react';
import PropTypes from 'prop-types';
import { FaPhone } from 'react-icons/fa';  // Правильный импорт иконки

const RecipeInfo = ({ text, icon }) => {
  // В зависимости от пропса icon, можно отображать различные иконки
  const Icon = FaPhone; // Используем одну иконку для примера

  return (
    <div className="recipe-info">
      <Icon /> {text}  {/* Иконка и текст */}
    </div>
  );
};

RecipeInfo.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default RecipeInfo;
