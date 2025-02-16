import styled from "styled-components";

const DifficultyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  min-width: 60px; /* Чтобы полоска была нормального размера */
  ${({ level }) =>
    level === 3
      ? "background-color: red; color: white;" 
      : level === 1
      ? "background-color: orange; color: white;"
      : "background-color: green; color: white;"}
`;

const Difficulty = ({ level }) => {
  const labels = ["Easy", "Medium", "Hard"];
  return (
    <DifficultyContainer level={level}>
      {level === 3 ? "Hard" : labels[level]}
    </DifficultyContainer>
  );
};

export default Difficulty;
