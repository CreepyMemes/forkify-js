import app from './App';
import * as model from './model';

// Display recipe in the UI
const controlRecipies = async () => {
  const recipeId = app.recipe.getId();
  if (!recipeId) return;

  model.setRecipeLoadingState();
  app.recipe.render(model.state.recipe);

  try {
    await model.loadRecipe(recipeId);

    app.recipe.render(model.state.recipe);
  } catch {
    app.recipe.render(model.state.recipe);
  }
};

// Display the search resullts in the UI
const controlSearchResults = async (query) => {
  const page = 1; // Initial page

  model.setSearchLoadingState();
  controlPagination(page);

  try {
    await model.loadSearchResults(query);
    controlPagination(page);
  } catch {
    controlPagination(page);
  }
};

// Rerender the selected page and new pagination buttons
const controlPagination = (page) => {
  model.updateSearchResultsPage(page);

  app.searchResults.render(model.state.search.search);
  app.pagination.render(model.state.search.page);
};

// Take the search query and retrieve search results
const controlSearch = () => {
  const query = app.search.getQuery().trim();
  if (!query) return;
  controlSearchResults(query);
};

// Update the servings quantity in the UI
const controlServings = (servings) => {
  model.updateServings(servings);
  app.recipe.render(model.state.recipe);
};

// Main function
const main = () => {
  app.render();
  app.recipe.subscribe(controlRecipies);
  app.recipe.details.subscribe(controlServings);
  app.search.subscribe(controlSearch);
  app.pagination.subscribe(controlPagination);
};

main();
