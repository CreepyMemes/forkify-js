import { camelizeKeys, getJSON } from './utils/helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: Number(import.meta.env.VITE_RES_PER_PAGE),
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

// Retrieve the current selected page's search results
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

// Retrieve the total amount of search results's pages
export const getTotalPages = function () {
  return Math.ceil(state.search.results.length / state.search.resultsPerPage);
};
