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
  } catch {
    view.errorMessage.render();
  }
};

// Initialize Application
const init = () => {
  view.recipe.subscribe(controlRecipies);
  view.message.render();
};

init();
