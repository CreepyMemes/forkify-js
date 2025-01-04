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

    app.searchResults.render({ results: model.getSearchResultsPage(6) });
    app.searchResults.pagination.render({
      page: model.state.search.page,
      pages: model.getTotalPages(),
    });
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

// Main function
const main = () => {
  app.render();
  app.recipe.subscribe(controlRecipies);
  app.search.subscribe(controlSearch);
};

main();
