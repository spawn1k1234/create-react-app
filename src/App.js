import GlobalStyle from "./GlobalStyles";
import Recipe from "./components/Recipe"; // Убедись, что путь правильный


const recipes = [
  {
    name: "Smoked salmon burger",
    time: 20,
    servings: 6,
    calories: 210,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBW8ynbKs-xMok07peqKRT4DU6zjGJOEgd8Q&s",
    difficulty: 0,
  },
  {
    name: "Tomatoes With Creamy Feta",
    time: 15,
    servings: 3,
    calories: 600,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3yZs8hkz4ra_JjrnFqqzbeJFKqtj8P0iKg&s",
    difficulty: 1,
  },
  {
    name: "Spicy potato salad",
    time: 30,
    servings: 2,
    calories: 320,
    image: "https://assets.bonappetit.com/photos/5d4dc6a93bde88000879f7cc/1:1/w_2560%2Cc_limit/BA-0819-Go-Live-Grilled-Potato-Salad.jpg",
    difficulty: 1,
  },
  {
    name: "Chicken Biryani",
    time: 40,
    servings: 4,
    calories: 700,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkFl4-e90gihmLEM7TZZ-LTbwkWQ47VaLMQ&s",
    difficulty: 3,
  },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {recipes.map((recipe, index) => (
          <Recipe key={index} {...recipe} />
        ))}
      </div>
    </>
  );
}

export default App;
