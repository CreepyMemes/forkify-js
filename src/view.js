import Spinner from './components/common/Spinner';
import Message from './components/common/Message';
import ErrorMessage from './components/common/ErrorMessage';
import Recipe from './components/recipe/Recipe';
import SearchResults from './components/search-results/SearchResults';
import Search from './components/search/Search';

import { getRecipeIdFromHash } from './utils/helpers';

class View {
  constructor() {
    this.recipe = this._createRecipe();
    this.search = this._createSearch();
    this.searchResults = this._createSearchResults();

    // Initial render of static components
    this.recipe.message.render();
    this.search.render();
  }

  _createRecipe() {
    const container = document.querySelector('.recipe');

    return {
      _recipe: new Recipe(container),
      _message: new Message(container),
      _errorMessage: new ErrorMessage(container),
      _spinner: new Spinner(container),

      render: ({ recipe }) => {
        this.recipe._recipe.display({ recipe });
      },

      subscribe: (handler) => {
        ['hashchange', 'load'].forEach((event) => this.recipe._recipe.publish(event, handler, window));
      },

      getId: () => {
        return getRecipeIdFromHash();
      },

      message: {
        render: () => {
          this.recipe._message.display({ message: 'Start by searching for a recipe or an ingredient. Have fun!' });
        },
      },

      errorMessage: {
        render: () => {
          this.recipe._errorMessage.display({ message: 'We could not find that recipe. Please try another one!' });
        },
      },

      spinner: {
        render: () => {
          this.recipe._spinner.display();
        },
      },
    };
  }

  _createSearch() {
    const container = document.querySelector('.search');

    return {
      _search: new Search(container),

      render: () => {
        this.search._search.display();
      },

      subscribe: (handler) => {
        this.search._search.publish('submit', (event) => {
          event.preventDefault();
          handler();
        });
      },

      getQuery: () => {
        return container.querySelector('.search__field').value;
      },
    };
  }

  _createSearchResults() {
    const container = document.querySelector('.search-results-container');

    return {
      _searchResults: new SearchResults(container),
      _errorMessage: new ErrorMessage(container),
      _spinner: new Spinner(container),

      render: ({ results }) => {
        this.searchResults._searchResults.display({ results });
      },

      errorMessage: {
        render: () => {
          this.searchResults._errorMessage.display({ message: 'Bad search query!' });
        },
      },

      spinner: {
        render: () => {
          this.searchResults._spinner.display();
        },
      },
    };
  }
}

export default new View();
