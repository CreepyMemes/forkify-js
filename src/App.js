import Component from './components/Component';
import Header from './components/header/Header';
import Recipe from './components/recipe/Recipe';
import Search from './components/search/Search';
import SearchResults from './components/search-results/SearchResults';
import Message from './components/common/Message';
import AddRecipeWindow from './components/add-recipe-window/AddRecipeWindow';

class App extends Component {
  constructor(container) {
    super(container);
  }

  init() {
    // Hydrate initial page
    this.render();

    // Initialize sub-components so that they can be rerendered
    this.recipe = new Recipe(document.querySelector('.recipe'));
    this.search = new Search(document.querySelector('.search'));
    this.searchResults = new SearchResults(document.querySelector('.search-results-container'));
  }

  static markup() {
    return /* html */ `
      <div class="container">
        <header class="header">
          ${Header.markup()}
        </header>

        <div class="search-results-container">
          ${Message.markup({ message: 'Search results will be displayed here' })}
        </div>

        <div class="recipe">
          ${Message.markup({ message: 'Start by searching for a recipe or an ingredient. Have fun!' })}
        </div>
      </div>

      <div class="overlay hidden"></div>

      <div class="add-recipe-window hidden">
        ${AddRecipeWindow.markup()}
      </div>
    `;
  }
}

export default new App(document.querySelector('.root'));
