import { camelizeKeys } from './utils/helpers';
import { render } from './utils/helpers';

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

// Utility to fetch and handle API responses
const fetchAPI = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json(); // Parse JSON response

    if (!response.ok) {
      throw new Error(`${data.message} (${response.status})`);
    }

    return data;
  } catch (error) {
    throw new Error(error.message); // Trow new error for caller to handle
  }
};

// Fetch recipe data by ID
const fetchRecipe = async (recipeId) => {
  const response = await fetchAPI(`https://forkify-api.jonas.io/api/v2/recipes/${recipeId}`);
  return await camelizeKeys(response.data.recipe);
};

// Extract recipe ID from URL hash
const getRecipeIdFromHash = () => {
  return window.location.hash.slice(1);
};

// Display recipe in the UI
const showRecipe = async () => {
  const recipeId = getRecipeIdFromHash();

  if (!recipeId) return;

  try {
    render(Spinner(), recipeContainer);
    const recipe = await fetchRecipe(recipeId);
    render(Recipe({ recipe }), recipeContainer);
  } catch (error) {
    render(ErrorMessage({ message: error }), recipeContainer);
  }
};

render(
  Message({ message: 'Start by searching for a recipe or an ingredient. Have fun!' }),
  recipeContainer,
);

window.addEventListener('hashchange', showRecipe);
