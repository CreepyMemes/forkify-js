import app from './App';
import * as model from './model';

// Display recipe in the UI
const controlRecipies = async () => {
  const recipeId = app.recipe.getId();
  if (!recipeId) return;

  app.recipe.spinner.render();

  try {
    await model.loadRecipe(recipeId);

    app.recipe.render({ recipe: model.state.recipe });
  } catch {
    app.recipe.errorMessage.render();
  }
};

// Display the search resullts in the UI
const controlSearchResults = async (query) => {
  app.searchResults.spinner.render();

  try {
    await model.loadSearchResults(query);
    controlPagination(1);
  } catch {
    app.searchResults.errorMessage.render();
  }
};

// Take the search query and retrieve search results
const controlSearch = () => {
  const query = app.search.getQuery().trim();
  if (!query) return;
  controlSearchResults(query);
};

// Rerender the selected page and new pagination buttons
const controlPagination = (page) => {
  app.searchResults.render({ results: model.getSearchResultsPage(page) });
  app.pagination.render({ page: model.state.search.page, pages: model.getTotalPages() });
};

// Main function
const main = () => {
  app.render();
  app.recipe.subscribe(controlRecipies);
  app.search.subscribe(controlSearch);
  app.pagination.subscribe(controlPagination);
};

main();
