import { camelizeKeys, getJSON, postJSON } from './utils/helpers';
const { VITE_API_URL, VITE_API_KEY, VITE_RES_PER_PAGE } = import.meta.env;

export const state = {
  recipe: {
    recipe: null,
    status: 'idle',
  },

  search: {
    query: '',
    results: [],
    resultsPerPage: +VITE_RES_PER_PAGE,
    searchResults: {
      results: null,
      status: 'idle',
    },
    pagination: {
      page: 1,
      pages: 0,
    },
  },
  header: {
    bookmarks: [],
  },

  addRecipe: {
    visibility: false,
  },
};

// Update the recipe status state to loading
export const setRecipeLoadingState = function () {
  state.recipe.status = 'loading';
  state.recipe.recipe = {};
};

// Fetch recipe response data object by ID
export const loadRecipe = async function (recipeId) {
  try {
    const response = await getJSON(`${VITE_API_URL}${recipeId}?key=${VITE_API_KEY}`);
    state.recipe.recipe = await camelizeKeys(response.data.recipe);
    state.recipe.status = 'success';

    state.recipe.recipe.bookmarked = isBookmarked(recipeId);
  } catch (error) {
    state.recipe.status = 'fail';
    console.error(error);
    throw error;
  }
};

// Update the recipe status state to loading
export const setSearchLoadingState = function () {
  state.search.searchResults.status = 'loading';
  state.search.searchResults.results = [];
  state.search.pagination.page = 1;
  state.search.pagination.pages = 0;
};

// Fetch recipe results by search keyword
export const loadSearchResults = async function (query) {
  state.search.query = query;

  try {
    const response = await getJSON(`${VITE_API_URL}?search=${query}&key=${VITE_API_KEY}`);
    if (!response.results) throw new Error('Invalid search query');

    state.search.results = await camelizeKeys(response.data.recipes);
    state.search.searchResults.status = 'success';

    state.search.pagination.pages = getTotalPages();
  } catch (error) {
    state.search.searchResults.status = 'fail';
    state.search.pagination.pages = 0;
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
  state.search.searchResults.results = getSearchResultsPage(page);
  state.search.pagination.page = page;
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

// Save the bookmark data to local storage to make it persist per page load
const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.header.bookmarks));
};

// Return if the passed recipe id is bookmarked
const isBookmarked = function (recipeId) {
  return state.header.bookmarks.some((bookmark) => bookmark.id === recipeId);
};

// Update the bookmark array state by adding the passed recipe
const addBookmark = function (recipe) {
  state.recipe.recipe.bookmarked = true;
  return [...state.header.bookmarks, recipe];
};

// Update the bookmark array state by removing the passed recipe id
const deleteBookmark = function (recipeId) {
  state.recipe.recipe.bookmarked = false;
  return state.header.bookmarks.filter((bookmark) => bookmark.id !== recipeId);
};

// Toggle the saved bookmarks by either adding passed recipe or removing it
export const toggleBookmark = function ({ recipe }) {
  state.header.bookmarks = isBookmarked(recipe.id) ? deleteBookmark(recipe.id) : addBookmark(recipe);
  persistBookmarks();
};

// Toggles the add recipe visibility state
export const toggleAddRecipeVisibility = function () {
  state.addRecipe.visibility = !state.addRecipe.visibility;
};

// Parses the raw form data ingredients to construct an object out of them
const parseIngredients = function (recipe) {
  const ingredients = Object.entries(recipe)
    .filter(([key, value]) => key.startsWith('ingredient') && value)
    .map(([_, value]) => {
      if ((value.match(/,/g) || []).length !== 2) {
        throw new Error('Wrong ingredient format, Please use the correct format :)');
      }

      const [quantity, unit, description] = value.split(',').map((s) => s.trim());

      return { quantity: quantity ? +quantity : null, unit, description };
    });

  return ingredients;
};

// Construct the recipe object to be sent to the API
const getRecipeObject = function (recipe) {
  return {
    publisher: recipe.publisher,
    ingredients: parseIngredients(recipe),
    source_url: recipe.sourceUrl,
    image_url: recipe.imageUrl,
    title: recipe.title,
    servings: +recipe.servings,
    cooking_time: +recipe.cookingTime,
  };
};

export const uploadRecipe = async function (data) {
  try {
    const recipe = getRecipeObject(data);
    const response = await postJSON(`${VITE_API_URL}?key=${VITE_API_KEY}`, recipe);
    state.recipe.recipe = await camelizeKeys(response.data.recipe);
    state.recipe.status = 'success';

    state.recipe.recipe.bookmarked = true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Initialize local storage data, (in this case only bookmarks)
const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.header.bookmarks = JSON.parse(storage);
};

init();
