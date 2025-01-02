import { camelizeKeys, getJSON } from './utils/helpers';

export const state = {
  recipe: {},
};

// Fetch recipe data by ID
export const loadRecipe = async function (recipeId) {
  const data = await getJSON(`${import.meta.env.VITE_API_URL}/${recipeId}`);
  state.recipe = await camelizeKeys(data.data.recipe);
};
