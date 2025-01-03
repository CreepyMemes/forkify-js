import * as model from './model';
import view from './view';
import { getRecipeIdFromHash } from './utils/helpers';
import { values } from 'lodash';

// Display recipe in the UI
const controlRecipies = async () => {
  const recipeId = getRecipeIdFromHash();

  if (!recipeId) return;

  view.spinner.render();

  try {
    await model.loadRecipe(recipeId);

    view.recipe.render({ recipe: model.state.recipe });
  } catch (error) {
    view.errorMessage.render();
  }
};

const controlSearch = () => {
  view.search.render();
};

const controlSearchResults = async () => {
  try {
    await model.loadSearchResults('pizza');

    view.searchResults.render({ results: model.state.search.results });
  } catch (error) {
    console.log('ok');
  }
};

// Initialize Application
const init = () => {
  view.recipe.subscribe(controlRecipies);
  view.message.render();

  controlSearch();
  controlSearchResults();
};

init();
