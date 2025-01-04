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

const controlSearchResults = async (query) => {
  app.searchResults.spinner.render();

  try {
    await model.loadSearchResults(query);

    app.searchResults.render({ results: model.getSearchResultsPage() });
  } catch {
    app.searchResults.errorMessage.render();
  }
};

const controlSearch = () => {
  const query = app.search.getQuery().trim();
  if (!query) return;
  controlSearchResults(query);
};

// Initialize Application
const init = () => {
  app.init();
  app.recipe.subscribe(controlRecipies);
  app.search.subscribe(controlSearch);
};

init();
