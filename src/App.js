import Component from './components/Component';
import Header from './components/header/Header';
import Recipe from './components/recipe/Recipe';
import Search from './components/search/Search';
import SearchResults from './components/search-results/SearchResults';
import AddRecipeWindow from './components/add-recipe-window/AddRecipeWindow';
import Pagination from './components/pagination/Pagination';
import CopyRight from './components/common/Copyright';

class App extends Component {
  constructor(container) {
    super(container);
  }

  render() {
    // Hydrate initial page
    super.render();

    // Initialize sub-components so that they can be rerendered
    this.recipe = new Recipe(document.querySelector('.recipe-container'));
    this.search = new Search(document.querySelector('.search-container'));
    this.searchResults = new SearchResults(document.querySelector('.results-container'));
    this.pagination = new Pagination(document.querySelector('.pagination-container'));
  }

  static markup() {
    return /* html */ `
      <div class="container">
        <header class="header-container">
          ${Header.markup()}
        </header>

        <div class="search-results">
          <div class="results-container">
            ${SearchResults.markup({ results: [] })}
          </div>
          <div class="pagination-container">
            ${Pagination.markup({ page: 0, pages: 0 })}
          </div>

          ${CopyRight.markup()}
        </div>

        <div class="recipe-container">
          ${Recipe.markup({ recipe: undefined })}
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
