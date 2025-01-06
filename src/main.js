import app from './App';
import * as model from './model';

// Display recipe in the UI
const controlRecipies = async () => {
  const recipeId = app.recipe.getId();
  if (!recipeId) return;

  app.recipe.render({ recipe: null, status: 'loading' });

  try {
    await model.loadRecipe(recipeId);

    app.recipe.render({ recipe: model.state.recipe, status: 'success' });
  } catch {
    app.recipe.render({ recipe: null, status: 'fail' });
  }
};

// Display the search resullts in the UI
const controlSearchResults = async (query) => {
  app.searchResults.render({ retults: null, status: 'loading' });

  try {
    await model.loadSearchResults(query);
    controlPagination(1);
  } catch {
    app.searchResults.render({ retults: null, status: 'fail' });
    app.pagination.render({ page: 0, pages: 0 });
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
  app.searchResults.render({ results: model.getSearchResultsPage(page), status: 'success' });
  app.pagination.render({ page: model.state.search.page, pages: model.getTotalPages() });
};

const controlServings = (servings) => {
  model.updateServings(servings);
  app.recipe.render({ recipe: model.state.recipe, status: 'success' });
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
