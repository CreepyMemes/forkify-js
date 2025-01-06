import { camelizeKeys, getJSON } from './utils/helpers';

export const state = {
  recipe: {
    recipe: {},
    status: 'idle',
  },

  search: {
    query: '',
    results: [],
    resultsPerPage: Number(import.meta.env.VITE_RES_PER_PAGE),
    search: {
      results: [],
      status: 'idle',
    },
    page: {
      page: 1,
      pages: 0,
    },
  },
};

// Update the recipe status state to loading
export const setRecipeLoadingState = function () {
  state.recipe.status = 'loading';
  state.recipe.recipe = {};
};

// Fetch recipe data by ID
export const loadRecipe = async function (recipeId) {
  try {
    const data = await getJSON(`${import.meta.env.VITE_API_URL}${recipeId}`);

    state.recipe.recipe = await camelizeKeys(data.data.recipe);
    state.recipe.status = 'success';
  } catch (error) {
    state.recipe.status = 'fail';
    console.error(error);
    throw error;
  }
};

// Update the recipe status state to loading
export const setSearchLoadingState = function () {
  state.search.search.status = 'loading';
  state.search.search.results = [];
  state.search.page.page = 1;
  state.search.page.pages = 0;
};

// Fetch recipe results by search keyword
export const loadSearchResults = async function (query) {
  state.search.query = query;

  try {
    const data = await getJSON(`${import.meta.env.VITE_API_URL}?search=${query}&key=${import.meta.env.VITE_API_KEY}`);
    if (!data.results) throw new Error('Invalid search query');

    state.search.results = await camelizeKeys(data.data.recipes);
    state.search.page.pages = getTotalPages();
    state.search.search.status = 'success';
  } catch (error) {
    state.search.search.status = 'fail';
    state.search.page.pages = 0;
    console.error(error);
    throw error;
  }
};

// Retrieve the current selected page's search results
const getSearchResultsPage = function (page) {
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

// Update the search results state from passed page
export const updateSearchResultsPage = function (page) {
  state.search.search.results = getSearchResultsPage(page);
  state.search.page.page = page;
};

// Retrieve the total amount of search results's pages
const getTotalPages = function () {
  return Math.ceil(state.search.results.length / state.search.resultsPerPage);
};

// Update the new ingredients quantity by given servings
export const updateServings = function (servings) {
  state.recipe.recipe.ingredients.forEach((ingredient) => {
    ingredient.quantity = ingredient.quantity * (servings / state.recipe.recipe.servings);
  });

  state.recipe.recipe.servings = servings;
};
