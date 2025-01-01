import Component from '../Component';
import RecipeIngredient from './RecipeIngredient';

class RecipeIngredients extends Component {
  static render({ recipe }) {
    return /* html */ `
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${recipe.ingredients.map((ingredient) => RecipeIngredient.render({ ingredient })).join('')}
        </ul>
      </div>
    `;
  }
}

export default RecipeIngredients;
