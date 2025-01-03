import { camelizeKeys, getJSON } from './utils/helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

// Fetch recipe data by ID
export const loadRecipe = async function (recipeId) {
  const data = await getJSON(`${import.meta.env.VITE_API_URL}${recipeId}`);
  state.recipe = await camelizeKeys(data.data.recipe);
};

// Fetch recipe results by search keyword
export const loadSearchResults = async function (query) {
  const data = await getJSON(`${import.meta.env.VITE_API_URL}?search=${query}&key=${import.meta.env.VITE_API_KEY}`);
  state.search.results = await camelizeKeys(data.data.recipes);
};
