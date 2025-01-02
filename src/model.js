import { camelizeKeys, getJSON } from './utils/helpers';

export const state = {
  recipe: {},
};

// Fetch recipe data by ID
export const loadRecipe = async function (recipeId) {
  const data = await getJSON(`${import.meta.env.VITE_API_URL}/${recipeId}`);
  state.recipe = await camelizeKeys(data.data.recipe);
};

// Fetch recipe results by search keyword
export const loadSearch = async function (search) {
  const data = await getJSON(
    `${import.meta.env.VITE_API_URL}?search=${search}&key=331467e9-2f05-436f-814a-dea18fafd5ab`,
  );
  state.recipes = await camelizeKeys(data.data.recipes);
};
