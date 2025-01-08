import app from './App';
import * as model from './model';

// Display recipe in the UI
const controlRecipies = async () => {
  const recipeId = app.recipe.getId();
  if (!recipeId) return;

  model.setRecipeLoadingState();
  app.recipe.render(model.state.recipe);

  app.searchResults.render(model.state.search.searchResults);
  app.header.render(model.state.header);

  try {
    await model.loadRecipe(recipeId);

    app.recipe.render(model.state.recipe);
  } catch {
    app.recipe.render(model.state.recipe);
  }
};

// Display the search resullts in the UI
const controlSearchResults = async () => {
  const query = app.search.getQuery();
  if (!query) return;

  model.setSearchLoadingState();
  app.searchResults.render(model.state.search.searchResults);
  app.pagination.render(model.state.search.pagination);

  try {
    await model.loadSearchResults(query);

    controlPagination(model.state.search.pagination.page);
  } catch {
    app.searchResults.render(model.state.search.searchResults);
  }
};

// Rerender the selected page and new pagination buttons
const controlPagination = (page) => {
  model.updateSearchResultsPage(page);
  app.searchResults.render(model.state.search.searchResults);
  app.pagination.render(model.state.search.pagination);
};

// Update the servings quantity in the UI
const controlServings = (servings) => {
  model.updateServings(servings);
  app.recipe.render(model.state.recipe);
};

// Update the bookmarks and display them in UI
const controlBookmark = () => {
  model.toggleBookmark(model.state.recipe);
  app.recipe.render(model.state.recipe);
  app.header.render(model.state.header);
};

// Toggles the add recipe popup visibility and rerenders it
const controlToggleAddRecipe = () => {
  model.toggleAddRecipeVisibility();
  app.addRecipe.render(model.state.addRecipe);
};

// Retrieves the submitted form data and relays it to model
const controlAddRecipe = async (data) => {
  try {
    await model.uploadRecipe(data);

    window.history.pushState(null, '', `#${model.state.recipe.recipe.id}`);
    app.recipe.render(model.state.recipe);
    controlToggleAddRecipe();
    controlBookmark();
  } catch (error) {
    alert(error);
  }
};

// Main function
const main = () => {
  app.render();

  app.recipe.subscribe(controlRecipies);
  app.recipe.details.subscribeServings(controlServings);
  app.recipe.details.subscribeBookmark(controlBookmark);
  app.search.subscribe(controlSearchResults);
  app.pagination.subscribe(controlPagination);
  [app.header, app.addRecipe].forEach((component) => component.subscribe(controlToggleAddRecipe));
  app.addRecipe.upload.subscribe(controlAddRecipe);
};

main();
