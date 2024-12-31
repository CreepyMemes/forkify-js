import RecipeIngredient from './RecipeIngredient';

function RecipeIngredients({ recipe }) {
  return /* html */ `
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${recipe.ingredients.map((ingredient) => RecipeIngredient({ ingredient })).join('')}
      </ul>
    </div>
  `;
}

export default RecipeIngredients;
