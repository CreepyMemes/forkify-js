import * as model from './model';
import view from './view';
import { getRecipeIdFromHash } from './utils/helpers';

// Display recipe in the UI
const controlRecipies = async () => {
  const recipeId = getRecipeIdFromHash();

  if (!recipeId) return;

  view.renderSpinner();

  try {
    await model.loadRecipe(recipeId);

    view.renderRecipe({ recipe: model.state.recipe });
  } catch (error) {
    view.renderErrorMessage({ message: error });
  }
};

// Initialize Event Handlers
['hashchange', 'load'].forEach((event) => window.addEventListener(event, controlRecipies));

// Initialize Application
view.renderMessage({ message: 'Start by searching for a recipe or an ingredient. Have fun!' });
