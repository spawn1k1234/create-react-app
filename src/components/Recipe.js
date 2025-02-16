import styled from "styled-components";
import Difficulty from "./Difficulty";

const RecipeCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  text-align: center;
  // ${({ difficulty }) => difficulty === 3 && "border: 2px solid red;"}
  
`;

const RecipeImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Recipe = ({ name, time, servings, calories, image, difficulty }) => {
  return (
    <RecipeCard difficulty={difficulty}>
      <RecipeImage src={image} alt={name} />
      <h3>{name}</h3>
      <p>⏳ {time} min | 🍽 {servings} servings | 🔥 {calories} calories</p>
      <Difficulty level={difficulty} />
    </RecipeCard>
  );
};

export default Recipe;
