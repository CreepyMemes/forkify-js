import Spinner from './components/common/Spinner';
import Message from './components/common/Message';
import ErrorMessage from './components/common/ErrorMessage';
import Recipe from './components/recipe/Recipe';

class View {
  // _data;

  constructor() {
    // Initialize the DOM selectors
    this._recipeContainer = document.querySelector('.recipe');

    // Initialize the View components
    this._messageComponent = new Message(this._recipeContainer);
    this._errorMessageComponent = new ErrorMessage(this._recipeContainer);
    this._spinnerComponent = new Spinner(this._recipeContainer);
    this._recipeComponent = new Recipe(this._recipeContainer);
  }

  // update(data) {
  //   this._data = data;
  // }
  message = {
    render: () => {
      this._messageComponent.display({
        message: 'Start by searching for a recipe or an ingredient. Have fun!',
      });
    },
  };

  errorMessage = {
    render: () => {
      this._errorMessageComponent.display({
        message: 'We could not find that recipe. Please try another one!',
      });
    },
  };

  spinner = {
    render: () => {
      this._spinnerComponent.display();
    },
  };

  recipe = {
    render: ({ recipe }) => {
      this._recipeComponent.display({ recipe });
    },

    subscribe: (handler) => {
      ['hashchange', 'load'].forEach((event) =>
        this._recipeComponent.publish(event, handler, window),
      );
    },
  };
}

export default new View();
