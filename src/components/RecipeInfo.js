import React from 'react';
import PropTypes from 'prop-types';
import { FaPhone } from 'react-icons/fa'; 

const RecipeInfo = ({ text, icon }) => {
  const Icon = FaPhone; 

  return (
    <div className="recipe-info">
      <Icon /> {text}  {}
    </div>
  );
};

RecipeInfo.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default RecipeInfo;
