import RecipeFigure from '../components/RecipeFigure';
import RecipeDetails from '../components/RecipeDetails';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeDirections from '../components/RecipeDirections';

import { camelizeKeys } from '../utils/helpers';

const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

async function showRecipe() {
  try {
    const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    let { recipe } = data.data;
    recipe = camelizeKeys(recipe);

    const markup = /* html */ `
      ${RecipeFigure({ recipe })}
      ${RecipeDetails({ recipe })}
      ${RecipeIngredients({ recipe })}
      ${RecipeDirections({ recipe })} 
    `;

    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    alert(err);
  }
}

showRecipe();
