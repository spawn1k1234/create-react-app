import React, { useState, useEffect } from 'react';
import Recipe from './components/Recipe';  // Імпортуємо компонент Recipe
import contacts from './contacts.json';  // Імпортуємо дані з JSON файлу

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Завантажуємо дані з файлу
    setRecipes(contacts);
  }, []);

  return (
    <div className="app">
      <h1>Contacts</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default App;
