import * as model from './model';
import view from './view';
import { getRecipeIdFromHash } from './utils/helpers';

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
    console.log(error);
  }
};

const controlSearchResults = async () => {
  try {
    await model.loadSearch('pizza');

    view.searchResults.render({ recipes: model.state.recipes });
  } catch (error) {
    console.log(error);
  }
};

// Initialize Application
const init = () => {
  view.recipe.subscribe(controlRecipies);
  view.message.render();

  controlSearchResults();
};

init();
