import Component from './components/Component';
import Header from './components/header/Header';
import Recipe from './components/recipe/Recipe';
import Search from './components/search/Search';
import SearchResults from './components/search-results/SearchResults';
import AddRecipe from './components/add-recipe/AddRecipe';
import Pagination from './components/pagination/Pagination';
import CopyRight from './components/common/Copyright';

class App extends Component {
  render(props) {
    super.render(props);

    this.recipe = new Recipe(this.container.querySelector('.recipe'));
    this.search = new Search(this.container.querySelector('.search'));
    this.searchResults = new SearchResults(this.container.querySelector('.results'));
    this.pagination = new Pagination(this.container.querySelector('.pagination'));
    this.header = new Header(this.container.querySelector('.header'));
    this.addRecipe = new AddRecipe(this.container.querySelector('.add-recipe'));
  }

  static markup(state) {
    console.log(state);
    return /* html */ `
      <div class="root">
        <div class="container">
          ${Header.markup(state.header)}

          <div class="search-results">
            ${SearchResults.markup(state.search.searchResults)}
            ${Pagination.markup(state.search.pagination)}
            ${CopyRight.markup()}
          </div>

          ${Recipe.markup(state.recipe)}
        </div>

        ${AddRecipe.markup(state.addRecipe)}
      </div>
    `;
  }
}

export default new App(document.querySelector('.root'));
