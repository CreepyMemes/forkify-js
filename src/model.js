import { camelizeKeys } from './utils/helpers';

export const state = {
  recipe: {},
};

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
export const loadRecipe = async function (recipeId) {
  const response = await fetchAPI(`https://forkify-api.jonas.io/api/v2/recipes/${recipeId}`);
  state.recipe = await camelizeKeys(response.data.recipe);
};
