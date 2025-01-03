import * as model from './model';
import view from './view';

// Display recipe in the UI
const controlRecipies = async () => {
  const recipeId = view.recipe.recipeId();

  if (!recipeId) return;

  view.spinner.render();

  try {
    await model.loadRecipe(recipeId);

    view.recipe.render({ recipe: model.state.recipe });
  } catch {
    view.errorMessage.render();
  }
};

const controlSearchResults = async (query) => {
  try {
    await model.loadSearchResults(query);

    view.searchResults.render({ results: model.state.search.results });
  } catch {
    console.log('ok');
  }
};

const controlSearch = () => {
  const query = view.search.query();

  if (!query) return;

  controlSearchResults(query);
};

// Initialize Application
const init = () => {
  view.recipe.subscribe(controlRecipies);
  view.search.subscribe(controlSearch);

  view.message.render();
};

init();
