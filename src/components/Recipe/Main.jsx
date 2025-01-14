import { useState } from "react";
import IngredientsList from "./IngredientsList";
import ChefRecipe from "./ChefRecipe";
import { getRecipeFromMistral } from "./ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  async function getRecipe() {
    setLoading(true);
    setHasSearched(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(false);
  }

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    event.target.reset();
  }

  function deleteIngredient(ingredientToDelete) {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient !== ingredientToDelete)
    );
  }

  return (
    <main>
      <h3>Please add at least 4 ingredients to get a recipe</h3>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          deleteIngredient={deleteIngredient}
        />
      )}

      {loading && <p className="loading">Loading your recipe...</p>}

      {recipe && !loading && <ChefRecipe recipe={recipe} />}

      {!recipe && hasSearched && !loading && (
        <div>No results found, please check the ingredients.</div>
      )}
    </main>
  );
}
