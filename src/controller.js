import { camelizeKeys } from './utils/helpers';
import Spinner from './components/common/Spinner';
import Message from './components/common/Message';
import ErrorMessage from './components/common/ErrorMessage';
import Recipe from './components/recipe/Recipe';

const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

function render(component, element) {
  element.innerHTML = component;
}

async function showRecipe() {
  try {
    render(Spinner(), recipeContainer);

    const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    let { recipe } = data.data;
    recipe = camelizeKeys(recipe);

    render(Recipe({ recipe }), recipeContainer);
  } catch (err) {
    console.log(err);

    render(
      ErrorMessage({ message: `${err} No recipes found for your query. Please try again!` }),
      recipeContainer,
    );
  }
}

render(
  Message({ message: 'Start by searching for a recipe or an ingredient. Have fun!' }),
  recipeContainer,
);

showRecipe();
