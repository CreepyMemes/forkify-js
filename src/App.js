import Component from './components/Component';
import Header from './components/header/Header';
import Recipe from './components/recipe/Recipe';
import Search from './components/search/Search';
import SearchResults from './components/search-results/SearchResults';
import AddRecipeWindow from './components/add-recipe-window/AddRecipeWindow';
import Pagination from './components/pagination/Pagination';
import CopyRight from './components/common/Copyright';

class App extends Component {
  render() {
    super.render();

    this.recipe = new Recipe(this.container.querySelector('.recipe'));
    this.search = new Search(this.container.querySelector('.search'));
    this.searchResults = new SearchResults(this.container.querySelector('.results'));
    this.pagination = new Pagination(this.container.querySelector('.pagination'));
    this.header = new Header(this.container.querySelector('.header'));
  }

  static markup() {
    return /* html */ `
      <div class="root">
        <div class="container">
          ${Header.markup({ bookmarks: [] })}

          <div class="search-results">
            ${SearchResults.markup({ results: null, status: 'idle' })}
            ${Pagination.markup({ page: 0, pages: 0 })}
            ${CopyRight.markup()}
          </div>

          ${Recipe.markup({ recipe: null, status: 'idle' })}
        </div>

        ${AddRecipeWindow.markup()}
      </div>
    `;
  }
}

export default new App(document.querySelector('.root'));
