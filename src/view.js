import Recipe from './components/recipe/Recipe';
import SearchResults from './components/search-results/SearchResults';
import Search from './components/search/Search';

class View {
  constructor() {
    this.recipe = new Recipe(document.querySelector('.recipe'));
    this.search = new Search(document.querySelector('.search'));
    this.searchResults = new SearchResults(document.querySelector('.search-results-container'));

    // Initial render of static components
    this.recipe.message.render();
    this.search.render();
  }
}

export default new View();
