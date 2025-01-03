import * as model from './model';
import view from './view';

// Display recipe in the UI
const controlRecipies = async () => {
  const recipeId = view.recipe.getId();
  if (!recipeId) return;

  view.recipe.spinner.render();

  try {
    await model.loadRecipe(recipeId);

    view.recipe.render({ recipe: model.state.recipe });
  } catch {
    view.recipe.errorMessage.render();
  }
};

const controlSearchResults = async (query) => {
  view.searchResults.spinner.render();

  try {
    await model.loadSearchResults(query);

    view.searchResults.render({ results: model.state.search.results });
  } catch {
    view.searchResults.errorMessage.render();
  }
};

const controlSearch = () => {
  const query = view.search.getQuery();
  if (!query) return;
  controlSearchResults(query);
};

// Initialize Application
const init = () => {
  view.recipe.subscribe(controlRecipies);
  view.search.subscribe(controlSearch);
};

init();
