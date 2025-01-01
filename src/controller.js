import * as model from './model';
import view from './view';

// Extract recipe ID from URL hash
const getRecipeIdFromHash = () => {
  return window.location.hash.slice(1);
};

// Display recipe in the UI
const showRecipe = async () => {
  const recipeId = getRecipeIdFromHash();

  if (!recipeId) return;

  view.renderSpinner();

  try {
    await model.loadRecipe(recipeId);
    view.renderRecipe({ recipe: model.state.recipe });
  } catch (error) {
    view.renderErrorMessage({ message: error.message });
  }
};

// Initialize Event Handlers
['hashchange', 'load'].forEach((event) => window.addEventListener(event, showRecipe));

// Initialize Application
view.renderMessage({ message: 'Start by searching for a recipe or an ingredient. Have fun!' });
