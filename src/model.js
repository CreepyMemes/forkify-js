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
  try {
    const data = await getJSON(`${import.meta.env.VITE_API_URL}${recipeId}`);
    state.recipe = await camelizeKeys(data.data.recipe);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch recipe results by search keyword
export const loadSearchResults = async function (query) {
  state.search.query = query;

  try {
    const data = await getJSON(`${import.meta.env.VITE_API_URL}?search=${query}&key=${import.meta.env.VITE_API_KEY}`);

    if (!data.results) throw new Error('Invalid search query');

    state.search.results = await camelizeKeys(data.data.recipes);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
