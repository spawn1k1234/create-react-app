import React, { useState, useEffect } from 'react';
import Recipe from './components/Recipe';  
import contacts from './contacts.json'; 

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

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
